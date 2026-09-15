import vihaanImg from "../assets/vihaan.jpeg";
import hithaImg from "../assets/hitha.jpeg";

import {
  HeartHandshake,
  Settings,
  Laptop,
  Users,
  Sparkles,
} from "lucide-react";

/* =========================================================
   FEATURED YOUTH LEADER PROFILE
========================================================= */

function FounderProfile({
  name,
  role,
  schoolLine,
  bio,
  mission,
  achievements,
  img,
  flip = false,
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div
        className={
          "grid md:grid-cols-2 " +
          (flip ? "md:[&>*:first-child]:order-2" : "")
        }
      >
        {/* IMAGE */}
        <div className="relative flex min-h-[420px] items-center justify-center bg-gradient-to-br from-slate-50 to-teal-50 p-8 md:p-10">
          <div className="relative w-full">
            {/* Decorative background */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-teal-100/70" />
            <div className="absolute -bottom-5 -right-4 h-32 w-32 rounded-full bg-slate-200/60" />

            <img
              src={img}
              alt={name}
              className="relative z-10 mx-auto w-full max-w-[520px] rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          {/* LABEL */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
              <Sparkles className="h-3.5 w-3.5" />
              Youth Leadership
            </span>
          </div>

          {/* NAME */}
          <h3 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            {name}
          </h3>

          {/* ROLE */}
          <p className="mt-2 text-lg font-semibold text-teal-700">
            {role}
          </p>

          {/* SCHOOL */}
          <p className="mt-3 leading-relaxed text-slate-600">
            {schoolLine}
          </p>

          {/* BIO */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-slate-900">
              About
            </h4>

            <p className="mt-2 leading-relaxed text-slate-600">
              {bio}
            </p>
          </div>

          {/* PERSONAL MISSION */}
          <div className="mt-7 rounded-2xl border border-teal-100 bg-teal-50/60 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Personal Mission
            </p>

            <p className="mt-2 italic leading-relaxed text-slate-700">
              “{mission}”
            </p>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="mt-7">
            <h4 className="text-lg font-semibold text-slate-900">
              Key Achievements
            </h4>

            <ul className="mt-4 space-y-3">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-slate-600"
                >
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-600" />

                  <span className="leading-relaxed">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ADVISOR CARD
========================================================= */

function AdvisorCard({
  name,
  role,
  description,
  initials,
  icon,
}) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* TOP */}
      <div className="flex items-start justify-between gap-4">
        {/* INITIALS */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-slate-100 text-xl font-bold text-teal-700 ring-1 ring-teal-100">
          {initials}
        </div>

        {/* ICON */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition group-hover:bg-teal-50 group-hover:text-teal-700">
          {icon}
        </div>
      </div>

      {/* NAME */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {name}
      </h3>

      {/* ROLE */}
      <p className="mt-2 font-semibold leading-relaxed text-teal-700">
        {role}
      </p>

      {/* DESCRIPTION */}
      <p className="mt-4 flex-grow leading-relaxed text-slate-600">
        {description}
      </p>

      {/* BOTTOM */}
      <div className="mt-6 border-t border-slate-100 pt-5">
        <span className="text-sm font-semibold text-slate-500">
          ELEVATE Leadership Team
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   ADVISORS
========================================================= */

const ADVISORS = [
  {
    name: "Vibha Krishnappa",
    role: "Adult Advisor & Community Partnerships Lead",
    initials: "VK",
    icon: <HeartHandshake className="h-5 w-5" />,
    description:
      "Supports ELEVATE’s community relationships and helps strengthen partnerships that connect youth-led initiatives with organizations, families, and community resources.",
  },
  {
    name: "Nagendra Ganganala",
    role: "Operations & Outreach Advisor",
    initials: "NG",
    icon: <Settings className="h-5 w-5" />,
    description:
      "Supports ELEVATE’s operational planning and community outreach, helping youth-led programs move from ideas to organized and sustainable initiatives.",
  },
  {
    name: "Bhuvan Gowda",
    role: "Technology & Communications Advisor",
    initials: "BG",
    icon: <Laptop className="h-5 w-5" />,
    description:
      "Supports ELEVATE’s technology and digital communications, helping the organization use its website, online resources, and digital platforms to share its work and expand its reach.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function MeetTheTeam() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section className="bg-gradient-to-b from-slate-50 to-white pb-16 pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-teal-700">
              Our People
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              ELEVATE Leadership Team
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              ELEVATE is driven by student leadership and strengthened by
              experienced advisors who support our programs, partnerships,
              outreach, technology, and community impact.
            </p>
          </div>

          {/* Small leadership philosophy */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50 px-5 py-3">
            <Users className="h-5 w-5 text-teal-700" />

            <p className="text-sm font-semibold text-teal-900">
              Youth-led ideas. Adult guidance. Community impact.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          YOUTH LEADERSHIP
      ====================================================== */}

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">

          {/* SECTION TITLE */}
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-teal-700">
              Youth Leadership
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Meet Our Founders
            </h2>

            <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
              ELEVATE was built around the belief that young people can
              research important challenges, develop solutions, and lead
              meaningful service in their communities.
            </p>
          </div>

          <div className="space-y-10">

            {/* =================================================
                VIHAAN
            ================================================== */}

            <FounderProfile
              name="Vihaan Ganganala"
              role="Founder & Youth Executive Director"
              schoolLine="High school Junior at Wichita Collegiate School • Interests: public health, youth advocacy, sports medicine"
              bio="Vihaan Ganganala is a high school Junior at Wichita Collegiate School with a strong interest in public health, youth advocacy, and sports medicine. He founded ELEVATE Foundation to turn student-led research and service into real-world impact for underserved communities. With experience in health science research, community engagement, and nonprofit leadership, Vihaan leads ELEVATE’s health advocacy initiatives while also helping drive its sports access and education programs."
              mission="I believe students can lead meaningful change when research, service, and education come together. My goal is to make health information accessible and to use sports as a pathway to opportunity."
              achievements={[
                "Founder, ELEVATE Foundation",
                "Led Teen Vaping Awareness & Health Advocacy Initiative",
                "Collaborated with university researchers on youth substance-use data analysis",
                "Member, Wichita Mayor’s Youth Council",
                "100+ volunteer hours with Veterans Affairs",
                "State Championship varsity tennis player (3rd place – doubles)",
                "Certified Nursing Assistant (CNA)",
              ]}
              img={vihaanImg}
              flip={false}
            />

            {/* =================================================
                HITHA
            ================================================== */}

            <FounderProfile
              name="Hitha Ganganala"
              role="Co-Founder & Youth Program Director"
              schoolLine="High school sophomore at Wichita Collegiate School • Focus: public health research, nutrition equity, education access"
              bio="Hitha Ganganala is a high school sophomore at Wichita Collegiate School with a passion for public health research, nutrition equity, and education access. As co-founder of ELEVATE Foundation, she leads initiatives focused on poverty, food access, and adolescent health. Hitha combines data-driven research with community service, tutoring, and sports outreach to address health disparities affecting low-income youth."
              mission="Health outcomes should not be determined by income or access. I want to create solutions that help families and students overcome systemic barriers."
              achievements={[
                "Co-Founder, ELEVATE Foundation",
                "Led research on poverty, food access, and adolescent obesity",
                "Data visualization and policy-oriented health research",
                "1st Place State Tennis Singles Champion",
                "100+ volunteer hours with Veterans Affairs",
                "Tutor for Building Blocks Foundation (India)",
              ]}
              img={hithaImg}
              flip={true}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ADVISORS
      ====================================================== */}

      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">

          {/* SECTION HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-teal-700">
              Guidance & Support
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Advisors & Leadership Support
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              ELEVATE’s youth leaders are supported by advisors who contribute
              experience across community partnerships, operations, outreach,
              technology, and communications.
            </p>
          </div>

          {/* ADVISOR CARDS */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ADVISORS.map((advisor) => (
              <AdvisorCard
                key={advisor.name}
                {...advisor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TEAM MESSAGE
      ====================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8 text-center md:p-12">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm ring-1 ring-teal-100">
              <Users className="h-7 w-7" />
            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-900">
              Built Through Youth Leadership
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600">
              Our model gives students the opportunity to identify challenges,
              create initiatives, and lead service while working with adults
              who provide guidance, experience, and community support.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}