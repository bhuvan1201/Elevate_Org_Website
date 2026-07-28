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
} from "lucide-react";
import gfft1 from "../assets/partners/gfft/gfft1.jpeg";
import gfft2 from "../assets/partners/gfft/gfft2.jpeg";
import gfft3 from "../assets/partners/gfft/gfft3.jpeg";
import gfft4 from "../assets/partners/gfft/gfft4.jpeg";
import gfft5 from "../assets/partners/gfft/gfft5.jpeg";
import gfft6 from "../assets/partners/gfft/gfft6.jpeg";
import gfft7 from "../assets/partners/gfft/gfft7.jpeg";
import gfft8 from "../assets/partners/gfft/gfft8.jpeg";
import gfft9 from "../assets/partners/gfft/gfft9.jpeg";
import gfft10 from "../assets/partners/gfft/gfft10.jpg";
import gfft11 from "../assets/partners/gfft/gfft11.jpg";
import gfft12 from "../assets/partners/gfft/gfft12.JPG";
import gfft13 from "../assets/partners/gfft/gfft13.JPG";
import gfft14 from "../assets/partners/gfft/gfft14.JPG";
import gfft15 from "../assets/partners/gfft/gfft15.JPG";
import gfft16 from "../assets/partners/gfft/gfft16.png";
import gfft17 from "../assets/partners/gfft/gfft17.png";
import gfft18 from "../assets/partners/gfft/gfft18.png";
import gfft19 from "../assets/partners/gfft/gfft19.png";
import rallyFlyer from "../assets/events/rally-for-change.jpeg";

// Uncomment and rename if you add videos later
// import gfftVideo1 from "../assets/partners/gfft/gfft-video1.mp4";
// import gfftVideo2 from "../assets/partners/gfft/gfft-video2.mp4";

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

function MediaSlider({ slides }) {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const current = slides[idx];
        const delay = current.type === "video" ? 9000 : 4000;

        const t = setTimeout(() => {
            setIdx((v) => (v + 1) % slides.length);
        }, delay);

        return () => clearTimeout(t);
    }, [idx, slides.length]);

    return (
        <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
            <div className="relative aspect-[16/10] bg-black">
                {slides[idx].type === "video" ? (
                    <video
                        key={slides[idx].src}
                        src={slides[idx].src}
                        className="h-full w-full object-contain bg-black"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : (
                    <img
                        key={slides[idx].src}
                        src={slides[idx].src}
                        alt={slides[idx].label}
                        className="h-full w-full object-contain bg-black"
                    />
                )}

                <div className="absolute left-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow">
                    {slides[idx].label}
                </div>
            </div>

            <div className="flex justify-center gap-2 py-3 bg-white">
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

function RallyForChangeEvent() {
    return (
        <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-yellow-50">
            <div className="mx-auto max-w-7xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden rounded-3xl border border-teal-200 bg-white shadow-xl"
                >
                    <div className="grid items-stretch lg:grid-cols-[1.1fr_0.9fr]">
                        {/* Event information */}
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
                                together for tennis instruction, confidence building, community
                                service, prizes, racquet giveaways, drinks, and snacks.
                            </p>

                            <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <CalendarDays className="mt-0.5 h-6 w-6 shrink-0 text-teal-700" />

                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                                            Date
                                        </p>

                                        <p className="mt-1 font-bold text-slate-900">
                                            Sunday, August 16, 2026
                                        </p>
                                    </div>
                                </div>

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

                            <div className="mt-7">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Event highlights
                                </h3>

                                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                                    {[
                                        "Tennis lessons led by junior players",
                                        "Open to children in Grades 1–12",
                                        "Free racquet giveaways",
                                        "Summer prizes, drinks, and snacks",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

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

                        {/* Flyer */}
                        <div className="flex items-center justify-center border-t border-slate-200 bg-slate-100 p-5 lg:border-l lg:border-t-0 md:p-8">
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

export default function TennisForGood() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            <section className="bg-gradient-to-r from-slate-100 to-slate-200 pt-40 pb-16">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-sm font-semibold text-teal-700">Project</p>

                        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                            Tennis for Good: Giving Gear a Second Life
                        </h1>

                        <p className="mt-4 text-lg text-slate-600 max-w-prose">
                            Tennis can open doors, but equipment costs can make the sport difficult to access.
                            Through Tennis for Good, ELEVATE collects gently used rackets, shoes, clothes,
                            strings, bags, and other tennis gear from players, families, and tennis academies.
                            The gear is redistributed through nonprofit partners to support youth who may not
                            otherwise have access to the sport.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="/donate"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                            >
                                Donate Gear <ArrowRight className="h-4 w-4" />
                            </a>

                            <Link
                                to="/partners/genesis-foundation"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
                            >
                                GFFT Partnership
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <MediaSlider
                            slides={[
                                { type: "image", src: gfft1, label: "Tennis for Good" },
                                { type: "image", src: gfft2, label: "Tennis for Good" },
                                { type: "image", src: gfft3, label: "Tennis for Good" },
                                { type: "image", src: gfft4, label: "Tennis for Good" },
                                { type: "image", src: gfft5, label: "Tennis for Good" },
                                { type: "image", src: gfft6, label: "Tennis for Good" },
                                { type: "image", src: gfft7, label: "Tennis for Good" },
                                { type: "image", src: gfft8, label: "Tennis for Good" },
                                { type: "image", src: gfft9, label: "Tennis for Good" },
                                { type: "image", src: gfft10, label: "Tennis for Good" },
                                { type: "image", src: gfft11, label: "Tennis for Good" },
                                { type: "image", src: gfft12, label: "Tennis for Good" },
                                { type: "image", src: gfft13, label: "Tennis for Good" },
                                { type: "image", src: gfft14, label: "Tennis for Good" },
                                { type: "image", src: gfft15, label: "Tennis for Good" },
                                { type: "image", src: gfft16, label: "Tennis for Good" },
                                { type: "image", src: gfft17, label: "Tennis for Good" },
                                { type: "image", src: gfft18, label: "Tennis for Good" },
                                { type: "image", src: gfft19, label: "Tennis for Good" },
                                // Uncomment if you add video imports above
                                // { type: "video", src: gfftVideo1, label: "Donation drive in action" },
                                // { type: "video", src: gfftVideo2, label: "Youth sports access" },
                            ]}
                        />
                    </motion.div>
                </div>
            </section>

            <RallyForChangeEvent />

            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="text-center">
                        <p className="text-sm font-semibold text-teal-700">
                            Founder's Action
                        </p>

                        <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                            See Tennis for Good in Action
                        </h2>

                        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                            Watch how ELEVATE collects, organizes, and redistributes tennis gear
                            to create opportunities for youth through sports.
                        </p>
                    </div>

                    <div className="mt-10 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
                                title="Tennis For Good"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
                    <Card className="rounded-3xl">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3">
                                <Recycle className="h-6 w-6 text-teal-700" />
                                <h2 className="text-2xl font-bold">Gear Collection</h2>
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

                    <Card className="rounded-3xl">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3">
                                <HeartHandshake className="h-6 w-6 text-teal-700" />
                                <h2 className="text-2xl font-bold">GFFT Partnership</h2>
                            </div>
                            <p className="mt-3 text-slate-600 leading-relaxed">
                                Through partnership with Genesis Foundation for Fitness & Tennis,
                                ELEVATE helps connect donated tennis gear with underserved youth and
                                supports sports-based empowerment.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-3xl">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3">
                                <Users className="h-6 w-6 text-teal-700" />
                                <h2 className="text-2xl font-bold">Tennis Academies</h2>
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

                    <Card className="rounded-3xl">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3">
                                <Globe2 className="h-6 w-6 text-teal-700" />
                                <h2 className="text-2xl font-bold">Future India Expansion</h2>
                            </div>
                            <p className="mt-3 text-slate-600 leading-relaxed">
                                ELEVATE plans to expand future gear donation efforts to India,
                                helping students access tennis equipment, sports opportunities,
                                and confidence-building athletic programs.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="get-involved" className="py-16">
                <div className="mx-auto max-w-7xl px-4">
                    <Card className="rounded-3xl border-teal-200">
                        <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold">
                                    Help give tennis gear a second life.
                                </h2>
                                <p className="mt-2 text-slate-600">
                                    Donate gear, host a collection drive, or partner with ELEVATE.
                                </p>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                            >
                                Contact Us <ArrowRight className="h-4 w-4" />
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}