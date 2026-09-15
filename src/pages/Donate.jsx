import {
    Gift,
    Megaphone,
    BookOpen,
    Globe2,
    ArrowRight,
    GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className={"p-6 " + className}>{children}</div>
);

function SupportCard({
    icon,
    title,
    text,
    buttonText,
    to,
}) {
    return (
        <Card className="group h-full rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="flex h-full flex-col p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-100 bg-teal-50 text-teal-700">
                    {icon}
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {title}
                </h3>

                <p className="mt-2 flex-grow leading-relaxed text-slate-600">
                    {text}
                </p>

                {buttonText && to && (
                    <Link
                        to={to}
                        className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-700 transition group-hover:gap-3"
                    >
                        {buttonText}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                )}
            </CardContent>
        </Card>
    );
}

export default function Donate() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">

            {/* =====================================================
          HERO
      ====================================================== */}

            <section className="bg-gradient-to-r from-slate-100 to-slate-200 pb-16 pt-40">
                <div className="mx-auto max-w-7xl px-4">
                    <p className="text-sm font-semibold text-teal-700">
                        Donate
                    </p>

                    <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
                        Support ELEVATE
                    </h1>

                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
                        Support ELEVATE by donating tennis equipment, educational school
                        supplies, sponsoring community initiatives, or helping expand
                        education and youth programs.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">

                        {/* TENNIS GEAR */}
                        <Link
                            to="/get-involved#donate-gear"
                            className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
                        >
                            <Gift className="h-4 w-4" />
                            Donate Tennis Gear
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        {/* SCHOOL SUPPLIES */}
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
                        >
                            <BookOpen className="h-4 w-4" />
                            Donate Educational School Supplies
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        {/* SPONSOR */}
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                        >
                            Contact Us to Sponsor
                        </Link>

                    </div>
                </div>
            </section>


            {/* =====================================================
          WAYS TO SUPPORT
      ====================================================== */}

            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4">

                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-teal-700">
                            Ways to Give
                        </p>

                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Choose how you want to help
                        </h2>

                        <p className="mt-3 leading-relaxed text-slate-600">
                            Donations help ELEVATE expand access to sports, education,
                            health awareness, and youth-led community programs.
                        </p>
                    </div>


                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {/* TENNIS GEAR */}
                        <SupportCard
                            icon={<Gift className="h-6 w-6" />}
                            title="Donate Tennis Gear"
                            text="Give gently used rackets, tennis shoes, balls, bags, strings, clothing, and other tennis equipment a second life by helping young athletes gain access to the sport."
                            buttonText="Donate Tennis Gear"
                            to="/get-involved#donate-gear"
                        />


                        {/* SCHOOL SUPPLIES */}
                        <SupportCard
                            icon={<BookOpen className="h-6 w-6" />}
                            title="Donate Educational School Supplies"
                            text="Support students by donating notebooks, pencils, pens, folders, backpacks, art supplies, learning materials, and other new or gently used educational supplies."
                            buttonText="Donate School Supplies"
                            to="/contact"
                        />


                        {/* CAMPAIGN SPONSORSHIP */}
                        <SupportCard
                            icon={<Megaphone className="h-6 w-6" />}
                            title="Campaign Sponsorship"
                            text="Sponsor awareness materials, printing, gear collection, shipping, youth events, outreach efforts, and community campaigns."
                            buttonText="Become a Sponsor"
                            to="/contact"
                        />


                        {/* EDUCATION SUPPORT */}
                        <SupportCard
                            icon={<GraduationCap className="h-6 w-6" />}
                            title="Education Support"
                            text="Help support tutoring programs, student learning resources, educational videos, academic support, and expanded access to learning opportunities."
                            buttonText="Support Education"
                            to="/contact"
                        />


                        {/* INDIA EXPANSION */}
                        <SupportCard
                            icon={<Globe2 className="h-6 w-6" />}
                            title="India Expansion Support"
                            text="Help ELEVATE expand education access, tutoring support, school-supply donations, and future sports-equipment initiatives for underserved students in India."
                            buttonText="Support Global Programs"
                            to="/contact"
                        />

                    </div>
                </div>
            </section>


            {/* =====================================================
          SCHOOL SUPPLY DONATION HIGHLIGHT
      ====================================================== */}

            <section className="bg-slate-50 py-16">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white">

                        <div className="grid items-center gap-8 p-8 md:grid-cols-[auto_1fr_auto] md:p-10">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm ring-1 ring-teal-100">
                                <BookOpen className="h-8 w-8" />
                            </div>


                            <div>
                                <p className="text-sm font-bold uppercase tracking-wider text-teal-700">
                                    Education Access
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                                    Donate Educational School Supplies
                                </h2>

                                <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
                                    School supplies can make a meaningful difference for
                                    students who may not have consistent access to essential
                                    learning materials. ELEVATE welcomes educational supplies
                                    that can support students and community education programs.
                                </p>


                                <div className="mt-5 flex flex-wrap gap-2">
                                    {[
                                        "Notebooks",
                                        "Pencils & Pens",
                                        "Folders",
                                        "Backpacks",
                                        "Art Supplies",
                                        "Learning Materials",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-teal-100 bg-white px-3 py-1 text-sm font-semibold text-slate-700"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>


                            <div>
                                <Link
                                    to="/contact"
                                    className="inline-flex whitespace-nowrap items-center gap-2 rounded-2xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
                                >
                                    Arrange a Donation
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* =====================================================
          SPECIFIC CAMPAIGN
      ====================================================== */}

            <section className="py-16">
                <div className="mx-auto max-w-5xl px-4">

                    <Card className="rounded-3xl border-teal-200">
                        <CardContent className="p-8 text-center md:p-10">

                            <h2 className="text-3xl font-bold">
                                Want to support a specific campaign?
                            </h2>

                            <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-slate-600">
                                Reach out and tell us whether you would like to support tennis
                                gear collection, school-supply donations, awareness campaigns,
                                tutoring, educational resources, printing, events, outreach,
                                or global expansion.
                            </p>


                            <div className="mt-6">

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
                                >
                                    Contact ELEVATE
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

                            </div>

                        </CardContent>
                    </Card>

                </div>
            </section>

        </main>
    );
}