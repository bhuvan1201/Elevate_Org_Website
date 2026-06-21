import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Play } from "lucide-react";
import { Link } from "react-router-dom";

import mathVideo from "../assets/videos/math1.mov";

const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
    {children}
  </div>
);

const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

const VIDEOS = [
  {
    title: "Numbers and Place Value",
    description:
      "Understand place value concepts and number representation with clear examples and practice.",
    subject: "Math",
    grade: "Grade 1",
    tags: ["Place Value", "Whole Numbers", "Student-created lesson"],
    src: mathVideo,
  },
];

export default function TutoringEducation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="bg-gradient-to-r from-slate-100 to-slate-200 pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold text-teal-700">Learn</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
              Tutoring & Education
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Student-created lessons and learning support for English, Math,
              study skills, and lower-school education.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#videos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Watch Videos <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/get-involved#volunteer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Volunteer as a Tutor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="videos" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Videos</h2>
          <p className="mt-2 text-slate-600">
            English learning videos, lower-school support, study skills, and student-created lessons.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {VIDEOS.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function VideoCard({ video }) {
  return (
    <Card className="rounded-3xl overflow-hidden">
      <div className="aspect-video bg-slate-100">
        <video className="h-full w-full object-cover" controls preload="metadata" playsInline>
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-teal-50 text-teal-800 border border-teal-100 px-2 py-1">
            {video.subject}
          </span>
          <span className="rounded-full bg-slate-50 text-slate-700 border border-slate-200 px-2 py-1">
            {video.grade}
          </span>
        </div>

        <h3 className="mt-3 text-xl font-semibold">{video.title}</h3>
        <p className="mt-2 text-slate-600">{video.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <span key={tag} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-5 text-sm font-semibold text-teal-700">
          Take Action: Volunteer, share this resource, start a campaign, or contact ELEVATE.
        </p>
      </CardContent>
    </Card>
  );
}