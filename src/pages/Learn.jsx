import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  HeartPulse,
  Dumbbell,
  Users,
  Youtube,
  PlayCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
    {children}
  </div>
);

const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

const RESOURCE_SECTIONS = [
  {
    title: "Tutoring & Education",
    icon: <BookOpen className="h-6 w-6" />,
    description:
      "Student-created lessons designed to make important academic concepts easier to understand.",
    items: [
      "Basic Math Series",
      "Algebra Lessons",
      "Step-by-step explanations",
      "Student-created learning videos",
    ],
    status: "Videos Available",
    route: "/learn/tutoring-education",
    buttonText: "Explore Education Videos",
  },
  {
    title: "Sports & Fitness",
    icon: <Dumbbell className="h-6 w-6" />,
    description:
      "Exercise demonstrations and fitness resources focused on strength, conditioning, movement, and proper technique.",
    items: [
      "Strength training",
      "Cardio & conditioning",
      "Core & stability",
      "Exercise form & technique",
      "Mobility & flexibility",
    ],
    status: "Videos Available",
    route: "/learn/fitness",
    buttonText: "Explore Fitness Videos",
  },
  {
    title: "Health Awareness",
    icon: <HeartPulse className="h-6 w-6" />,
    description:
      "Student-led health education and research focused on prevention, nutrition, and adolescent wellness.",
    items: [
      "Teen vaping facts",
      "Nicotine addiction",
      "Brain development",
      "Food access & nutrition",
      "Adolescent obesity",
    ],
    status: "Coming Soon",
    route: "/learn/health-awareness",
    buttonText: "Explore Health Awareness",
  },
  {
    title: "Youth Leadership",
    icon: <Users className="h-6 w-6" />,
    description:
      "Resources to help young people turn ideas into meaningful service and community impact.",
    items: [
      "Starting a service project",
      "Organizing a gear drive",
      "Creating awareness campaigns",
      "Teen volunteer opportunities",
    ],
    status: "Coming Soon",
    route: "/learn/youth-leadership",
    buttonText: "Explore Youth Leadership",
  },
];

export default function Learn() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">

      {/* HERO */}
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

            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              ELEVATE Resource Library
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Explore free student-created resources in education, fitness,
              health awareness, and youth leadership. Our growing library is
              designed to make learning practical, accessible, and easy to
              follow.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#resource-library"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Explore Resources
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://www.youtube.com/@elevateglobal_org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                <Youtube className="h-4 w-4" />
                YouTube Channel
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESOURCE LIBRARY */}
      <section id="resource-library" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-teal-700">
              Explore by Topic
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Learning & Resource Areas
            </h2>

            <p className="mt-3 text-slate-600">
              Choose a topic below to explore ELEVATE's growing collection of
              student-created videos, lessons, and educational resources.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {RESOURCE_SECTIONS.map((section) => (
              <ResourceSection
                key={section.title}
                section={section}
              />
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl bg-slate-900 px-8 py-10 md:px-12 md:py-12 text-center text-white">
            <Youtube className="mx-auto h-12 w-12" />

            <h2 className="mt-4 text-3xl font-bold">
              Learn with ELEVATE on YouTube
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-300 leading-relaxed">
              Watch our growing collection of educational lessons, fitness
              demonstrations, training videos, and other youth-created learning
              resources.
            </p>

            <a
              href="https://www.youtube.com/@elevateglobal_org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Visit Our YouTube Channel
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* TAKE ACTION */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <Card className="rounded-3xl border-teal-200">
            <CardContent className="p-8 md:p-10 text-center">
              <h2 className="text-3xl font-bold">
                Help Build the Library
              </h2>

              <p className="mt-3 max-w-2xl mx-auto text-slate-600">
                Volunteer as a tutor, suggest a learning topic, share our
                resources, or help ELEVATE create new educational and fitness
                content.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  to="/get-involved#volunteer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                >
                  Volunteer
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
                >
                  Suggest a Topic
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

function ResourceSection({ section }) {
  return (
    <Link to={section.route} className="group h-full">
      <Card className="rounded-3xl h-full hover:shadow-lg hover:-translate-y-1 transition duration-300">
        <CardContent className="p-8">

          {/* ICON + STATUS */}
          <div className="flex items-start justify-between gap-4">
            <div className="h-12 w-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
              {section.icon}
            </div>

            <span
              className={
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border " +
                (section.status === "Videos Available"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-slate-50 text-slate-600 border-slate-200")
              }
            >
              {section.status === "Videos Available" && (
                <PlayCircle className="h-3.5 w-3.5" />
              )}

              {section.status}
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-5 text-2xl font-bold group-hover:text-teal-700 transition">
            {section.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-3 text-slate-600 leading-relaxed">
            {section.description}
          </p>

          {/* CONTENT LIST */}
          <div className="mt-5 grid gap-2">
            {section.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-7 inline-flex items-center gap-2 font-semibold text-teal-700 group-hover:gap-3 transition-all">
            {section.buttonText}
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}