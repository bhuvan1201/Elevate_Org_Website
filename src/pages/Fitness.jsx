import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { Play } from "lucide-react";
import fractionsVideo from "../assets/videos/math1.mov"; 

const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>{children}</div>
);
const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

const VIDEOS = [
  {
    title: "Numbers and Place Value",
    description: "Understand place value concepts and number representation with clear examples and practice.",
    subject: "Math",
    grade: "Grade 1",
    tags: ["Place Value", "Whole Numbers", "Decimals"],
    src: fractionsVideo,
  },
];

export default function Fitness() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 to-slate-200 py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold text-teal-700">Learn</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-800">
              Learn with Elevate
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              Free, student-friendly Math and English tutoring videos designed for clarity and confidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#videos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Watch Videos <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Request Help
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-3xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-teal-700" />
                  <p className="font-semibold text-slate-800">Features</p>
                </div>

                <ul className="mt-5 space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-teal-600 shrink-0" />
                    Short, focused lessons
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-teal-600 shrink-0" />
                    Organized by subject and grade level
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-teal-600 shrink-0" />
                    Easy-to-search topics (coming soon)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-teal-600 shrink-0" />
                    Built by students, for students
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Tip: We’ll add search + filters when more videos are added.
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Tutoring Videos</h2>
          <p className="mt-2 text-slate-600">Choose a lesson and start learning.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {VIDEOS.map((v, idx) => (
              <Card key={idx} className="rounded-3xl overflow-hidden">
                <div className="aspect-video w-full bg-slate-100">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={v.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-teal-50 text-teal-800 border border-teal-100 px-2 py-1">
                      {v.subject}
                    </span>
                    <span className="rounded-full bg-slate-50 text-slate-700 border border-slate-200 px-2 py-1">
                      {v.grade}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-slate-600">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function VideoCard({ video }) {
  return (
    <div className="group rounded-2xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden">

      {/* Video Preview */}
      <div className="relative aspect-video bg-slate-100 overflow-hidden">

        <video
          src={video.src}
          className="w-full h-full object-cover"
          preload="metadata"
        />

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <Play className="h-6 w-6 text-slate-900" />
          </div>
        </div>

        {/* Subject Badge */}
        <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {video.subject}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-slate-900">
          {video.title}
        </h3>

        <p className="mt-1 text-sm text-slate-600">
          {video.description}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {video.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 flex justify-between items-center text-xs text-slate-500">
          <span>{video.grade}</span>
          <span className="text-teal-600 font-medium">Watch Now</span>
        </div>
      </div>
    </div>
  );
}

<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
  {VIDEOS.map((video, index) => (
    <VideoCard key={index} video={video} />
  ))}
</div>
