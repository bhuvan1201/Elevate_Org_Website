import { Link } from "react-router-dom";

//import h1 from "../assets/home/hero/h1.jpg";
import h2 from "../assets/home/hero/optimized/h2.webp";
import h3 from "../assets/partners/building-blocks/bb1.jpeg";
import h4 from "../assets/home/hero/optimized/h4.webp";
import h5 from "../assets/home/hero/optimized/h5.webp";
import h6 from "../assets/home/hero/optimized/h6.webp";
import h7 from "../assets/home/hero/optimized/h7.webp";
import h8 from "../assets/home/hero/optimized/h8.webp";
import h9 from "../assets/home/hero/optimized/h9.webp";
import h10 from "../assets/home/hero/optimized/h10.webp";
import h11 from "../assets/home/hero/optimized/h11.webp";
import h12 from "../assets/home/hero/optimized/h12.webp";
import h13 from "../assets/home/hero/optimized/h13.webp";
import h14 from "../assets/home/hero/optimized/h14.webp";
import h15 from "../assets/home/hero/optimized/h15.webp";
import h16 from "../assets/home/hero/optimized/h16.webp";
import h17 from "../assets/home/hero/optimized/h17.webp";
import h18 from "../assets/home/hero/optimized/h18.webp";
import h19 from "../assets/home/hero/optimized/h19.webp";
import h20 from "../assets/home/hero/optimized/h20.webp";
import h21 from "../assets/home/hero/optimized/h21.webp";
import h22 from "../assets/home/hero/optimized/h22.webp";
import h23 from "../assets/home/hero/optimized/h3.webp";

import h1Video from "../assets/home/hero/optimized-videos/h1-video.mp4";
import h2Video from "../assets/home/hero/optimized-videos/h2-video.mp4";

import vihaanImg from "../assets/vihaan.jpeg";
import hithaImg from "../assets/hitha.jpeg";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
  BookOpen,
  Dumbbell,
  HeartPulse,
  Gift,
  CalendarDays,
  Clock3
} from "lucide-react";

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

export default function Home() {
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
  });

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <RallyBanner />
      <Mission />
      <FoundersStory />
      <FourPillars />
      <FeaturedProjects />
      <Impact />
      <Partners />
      <GetInvolved />
      <FinalCTA />
      <Newsletter email={email} setEmail={setEmail} />
      <Contact form={form} setForm={setForm} />
      <Footer />
    </main>
  );
}

function Hero() {
  const slides = [
    //{ type: "image", src: h1 },
    { type: "image", src: h8 },
    { type: "image", src: h2 },
    { type: "video", src: h1Video },
    { type: "image", src: h3 },
    { type: "image", src: h4 },
    { type: "image", src: h5 },
    //{ type: "image", src: h6 },
    { type: "video", src: h2Video },
    //{ type: "image", src: h7 },
    { type: "image", src: h9 },
    { type: "image", src: h10 },
    { type: "image", src: h11 },
    { type: "image", src: h12 },
    { type: "image", src: h13 },
    { type: "image", src: h14 },
    //{ type: "image", src: h15 },
    { type: "image", src: h16 },
    { type: "image", src: h17 },
    { type: "image", src: h18 },
    { type: "image", src: h19 },
    { type: "image", src: h20 },
    //{ type: "image", src: h21 },
    { type: "image", src: h22 },
    { type: "image", src: h23 },
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const currentSlide = slides[idx];
    const delay = currentSlide.type === "video" ? 9000 : 4500;

    const t = setTimeout(() => {
      setIdx((v) => (v + 1) % slides.length);
    }, delay);

    return () => clearTimeout(t);
  }, [idx, slides.length]);

  const titleStyle = {
    color: "#ffffff",
    WebkitTextStroke: "0.5px rgba(180,180,180,0.7)",
    textShadow: `
      0 1px 0 #d9d9d9,
      0 2px 0 #cfcfcf,
      0 3px 0 #c5c5c5,
      0 6px 10px rgba(0,0,0,0.45),
      0 15px 25px rgba(0,0,0,0.30)
    `,
  };

  return (
    <section
      id="home"
      className="relative min-h-[720px] md:min-h-[780px] flex items-center justify-center overflow-hidden bg-slate-900 pt-24"
    >
      {slides[idx].type === "video" ? (
        <video
          key={slides[idx].src}
          src={slides[idx].src}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          key={slides[idx].src}
          src={slides[idx].src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_25%] transition-all duration-700"
          draggable="false"
        />
      )}

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="text-white uppercase font-semibold">
            <div className="text-left text-6xl md:text-8xl" style={titleStyle}>
              YOUTH
            </div>

            <div className="text-center text-6xl md:text-8xl mt-4" style={titleStyle}>
              SERVING
            </div>

            <div className="text-right text-6xl md:text-8xl mt-4" style={titleStyle}>
              YOUTH
            </div>
          </div>

          <div className="mt-36 flex flex-wrap justify-center gap-5">
            <a
              href="#programs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-none bg-white text-slate-900 text-lg font-bold hover:bg-slate-100 transition shadow-xl"
            >
              Explore Our Projects <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="/get-involved#donate-gear"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-none bg-white text-slate-900 text-lg font-bold hover:bg-slate-100 transition shadow-xl"
            >
              Donate Tennis Gear
            </a>

            <a
              href="/get-involved#volunteer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-none bg-teal-600 text-white text-lg font-bold hover:bg-teal-700 transition shadow-xl"
            >
              Join as a Volunteer
            </a>
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center gap-2 flex-wrap max-w-lg mx-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={
                "h-3 w-3 rounded-full transition " +
                (i === idx ? "bg-white" : "bg-white/45 hover:bg-white/75")
              }
              aria-label={`Hero slide ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function RallyBanner() {
  return (
    <section className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[2fr_1fr]">
            <div className="p-8 md:p-10">
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-1 text-sm font-bold text-yellow-800">
                🎾 Upcoming Community Event
              </span>

              <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl">
                Rally for Change
              </h2>

              <p className="mt-3 text-2xl font-bold text-teal-700">
                Free Tennis Event for Kids
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                Join ELEVATE's Tennis for Good initiative for a fun evening of
                tennis instruction, cool elevate t-shirts, racquet giveaways, snacks, and
                community. Open to students in Grades 1–12.
              </p>

              <div className="mt-8 flex flex-wrap gap-5 text-slate-700">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-teal-600" />
                  <span className="font-semibold">
                    Saturday, September 12, 2026
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 className="h-5 w-5 text-teal-600" />
                  <span className="font-semibold">
                    5:00–7:00 PM
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  <span className="font-semibold">
                    Eastview Park, Wichita
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/rally-for-change"
                  className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-7 py-4 text-lg font-bold text-white transition hover:bg-teal-700"
                >
                  Register Now
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  to="/projects/tennis-for-good"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-7 py-4 text-lg font-bold text-slate-900 transition hover:bg-slate-50"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-teal-700 to-cyan-700 p-10 text-center text-white">
              <div className="text-6xl">🎾</div>

              <h3 className="mt-4 text-3xl font-bold">
                Rally for Change
              </h3>

              <p className="mt-2 text-teal-100">
                Free Tennis Event
              </p>

              <div className="mt-8 w-full rounded-2xl bg-white/10 px-8 py-6 backdrop-blur">
                <div className="text-5xl font-extrabold">
                  FREE
                </div>

                <div className="mt-2 text-lg">
                  Grades 1–12
                </div>

                <div className="mt-5 border-t border-white/20 pt-5">
                  <div className="text-2xl font-bold">
                    Choose Your Session
                  </div>

                  <div className="mt-2 text-sm">
                    5:00–6:00 PM
                    <br />
                    or
                    <br />
                    6:00–7:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Mission() {
  return (
    <section id="mission" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-semibold text-teal-700">Mission</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">
          Empowering students to lead meaningful change.
        </h2>
        <p className="mt-4 max-w-4xl text-lg text-slate-600 leading-relaxed">
          ELEVATE connects education, health awareness, sports access, and service
          leadership to support underserved students and help young people build
          confidence, opportunity, and community impact.
        </p>
      </div>
    </section>
  );
}

function FoundersStory() {
  return (
    <section id="founders" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-semibold text-teal-700">Founder Story</p>

        <div className="mt-2 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Led by students, built for students.
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Founded by Vihaan and Hitha Ganganala, ELEVATE turns student-led
              research, tutoring, tennis, and service into real community impact.
            </p>
          </div>

          <Link
            to="/about/team"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition"
          >
            Meet the Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <FounderCard
            name="Vihaan Ganganala"
            title="Cofounder & President"
            img={vihaanImg}
            bio="Vihaan leads ELEVATE’s health advocacy, sports access, and youth service initiatives. His work focuses on making health education easier to understand while using tennis and mentorship as pathways to opportunity."
          />

          <FounderCard
            name="Hitha Ganganala"
            title="Cofounder & President"
            img={hithaImg}
            bio="Hitha leads ELEVATE’s work around public health research, nutrition equity, tutoring, and education access. Her focus is helping students and families overcome barriers connected to food, health, and learning."
          />
        </div>
      </div>
    </section>
  );
}

function FounderCard({ name, title, img, bio }) {
  return (
    <Card className="rounded-3xl overflow-hidden hover:shadow-lg transition">
      <div className="grid sm:grid-cols-[220px_1fr] gap-0">
        <div className="bg-slate-50 flex items-center justify-center p-6">
          <img
            src={img}
            alt={name}
            className="h-56 w-44 object-cover rounded-2xl shadow-md border border-slate-200"
          />
        </div>

        <CardContent className="p-7">
          <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800 border border-teal-100">
            Founder
          </span>

          <h3 className="mt-4 text-2xl font-bold text-slate-900">{name}</h3>
          <p className="mt-1 text-sm font-semibold text-teal-700">{title}</p>

          <p className="mt-4 text-slate-600 leading-relaxed">{bio}</p>

          <Link
            to="/about/team"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            Read full profile <ArrowRight className="h-4 w-4" />
          </Link>
        </CardContent>
      </div>
    </Card>
  );
}

function FourPillars() {
  const pillars = [
    {
      title: "Education",
      text: "Free tutoring, student-friendly lessons, learning support, and academic confidence.",
      icon: <BookOpen />,
    },
    {
      title: "Sports",
      text: "Tennis gear donations, racket stringing, coaching, and access to youth sports.",
      icon: <Dumbbell />,
    },
    {
      title: "Health",
      text: "Research-driven awareness around teen vaping, nutrition, obesity, and prevention.",
      icon: <HeartPulse />,
    },
    {
      title: "Service",
      text: "Youth-led volunteer work, partnerships, supply drives, and community outreach.",
      icon: <HeartHandshake />,
    },
  ];

  return (
    <section id="pillars" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-semibold text-teal-700">Four Pillars</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">What ELEVATE focuses on</h2>

        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <InfoCard key={i} icon={p.icon} title={p.title} text={p.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const projects = [
    {
      title: "Tennis for Good",
      desc: "Collecting and redistributing tennis gear while using sports as a path to confidence and opportunity.",
      to: "/partners/genesis-foundation",
    },
    {
      title: "Global Tutoring",
      desc: "Free Math and English tutoring through live support and on-demand learning videos.",
      to: "/learn/tutoring-education",
    },
    {
      title: "Teen Vaping Awareness",
      desc: "Student-led research and prevention resources focused on adolescent vaping behavior.",
      to: "/projects/teen-vaping-awareness",
    },
    {
      title: "Food Access & Health",
      desc: "Research on poverty, nutritious food access, physical activity, and adolescent obesity.",
      to: "/projects/adolescent-obesity",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-semibold text-teal-700">Programs</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">
          Our work combines education, health research, sports access, and service partnerships.
        </p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <Link key={i} to={p.to} className="group">
              <Card className="rounded-3xl h-full hover:shadow-lg transition">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-teal-700 transition">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{p.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { label: "Gear Collected", value: "100+" },
    { label: "Students Supported", value: "600+" },
    { label: "Tutoring Hours", value: "50+" },
    { label: "Videos Created", value: "1" },
    { label: "Youth Reached", value: "600+" },
    { label: "Partner Organizations", value: "2" },
  ];

  return (
    <section id="impact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-semibold text-teal-700">Impact</p>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold mb-4">
          Our Growing Impact
        </h2>

        <p className="max-w-3xl text-slate-600 text-lg">
          ELEVATE is growing through youth-led service, tutoring, sports access,
          health education, and community partnerships.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} label={s.label} value={s.value} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    {
      title: "Genesis Foundation for Fitness & Tennis",
      text: "Supporting tennis access, donated gear distribution, and sports-based youth opportunity.",
      to: "/partners/genesis-foundation",
    },
    {
      title: "Building Blocks Foundation",
      text: "Supporting free tutoring, learning programs, and education access for underserved students.",
      to: "/partners/building-blocks-foundation",
    },
    {
      title: "Tennis Academies & Community Clubs",
      text: "Working with local tennis programs to collect gear, support drives, and expand youth access.",
      to: "/contact",
    },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-semibold text-teal-700">Partners</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">
          Collaboration that expands opportunity
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <Link key={i} to={p.to} className="group">
              <Card className="rounded-3xl h-full hover:shadow-lg transition">
                <CardContent>
                  <h3 className="text-xl font-bold group-hover:text-teal-700 transition">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{p.text}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetInvolved() {
  const actions = [
    {
      title: "Donate Gear",
      text: "Donate gently used tennis rackets, shoes, bags, balls, and sports equipment.",
      icon: <Gift className="h-5 w-5" />,
    },
    {
      title: "Volunteer",
      text: "Help with tutoring, gear collection, events, outreach, and youth programs.",
      icon: <HeartHandshake className="h-5 w-5" />,
    },
    {
      title: "Partner",
      text: "Schools, clubs, academies, and nonprofits can collaborate on programs.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Sponsor",
      text: "Support learning materials, school supplies, sports access, and program logistics.",
      icon: <Shield className="h-5 w-5" />,
    },
  ];

  return (
    <section id="get-involved" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-semibold text-teal-700">Get Involved</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">Support the movement</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">Whether you are a student, parent, school, tennis academy, nonprofit, or sponsor, you can help ELEVATE create more opportunities for youth.</p>

        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {actions.map((a, i) => (
            <ActionCard key={i} title={a.title} icon={a.icon}>
              {a.text}
            </ActionCard>
          ))}
        </div>

        <div className="mt-8">
          <a href="/get-involved#donate-gear">
            <Button className="rounded-2xl bg-teal-600 hover:bg-teal-700">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold">Join the Movement</h2>
        <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-lg">
          Help ELEVATE expand tutoring, tennis access, health education, and youth-led service.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/about/team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition"
          >
            Meet the Founders
          </Link>
        </div>
      </div>
    </section>
  );
}

function Newsletter({ email, setEmail }) {
  return (
    <section id="newsletter" className="py-16 text-center bg-white">
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
          <Button type="submit" className="rounded-2xl">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}

function Contact({ form, setForm }) {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
        {/* Left info */}
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

        {/* Right card */}
        <Card className="rounded-2xl">
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll get back to you.");
                setForm({ name: "", email: "", category: "", subject: "", message: "" });
              }}
            >
              <Input
                label="Name"
                value={form.name || ""}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <Input
                label="Email"
                type="email"
                value={form.email || ""}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <label className="block">
                <span className="text-sm">Contact Category</span>
                <select
                  required
                  className="mt-1 w-full rounded-2xl border px-4 py-3 bg-white"
                  value={form.category || ""}
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

              <Input
                label="Subject"
                value={form.subject || ""}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />

              <Textarea
                label="Message"
                value={form.message || ""}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <Button type="submit" className="rounded-2xl w-full">
                Send Message
              </Button>
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
          <a href={facebookUrl} target="_blank" rel="noreferrer" className="text-[#1877F2]">
            <Facebook className="h-5 w-5" />
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-[#E4405F]">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="underline">Privacy</a>
          <a href="#" className="underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}

function StatCard({ label, value }) {
  return (
    <Card className="rounded-2xl">
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-sm text-slate-600">{label}</div>
      </CardContent>
    </Card>
  );
}

function ActionCard({ title, icon, children }) {
  return (
    <Card className="rounded-2xl h-full">
      <CardContent>
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
    <Card className="rounded-2xl h-full">
      <CardContent>
        {icon ? <div className="h-6 w-6 text-slate-700">{icon}</div> : null}
        <h3 className="mt-3 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-slate-600">{text}</p>
      </CardContent>
    </Card>
  );
}