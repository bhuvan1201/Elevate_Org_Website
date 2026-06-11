import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
    {children}
  </div>
);

const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

const Button = ({ className = "", children, ...props }) => (
  <button
    {...props}
    className={
      "px-4 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-700 transition " +
      className
    }
  >
    {children}
  </button>
);

function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
    "bot-field": "",
  });

  const [status, setStatus] = useState({ type: "idle", msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "sending", msg: "Sending..." });

    try {
      const body = encode({
        "form-name": "contact",
        ...form,
      });

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setStatus({ type: "success", msg: "Thanks! We'll get back to you soon." });
      setForm({
        name: "",
        email: "",
        category: "",
        subject: "",
        message: "",
        "bot-field": "",
      });
    } catch {
      setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg">
            Have a question, want to donate gear, volunteer, partner, sponsor, or request a speaker? Send us a message.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
            <p className="mt-2 text-slate-600">
              We’d love to hear from students, parents, schools, donors, partners, and community organizations.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>admin@elevate.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(316) 559-0845</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Wichita, Kansas</span>
              </div>
            </div>

            <Card className="rounded-2xl mt-10">
              <CardContent>
                <h3 className="text-lg font-semibold">Contact categories</h3>
                <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1">
                  <li>Donate gear</li>
                  <li>Volunteer</li>
                  <li>Partner with us</li>
                  <li>Sponsor a campaign</li>
                  <li>Media or speaking request</li>
                  <li>General question</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl">
            <CardContent>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" value={form["bot-field"]} />

                <Input label="Name" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

                <Input label="Email" name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

                <label className="block">
                  <span className="text-sm text-slate-700">Contact Category</span>
                  <select
                    name="category"
                    required
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    <option value="">Select a category</option>
                    <option>Donate gear</option>
                    <option>Volunteer</option>
                    <option>Partner</option>
                    <option>Sponsor</option>
                    <option>Media / speaking request</option>
                    <option>General question</option>
                  </select>
                </label>

                <Input label="Subject" name="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />

                <Textarea label="Message" name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

                <Button type="submit" className="w-full rounded-2xl" disabled={status.type === "sending"}>
                  {status.type === "sending" ? "Sending..." : "Send Message"}
                </Button>

                {status.type !== "idle" && (
                  <div
                    className={
                      "text-sm mt-2 " +
                      (status.type === "success"
                        ? "text-teal-700"
                        : status.type === "error"
                          ? "text-red-600"
                          : "text-slate-600")
                    }
                  >
                    {status.msg}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <label className="block">
      <span className="text-sm text-slate-700">{label}</span>
      <input
        name={name}
        type={type}
        required
        className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function Textarea({ label, name, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm text-slate-700">{label}</span>
      <textarea
        name={name}
        required
        rows={6}
        className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}