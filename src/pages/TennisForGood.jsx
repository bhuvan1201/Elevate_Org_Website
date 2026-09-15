import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    ArrowRight,
    HeartHandshake,
    Recycle,
    Users,
    Globe2,
    CalendarDays,
    Clock3,
    MapPin,
    CheckCircle2,
    Sparkles,
    Target,
    Trophy,
    ChevronLeft,
    ChevronRight,
    Play,
    Image as ImageIcon,
} from "lucide-react";

/* =========================================================
   EXISTING TENNIS FOR GOOD IMAGES
========================================================= */

import gfft1 from "../assets/partners/gfft/optimized/gfft1.webp";
import gfft2 from "../assets/partners/gfft/optimized/gfft2.webp";
import gfft3 from "../assets/partners/gfft/optimized/gfft3.webp";
import gfft4 from "../assets/partners/gfft/optimized/gfft4.webp";
import gfft5 from "../assets/partners/gfft/optimized/gfft5.webp";
import gfft6 from "../assets/partners/gfft/optimized/gfft6.webp";
import gfft7 from "../assets/partners/gfft/optimized/gfft7.webp";
import gfft8 from "../assets/partners/gfft/optimized/gfft8.webp";
import gfft9 from "../assets/partners/gfft/optimized/gfft9.webp";
import gfft10 from "../assets/partners/gfft/optimized/gfft10.webp";
import gfft11 from "../assets/partners/gfft/optimized/gfft11.webp";
import gfft12 from "../assets/partners/gfft/optimized/gfft12.webp";
import gfft13 from "../assets/partners/gfft/optimized/gfft13.webp";
import gfft14 from "../assets/partners/gfft/optimized/gfft14.webp";
import gfft15 from "../assets/partners/gfft/optimized/gfft15.webp";
import gfft16 from "../assets/partners/gfft/optimized/gfft16.webp";
import gfft17 from "../assets/partners/gfft/optimized/gfft17.webp";
import gfft18 from "../assets/partners/gfft/optimized/gfft18.webp";
import gfft19 from "../assets/partners/gfft/optimized/gfft19.webp";
import gfft20 from "../assets/partners/gfft/optimized/gfft20.webp";
import gfft21 from "../assets/partners/gfft/optimized/gfft21.webp";
import gfft22 from "../assets/partners/gfft/optimized/gfft22.webp";
import gfft23 from "../assets/partners/gfft/optimized/gfft23.webp";

/* =========================================================
   RALLY FOR CHANGE MEDIA
   12 images + 4 short videos
========================================================= */

import rally1 from "../assets/partners/gfft/optimized/gfftevent1.webp";
import rally2 from "../assets/partners/gfft/optimized/gfftevent2.webp";
import rally3 from "../assets/partners/gfft/optimized/gfftevent3.webp";
import rally4 from "../assets/partners/gfft/optimized/gfftevent4.webp";
import rally5 from "../assets/partners/gfft/optimized/gfftevent5.webp";
import rally6 from "../assets/partners/gfft/optimized/gfftevent6.webp";
import rally7 from "../assets/partners/gfft/optimized/gfftevent7.webp";
import rally8 from "../assets/partners/gfft/optimized/gfftevent8.webp";
import rally9 from "../assets/partners/gfft/optimized/gfftevent9.webp";
import rally10 from "../assets/partners/gfft/optimized/gfftevent10.webp";
import rally11 from "../assets/partners/gfft/optimized/gfftevent11.webp";
import rally12 from "../assets/partners/gfft/optimized/gfftevent12.webp";

import rallyVideo1 from "../assets/partners/gfft/optimized/gfftevent1.mp4";
import rallyVideo2 from "../assets/partners/gfft/optimized/gfftevent2.mp4";
import rallyVideo3 from "../assets/partners/gfft/optimized/gfftevent3.mp4";
import rallyVideo4 from "../assets/partners/gfft/optimized/gfftevent4.mp4";

/* =========================================================
   FLYER
========================================================= */

import rallyFlyer from "../assets/events/rally-for-change.jpeg";

/* =========================================================
   YOUTUBE VIDEO

   REPLACE THIS WITH YOUR ACTUAL YOUTUBE URL
========================================================= */

const TENNIS_FOR_GOOD_VIDEO_URL =
    "https://www.youtube.com/shorts/skytpalPKoY";

function getYouTubeId(url) {
    if (!url) return "";

    const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^?&/]+)/
    );

    return match ? match[1] : "";
}

/* =========================================================
   CARD COMPONENTS
========================================================= */

const Card = ({ className = "", children }) => (
    <div
        className={
            "rounded-2xl border border-slate-200 bg-white " + className
        }
    >
        {children}
    </div>
);

const CardContent = ({ className = "", children }) => (
    <div className={"p-6 " + className}>
        {children}
    </div>
);

function BulletList({ items }) {
    return (
        <ul className="mt-3 space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" />

                    <span className="text-slate-700">
                        {item}
                    </span>
                </li>
            ))}
        </ul>
    );
}

/* =========================================================
   ORIGINAL TENNIS FOR GOOD HERO SLIDER
========================================================= */

function MediaSlider({ slides }) {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIdx((current) => (current + 1) % slides.length);
        }, 4000);

        return () => clearTimeout(timer);
    }, [idx, slides.length]);

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

            <div className="relative aspect-[16/10] bg-black">

                <img
                    key={slides[idx].src}
                    src={slides[idx].src}
                    alt={slides[idx].label}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full bg-black object-contain"
                />

                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow">
                    {slides[idx].label}
                </div>

            </div>

            <div className="flex justify-center gap-2 bg-white py-3">

                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIdx(i)}
                        className={
                            "h-2.5 w-2.5 rounded-full transition " +
                            (i === idx ? "bg-teal-600" : "bg-slate-300")
                        }
                        type="button"
                        aria-label={`Tennis media ${i + 1}`}
                    />
                ))}

            </div>

        </div>
    );
}

/* =========================================================
   RALLY FOR CHANGE MEDIA
========================================================= */

const RALLY_MEDIA = [
    {
        type: "image",
        src: rally1,
        label: "Rally for Change",
    },
    {
        type: "video",
        src: rallyVideo1,
        label: "Rally for Change",
    },
    {
        type: "image",
        src: rally2,
        label: "Rally for Change",
    },
    {
        type: "image",
        src: rally3,
        label: "Rally for Change",
    },
    {
        type: "video",
        src: rallyVideo2,
        label: "Rally for Change",
    },
    {
        type: "image",
        src: rally4,
        label: "Rally for Change",
    },
    {
        type: "image",
        src: rally5,
        label: "Rally for Change",
    },
    {
        type: "image",
        src: rally6,
        label: "Rally for Change",
    },
    {
        type: "video",
        src: rallyVideo3,
        label: "Rally for Change",
    },
    {
        type: "image",
        src: rally7,
        label: "Rally for Change",
    },
    {
        type: "image",
        src: rally8,
        label: "Rally for Change",
    },
    {
        type: "image",
        src: rally9,
        label: "Rally for Change",
    },
    {
        type: "video",
        src: rallyVideo4,
        label: "Rally for Change",
    },
    {
        type: "image",
        src: rally10,
        label: "Rally for Change",
    },
    {
        type: "image",
        src: rally11,
        label: "Rally for Change",
    },
    {
        type: "image",
        src: rally12,
        label: "Rally for Change",
    },
];

/* =========================================================
   RALLY MEDIA SLIDER
========================================================= */

function RallyMediaSlider() {
    const [index, setIndex] = useState(0);

    const current = RALLY_MEDIA[index];

    const nextSlide = () => {
        setIndex((currentIndex) =>
            (currentIndex + 1) % RALLY_MEDIA.length
        );
    };

    const previousSlide = () => {
        setIndex((currentIndex) =>
            currentIndex === 0
                ? RALLY_MEDIA.length - 1
                : currentIndex - 1
        );
    };

    /*
      Images automatically move after 4 seconds.
  
      Videos are allowed to play until they finish.
      The video's onEnded handler then moves to the
      next item.
    */
    useEffect(() => {
        if (current.type !== "image") {
            return;
        }

        const timer = setTimeout(() => {
            nextSlide();
        }, 4000);

        return () => clearTimeout(timer);
    }, [index, current.type]);

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

            {/* MAIN MEDIA */}
            <div className="relative aspect-[16/9] overflow-hidden bg-black">

                {current.type === "image" ? (
                    <img
                        key={current.src}
                        src={current.src}
                        alt={`Rally for Change ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain"
                    />
                ) : (
                    <video
                        key={current.src}
                        src={current.src}
                        autoPlay
                        muted
                        playsInline
                        preload="metadata"
                        onEnded={nextSlide}
                        className="h-full w-full object-contain"
                    />
                )}

                {/* DARK GRADIENT */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />


                {/* PREVIOUS */}
                <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous Rally for Change media"
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>


                {/* NEXT */}
                <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next Rally for Change media"
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>


                {/* TYPE BADGE */}
                <div className="absolute left-5 top-5">

                    <div className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-md">

                        {current.type === "video" ? (
                            <>
                                <Play className="h-4 w-4 fill-current" />
                                Video
                            </>
                        ) : (
                            <>
                                <ImageIcon className="h-4 w-4" />
                                Photo
                            </>
                        )}

                    </div>

                </div>


                {/* BOTTOM INFO */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">

                    <div>
                        <p className="font-bold text-white">
                            Rally for Change
                        </p>

                        <p className="mt-1 text-sm text-white/80">
                            Tennis • Teamwork • Community
                        </p>
                    </div>

                    <div className="rounded-full bg-black/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                        {index + 1} / {RALLY_MEDIA.length}
                    </div>

                </div>

            </div>


            {/* SLIDER FOOTER */}
            <div className="flex flex-col gap-4 border-t border-slate-100 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-2">

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
                        <ImageIcon className="h-3.5 w-3.5" />
                        12 Photos
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                        <Play className="h-3.5 w-3.5" />
                        4 Videos
                    </span>

                </div>


                {/* SMALL PROGRESS INDICATOR */}
                <div className="flex gap-1">

                    {RALLY_MEDIA.map((_, mediaIndex) => (
                        <button
                            key={mediaIndex}
                            type="button"
                            aria-label={`Go to Rally media ${mediaIndex + 1}`}
                            onClick={() => setIndex(mediaIndex)}
                            className={
                                "h-1.5 rounded-full transition-all " +
                                (mediaIndex === index
                                    ? "w-6 bg-teal-600"
                                    : "w-2 bg-slate-300 hover:bg-slate-400")
                            }
                        />
                    ))}

                </div>

            </div>

        </div>
    );
}

/* =========================================================
   RALLY FOR CHANGE EVENT
========================================================= */

function RallyForChangeEvent() {
    return (
        <section className="bg-gradient-to-br from-teal-50 via-white to-yellow-50 py-16">

            <div className="mx-auto max-w-7xl px-4">

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden rounded-3xl border border-teal-200 bg-white shadow-xl"
                >

                    <div className="grid items-stretch lg:grid-cols-[1.1fr_0.9fr]">


                        {/* EVENT INFORMATION */}
                        <div className="p-7 md:p-10 lg:p-12">

                            <span className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-100 px-4 py-2 text-sm font-bold uppercase tracking-wide text-yellow-800">
                                🎾 Upcoming Tennis for Good Event
                            </span>


                            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                                Rally for Change
                            </h2>


                            <p className="mt-3 text-2xl font-bold text-teal-700">
                                Free Tennis Event for Kids
                            </p>


                            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                                Rally for Change brings young players and youth volunteers
                                together for tennis instruction, confidence building,
                                community service, prizes, racquet giveaways, drinks,
                                and snacks.
                            </p>


                            {/* EVENT DETAILS */}
                            <div className="mt-7 grid gap-4 sm:grid-cols-2">


                                {/* DATE */}
                                <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">

                                    <CalendarDays className="mt-0.5 h-6 w-6 shrink-0 text-teal-700" />

                                    <div>

                                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                                            Date
                                        </p>

                                        <p className="mt-1 font-bold text-slate-900">
                                            Saturday, September 26, 2026
                                        </p>

                                    </div>

                                </div>


                                {/* TIME */}
                                <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">

                                    <Clock3 className="mt-0.5 h-6 w-6 shrink-0 text-teal-700" />

                                    <div>

                                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                                            Sessions
                                        </p>

                                        <p className="mt-1 font-bold text-slate-900">
                                            5:00–6:00 PM
                                        </p>

                                        <p className="font-bold text-slate-900">
                                            6:00–7:00 PM
                                        </p>

                                    </div>

                                </div>


                                {/* LOCATION */}
                                <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">

                                    <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-teal-700" />

                                    <div>

                                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                                            Location
                                        </p>

                                        <p className="mt-1 font-bold text-slate-900">
                                            Eastview Park Tennis Court
                                        </p>

                                        <p className="text-sm text-slate-600">
                                            Wichita, Kansas
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* EVENT HIGHLIGHTS */}
                            <div className="mt-7">

                                <h3 className="text-lg font-bold text-slate-900">
                                    Event highlights
                                </h3>


                                <ul className="mt-4 grid gap-3 sm:grid-cols-2">

                                    {[
                                        "Tennis lessons led by junior players",
                                        "Open to children in Grades 1–12",
                                        "Free racquet giveaways",
                                        "Prizes, drinks, and snacks",
                                    ].map((item) => (

                                        <li
                                            key={item}
                                            className="flex items-start gap-2"
                                        >

                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />

                                            <span className="text-slate-700">
                                                {item}
                                            </span>

                                        </li>

                                    ))}

                                </ul>

                            </div>


                            {/* BUTTONS */}
                            <div className="mt-8 flex flex-wrap gap-4">

                                <Link
                                    to="/rally-for-change"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-7 py-4 text-lg font-bold text-white transition hover:bg-teal-700"
                                >
                                    Register for the Event
                                    <ArrowRight className="h-5 w-5" />
                                </Link>


                                <a
                                    href={rallyFlyer}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-7 py-4 text-lg font-bold text-slate-800 transition hover:bg-slate-50"
                                >
                                    View Full Flyer
                                </a>

                            </div>

                        </div>


                        {/* FLYER */}
                        <div className="flex items-center justify-center border-t border-slate-200 bg-slate-100 p-5 md:p-8 lg:border-l lg:border-t-0">

                            <a
                                href={rallyFlyer}
                                target="_blank"
                                rel="noreferrer"
                                className="group block"
                                aria-label="Open the Rally for Change flyer"
                            >

                                <img
                                    src={rallyFlyer}
                                    alt="Rally for Change free tennis event flyer"
                                    className="max-h-[720px] w-full rounded-2xl object-contain shadow-xl transition duration-300 group-hover:scale-[1.01]"
                                />

                            </a>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

/* =========================================================
   IMPACT STATS
========================================================= */

const IMPACT_STATS = [
    {
        value: "20+",
        label: "Kids Participated",
        icon: Users,
    },
    {
        value: "1",
        label: "Community Tennis Event",
        icon: Trophy,
    },
    {
        value: "Youth-Led",
        label: "Initiative",
        icon: Sparkles,
    },
    {
        value: "Sports + Service",
        label: "Focus",
        icon: HeartHandshake,
    },
    {
        value: "100%",
        label: "Focused on Building Confidence & Opportunity",
        icon: Target,
    },
];

function ImpactCard({ stat, index }) {
    const Icon = stat.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
            }}
            className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
        >

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-100 bg-teal-50 text-teal-700">

                <Icon className="h-7 w-7" />

            </div>


            <p className="mt-5 text-2xl font-extrabold leading-tight text-teal-700">
                {stat.value}
            </p>


            <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700">
                {stat.label}
            </p>

        </motion.div>
    );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function TennisForGood() {
    const tennisVideoId = getYouTubeId(
        TENNIS_FOR_GOOD_VIDEO_URL
    );

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">


            {/* =====================================================
          HERO
      ====================================================== */}

            <section className="bg-gradient-to-r from-slate-100 to-slate-200 pb-16 pt-40">

                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">


                    {/* HERO TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >

                        <p className="text-sm font-semibold text-teal-700">
                            Project
                        </p>


                        <h1 className="mt-2 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                            Tennis for Good: Giving Gear a Second Life
                        </h1>


                        <p className="mt-4 max-w-prose text-lg leading-relaxed text-slate-600">
                            Tennis can open doors, but equipment costs can make the sport
                            difficult to access. Through Tennis for Good, ELEVATE collects
                            gently used rackets, shoes, clothes, strings, bags, and other
                            tennis gear from players, families, and tennis academies. The
                            gear is redistributed through nonprofit partners to support
                            youth who may not otherwise have access to the sport.
                        </p>


                        <div className="mt-6 flex flex-wrap gap-3">

                            <a
                                href="/donate"
                                className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
                            >
                                Donate Gear

                                <ArrowRight className="h-4 w-4" />
                            </a>


                            <Link
                                to="/partners/genesis-foundation"
                                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                            >
                                GFFT Partnership
                            </Link>

                        </div>

                    </motion.div>


                    {/* HERO IMAGE SLIDER */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >

                        <MediaSlider
                            slides={[
                                { src: gfft1, label: "Tennis for Good" },
                                { src: gfft2, label: "Tennis for Good" },
                                { src: gfft3, label: "Tennis for Good" },
                                { src: gfft4, label: "Tennis for Good" },
                                { src: gfft5, label: "Tennis for Good" },
                                { src: gfft6, label: "Tennis for Good" },
                                { src: gfft7, label: "Tennis for Good" },
                                { src: gfft8, label: "Tennis for Good" },
                                { src: gfft9, label: "Tennis for Good" },
                                { src: gfft10, label: "Tennis for Good" },
                                { src: gfft11, label: "Tennis for Good" },
                                { src: gfft12, label: "Tennis for Good" },
                                { src: gfft13, label: "Tennis for Good" },
                                { src: gfft14, label: "Tennis for Good" },
                                { src: gfft15, label: "Tennis for Good" },
                                { src: gfft16, label: "Tennis for Good" },
                                { src: gfft17, label: "Tennis for Good" },
                                { src: gfft18, label: "Tennis for Good" },
                                { src: gfft19, label: "Tennis for Good" },
                                { src: gfft20, label: "Tennis for Good" },
                                { src: gfft21, label: "Tennis for Good" },
                                { src: gfft22, label: "Tennis for Good" },
                                { src: gfft23, label: "Tennis for Good" },
                            ]}
                        />

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
          RALLY FOR CHANGE DETAILS
      ====================================================== */}

            <RallyForChangeEvent />


            {/* =====================================================
          RALLY FOR CHANGE MEDIA SHOWCASE
      ====================================================== */}

            <section className="bg-slate-50 py-20">

                <div className="mx-auto max-w-6xl px-4">


                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >

                        <p className="text-sm font-bold uppercase tracking-wider text-teal-700">
                            Event Gallery
                        </p>


                        <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                            Rally for Change in Action
                        </h2>


                        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
                            See moments from Rally for Change as young players come
                            together through tennis, teamwork, learning, confidence,
                            and community connection.
                        </p>

                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                        className="mt-10"
                    >

                        <RallyMediaSlider />

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
          EVENT IMPACT
      ====================================================== */}

            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-4">


                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-4xl text-center"
                    >

                        <p className="text-sm font-bold uppercase tracking-wider text-teal-700">
                            Event Impact
                        </p>


                        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                            Tennis for Good - Making an Impact on and off the Court
                        </h2>


                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                            Our Tennis for Good event brought together 20+ young
                            participants for a day of tennis, learning, teamwork, and
                            community connection. The event created an opportunity for kids
                            of different skill levels to get on the court, build confidence,
                            and experience the positive impact of sports in a welcoming
                            environment.
                        </p>

                    </motion.div>


                    {/* IMPACT AT A GLANCE */}
                    <div className="mt-16">

                        <div className="text-center">

                            <p className="text-sm font-bold uppercase tracking-wider text-teal-700">
                                Our Impact
                            </p>


                            <h3 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                                Impact at a Glance
                            </h3>

                        </div>


                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

                            {IMPACT_STATS.map((stat, index) => (
                                <ImpactCard
                                    key={stat.label}
                                    stat={stat}
                                    index={index}
                                />
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          MAIN YOUTUBE VIDEO
      ====================================================== */}

            <section className="bg-slate-50 py-20">

                <div className="mx-auto max-w-6xl px-4">


                    <div className="text-center">

                        <p className="text-sm font-semibold text-teal-700">
                            Event Highlights
                        </p>


                        <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                            See Tennis for Good in Action
                        </h2>


                        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
                            Watch highlights from our Tennis for Good event as young
                            participants learned new skills, built confidence, worked
                            together, and experienced the positive impact of sports
                            and community.
                        </p>

                    </div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.5 }}
                        className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-xl"
                    >

                        {tennisVideoId ? (

                            <div className="aspect-video w-full">

                                <iframe
                                    className="h-full w-full"
                                    src={`https://www.youtube.com/embed/${tennisVideoId}`}
                                    title="Tennis for Good Event Highlights"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />

                            </div>

                        ) : (

                            <div className="flex aspect-video items-center justify-center p-8 text-center text-white">

                                <p>
                                    Add the Tennis for Good YouTube URL in
                                    TENNIS_FOR_GOOD_VIDEO_URL.
                                </p>

                            </div>

                        )}

                    </motion.div>


                    {tennisVideoId && (

                        <div className="mt-5 text-center">

                            <a
                                href={TENNIS_FOR_GOOD_VIDEO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-semibold text-teal-700 transition hover:text-teal-800"
                            >
                                Watch on YouTube

                                <ArrowRight className="h-4 w-4" />
                            </a>

                        </div>

                    )}

                </div>

            </section>


            {/* =====================================================
          PROGRAM AREAS
      ====================================================== */}

            <section className="bg-white py-16">

                <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2">


                    {/* GEAR COLLECTION */}
                    <Card className="rounded-3xl">

                        <CardContent className="p-8">

                            <div className="flex items-center gap-3">

                                <Recycle className="h-6 w-6 text-teal-700" />

                                <h2 className="text-2xl font-bold">
                                    Gear Collection
                                </h2>

                            </div>


                            <BulletList
                                items={[
                                    "Collect gently used rackets, shoes, bags, balls, and tennis supplies",
                                    "Sort and prepare gear for redistribution",
                                    "Give unused sports equipment a second life",
                                    "Reduce barriers for students who want to play tennis",
                                ]}
                            />

                        </CardContent>

                    </Card>


                    {/* GFFT PARTNERSHIP */}
                    <Card className="rounded-3xl">

                        <CardContent className="p-8">

                            <div className="flex items-center gap-3">

                                <HeartHandshake className="h-6 w-6 text-teal-700" />

                                <h2 className="text-2xl font-bold">
                                    GFFT Partnership
                                </h2>

                            </div>


                            <p className="mt-3 leading-relaxed text-slate-600">
                                Through partnership with Genesis Foundation for Fitness &
                                Tennis, ELEVATE helps connect donated tennis gear with
                                underserved youth and supports sports-based empowerment.
                            </p>

                        </CardContent>

                    </Card>


                    {/* TENNIS ACADEMIES */}
                    <Card className="rounded-3xl">

                        <CardContent className="p-8">

                            <div className="flex items-center gap-3">

                                <Users className="h-6 w-6 text-teal-700" />

                                <h2 className="text-2xl font-bold">
                                    Tennis Academies
                                </h2>

                            </div>


                            <BulletList
                                items={[
                                    "Partner with tennis academies and local clubs",
                                    "Set up gear collection boxes and drives",
                                    "Encourage athletes to donate equipment they no longer use",
                                    "Build a service culture within youth sports",
                                ]}
                            />

                        </CardContent>

                    </Card>


                    {/* INDIA */}
                    <Card className="rounded-3xl">

                        <CardContent className="p-8">

                            <div className="flex items-center gap-3">

                                <Globe2 className="h-6 w-6 text-teal-700" />

                                <h2 className="text-2xl font-bold">
                                    Future India Expansion
                                </h2>

                            </div>


                            <p className="mt-3 leading-relaxed text-slate-600">
                                ELEVATE plans to expand future gear donation efforts to India,
                                helping students access tennis equipment, sports
                                opportunities, and confidence-building athletic programs.
                            </p>

                        </CardContent>

                    </Card>

                </div>

            </section>


            {/* =====================================================
          GET INVOLVED
      ====================================================== */}

            <section
                id="get-involved"
                className="py-16"
            >

                <div className="mx-auto max-w-7xl px-4">

                    <Card className="rounded-3xl border-teal-200">

                        <CardContent className="flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">


                            <div>

                                <h2 className="text-2xl font-bold md:text-3xl">
                                    Help give tennis gear a second life.
                                </h2>


                                <p className="mt-2 text-slate-600">
                                    Donate gear, host a collection drive, or partner with
                                    ELEVATE.
                                </p>

                            </div>


                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
                            >
                                Contact Us

                                <ArrowRight className="h-4 w-4" />
                            </Link>


                        </CardContent>

                    </Card>

                </div>

            </section>

        </main>
    );
}