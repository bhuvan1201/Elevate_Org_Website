import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, HeartHandshake, Globe2 } from "lucide-react";
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

export default function GlobalTutoring() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <p className="text-sm font-semibold text-teal-700">Project</p>
                    <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
                        Global Learning: English Tutoring for Students in India
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-slate-600">
                        ELEVATE supports students in India through online English tutoring in partnership with Building Blocks Foundation.
                        Through student-to-student learning, volunteers help younger students build communication skills, confidence,
                        and academic opportunity.
                    </p>

                    <div className="mt-6">
                        <Link
                            to="/get-involved#volunteer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Volunteer as a Tutor <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
                    <ProjectCard title="Problem" icon={<BookOpen className="h-6 w-6" />}>
                        Many students need more access to English practice, confidence-building conversations, and supportive learning resources.
                    </ProjectCard>

                    <ProjectCard title="What We Do" icon={<Users className="h-6 w-6" />}>
                        ELEVATE connects student volunteers with learners through online tutoring, simple lessons, and supportive practice.
                    </ProjectCard>

                    <ProjectCard title="Who It Helps" icon={<Globe2 className="h-6 w-6" />}>
                        Students in India who benefit from English communication practice, academic support, and mentorship.
                    </ProjectCard>

                    <ProjectCard title="How You Can Support" icon={<HeartHandshake className="h-6 w-6" />}>
                        Volunteer as a tutor, help create lessons, support learning materials, or partner with us to expand tutoring access.
                    </ProjectCard>
                </div>
            </section>
        </main>
    );
}