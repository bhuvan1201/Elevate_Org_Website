from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, KeepTogether

output_path = "output/pdf/elevate-app-summary.pdf"

doc = SimpleDocTemplate(
    output_path,
    pagesize=letter,
    leftMargin=40,
    rightMargin=40,
    topMargin=36,
    bottomMargin=36,
)

styles = getSampleStyleSheet()

styles.add(ParagraphStyle(
    name="TitleClean",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=18,
    leading=21,
    textColor=colors.HexColor("#0f172a"),
    spaceAfter=10,
))

styles.add(ParagraphStyle(
    name="SectionHead",
    parent=styles["Heading3"],
    fontName="Helvetica-Bold",
    fontSize=11,
    leading=13,
    textColor=colors.HexColor("#0f172a"),
    spaceBefore=4,
    spaceAfter=4,
))

styles.add(ParagraphStyle(
    name="BodyCompact",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=9,
    leading=11,
    textColor=colors.HexColor("#1f2937"),
    spaceAfter=3,
))

styles.add(ParagraphStyle(
    name="BulletCompact",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=8.8,
    leading=10.8,
    textColor=colors.HexColor("#111827"),
))

story = []
story.append(Paragraph("ELEVATE.ORG App Summary", styles["TitleClean"]))

story.append(Paragraph("What it is", styles["SectionHead"]))
story.append(Paragraph(
    "A React + Vite web app for ELEVATE, a youth-led nonprofit focused on teen health education and advocacy. "
    "The site presents mission, projects, partners, learning content, and contact pathways in a responsive single frontend.",
    styles["BodyCompact"],
))

story.append(Paragraph("Who it\'s for", styles["SectionHead"]))
story.append(Paragraph(
    "Primary persona: students/teens and youth advocates; secondary audiences include parents, schools, and partner organizations.",
    styles["BodyCompact"],
))

story.append(Paragraph("What it does", styles["SectionHead"]))
feature_bullets = [
    "Provides routed pages for Home, Our Story, Team, Contact, Projects, Partners, and Learn sections.",
    "Highlights flagship initiatives such as Teen Vaping Awareness and Adolescent Obesity pages.",
    "Shows partner profiles for Genesis Foundation and Building Blocks Foundation with media assets.",
    "Offers learning tracks (Tutoring & Education, Fitness) and mission-driven informational content.",
    "Uses Framer Motion and Lucide icons for animated, modern, mobile-friendly UI interactions.",
    "Implements a Netlify-compatible contact workflow with URL-encoded POST, hidden honeypot, and success/error state handling.",
]

story.append(ListFlowable(
    [ListItem(Paragraph(item, styles["BulletCompact"])) for item in feature_bullets],
    bulletType="bullet",
    start="circle",
    leftIndent=13,
    bulletFontName="Helvetica",
    bulletFontSize=8,
    bulletOffsetY=2,
    spaceBefore=2,
    spaceAfter=3,
))

story.append(Paragraph("How it works (repo-evidenced architecture)", styles["SectionHead"]))
architecture_bullets = [
    "Entry/runtime: `src/main.jsx` mounts `<App />` inside `BrowserRouter` under React StrictMode.",
    "UI composition: `src/app.jsx` renders persistent `Header` plus route-based page components via `react-router-dom`.",
    "Styling layer: Tailwind CSS utility classes (`src/index.css`, `tailwind.config.js`) with component-local JSX structure.",
    "Content/data: primarily static content and media from `src/assets/*`; no local database models found.",
    "Service integration: contact submissions post to `/` with Netlify form attributes (`src/pages/Contact.jsx`, `public/netlify-forms.html`).",
    "Backend/API/Auth: Not found in repo (no server code, API client layer, or auth provider wiring detected).",
]

story.append(ListFlowable(
    [ListItem(Paragraph(item, styles["BulletCompact"])) for item in architecture_bullets],
    bulletType="bullet",
    start="circle",
    leftIndent=13,
    bulletFontName="Helvetica",
    bulletFontSize=8,
    bulletOffsetY=2,
    spaceBefore=2,
    spaceAfter=4,
))

story.append(Paragraph("How to run (minimal)", styles["SectionHead"]))
run_bullets = [
    "From repo root: `npm install`",
    "Start local dev server: `npm run dev`",
    "Open the local URL printed by Vite (typically `http://localhost:5173`)",
    "Optional production build check: `npm run build` then `npm run preview`",
]
story.append(ListFlowable(
    [ListItem(Paragraph(item, styles["BulletCompact"])) for item in run_bullets],
    bulletType="bullet",
    start="circle",
    leftIndent=13,
    bulletFontName="Helvetica",
    bulletFontSize=8,
    bulletOffsetY=2,
    spaceBefore=2,
    spaceAfter=0,
))

story.append(Spacer(1, 4))
story.append(Paragraph("Evidence basis: README.md, package.json, src/main.jsx, src/app.jsx, src/components/Header.jsx, src/pages/Home.jsx, src/pages/Contact.jsx, public/netlify-forms.html.", styles["BulletCompact"]))

doc.build(story)
print(output_path)
