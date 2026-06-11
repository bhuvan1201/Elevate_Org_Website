import { motion } from "framer-motion";
import { ArrowRight, Video, BookOpen, Users, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ className = "", children }) => (
    <div className={"rounded-2xl border border-slate-200 bg-white " + className}>{children}</div>
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

export default function EducationalVideoLibrary() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <p className="text-sm font-semibold text-teal-700">Project</p>
                    <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
                        Learning Videos Created by Students, for Students
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-slate-600">
                        ELEVATE is creating recorded educational videos for lower-school students. These videos are designed to make
                        learning simple, accessible, and student-friendly. Topics may include English, school subjects, health awareness,
                        tennis basics, fitness, and leadership.
                    </p>

                    <div className="mt-6">
                        <Link
                            to="/learn/tutoring-education"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Explore Learning Videos <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
                    <ProjectCard title="Problem" icon={<BookOpen className="h-6 w-6" />}>
                        Younger students need simple, friendly, and accessible learning resources they can revisit anytime.
                    </ProjectCard>

                    <ProjectCard title="What We Do" icon={<Video className="h-6 w-6" />}>
                        Student volunteers create short educational videos covering school subjects, English, health awareness, tennis, fitness, and leadership.
                    </ProjectCard>

                    <ProjectCard title="Who It Helps" icon={<Users className="h-6 w-6" />}>
                        Lower-school students who benefit from clear explanations, relatable student teachers, and flexible learning support.
                    </ProjectCard>

                    <ProjectCard title="How You Can Support" icon={<HeartHandshake className="h-6 w-6" />}>
                        Help record videos, suggest topics, sponsor learning materials, or support video production and outreach.
                    </ProjectCard>
                </div>
            </section>
        </main>
    );
}