import logo from "../assets/logo-removebg.png";
import h1 from "../assets/home/hero/h1.jpg";
import h2 from "../assets/home/hero/h2.jpeg";
// import h3 from "../assets/home/hero/h3.jpeg";
import h3 from "../assets/partners/building-blocks/bb1.jpeg";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  HeartHandshake,
  Info,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
} from "lucide-react";

/* ================= UI FALLBACK COMPONENTS ================= */

const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
    {children}
  </div>
);

const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

const Button = ({ className = "", children, type = "button", ...props }) => (
  <button
    type={type}
    {...props}
    className={
      "px-4 py-2 rounded-2xl bg-slate-900 text-white hover:bg-slate-700 transition inline-flex items-center justify-center " +
      className
    }
  >
    {children}
  </button>
);

/* ================= MAIN PAGE ================= */

export default function Home() {
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Mission />
      <AboutUs />
      <Projects />
      <Impact />
      <GetInvolved />
      <Newsletter email={email} setEmail={setEmail} />
      <Contact form={form} setForm={setForm} />
      <Footer />
    </main>
  );
}

/* ================= HERO (TFAH-STYLE) ================= */

function Hero() {
  const images = [h1, h2, h3];
  const [idx, setIdx] = useState(0);
  const isH1Image = idx === 0;

  // Optional: auto-rotate images (turn off by deleting this useEffect)
  useEffect(() => {
    const t = setInterval(() => {
      setIdx((v) => (v + 1) % images.length);
    }, 4500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section id="home" className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT: brand + message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {/* small brand row (so the logo doesn't dominate) */}
            <div className="flex items-center gap-5">
  <img
    src={logo}
    alt="ELEVATE"
    className="h-20 md:h-28 lg:h-32 w-auto object-contain"
  />
  <div className="leading-tight">
    <div className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide text-slate-900">
      ELEVATE
    </div>
    <div className="text-base text-slate-500">Youth-led nonprofit</div>
  </div>
</div>


            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Empowering youth through education, advocacy, and opportunity
            </h1>

            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              ELEVATE is a youth-led nonprofit helping students make informed
              choices through education, surveys, and community action.
            </p>

            <div className="mt-7 flex flex-wrap gap-4 items-center">
              <a href="#get-involved">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Join the Movement <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <a
                href="#mission"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: contained hero image (so it doesn't overpower text) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
              <div className="relative aspect-[16/10]">
                {/* image */}
                <img
                  src={images[idx]}
                  alt=""
                  className={
                    "absolute inset-0 h-full w-full object-cover " +
                    (isH1Image
                      ? "saturate-150 contrast-105 brightness-125"
                      : "")
                  }
                  draggable="false"
                />

                {/* subtle overlay for polish (NOT heavy) */}
                <div
                  className={
                    "absolute inset-0 " +
                    (isH1Image
                      ? "bg-gradient-to-t from-transparent via-transparent to-transparent"
                      : "bg-gradient-to-t from-white/20 via-transparent to-white/10")
                  }
                />

                {/* small caption chip */}
                <div className="absolute left-4 bottom-4">
                  <span className="inline-flex items-center rounded-full bg-white/85 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-800 border border-slate-200">
                    Community impact in action
                  </span>
                </div>
              </div>

              {/* optional tiny dots */}
              <div className="flex items-center justify-center gap-2 py-3 bg-white">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={
                      "h-2 w-2 rounded-full transition " +
                      (i === idx ? "bg-teal-600" : "bg-slate-300 hover:bg-slate-400")
                    }
                    aria-label={`Hero image ${i + 1}`}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= SECTIONS ================= */

function Mission() {
  return (
    <section id="mission" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
        <InfoCard
          icon={<Info />}
          title="Our Mission"
          text="To reduce teen vaping by elevating awareness, empowering peer leaders, and partnering with families, schools, and health experts."
        />
        <InfoCard
          icon={<Users />}
          title="What We Do"
          text="Workshops, surveys, and ambassador training empowering youth to lead."
        />
        <InfoCard
          icon={<Shield />}
          title="Our Values"
          text="Science-first, student-centered, and compassion-driven."
        />
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
            alt="About ELEVATE team"
            className="rounded-3xl shadow-lg aspect-[4/3] object-cover border border-slate-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            ELEVATE is a youth-led nonprofit focused on reducing teen vaping
            through awareness, data-driven insights, and peer leadership.
            Students create the strongest change when they lead the conversation,
            supported by families, schools, and health experts.
          </p>

          <div className="mt-6">
            <a href="#contact">
              <Button className="rounded-2xl bg-slate-900 hover:bg-slate-700">
                Reach out to our team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const list = [
    { title: "School Workshops", desc: "Interactive sessions led by youth and educators." },
    { title: "Survey & Insights", desc: "Local data compared to national trends to guide action." },
    { title: "Peer Ambassadors", desc: "Leadership pathway for mentoring younger students." },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <InfoCard key={i} title={p.title} text={p.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { label: "Students Reached", value: "600+" },
    { label: "Schools Partnered", value: "5" },
    { label: "Ambassadors Trained", value: " " },
  ];

  return (
    <section id="impact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Impact & Data</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} label={s.label} value={s.value} />
          ))}
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
              <a href="#contact">
                <Button className="rounded-2xl w-full">Sign up</Button>
              </a>
            </div>
          </ActionCard>

          <ActionCard title="Partner with Us" icon={<Users className="h-5 w-5" />}>
            Schools, PTAs, clinics. Let us co-create programs that fit your students.
            <div className="mt-4">
              <a href="#contact">
                <Button className="rounded-2xl w-full bg-slate-900 hover:bg-slate-700">
                  Start a conversation
                </Button>
              </a>
            </div>
          </ActionCard>
        </div>
      </div>
    </section>
  );
}

function Newsletter({ email, setEmail }) {
  return (
    <section id="newsletter" className="py-16 text-center bg-slate-50">
      <div className="mx-auto max-w-3xl px-4">
        <h3 className="text-2xl font-semibold">Stay Connected</h3>
        <p className="mt-2 text-slate-600">Monthly updates and impact stories. No spam.</p>

        <form
          className="mt-6 flex flex-col sm:flex-row gap-2 justify-center"
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
            className="w-full max-w-md rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900 bg-white"
          />
          <Button type="submit" className="rounded-2xl">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}

function Contact({ form, setForm }) {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-600">Have a question or want to collaborate?</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> admin@elevate.org
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> (316) 559-0845
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Wichita, Kansas
            </li>
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
  const facebookUrl = "https://facebook.com/";
  const instagramUrl = "https://instagram.com/elevatefoundation_official";

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} ELEVATE. 501(c)(3) nonprofit. All rights reserved.
        </p>
        <div className="flex md:justify-end items-center gap-4 text-sm">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit our Facebook page"
            className="text-[#1877F2] hover:opacity-80 transition"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit our Instagram page"
            className="text-[#E4405F] hover:opacity-80 transition"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="underline">Privacy</a>
          <a href="#" className="underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* ================= SMALL COMPONENTS ================= */

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
        className="mt-1 w-full rounded-2xl border px-4 py-3 bg-white"
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
        className="mt-1 w-full rounded-2xl border px-4 py-3 bg-white"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

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
