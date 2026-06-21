import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    ArrowRight,
    BookOpen,
    Users,
    HeartHandshake,
    Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";

import global1 from "../assets/partners/building-blocks/bb2.jpeg";
import global2 from "../assets/partners/building-blocks/bb3.png";

const Card = ({ className = "", children }) => (
    <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
        {children}
    </div>
);

const CardContent = ({ className = "", children }) => (
    <div className={"p-6 " + className}>{children}</div>
);

function ProjectCard({ title, children, icon }) {
    return (
        <Card className="rounded-3xl">
            <CardContent className="p-8">
                <div className="flex items-center gap-3">
                    <span className="text-teal-700">{icon}</span>
                    <h2 className="text-2xl font-bold">{title}</h2>
                </div>
                <div className="mt-4 text-slate-600 leading-relaxed">{children}</div>
            </CardContent>
        </Card>
    );
}

function ImageCard({ src, label }) {
    return (
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <div className="relative aspect-[4/3]">
                <img
                    src={src}
                    alt={label}
                    className="h-full w-full object-cover"
                />
                <div className="absolute left-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow">
                    {label}
                </div>
            </div>
        </div>
    );
}

function ImageSlider({ images }) {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            setIdx((v) => (v + 1) % images.length);
        }, 3500);

        return () => clearInterval(t);
    }, [images.length]);

    return (
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <div className="relative aspect-[16/10]">
                <img
                    src={images[idx].src}
                    alt={images[idx].label}
                    className="h-full w-full object-contain bg-black transition-all duration-700"
                />

                <div className="absolute left-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow">
                    {images[idx].label}
                </div>
            </div>

            <div className="flex justify-center gap-2 py-3 bg-white">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIdx(i)}
                        className={
                            "h-2.5 w-2.5 rounded-full transition " +
                            (i === idx ? "bg-teal-600" : "bg-slate-300")
                        }
                        type="button"
                        aria-label={`Tutoring image ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
export default function GlobalTutoring() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            <section className="bg-gradient-to-r from-slate-100 to-slate-200 pt-40 pb-16">
                <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-semibold text-teal-700">Project</p>

                        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
                            Global Learning: English Tutoring for Students in India
                        </h1>

                        <p className="mt-4 max-w-3xl text-lg text-slate-600">
                            ELEVATE supports students in India through online English tutoring
                            in partnership with Building Blocks Foundation. Through
                            student-to-student learning, volunteers help younger students build
                            communication skills, confidence, and academic opportunity.
                        </p>

                        <div className="mt-6">
                            <Link
                                to="/get-involved#volunteer"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                            >
                                Volunteer as a Tutor <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="grid gap-4"
                    >
                        <ImageSlider
                            images={[
                                { src: global1, label: "Online tutoring support" },
                                { src: global2, label: "English learning practice" },
                            ]}
                        />
                    </motion.div>
                </div>
            </section>



            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
                    <ProjectCard title="Problem" icon={<BookOpen className="h-6 w-6" />}>
                        Many students need more access to English practice,
                        confidence-building conversations, and supportive learning
                        resources.
                    </ProjectCard>

                    <ProjectCard title="What We Do" icon={<Users className="h-6 w-6" />}>
                        ELEVATE connects student volunteers with learners through online
                        tutoring, simple lessons, and supportive practice.
                    </ProjectCard>

                    <ProjectCard title="Who It Helps" icon={<Globe2 className="h-6 w-6" />}>
                        Students in India who benefit from English communication practice,
                        academic support, and mentorship.
                    </ProjectCard>

                    <ProjectCard
                        title="How You Can Support"
                        icon={<HeartHandshake className="h-6 w-6" />}
                    >
                        Volunteer as a tutor, help create lessons, support learning
                        materials, or partner with us to expand tutoring access.
                    </ProjectCard>
                </div>
            </section>
        </main>
    );
}