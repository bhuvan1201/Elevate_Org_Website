from pathlib import Path

out_path = Path("output/pdf/elevate-app-summary.pdf")
out_path.parent.mkdir(parents=True, exist_ok=True)

# Page settings (Letter)
W, H = 612, 792
left = 42
y = 760
line = 12


def esc(text: str) -> str:
    return text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')

ops = []


def add_line(text, x, y_pos, size=10, font='F1'):
    ops.append(f"BT /{font} {size} Tf 1 0 0 1 {x} {y_pos} Tm ({esc(text)}) Tj ET")


def add_heading(text):
    global y
    add_line(text, left, y, size=11, font='F2')
    y -= 14


def add_body(text):
    global y
    add_line(text, left, y, size=9)
    y -= line


def add_bullet(text):
    global y
    add_line(f"- {text}", left + 8, y, size=8.5)
    y -= 10.5

add_line("ELEVATE.ORG App Summary", left, y, size=18, font='F2')
y -= 24

add_heading("What it is")
add_body("A React + Vite web app for ELEVATE, a youth-led nonprofit focused on teen health education")
add_body("and advocacy. The site presents mission, projects, partners, learning content, and contact paths.")
y -= 3

add_heading("Who it's for")
add_body("Primary persona: students/teens and youth advocates; secondary audiences include parents,")
add_body("schools, and partner organizations.")
y -= 3

add_heading("What it does")
add_bullet("Provides routed pages for Home, Our Story, Team, Contact, Projects, Partners, and Learn sections.")
add_bullet("Highlights Teen Vaping Awareness and Adolescent Obesity initiative pages.")
add_bullet("Shows partner profiles for Genesis Foundation and Building Blocks Foundation.")
add_bullet("Offers learning tracks such as Tutoring & Education and Fitness.")
add_bullet("Uses Framer Motion and Lucide icons for animated, mobile-friendly UI interactions.")
add_bullet("Implements Netlify-compatible contact submission with URL-encoded POST and honeypot.")
y -= 3

add_heading("How it works (repo-evidenced architecture)")
add_bullet("Entry/runtime: src/main.jsx mounts <App /> inside BrowserRouter under React StrictMode.")
add_bullet("Composition: src/app.jsx renders persistent Header plus route-based page components.")
add_bullet("Styling: Tailwind CSS utilities in JSX plus src/index.css and tailwind.config.js.")
add_bullet("Content/data: static text/media from src/assets/*; no database models found in repo.")
add_bullet("Service integration: contact form posts to '/' with Netlify attrs; backup form in public/netlify-forms.html.")
add_bullet("Backend/API/Auth: Not found in repo (no server code, API client layer, or auth wiring detected).")
y -= 3

add_heading("How to run (minimal)")
add_bullet("From repo root: npm install")
add_bullet("Start dev server: npm run dev")
add_bullet("Open Vite local URL (typically http://localhost:5173)")
add_bullet("Optional production check: npm run build then npm run preview")
y -= 5

add_line("Evidence basis: README.md, package.json, src/main.jsx, src/app.jsx, src/components/Header.jsx,", left, y, size=8)
y -= 10
add_line("src/pages/Home.jsx, src/pages/Contact.jsx, public/netlify-forms.html.", left, y, size=8)

content = "\n".join(ops) + "\n"
content_bytes = content.encode("latin-1", errors="replace")

objs = []
objs.append(b"<< /Type /Catalog /Pages 2 0 R >>")
objs.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
objs.append(f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {W} {H}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>".encode())
objs.append(f"<< /Length {len(content_bytes)} >>\nstream\n".encode() + content_bytes + b"endstream")
objs.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
objs.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

pdf = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
offsets = [0]
for i, obj in enumerate(objs, start=1):
    offsets.append(len(pdf))
    pdf.extend(f"{i} 0 obj\n".encode())
    pdf.extend(obj)
    pdf.extend(b"\nendobj\n")

xref_start = len(pdf)
pdf.extend(f"xref\n0 {len(objs)+1}\n".encode())
pdf.extend(b"0000000000 65535 f \n")
for off in offsets[1:]:
    pdf.extend(f"{off:010d} 00000 n \n".encode())

pdf.extend(
    f"trailer\n<< /Size {len(objs)+1} /Root 1 0 R >>\nstartxref\n{xref_start}\n%%EOF\n".encode()
)

out_path.write_bytes(pdf)
print(str(out_path))
