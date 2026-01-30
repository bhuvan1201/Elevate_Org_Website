import { motion } from "framer-motion";
import { Users, BarChart3, HeartHandshake, ShieldCheck } from "lucide-react";

const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
    {children}
  </div>
);

const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

export default function OurStory() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <StoryHero />
      <MissionBlock />
      <WhatWeDo />
      <Timeline />
      <Partners />
      <CTA />
    </main>
  );
}

/* ======================= Sections ======================= */

function StoryHero() {
  return (
    <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-800">
            Our Story
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-prose">
            Elevate Foundation is a youth-led nonprofit dedicated to expanding access to education,
            health awareness, and opportunity for underserved children—through research-driven advocacy,
            community service, and sports-based empowerment.
          </p>
          <p className="mt-3 text-slate-600 max-w-prose">
            Founded by high school students <span className="font-semibold">Vihaan Ganganala</span> and{" "}
            <span className="font-semibold">Hitha Ganganala</span>, Elevate combines student-led research,
            tutoring, and tennis-for-good initiatives to create measurable, community-centered impact.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
            alt="Students collaborating"
            className="rounded-3xl shadow-xl aspect-[4/3] object-cover border border-slate-300"
          />
        </motion.div>
      </div>
    </section>
  );
}

function MissionBlock() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Card className="rounded-3xl">
          <CardContent className="p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-teal-600/10 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-teal-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Mission</h2>
            </div>

            <p className="mt-4 text-slate-600 text-lg leading-relaxed max-w-4xl">
              Elevate Foundation expands access to education, strengthens youth health awareness,
              and creates opportunity for underserved children through research, service, and sports-based empowerment.
            </p>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <MiniPoint icon={<BarChart3 className="h-4 w-4" />} title="Research-driven" text="Student-led research initiatives on critical adolescent health issues." />
              <MiniPoint icon={<Users className="h-4 w-4" />} title="Education access" text="Tutoring and learning support in Math and English." />
              <MiniPoint icon={<HeartHandshake className="h-4 w-4" />} title="Community impact" text="Donation drives and partnerships that translate effort into outcomes." />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const items = [
    "Lead student research initiatives on critical adolescent health issues",
    "Provide education support and tutoring in Math and English",
    "Run tennis gear and school supply drives",
    "Teach tennis and reinvest earnings from racket stringing into education",
    "Partner with organizations like Genesis Foundation for Fitness & Tennis (GFFT) and Building Blocks Foundation",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
          <Card className="rounded-3xl">
            <CardContent className="p-8">
              <ul className="space-y-3 text-slate-700">
                {items.map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-teal-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="text-slate-600 text-lg leading-relaxed">
            <p>
              We believe students can lead meaningful change when research, service, and education come together.
              Our programs are designed to be practical, community-centered, and measurable—so effort turns into real impact.
            </p>
            <p className="mt-4">
              As we grow, our focus stays the same: empower youth to learn, lead, and create opportunity—especially for those
              who have the least access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    {
      date: "2023–2024",
      title: "Teen vaping research & student survey",
      desc: "Developed research and survey work focused on teen vaping and youth health awareness."
    },
    {
      date: "2024",
      title: "Started Elevate Foundation and Obesity research",
      desc: "Launched Elevate to turn student-led research, service, and education into real-world impact and began adolescent obesity research"
    },
    {
      date: "2024–Present",
      title: "Sports and tutoring programs expanded",
      desc: "Leads tennis gear drives (with GFFT) and supports weekly tutoring in Math and English."
    },
    {
      date: "2025",
      title: "Community leadership & program growth",
      desc: "Appointed to Wichita Mayor’s Youth Council and expanded Elevate’s education and service programs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Journey through our history</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Key milestones showing how Elevate has grown from research and service into measurable community impact.
        </p>

        <div className="mt-10 relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-10">
            {items.map((it, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative grid md:grid-cols-2 gap-6 items-start"
                >
                  {/* dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 h-3 w-3 rounded-full bg-teal-600 ring-4 ring-teal-50" />

                  {/* left column */}
                  <div className={isLeft ? "md:pr-10" : "md:pr-10 md:order-2"}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                      className="ml-10 md:ml-0 rounded-2xl border border-slate-200 bg-white shadow-sm p-6"
                    >
                      <div className="text-sm font-semibold text-teal-700">
                        {it.date}
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-900">
                        {it.title}
                      </div>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        {it.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* right column spacer */}
                  <div className={isLeft ? "md:pl-10 hidden md:block" : "md:pl-10 hidden md:block md:order-1"} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Partners</h2>
        <p className="mt-3 text-slate-600 text-lg max-w-3xl">
          We collaborate with organizations that help us scale impact and reach underserved communities.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card className="rounded-3xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold">Genesis Foundation for Fitness & Tennis (GFFT)</h3>
              <p className="mt-2 text-slate-600">
                Helps redistribute donated tennis gear and support sports access for underserved children.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold">Building Blocks Foundation</h3>
              <p className="mt-2 text-slate-600">
                Supports tutoring and learning programs, including Math and English education support.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Card className="rounded-3xl border-teal-200">
          <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Want to collaborate or support our work?</h3>
              <p className="mt-2 text-slate-600">
                Reach out to partner, volunteer, or help expand our programs.
              </p>
            </div>
            <a
              href="/#contact"
              className="px-5 py-3 rounded-2xl bg-teal-600 text-white hover:bg-teal-700 transition"
            >
              Contact Us
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* ======================= Small Components ======================= */

function MiniPoint({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2 text-slate-800">
        <span className="text-teal-700">{icon}</span>
        <span className="font-semibold">{title}</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function FounderCard({ name, role, bio }) {
  return (
    <Card className="rounded-3xl">
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-1 text-sm text-teal-700 font-medium">{role}</p>
        <p className="mt-3 text-slate-600">{bio}</p>
      </CardContent>
    </Card>
  );
}
