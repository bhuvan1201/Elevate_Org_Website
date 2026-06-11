import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Recycle, Users, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

import gfft1 from "../assets/partners/gfft/gfft1.jpeg";
import gfft2 from "../assets/partners/gfft/gfft2.jpeg";
import gfft3 from "../assets/partners/gfft/gfft3.jpeg";

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

export default function TennisForGood() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-sm font-semibold text-teal-700">Project</p>

                        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                            Tennis for Good: Giving Gear a Second Life
                        </h1>

                        <p className="mt-4 text-lg text-slate-600 max-w-prose">
                            ELEVATE collects gently used tennis gear and helps give it a second life
                            by connecting equipment with students who need access to sports.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="#get-involved"
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
                        <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                            <img
                                src={gfft1}
                                alt="Tennis gear collection"
                                className="w-full aspect-[16/10] object-cover"
                            />
                        </div>
                    </motion.div>
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