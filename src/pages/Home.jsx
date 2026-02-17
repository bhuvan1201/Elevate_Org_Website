import logo from "../assets/logo-removebg.png";
import h1 from "../assets/home/hero/h1.avif";
import h2 from "../assets/home/hero/h2.avif";
import h3 from "../assets/home/hero/h3.jpeg";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  Info,
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

/* ================= HERO BACKGROUND SLIDER ================= */

function HeroBackgroundSlider({ images, speed = 45 }) {
  const track = [...images, ...images];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 flex w-max"
        style={{ animation: `home-hero-slide ${speed}s linear infinite` }}
      >
        {track.map((src, i) => (
          <div key={i} className="h-full w-[70vw] md:w-[55vw] shrink-0">
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* overlay: lower numbers = more visible images */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100/45 via-slate-100/25 to-slate-200/40" />

      {/* top/bottom fade */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-100 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-200 to-transparent" />

      <style>{`
        @keyframes home-hero-slide {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}

/* ================= MAIN PAGE ================= */

export default function Home() {
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-50 text-slate-900">
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

/* ================= HERO ================= */

function Hero() {
  const images = [h1, h2, h3];

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-28">
      <HeroBackgroundSlider images={images} speed={45} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-800">
            Empowering youth through education, advocacy, and opportunity
          </h1>

          <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-prose">
            ELEVATE is a youth-led nonprofit helping students make informed
            choices through education, surveys, and community action.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <a href="#get-involved">
              <Button className="rounded-2xl bg-teal-600 hover:bg-teal-700 text-white">
                Join the Movement <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={logo}
            alt="Elevate Logo"
            className="w-[300px] md:w-[380px] lg:w-[450px] h-auto object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ================= SECTIONS ================= */

function Mission() {
  return (
    <section id="mission" className="py-20">
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
    <section id="impact" className="py-20">
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
    <section id="newsletter" className="py-16 text-center">
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
    <section id="contact" className="py-20">
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
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} ELEVATE. 501(c)(3) nonprofit. All rights reserved.
        </p>
        <div className="flex md:justify-end gap-4 text-sm">
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
