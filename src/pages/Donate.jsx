import { Gift, Megaphone, BookOpen, Globe2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ className = "", children }) => (
    <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
        {children}
    </div>
);

const CardContent = ({ className = "", children }) => (
    <div className={"p-6 " + className}>{children}</div>
);

function SupportCard({ icon, title, text }) {
    return (
        <Card className="rounded-3xl h-full">
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

export default function Donate() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <p className="text-sm font-semibold text-teal-700">Donate</p>
                    <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
                        Support ELEVATE
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-slate-600">
                        Online payment is coming soon. For now, you can support ELEVATE through gear donation, campaign sponsorship, education support, and India expansion support.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            to="/get-involved#donate-gear"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Donate Tennis Gear <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
                        >
                            Contact Us to Sponsor
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SupportCard
                        icon={<Gift className="h-6 w-6" />}
                        title="Gear Donation"
                        text="Support tennis access by donating rackets, shoes, balls, bags, and other gently used tennis equipment."
                    />

                    <SupportCard
                        icon={<Megaphone className="h-6 w-6" />}
                        title="Campaign Sponsorship"
                        text="Sponsor awareness materials, printing, gear collection, shipping, events, outreach, and school campaigns."
                    />

                    <SupportCard
                        icon={<BookOpen className="h-6 w-6" />}
                        title="Education Support"
                        text="Help fund tutoring resources, learning materials, video lessons, and student education programs."
                    />

                    <SupportCard
                        icon={<Globe2 className="h-6 w-6" />}
                        title="India Expansion Support"
                        text="Help ELEVATE expand education access, tutoring support, and future gear donation efforts in India."
                    />
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-5xl px-4">
                    <Card className="rounded-3xl border-teal-200">
                        <CardContent className="p-8 md:p-10 text-center">
                            <h2 className="text-3xl font-bold">Want to support a specific campaign?</h2>
                            <p className="mt-3 text-slate-600">
                                Reach out and tell us whether you want to support gear collection, awareness campaigns, tutoring, printing, events, outreach, or India expansion.
                            </p>
                            <div className="mt-6">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition"
                                >
                                    Contact ELEVATE <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}