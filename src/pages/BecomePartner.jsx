import { ArrowRight, Handshake, School, Trophy, Building2, Megaphone, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ className = "", children }) => (
    <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
        {children}
    </div>
);

const CardContent = ({ className = "", children }) => (
    <div className={"p-6 " + className}>{children}</div>
);

function PartnerOption({ icon, title, text }) {
    return (
        <Card className="rounded-3xl h-full hover:shadow-lg transition">
            <CardContent className="p-7">
                <div className="h-12 w-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                    {icon}
                </div>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-slate-600">{text}</p>
            </CardContent>
        </Card>
    );
}

export default function BecomePartner() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <p className="text-sm font-semibold text-teal-700">Partners</p>
                    <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
                        Become a Partner
                    </h1>
                    <p className="mt-4 max-w-4xl text-lg text-slate-600 leading-relaxed">
                        ELEVATE welcomes partnerships with schools, tennis academies, nonprofits,
                        local businesses, government programs, and community organizations that want
                        to support youth education, health awareness, sports access, and service leadership.
                    </p>

                    <div className="mt-6">
                        <Link
                            to="/get-involved"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Get Involved <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4">
                    <p className="text-sm font-semibold text-teal-700">Current Partners</p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                        Trusted community partnerships
                    </h2>

                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                        <PartnerOption
                            icon={<Trophy className="h-6 w-6" />}
                            title="Genesis Foundation for Fitness & Tennis / GFFT"
                            text="Wichita, Kansas partner for redistributing donated tennis gear to youth in the Wichita community."
                        />

                        <PartnerOption
                            icon={<School className="h-6 w-6" />}
                            title="Building Blocks Foundation"
                            text="India-based partner for online English tutoring and educational support for students in India."
                        />

                        <PartnerOption
                            icon={<Building2 className="h-6 w-6" />}
                            title="Tennis Academies"
                            text="Community collection partners helping gather gently used tennis gear for redistribution."
                        />
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4">
                    <p className="text-sm font-semibold text-teal-700">Partner Options</p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                        Ways organizations can support ELEVATE
                    </h2>

                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <PartnerOption
                            icon={<PackageCheck className="h-6 w-6" />}
                            title="Host a Tennis Gear Collection Box"
                            text="Place a collection box at your school, academy, club, or business to collect gently used tennis gear."
                        />

                        <PartnerOption
                            icon={<Megaphone className="h-6 w-6" />}
                            title="Sponsor a Youth Health Campaign"
                            text="Support student-led awareness campaigns focused on vaping prevention, food access, fitness, and health education."
                        />

                        <PartnerOption
                            icon={<School className="h-6 w-6" />}
                            title="Invite ELEVATE for a Presentation"
                            text="Bring ELEVATE to your school or youth group for student presentations and awareness events."
                        />

                        <PartnerOption
                            icon={<Handshake className="h-6 w-6" />}
                            title="Support Tutoring Programs"
                            text="Help expand English tutoring, learning videos, education materials, and student-to-student mentorship."
                        />

                        <PartnerOption
                            icon={<Trophy className="h-6 w-6" />}
                            title="Help Distribute Donated Gear"
                            text="Support the collection, sorting, transportation, and redistribution of tennis equipment."
                        />

                        <PartnerOption
                            icon={<Building2 className="h-6 w-6" />}
                            title="Fund Outreach Materials"
                            text="Provide funding for posters, printing, shipping, campaign supplies, events, and India expansion."
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="mx-auto max-w-5xl px-4">
                    <Card className="rounded-3xl border-teal-200">
                        <CardContent className="p-8 md:p-10 text-center">
                            <h2 className="text-3xl font-bold">Ready to partner with ELEVATE?</h2>
                            <p className="mt-3 text-slate-600">
                                Tell us how your organization would like to support youth education,
                                health awareness, sports access, and service leadership.
                            </p>

                            <div className="mt-6 flex flex-wrap justify-center gap-3">
                                <Link
                                    to="/get-involved"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                                >
                                    Become a Partner <ArrowRight className="h-4 w-4" />
                                </Link>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}