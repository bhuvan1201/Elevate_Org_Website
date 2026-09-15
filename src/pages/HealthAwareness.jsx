import { motion } from "framer-motion";
import {
    ArrowRight,
    Brain,
    HeartPulse,
    Apple,
    Cigarette,
    BookOpen,
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
    <div className={"p-6 " + className}>
        {children}
    </div>
);

/* =========================================================
   HEALTH RESOURCES
========================================================= */

const RESOURCES = [
    {
        title: "Teen Vaping Facts",
        icon: <Cigarette className="h-6 w-6" />,
        description:
            "Learn about teen vaping trends, health risks, and why prevention and awareness matter.",
        project: "Teen Vaping Awareness",
        route: "/projects/teen-vaping-awareness",
    },

    {
        title: "Nicotine Addiction",
        icon: <HeartPulse className="h-6 w-6" />,
        description:
            "Explore how nicotine affects young people and why dependence can develop quickly during adolescence.",
        project: "Teen Vaping Awareness",
        route: "/projects/teen-vaping-awareness",
    },

    {
        title: "Brain Development",
        icon: <Brain className="h-6 w-6" />,
        description:
            "Understand why the developing adolescent brain can be especially vulnerable to nicotine exposure.",
        project: "Teen Vaping Awareness",
        route: "/projects/teen-vaping-awareness",
    },

    {
        title: "Food Access",
        icon: <Apple className="h-6 w-6" />,
        description:
            "Explore how access to nutritious food can influence the health and well-being of young people.",
        project: "Food Access & Adolescent Health",
        route: "/projects/adolescent-obesity",
    },

    {
        title: "Nutrition",
        icon: <Apple className="h-6 w-6" />,
        description:
            "Learn about nutrition, healthy food access, and the barriers that can affect healthier choices.",
        project: "Food Access & Adolescent Health",
        route: "/projects/adolescent-obesity",
    },

    {
        title: "Adolescent Obesity",
        icon: <HeartPulse className="h-6 w-6" />,
        description:
            "Explore the connections between food access, physical activity, socioeconomic factors, and adolescent health.",
        project: "Food Access & Adolescent Health",
        route: "/projects/adolescent-obesity",
    },
];

/* =========================================================
   PAGE
========================================================= */

export default function HealthAwareness() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">

            {/* =====================================================
          HERO
      ====================================================== */}

            <section className="bg-gradient-to-r from-slate-100 to-slate-200 pt-40 pb-16">

                <div className="mx-auto max-w-7xl px-4">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <p className="text-sm font-semibold text-teal-700">
                            Learn
                        </p>

                        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
                            Health Awareness
                        </h1>

                        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
                            Explore student-led health research and educational resources
                            focused on teen vaping, nicotine addiction, brain development,
                            food access, nutrition, and adolescent health.
                        </p>


                        {/* PROJECT BUTTONS */}
                        <div className="mt-7 flex flex-wrap gap-3">

                            <Link
                                to="/projects/teen-vaping-awareness"
                                className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
                            >
                                View Teen Vaping Project
                                <ArrowRight className="h-4 w-4" />
                            </Link>


                            <Link
                                to="/projects/adolescent-obesity"
                                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
                            >
                                View Food Access & Adolescent Health
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
          FEATURED HEALTH PROJECTS
      ====================================================== */}

            <section className="bg-white py-16">

                <div className="mx-auto max-w-7xl px-4">

                    <div className="max-w-3xl">

                        <p className="text-sm font-semibold text-teal-700">
                            Health Projects
                        </p>

                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Student-Led Health Research
                        </h2>

                        <p className="mt-3 leading-relaxed text-slate-600">
                            ELEVATE uses research, education, and youth advocacy to help
                            students better understand health challenges affecting young
                            people and their communities.
                        </p>

                    </div>


                    <div className="mt-10 grid gap-6 md:grid-cols-2">

                        {/* TEEN VAPING PROJECT */}
                        <Link
                            to="/projects/teen-vaping-awareness"
                            className="group"
                        >

                            <Card className="h-full rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                                <CardContent className="p-8">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-100 bg-teal-50 text-teal-700">

                                        <Cigarette className="h-7 w-7" />

                                    </div>


                                    <p className="mt-6 text-sm font-bold uppercase tracking-wider text-teal-700">
                                        Health Awareness Project
                                    </p>


                                    <h3 className="mt-2 text-2xl font-bold text-slate-900 transition group-hover:text-teal-700">
                                        Teen Vaping Awareness
                                    </h3>


                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Student-led research and educational resources exploring
                                        teen vaping behavior, nicotine addiction, health risks,
                                        brain development, and prevention.
                                    </p>


                                    <div className="mt-5 flex flex-wrap gap-2">

                                        {[
                                            "Teen Vaping",
                                            "Nicotine",
                                            "Brain Development",
                                            "Prevention",
                                        ].map((tag) => (

                                            <span
                                                key={tag}
                                                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                                            >
                                                {tag}
                                            </span>

                                        ))}

                                    </div>


                                    <div className="mt-7 inline-flex items-center gap-2 font-semibold text-teal-700 transition-all group-hover:gap-3">
                                        Explore Teen Vaping Project
                                        <ArrowRight className="h-4 w-4" />
                                    </div>

                                </CardContent>

                            </Card>

                        </Link>


                        {/* FOOD ACCESS PROJECT */}
                        <Link
                            to="/projects/adolescent-obesity"
                            className="group"
                        >

                            <Card className="h-full rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                                <CardContent className="p-8">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-100 bg-teal-50 text-teal-700">

                                        <Apple className="h-7 w-7" />

                                    </div>


                                    <p className="mt-6 text-sm font-bold uppercase tracking-wider text-teal-700">
                                        Health Awareness Project
                                    </p>


                                    <h3 className="mt-2 text-2xl font-bold text-slate-900 transition group-hover:text-teal-700">
                                        Food Access & Adolescent Health
                                    </h3>


                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Research exploring how poverty, nutritious food access,
                                        physical activity, and socioeconomic barriers can influence
                                        adolescent health and obesity.
                                    </p>


                                    <div className="mt-5 flex flex-wrap gap-2">

                                        {[
                                            "Food Access",
                                            "Nutrition",
                                            "Physical Activity",
                                            "Adolescent Health",
                                        ].map((tag) => (

                                            <span
                                                key={tag}
                                                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                                            >
                                                {tag}
                                            </span>

                                        ))}

                                    </div>


                                    <div className="mt-7 inline-flex items-center gap-2 font-semibold text-teal-700 transition-all group-hover:gap-3">
                                        Explore Food Access & Health Project
                                        <ArrowRight className="h-4 w-4" />
                                    </div>

                                </CardContent>

                            </Card>

                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
          HEALTH RESOURCE TOPICS
      ====================================================== */}

            <section className="bg-slate-50 py-16">

                <div className="mx-auto max-w-7xl px-4">

                    <div className="max-w-3xl">

                        <p className="text-sm font-semibold text-teal-700">
                            Explore by Topic
                        </p>

                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Health Awareness Resources
                        </h2>

                        <p className="mt-3 leading-relaxed text-slate-600">
                            Select a health topic below to explore the related ELEVATE
                            research project and educational resources.
                        </p>

                    </div>


                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {RESOURCES.map((item, index) => (

                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                }}
                            >

                                <Link
                                    to={item.route}
                                    className="group block h-full"
                                >

                                    <Card className="h-full rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg">

                                        <CardContent className="flex h-full flex-col p-7">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-100 bg-teal-50 text-teal-700">
                                                {item.icon}
                                            </div>


                                            <h3 className="mt-5 text-xl font-bold text-slate-900 transition group-hover:text-teal-700">
                                                {item.title}
                                            </h3>


                                            <p className="mt-3 flex-grow leading-relaxed text-slate-600">
                                                {item.description}
                                            </p>


                                            <div className="mt-6 border-t border-slate-100 pt-5">

                                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                                    Related Project
                                                </p>


                                                <div className="mt-2 flex items-center gap-2 font-semibold text-teal-700">
                                                    {item.project}

                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </div>

                                            </div>

                                        </CardContent>

                                    </Card>

                                </Link>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
          HEALTH EDUCATION CTA
      ====================================================== */}

            <section className="bg-white py-16">

                <div className="mx-auto max-w-5xl px-4">

                    <Card className="rounded-3xl border-teal-200">

                        <CardContent className="p-8 text-center md:p-10">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                                <BookOpen className="h-7 w-7" />
                            </div>


                            <h2 className="mt-5 text-3xl font-bold">
                                Help Expand Health Awareness
                            </h2>


                            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-600">
                                Help ELEVATE share health information, support student-led
                                research, create educational resources, or bring health
                                awareness initiatives to more young people.
                            </p>


                            <div className="mt-6 flex flex-wrap justify-center gap-3">

                                <Link
                                    to="/get-involved#volunteer"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
                                >
                                    Get Involved
                                    <ArrowRight className="h-4 w-4" />
                                </Link>


                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                                >
                                    Contact ELEVATE
                                </Link>

                            </div>

                        </CardContent>

                    </Card>

                </div>

            </section>

        </main>
    );
}