import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Search,
  Play,
  Youtube,
  Clock3,
  Sparkles,
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
   TRAINING LIBRARY

   To add a new video later, simply add another object here.

   type:
   "video" = regular YouTube video
   "short" = YouTube Short

   category examples:
   Cardio & Conditioning
   Upper Body Strength
   Lower Body Strength
   Core & Stability
   Warm-Up & Cool-Down
   Mobility & Flexibility
   Injury Prevention
   Tennis Workouts
   Tennis Skills
========================================================= */

const TRAINING_VIDEOS = [
  /* ===================== REGULAR VIDEOS ===================== */

  {
    id: 1,
    title: "Rowing Machine Workout | Improve Cardio & Full-Body Strength",
    type: "video",
    category: "Cardio & Conditioning",
    focus: "Full Body",
    difficulty: "Beginner",
    duration: "1:01",
    description:
      "A rowing-machine workout designed to build cardiovascular endurance while engaging the legs, core, back, and upper body.",
    url: "https://www.youtube.com/watch?v=Oe7dUstgAJk",
    featured: true,
  },

  {
    id: 2,
    title: "Resistance Band Front Raise | Build Strong Shoulders",
    type: "video",
    category: "Upper Body Strength",
    focus: "Shoulders",
    difficulty: "Beginner",
    duration: "1:21",
    description:
      "A resistance-band exercise focused on developing shoulder strength and upper-body control.",
    url: "https://www.youtube.com/watch?v=cOnAWbrr1dk",
  },

  {
    id: 3,
    title: "Glute Bridge | Strengthen Your Glutes & Core",
    type: "video",
    category: "Lower Body Strength",
    focus: "Glutes & Core",
    difficulty: "Beginner",
    duration: "0:35",
    description:
      "A simple bodyweight movement that develops glute strength, hip stability, and core control.",
    url: "https://www.youtube.com/watch?v=45z_A_P5yNc",
  },

  {
    id: 4,
    title: "Plank Knee Drives | Core Stability",
    type: "video",
    category: "Core & Stability",
    focus: "Core",
    difficulty: "Intermediate",
    duration: "0:18",
    description:
      "A dynamic core exercise that challenges stability, body control, and coordinated movement.",
    url: "https://www.youtube.com/watch?v=yu822384fB4",
  },

  {
    id: 5,
    title: "Overhead Cable Tricep Extension | Build Stronger Arms",
    type: "video",
    category: "Upper Body Strength",
    focus: "Triceps",
    difficulty: "Intermediate",
    duration: "0:16",
    description:
      "An overhead cable exercise focused on developing tricep strength and controlled arm extension.",
    url: "https://www.youtube.com/watch?v=bXhHp05ltoQ&list=PLKHETpXCwfvs&index=1",
  },

  {
    id: 6,
    title: "Cable Rope Bicep Curl | Build Stronger Arms",
    type: "video",
    category: "Upper Body Strength",
    focus: "Biceps",
    difficulty: "Beginner",
    duration: "0:16",
    description:
      "A cable-based bicep curl that helps build arm strength while encouraging controlled movement.",
    url: "https://www.youtube.com/watch?v=hVxAa4-oHN0&list=PLKHETpXCwfvs&index=2",
  },

  {
    id: 7,
    title: "Cable Tricep Pushdown | Build Stronger Arms",
    type: "video",
    category: "Upper Body Strength",
    focus: "Triceps",
    difficulty: "Beginner",
    duration: "0:17",
    description:
      "A tricep pushdown exercise for developing upper-arm strength and elbow-extension control.",
    url: "https://www.youtube.com/watch?v=Ca4HGwMNpMw&list=PLKHETpXCwfvs&index=3",
  },

  {
    id: 8,
    title: "Barbell Bicep Curl | Build Stronger Arms",
    type: "video",
    category: "Upper Body Strength",
    focus: "Biceps",
    difficulty: "Intermediate",
    duration: "0:14",
    description:
      "A barbell curl exercise focused on building bicep strength with controlled lifting technique.",
    url: "https://www.youtube.com/watch?v=JdjtU3gHYNc&list=PLKHETpXCwfvs&index=4",
  },



  /* ======================== SHORTS ======================== */

  {
    id: 9,
    title: "Ski Erg Workout | Improve Cardio & Conditioning",
    type: "short",
    category: "Cardio & Conditioning",
    focus: "Full Body",
    difficulty: "Intermediate",
    duration: "Short",
    description:
      "A full-body SkiErg exercise designed to develop cardiovascular fitness, endurance, and coordinated power.",
    url: "https://www.youtube.com/shorts/26f6RiPV8QU",
  },

  {
    id: 10,
    title: "Wide-Grip Lat Pulldown | Upper Body Strength for Athletes",
    type: "short",
    category: "Upper Body Strength",
    focus: "Back",
    difficulty: "Intermediate",
    duration: "Short",
    description:
      "Build back and upper-body strength with a wide-grip lat pulldown while maintaining controlled technique.",
    url: "https://www.youtube.com/shorts/ODqqc2ytH0U",
  },

  {
    id: 11,
    title: "Leg Press | Build Lower Body Strength",
    type: "short",
    category: "Lower Body Strength",
    focus: "Legs",
    difficulty: "Beginner",
    duration: "Short",
    description:
      "Develop lower-body strength through the quadriceps, hamstrings, and glutes using the leg press.",
    url: "https://www.youtube.com/shorts/cE_UB16gOJ4",
  },

  {
    id: 12,
    title: "Lat Pulldown | Build a Strong Back",
    type: "short",
    category: "Upper Body Strength",
    focus: "Back",
    difficulty: "Beginner",
    duration: "Short",
    description:
      "A controlled lat pulldown exercise for strengthening the back and supporting upper-body stability.",
    url: "https://www.youtube.com/shorts/BtR0j3jpXdo",
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
   DIFFICULTY BADGE
========================================================= */

function DifficultyBadge({ difficulty }) {
  const styles = {
    Beginner:
      "border-emerald-200 bg-emerald-50 text-emerald-700",

    Intermediate:
      "border-amber-200 bg-amber-50 text-amber-700",

    Advanced:
      "border-rose-200 bg-rose-50 text-rose-700",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${styles[difficulty] || styles.Beginner
        }`}
    >
      {difficulty}
    </span>
  );
}

/* =========================================================
   REGULAR VIDEO CARD
========================================================= */

function RegularVideoCard({ video }) {
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

        <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/25" />

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

        <div className="flex flex-wrap gap-2">

          <DifficultyBadge difficulty={video.difficulty} />

          <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            {video.category}
          </span>

          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            {video.focus}
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
            Watch Video
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
   SHORT CARD
========================================================= */

function ShortCard({ video }) {
  const thumbnail = getThumbnail(video.url);
  const hasLink = Boolean(getYouTubeId(video.url));

  return (
    <Card className="group h-full overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative aspect-[9/16] overflow-hidden bg-slate-900">

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
            <Youtube className="h-12 w-12 text-white/70" />
          </div>
        )}

        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/25" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-teal-700 shadow-xl transition group-hover:scale-110">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </div>
        </div>

        <div className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow">
          SHORT
        </div>

      </div>

      <CardContent className="p-5">

        <div className="flex flex-wrap gap-2">

          <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            {video.category}
          </span>

          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            {video.focus}
          </span>

        </div>

        <h3 className="mt-4 text-lg font-bold leading-snug">
          {video.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {video.description}
        </p>

        {hasLink ? (
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-teal-700"
          >
            Watch Short
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : (
          <p className="mt-4 text-sm font-semibold text-slate-400">
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

export default function Fitness() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contentType, setContentType] = useState("All");
  const [category, setCategory] = useState("All");

  /* Categories automatically update when you add new content */

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(TRAINING_VIDEOS.map((video) => video.category)),
    ];
  }, []);

  /* Filtering */

  const filteredVideos = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return TRAINING_VIDEOS.filter((video) => {
      const matchesType =
        contentType === "All" ||
        (contentType === "Videos" && video.type === "video") ||
        (contentType === "Shorts" && video.type === "short");

      const matchesCategory =
        category === "All" || video.category === category;

      const matchesSearch =
        !search ||
        video.title.toLowerCase().includes(search) ||
        video.description.toLowerCase().includes(search) ||
        video.category.toLowerCase().includes(search) ||
        video.focus.toLowerCase().includes(search);

      return matchesType && matchesCategory && matchesSearch;
    });

  }, [searchTerm, contentType, category]);

  const regularVideos = filteredVideos.filter(
    (video) => video.type === "video"
  );

  const shorts = filteredVideos.filter(
    (video) => video.type === "short"
  );

  const featuredVideo =
    TRAINING_VIDEOS.find((video) => video.featured) ||
    TRAINING_VIDEOS[0];

  const featuredThumbnail = getThumbnail(featuredVideo.url);
  const featuredHasLink = Boolean(getYouTubeId(featuredVideo.url));

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

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
              Sports &amp; Fitness
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Explore beginner-friendly workouts, strength exercises,
              conditioning routines, mobility resources, and tennis-focused
              training designed to help young athletes stay active and
              develop healthy movement habits.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <a
                href="#fitness-resources"
                className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
              >
                Explore Training
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Request a Video Topic
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          FEATURED TRAINING
      ===================================================== */}

      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-4">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-7 shadow-lg md:grid-cols-2 md:p-10"
          >

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-700">
                <Sparkles className="h-4 w-4" />
                Featured Training
              </div>

              <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                {featuredVideo.title}
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {featuredVideo.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <DifficultyBadge
                  difficulty={featuredVideo.difficulty}
                />

                <span className="rounded-full border border-white bg-white px-3 py-1 text-sm font-semibold text-slate-700">
                  {featuredVideo.category}
                </span>

                <span className="rounded-full border border-white bg-white px-3 py-1 text-sm font-semibold text-slate-700">
                  {featuredVideo.focus}
                </span>

              </div>

              {featuredHasLink && (
                <a
                  href={featuredVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
                >
                  Watch Featured Video
                  <Play className="h-4 w-4 fill-current" />
                </a>
              )}

            </div>

            <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-900 shadow-xl">

              {featuredThumbnail ? (
                <img
                  src={featuredThumbnail}
                  alt={featuredVideo.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <Youtube className="h-20 w-20 text-white/60" />
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center bg-black/20">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-teal-700 shadow-2xl">
                  <Play className="ml-1 h-9 w-9 fill-current" />
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          TRAINING LIBRARY
      ===================================================== */}

      <section
        id="fitness-resources"
        className="bg-slate-50 py-16"
      >

        <div className="mx-auto max-w-7xl px-4">

          <p className="text-sm font-semibold text-teal-700">
            Training Library
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Find the right training resource
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Browse full training videos and quick exercise demonstrations
            by workout type, body focus, or training goal.
          </p>

          {/* SEARCH + FILTERS */}

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="relative">

              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                placeholder="Search workouts, muscles, exercises..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />

            </div>

            {/* TYPE FILTER */}

            <div className="mt-6">

              <p className="mb-3 text-sm font-bold text-slate-700">
                Content Type
              </p>

              <div className="flex flex-wrap gap-2">

                {["All", "Videos", "Shorts"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setContentType(type)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${contentType === type
                      ? "border-teal-600 bg-teal-600 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-teal-400"
                      }`}
                  >
                    {type}
                  </button>
                ))}

              </div>

            </div>

            {/* CATEGORY FILTER */}

            <div className="mt-6">

              <p className="mb-3 text-sm font-bold text-slate-700">
                Training Category
              </p>

              <div className="flex flex-wrap gap-2">

                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${category === item
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-500"
                      }`}
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

          </div>

          {/* =================================================
              REGULAR VIDEOS
          ================================================= */}

          {regularVideos.length > 0 && (

            <div className="mt-14">

              <div className="flex items-end justify-between gap-4">

                <div>

                  <p className="text-sm font-semibold text-teal-700">
                    Full Training
                  </p>

                  <h2 className="mt-1 text-2xl font-bold md:text-3xl">
                    Training Videos
                  </h2>

                </div>

                <span className="text-sm font-semibold text-slate-500">
                  {regularVideos.length}{" "}
                  {regularVideos.length === 1 ? "video" : "videos"}
                </span>

              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {regularVideos.map((video) => (

                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <RegularVideoCard video={video} />
                  </motion.div>

                ))}

              </div>

            </div>

          )}

          {/* =================================================
              SHORTS
          ================================================= */}

          {shorts.length > 0 && (

            <div className="mt-16">

              <div>

                <p className="text-sm font-semibold text-teal-700">
                  Quick Training
                </p>

                <h2 className="mt-1 text-2xl font-bold md:text-3xl">
                  Exercise Shorts
                </h2>

                <p className="mt-2 max-w-2xl text-slate-600">
                  Quick demonstrations for individual exercises,
                  strength movements, and conditioning drills.
                </p>

              </div>

              <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {shorts.map((video) => (

                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <ShortCard video={video} />
                  </motion.div>

                ))}

              </div>

            </div>

          )}

          {/* NO RESULTS */}

          {filteredVideos.length === 0 && (

            <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-12 text-center">

              <Search className="mx-auto h-10 w-10 text-slate-400" />

              <h3 className="mt-4 text-xl font-bold">
                No training resources found
              </h3>

              <p className="mt-2 text-slate-600">
                Try another search or select a different category.
              </p>

            </div>

          )}

          {/* YOUTUBE CTA */}

          <div className="mt-16 rounded-3xl bg-slate-900 px-8 py-10 text-center text-white">

            <Youtube className="mx-auto h-12 w-12" />

            <h2 className="mt-4 text-2xl font-bold">
              More training coming soon
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Follow Elevate on YouTube for new workouts, tennis training,
              mobility exercises, fitness tips, and quick training videos.
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

          {/* SAFETY */}

          <div className="mt-10 flex gap-3 rounded-3xl border border-amber-200 bg-amber-50 p-6">

            <ShieldCheck className="h-6 w-6 shrink-0 text-amber-700" />

            <p className="text-amber-900">
              Fitness activities should be completed with appropriate
              parent, teacher, trainer, or coach supervision. Use proper
              technique and equipment, and stop an activity if you
              experience pain, dizziness, or unusual discomfort.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}