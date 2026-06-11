import vihaanImg from "../assets/vihaan.jpeg";
import hithaImg from "../assets/hitha.jpeg";

// ✅ add resume PDFs
import vihaanResume from "../assets/resumes/Vihaan-Resume.pdf";
import hithaResume from "../assets/resumes/Hitha-Resume.pdf";

import { ExternalLink, FileText } from "lucide-react";

function FounderProfile({
  name,
  role,
  schoolLine,
  bio,
  mission,
  achievements,
  img,
  resumePdf,          // ✅ new
  resumeLabel = "View Resume (PDF)", // ✅ optional
  flip = false,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div
        className={
          "grid md:grid-cols-2 gap-0 " +
          (flip ? "md:[&>*:first-child]:order-2" : "")
        }
      >
        {/* Image */}
        <div className="relative bg-slate-50 flex items-center justify-center py-10">
          <img
            src={img}
            alt={name}
            className="w-[80%] max-w-[600px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800 border border-teal-100">
              Cofounder
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 border border-slate-200">
              President
            </span>
          </div>

          <h3 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">
            {name}
          </h3>
          <p className="mt-1 text-sm md:text-base font-medium text-teal-700">
            {role}
          </p>
          <p className="mt-2 text-slate-600">{schoolLine}</p>

          {/* ✅ Resume button */}
          {resumePdf ? (
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                <FileText className="h-4 w-4" />
                {resumeLabel}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ) : null}

          <div className="mt-6 space-y-6">
            {/* Bio */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900">Short Bio</h4>
              <p className="mt-2 text-slate-600 leading-relaxed">{bio}</p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <h4 className="text-lg font-semibold text-slate-900">
                Personal Mission
              </h4>
              <p className="mt-2 text-slate-700 italic leading-relaxed">
                “{mission}”
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900">
                Key Achievements
              </h4>
              <ul className="mt-3 space-y-2 text-slate-600">
                {achievements.map((a, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-teal-600 flex-shrink-0" />
                    <span className="leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Optional buttons (keep if you want) */}
          {/*
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-2xl bg-teal-600 px-5 py-2.5 text-white hover:bg-teal-700 transition" href="#contact">
              Reach out
            </a>
            <a className="rounded-2xl border border-slate-300 px-5 py-2.5 text-slate-800 hover:bg-slate-50 transition" href="/about/story">
              Our Story
            </a>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}

export default function MeetTheTeam() {
  return (
    <main className="min-h-screen bg-white">
      {/* keep your existing header/nav wrapper */}

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Meet the Team
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            The students behind ELEVATE - leading with research, service, and
            education to create real community impact.
          </p>

          <div className="mt-10 space-y-8">
            {/* Vihaan */}
            <FounderProfile
              name="Vihaan Ganganala"
              role="Cofounder & President"
              schoolLine="High school sophomore at Wichita Collegiate School • Interests: public health, youth advocacy, sports medicine"
              bio="Vihaan Ganganala is a high school sophomore at Wichita Collegiate School with a strong interest in public health, youth advocacy, and sports medicine. He founded Elevate Foundation to turn student-led research and service into real-world impact for underserved communities. With experience in health science research, community engagement, and nonprofit leadership, Vihaan leads Elevate’s health advocacy initiatives while also driving its sports access and education programs."
              mission="I believe students can lead meaningful change when research, service, and education come together. My goal is to make health information accessible and to use sports as a pathway to opportunity."
              achievements={[
                "Founder & President, Elevate Foundation",
                "Led Teen Vaping Awareness & Health Advocacy Initiative",
                "Collaborated with university researchers on youth substance-use data analysis",
                "Member, Wichita Mayor’s Youth Council",
                "100+ volunteer hours with Veterans Affairs",
                "State Championship varsity tennis player (3rd place – doubles)",
                "Certified Nursing Assistant (CNA)",
              ]}
              img={vihaanImg}
              //resumePdf={vihaanResume} // ✅ add
              //resumeLabel="View Vihaan’s Resume (PDF)"
              flip={false}
            />

            {/* Hitha */}
            <FounderProfile
              name="Hitha Ganganala"
              role="Cofounder & President"
              schoolLine="High school freshman at Wichita Collegiate School • Focus: public health research, nutrition equity, education access"
              bio="Hitha Ganganala is a high school freshman at Wichita Collegiate School with a passion for public health research, nutrition equity, and education access. As cofounder of Elevate Foundation, she leads initiatives focused on poverty, food access, and adolescent health. Hitha combines data-driven research with community service, tutoring, and sports outreach to address health disparities affecting low-income youth."
              mission="Health outcomes should not be determined by income or access. I want to create solutions that help families and students overcome systemic barriers."
              achievements={[
                "Cofounder & President, Elevate Foundation",
                "Led research on poverty, food access, and adolescent obesity",
                "Data visualization and policy-oriented health research",
                "1st Place State Tennis Singles Champion",
                "100+ volunteer hours with Veterans Affairs",
                "Tutor for Building Blocks Foundation (India)",
              ]}
              img={hithaImg}
              //resumePdf={hithaResume} // ✅ add
              //resumeLabel="View Hitha’s Resume (PDF)"
              flip={true}
            />
          </div>
        </div>
      </section>

      {/* keep the rest of your page sections below */}
    </main>
  );
}
