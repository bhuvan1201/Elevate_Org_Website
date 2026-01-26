import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  HeartHandshake,
  Info,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users
} from "lucide-react";
// These shadcn/ui imports are optional. If you didn't set up shadcn, you can swap Card/Button with plain div/button below.

// If you do NOT have shadcn/ui installed, uncomment these tiny fallbacks:
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
      "px-4 py-2 rounded-2xl bg-slate-900 text-white hover:bg-slate-700 transition " +
      className
    }
  >
    {children}
  </button>
);
// const Card = ({ className = "", children }) => <div className={"rounded-2xl border " + className}>{children}</div>;
// const CardContent = ({ className = "", children }) => <div className={"p-6 " + className}>{children}</div>;
// const Button = ({ className = "", children, ...props }) => <button className={"px-4 py-2 rounded-2xl border " + className} {...props}>{children}</button>;

export default function ElevateOrg() {
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <Hero />
      <Mission />
      <Programs />
      <Impact />
      <GetInvolved />
      <Newsletter email={email} setEmail={setEmail} />
      <Contact form={form} setForm={setForm} />
      <Footer />
    </main>
  );
}

/* ======================= Sections ======================= */

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-xl">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">E</span>
          <span>ELEVATE</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#mission">Mission</a>
          <a href="#programs">Programs</a>
          <a href="#impact">Impact</a>
          <a href="#get-involved">Get Involved</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-slate-100 to-slate-200 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-800">
            Elevate teens above vaping—
            <span className="block text-teal-700">
              through awareness, data, and peer leadership.
            </span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-prose">
            ELEVATE is a youth-led nonprofit helping students make informed
            choices through education, surveys, and community action.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#get-involved">
              <Button
                size="lg"
                className="rounded-2xl bg-teal-600 hover:bg-teal-700 text-white"
              >
                Join the Movement <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href="#impact"
              className="inline-flex items-center gap-2 rounded-2xl border border-teal-500 text-teal-700 px-4 py-2 hover:bg-teal-50"
            >
              <BarChart3 className="h-4 w-4" /> See our data
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
            alt="Students collaborating"
            className="rounded-3xl shadow-xl aspect-[4/3] object-cover border border-slate-300"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
        <InfoCard icon={<Info />} title="Our Mission" text="To reduce teen vaping by elevating awareness, empowering peer leaders, and partnering with families, schools, and health experts." />
        <InfoCard icon={<Users />} title="What We Do" text="Workshops, surveys, and ambassador training empowering youth to lead." />
        <InfoCard icon={<Shield />} title="Our Values" text="Science-first, student-centered, and compassion-driven." />
      </div>
    </section>
  );
}

function Programs() {
  const list = [
    { title: "School Workshops", desc: "Interactive sessions led by youth and educators." },
    { title: "Survey & Insights", desc: "Local data compared to national trends to guide action." },
    { title: "Peer Ambassadors", desc: "Leadership pathway for mentoring younger students." }
  ];
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Programs</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {list.map((p, i) => <InfoCard key={i} title={p.title} text={p.desc} />)}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { label: "Students Reached", value: "600+" },
    { label: "Schools Partnered", value: "5" },
    { label: "Ambassadors Trained", value: " " }
  ];
  return (
    <section id="impact" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Impact & Data</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => <StatCard key={i} label={s.label} value={s.value} />)}
        </div>
      </div>
    </section>
  );
}

function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Get Involved</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <ActionCard title="Volunteer" icon={<HeartHandshake className="h-5 w-5" />}>
            Become a mentor, event helper, or survey champion.
            <div className="mt-4">
              <Button asChild className="rounded-2xl w-full">
                <a href="#contact">Sign up</a>
              </Button>
            </div>
          </ActionCard>
          <ActionCard title="Partner with Us" icon={<Users className="h-5 w-5" />}>
            Schools, PTAs, clinics — let us co-create programs that fit your students.
            <div className="mt-4">
              <Button asChild variant="secondary" className="rounded-2xl w-full">
                <a href="#contact">Start a conversation</a>
              </Button>
            </div>
          </ActionCard>
        </div>
      </div>
    </section>
  );
}

function Newsletter({ email, setEmail }) {
  return (
    <section id="newsletter" className="py-16 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h3 className="text-2xl font-semibold">Stay Connected</h3>
        <p className="mt-2 text-slate-600">Monthly updates and impact stories. No spam.</p>
        <form
          className="mt-6 flex gap-2 justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed: " + email);
          }}
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-md rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />
          <Button type="submit" className="rounded-2xl">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}

function Contact({ form, setForm }) {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-600">Have a question or want to collaborate?</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> admin@elevate.org</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (316) 559-0845</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Wichita, Kansas</li>
          </ul>
        </div>
        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll get back to you.");
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
              <Button type="submit" className="rounded-2xl w-full">Send</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} ELEVATE. 501(c)(3) nonprofit. All rights reserved.</p>
        <div className="flex md:justify-end gap-4 text-sm">
          <a href="#" className="underline">Privacy</a>
          <a href="#" className="underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
/* ======================= Small Components ======================= */

function StatCard({ label, value }) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6">
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-sm text-slate-600">{label}</div>
      </CardContent>
    </Card>
  );
}

function ActionCard({ title, icon, children }) {
  return (
    <Card className="rounded-2xl h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-slate-600">{children}</p>
      </CardContent>
    </Card>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm">{label}</span>
      <input
        required
        className="mt-1 w-full rounded-2xl border px-4 py-3"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm">{label}</span>
      <textarea
        required
        rows={5}
        className="mt-1 w-full rounded-2xl border px-4 py-3"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

/* ======================= Small Components ======================= */

function InfoCard({ icon, title, text }) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6">
        {icon ? <div className="h-6 w-6 text-slate-700">{icon}</div> : null}
        <h3 className="mt-3 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-slate-600">{text}</p>
      </CardContent>
    </Card>
  );
}