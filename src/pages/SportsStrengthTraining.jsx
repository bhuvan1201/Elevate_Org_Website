import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Users, ShieldCheck, HeartHandshake } from "lucide-react";
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

export default function SportsStrengthTraining() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <p className="text-sm font-semibold text-teal-700">Project</p>
                    <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
                        Sports Skills and Strength Training for Kids
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-slate-600">
                        As student-athletes, Vihaan and Hitha are developing beginner-friendly tennis and fitness videos to help younger
                        students stay active, build confidence, and learn safe sports habits.
                    </p>

                    <div className="mt-6">
                        <Link
                            to="/learn/fitness"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Explore Fitness Videos <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
                    <ProjectCard title="Problem" icon={<Dumbbell className="h-6 w-6" />}>
                        Many younger students need simple, safe, beginner-friendly ways to stay active and build confidence in sports.
                    </ProjectCard>

                    <ProjectCard title="What We Do" icon={<Users className="h-6 w-6" />}>
                        ELEVATE creates tennis basics, fitness drills, and strength training videos designed by student-athletes for younger students.
                    </ProjectCard>

                    <ProjectCard title="Who It Helps" icon={<HeartHandshake className="h-6 w-6" />}>
                        Kids who want to learn tennis, improve movement, develop healthy habits, and feel more confident being active.
                    </ProjectCard>

                    <ProjectCard title="Safety Note" icon={<ShieldCheck className="h-6 w-6" />}>
                        Fitness activities should be completed with parent, teacher, or coach supervision.
                    </ProjectCard>
                </div>
            </section>
        </main>
    );
}