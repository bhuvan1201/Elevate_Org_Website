import { motion } from "framer-motion";
import { Users, BarChart3, HeartHandshake, ShieldCheck, Eye } from "lucide-react";
import ourStory from "../assets/ourstory.png";

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
      <MissionVision />
      <FounderStory />
      <WhatWeDo />
      <Timeline />
      <Partners />
      <CTA />
    </main>
  );
}

function StoryHero() {
  return (
    <section className="bg-gradient-to-r from-slate-100 to-slate-200 pt-40 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-800">
            Our Story
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-prose">
            ELEVATE was founded by siblings <span className="font-semibold text-slate-800">Vihaan Ganganala</span> and{" "}
            <span className="font-semibold text-slate-800">Hitha Ganganala</span>, two high school students from Wichita, Kansas, who wanted to turn their passion for service, education, tennis, and health awareness into meaningful community action.
          </p>

          <p className="mt-3 text-slate-600 max-w-prose">
            As competitive tennis players, they saw how sports can build discipline, confidence, and opportunity. As students involved in science and health programs such as HOSA, they also saw how issues like teen vaping, food access, and adolescent health affect young people. ELEVATE brings these interests together into one youth-led nonprofit platform.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <img
            src={ourStory}
            alt="ELEVATE story"
            className="rounded-3xl shadow-xl w-full h-auto object-contain border border-slate-300"
          />
        </motion.div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
        <Card className="rounded-3xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-teal-600/10 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-teal-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Mission</h2>
            </div>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              To empower youth through education, sports access, health awareness, and service-driven leadership.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-teal-600/10 flex items-center justify-center">
                <Eye className="h-5 w-5 text-teal-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Vision</h2>
            </div>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              A world where young people use their knowledge, talents, and leadership to create opportunity and positive
              change for others.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function FounderStory() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-semibold text-teal-700">The Founders</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">A sibling-led service mission</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card className="rounded-3xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold">Vihaan Ganganala</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Vihaan is a high school student, tennis player, HOSA participant, and youth health advocate. His work
                focuses on teen vaping awareness, public health education, sports access, and service leadership. Through
                ELEVATE, he helps turn student research and community outreach into real programs for youth.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold">Hitha Ganganala</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Hitha is a high school student, tennis player, tutor, and public health researcher focused on food access,
                nutrition equity, adolescent obesity, and education support. Her work connects data-driven research with
                service projects that support students and families.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-4xl">
          Together, Vihaan and Hitha built ELEVATE around a simple belief: students do not have to wait until adulthood
          to make a difference. By combining tennis, tutoring, HOSA-inspired health awareness, and service projects,
          ELEVATE supports youth locally in Wichita and globally through education-focused outreach in India.
        </p>
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
    "Support service projects in Wichita and education access initiatives connected to India",
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
              Our programs are designed to be practical, community-centered, and measurable.
            </p>
            <p className="mt-4">
              ELEVATE focuses on empowering youth to learn, lead, serve, and create opportunity—especially for students
              and communities with limited access to resources.
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
      desc: "Developed student-led research and survey work focused on teen vaping and youth health awareness.",
    },
    {
      date: "2024",
      title: "Started ELEVATE and expanded health research",
      desc: "Launched ELEVATE to turn research, service, education, and sports access into real-world impact.",
    },
    {
      date: "2024–Present",
      title: "Sports and tutoring programs expanded",
      desc: "Led tennis gear drives with GFFT and supported tutoring in Math and English through education partnerships.",
    },
    {
      date: "2025",
      title: "Community leadership & program growth",
      desc: "Expanded ELEVATE’s education, health awareness, sports access, and service programs in Wichita and beyond.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Journey through our history</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Key milestones showing how ELEVATE has grown from student-led research into measurable community impact.
        </p>

        <div className="mt-10 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-10">
            {items.map((it, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative grid md:grid-cols-2 gap-6 items-start">
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 h-3 w-3 rounded-full bg-teal-600 ring-4 ring-teal-50" />

                  <div className={isLeft ? "md:pr-10" : "md:pr-10 md:order-2"}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                      className="ml-10 md:ml-0 rounded-2xl border border-slate-200 bg-white shadow-sm p-6"
                    >
                      <div className="text-sm font-semibold text-teal-700">{it.date}</div>
                      <div className="mt-2 text-xl font-semibold text-slate-900">{it.title}</div>
                      <p className="mt-2 text-slate-600 leading-relaxed">{it.desc}</p>
                    </motion.div>
                  </div>

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
                Reach out to partner, volunteer, donate gear, or help expand our programs.
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