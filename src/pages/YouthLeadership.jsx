import { motion } from "framer-motion";
import { ArrowRight, Megaphone, PackageCheck, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ className = "", children }) => (
    <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
        {children}
    </div>
);

const CardContent = ({ className = "", children }) => (
    <div className={"p-6 " + className}>{children}</div>
);

const RESOURCES = [
    { title: "How to start a service project", icon: <Lightbulb className="h-6 w-6" /> },
    { title: "How to organize a gear drive", icon: <PackageCheck className="h-6 w-6" /> },
    { title: "How to create awareness campaigns", icon: <Megaphone className="h-6 w-6" /> },
    { title: "How teens can volunteer", icon: <Users className="h-6 w-6" /> },
];

export default function YouthLeadership() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            <section className="bg-gradient-to-r from-slate-100 to-slate-200 pt-40 md:pb-16">
                <div className="mx-auto max-w-7xl px-4">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-sm font-semibold text-teal-700">Learn</p>
                        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
                            Youth Leadership
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-slate-600">
                            Practical resources for students who want to lead service projects,
                            organize gear drives, create awareness campaigns, and volunteer.
                        </p>

                        <div className="mt-6">
                            <Link
                                to="/get-involved"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                            >
                                Get Involved <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
                    {RESOURCES.map((item) => (
                        <Card key={item.title} className="rounded-3xl">
                            <CardContent className="p-7">
                                <div className="h-12 w-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                                    {item.icon}
                                </div>

                                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                                <p className="mt-2 text-slate-600">
                                    Guide coming soon.
                                </p>

                                <p className="mt-5 text-sm font-semibold text-teal-700">
                                    Take Action: Volunteer, share this resource, start a campaign,
                                    or contact ELEVATE.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}