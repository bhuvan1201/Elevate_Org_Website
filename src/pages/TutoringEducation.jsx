import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Play,
  Search,
  Youtube,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
    {children}
  </div>
);

const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

/* =========================================================
   EDUCATION VIDEO LIBRARY

   Add new videos here as you upload them.

   subject:
   Basic Math
   Algebra
   English
   Study Skills
   Science
   etc.
========================================================= */

const VIDEOS = [
  /* ===================== BASIC MATH ===================== */

  {
    id: 1,
    title: "Numbers & Place Value | Math Basics Made Easy",
    subject: "Basic Math",
    topic: "Place Value",
    level: "Beginner",
    duration: "3:50",
    description:
      "Learn how numbers are organized by place value and how to understand ones, tens, hundreds, and larger values.",
    url: "https://www.youtube.com/watch?v=IanLVwmrg3s",
    featured: true,
  },

  {
    id: 2,
    title: "Addition Basics | Learn How to Add Numbers",
    subject: "Basic Math",
    topic: "Addition",
    level: "Beginner",
    duration: "8:13",
    description:
      "A step-by-step introduction to addition with simple examples and guided practice.",
    url: "https://www.youtube.com/watch?v=4V5FoGtQiEE",
  },

  {
    id: 3,
    title: "Multiplication Basics | Learn How to Multiply",
    subject: "Basic Math",
    topic: "Multiplication",
    level: "Beginner",
    duration: "8:36",
    description:
      "Learn the foundations of multiplication and how repeated addition connects to multiplication problems.",
    url: "https://www.youtube.com/watch?v=yzLWNyXwLao",
  },

  {
    id: 4,
    title: "Division Basics | Learn How to Divide",
    subject: "Basic Math",
    topic: "Division",
    level: "Beginner",
    duration: "8:47",
    description:
      "Understand the basics of division and how numbers can be separated into equal groups.",
    url: "https://www.youtube.com/watch?v=3Q_Zz0e9EhI",
  },

  {
    id: 5,
    title: "Subtraction Basics | Learn How to Subtract Numbers",
    subject: "Basic Math",
    topic: "Subtraction",
    level: "Beginner",
    duration: "5:59",
    description:
      "Learn subtraction through clear examples, including basic subtraction and regrouping.",
    url: "https://www.youtube.com/watch?v=9Ps9nPO0uf8",
  },

  /* ======================== ALGEBRA ======================== */

  {
    id: 6,
    title: "Introduction to Algebra | Algebra for Beginners",
    subject: "Algebra",
    topic: "Introduction",
    level: "Beginner",
    duration: "3:25",
    description:
      "An introduction to algebra, variables, constants, and the basic ideas students need before solving equations.",
    url: "https://www.youtube.com/watch?v=pS7JMQM08aE",
  },

  {
    id: 7,
    title: "Algebraic Expressions & Terms | Understand the Basics",
    subject: "Algebra",
    topic: "Expressions",
    level: "Beginner",
    duration: "2:34",
    description:
      "Learn how algebraic expressions are built and understand terms, variables, coefficients, and constants.",
    url: "https://www.youtube.com/watch?v=kpaeYZUsGWU",
  },

  {
    id: 8,
    title: "Evaluating Expressions | Algebra Step by Step",
    subject: "Algebra",
    topic: "Evaluating Expressions",
    level: "Beginner",
    duration: "2:07",
    description:
      "Practice substituting values into algebraic expressions and evaluating them step by step.",
    url: "https://www.youtube.com/watch?v=x-Awv9Y4H6A",
  },

  {
    id: 9,
    title: "Combining Like Terms | Algebra Basics Made Easy",
    subject: "Algebra",
    topic: "Like Terms",
    level: "Beginner",
    duration: "1:56",
    description:
      "Learn how to identify and combine like terms to simplify algebraic expressions.",
    url: "https://www.youtube.com/watch?v=kBdQqFrYhfM",
  },

  {
    id: 10,
    title: "Distributive Property | Algebra Basics Made Easy",
    subject: "Algebra",
    topic: "Distributive Property",
    level: "Beginner",
    duration: "2:17",
    description:
      "Understand how the distributive property works and use it to simplify algebraic expressions.",
    url: "https://www.youtube.com/watch?v=j01oiLdxmnU&t=6s",
  },
];

/* =========================================================
   YOUTUBE HELPERS
========================================================= */

function getYouTubeId(url) {
  if (!url || url.includes("PASTE_")) return null;

  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1);
    }

    if (parsed.pathname.includes("/shorts/")) {
      return parsed.pathname.split("/shorts/")[1].split("/")[0];
    }

    if (parsed.pathname.includes("/embed/")) {
      return parsed.pathname.split("/embed/")[1].split("/")[0];
    }

    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}

function getThumbnail(url) {
  const id = getYouTubeId(url);

  if (!id) return null;

  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

/* =========================================================
   VIDEO CARD
========================================================= */

function VideoCard({ video }) {
  const thumbnail = getThumbnail(video.url);
  const hasLink = Boolean(getYouTubeId(video.url));

  return (
    <Card className="group h-full overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`${video.title} thumbnail`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950">
            <Youtube className="h-14 w-14 text-white/70" />
          </div>
        )}

        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-teal-700 shadow-xl transition group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </div>
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-white">
          <Clock3 className="h-3.5 w-3.5" />
          {video.duration}
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 font-semibold text-teal-700">
            {video.subject}
          </span>

          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-semibold text-slate-700">
            {video.topic}
          </span>

          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">
            {video.level}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">
          {video.title}
        </h3>

        <p className="mt-3 leading-relaxed text-slate-600">
          {video.description}
        </p>

        {hasLink ? (
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-700 transition hover:text-teal-900"
          >
            Watch Lesson
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : (
          <p className="mt-5 text-sm font-semibold text-slate-400">
            Add YouTube URL
          </p>
        )}
      </CardContent>
    </Card>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function TutoringEducation() {
  const [searchTerm, setSearchTerm] = useState("");
  const [subject, setSubject] = useState("All");

  const subjects = useMemo(() => {
    return ["All", ...new Set(VIDEOS.map((video) => video.subject))];
  }, []);

  const filteredVideos = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return VIDEOS.filter((video) => {
      const matchesSubject =
        subject === "All" || video.subject === subject;

      const matchesSearch =
        !search ||
        video.title.toLowerCase().includes(search) ||
        video.description.toLowerCase().includes(search) ||
        video.subject.toLowerCase().includes(search) ||
        video.topic.toLowerCase().includes(search);

      return matchesSubject && matchesSearch;
    });
  }, [searchTerm, subject]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* HERO */}

      <section className="bg-gradient-to-r from-slate-100 to-slate-200 pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-teal-700">
              Learn
            </p>

            <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
              Tutoring &amp; Education
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Free student-created lessons in mathematics, algebra,
              English, study skills, and other academic subjects designed
              to make learning easier to understand.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#videos"
                className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
              >
                Explore Lessons
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/get-involved#volunteer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Volunteer as a Tutor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO LIBRARY */}

      <section id="videos" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-sm font-semibold text-teal-700">
            Learning Library
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Education Videos
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Browse step-by-step lessons in basic mathematics, algebra,
            and future subjects as our learning library continues to grow.
          </p>

          {/* SEARCH + FILTER */}

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                placeholder="Search lessons, topics, subjects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-bold text-slate-700">
                Subject
              </p>

              <div className="flex flex-wrap gap-2">
                {subjects.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSubject(item)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${subject === item
                      ? "border-teal-600 bg-teal-600 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-teal-400"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* LESSONS */}

          {filteredVideos.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <VideoCard video={video} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-12 text-center">
              <Search className="mx-auto h-10 w-10 text-slate-400" />

              <h3 className="mt-4 text-xl font-bold">
                No lessons found
              </h3>

              <p className="mt-2 text-slate-600">
                Try another search or choose a different subject.
              </p>
            </div>
          )}

          {/* YOUTUBE CTA */}

          <div className="mt-16 rounded-3xl bg-slate-900 px-8 py-10 text-center text-white">
            <Youtube className="mx-auto h-12 w-12" />

            <h2 className="mt-4 text-2xl font-bold">
              More lessons coming soon
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Follow Elevate on YouTube for new mathematics, algebra,
              tutoring, and student-created educational videos.
            </p>

            <a
              href="https://www.youtube.com/@elevateglobal_org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Visit Our YouTube Channel
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}