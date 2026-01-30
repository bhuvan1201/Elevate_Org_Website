import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

/* --- same tiny UI fallbacks you used in Home.jsx --- */
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

function Input({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm text-slate-700">{label}</span>
      <input
        required
        className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm text-slate-700">{label}</span>
      <textarea
        required
        rows={6}
        className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header section */}
      <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg">
            Have a question or want to collaborate? Send us a message and our team will get back to you.
          </p>
        </div>
      </section>

      {/* Main contact layout (same style as Home.jsx Contact section) */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
          {/* Left info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
            <p className="mt-2 text-slate-600">
              We’d love to hear from students, parents, schools, and partners.
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

            <div className="mt-10">
              <Card className="rounded-2xl">
                <CardContent>
                  <h3 className="text-lg font-semibold">What to include</h3>
                  <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1">
                    <li>Your name + best email</li>
                    <li>School/organization (if relevant)</li>
                    <li>How you want to help or collaborate</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right form */}
          <Card className="rounded-2xl">
            <CardContent>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! We'll get back to you.");
                  setForm({ name: "", subject: "", message: "" });
                }}
              >
                <Input
                  label="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <Input
                  label="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />

                <Textarea
                  label="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />

                <Button type="submit" className="w-full rounded-2xl">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
