import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import bbFlyer from "../assets/bb-flyer.pdf";

import bb1 from "../assets/partners/building-blocks/bb1.jpeg";
import bb2 from "../assets/partners/building-blocks/bb2.jpeg";

/* ---------- UI helpers ---------- */
const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
    {children}
  </div>
);

const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

function BulletList({ items }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-teal-600 shrink-0" />
          <span className="text-slate-700">{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- HERO BACKGROUND SLIDER ---------- */
function HeroBackgroundSlider({ images, speed = 40 }) {
  const track = [...images, ...images];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 flex w-max"
        style={{ animation: `bb-hero-slide ${speed}s linear infinite` }}
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

      {/* overlay: reduce opacity values to make image more visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100/45 via-slate-100/25 to-slate-200/40" />

      {/* top/bottom fade */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-100 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-200 to-transparent" />

      <style>{`
        @keyframes bb-hero-slide {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}

/* ---------- STATS + VIDEO SECTION ---------- */
function Stat({ value, label }) {
  return (
    <div className="py-8">
      <div className="text-5xl md:text-6xl font-light tracking-tight text-slate-900">
        {value}
      </div>
      <div className="mt-2 h-[2px] w-16 bg-teal-600/70" />
      <div className="mt-3 text-xs tracking-[0.22em] text-slate-600 uppercase">
        {label}
      </div>
    </div>
  );
}

function StatsAndVideo({ embedUrl }) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: big stats */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Breaking the Poverty Cycle Through Education
          </h2>

          <div className="mt-6 divide-y divide-slate-200">
            <Stat value="1242" label="Students" />
            <Stat value="11" label="Schools" />
            <Stat value="1300" label="Graduates" />
          </div>
        </div>

        {/* RIGHT: text + video */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            We uplift children from underprivileged communities by providing quality
            education and aiming to level the playing field.
          </p>

          <p className="mt-4 text-slate-600">
            At our learning centers, we provide a structured learning environment that
            nurtures growth, curiosity, creativity, and success.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-black">
            {/* 16:9 responsive video */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={embedUrl}
                title="Building Blocks Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */
export default function BuildingBlocksFoundation() {
  const images = [bb1, bb2];

  // Replace this with YOUR YouTube embed URL.
  // Example:
  // https://www.youtube.com/embed/VIDEO_ID
  const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/SxglA4_N1H4";

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
        <HeroBackgroundSlider images={images} speed={40} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-teal-700">Partner</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-800">
              Building Blocks Foundation
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              We provide free Math and English tutoring through weekly live tutoring
              and on-demand learning content.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/learn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Go to Learn Page <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="https://www.buildingblocksindia.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Visit Building Blocks Website ↗
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Request Tutoring Help
              </Link>

              <a
  href={bbFlyer}   // change to gfftFlyer on GFFT page
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl 
             border border-slate-300 bg-white text-slate-800 
             font-semibold hover:bg-slate-50 transition"
>
  View Flyer (PDF)
  <ExternalLink className="h-4 w-4" />
</a>

            </div>
          </motion.div>
        </div>
      </section>

      {/* TUTORING CARD (kept below hero) */}
      <section className="py-16 -mt-24 relative z-10">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-3xl shadow-xl">
              <CardContent className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-teal-700" />
                  <p className="font-semibold text-slate-800 text-xl">
                    Tutoring & Learning
                  </p>
                </div>

                <BulletList
                  items={[
                    "Weekly live tutoring (Building Blocks Foundation)",
                    "On-demand tutoring videos hosted on the site",
                  ]}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* NEW: stats + video block */}
      <StatsAndVideo embedUrl={YOUTUBE_EMBED_URL} />

      {/* LOWER SECTION */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardContent>
              <div className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-slate-700" />
                <h2 className="text-xl font-semibold">Subjects</h2>
              </div>
              <BulletList
                items={[
                  "Math fundamentals",
                  "English grammar and writing",
                  "Homework and concept reinforcement",
                ]}
              />
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-slate-700" />
                <h2 className="text-xl font-semibold">How to help</h2>
              </div>
              <BulletList
                items={[
                  "Volunteer as a tutor",
                  "Sponsor learning materials",
                  "Partner with schools to expand reach",
                ]}
              />
              <div className="mt-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition"
                >
                  Contact us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
