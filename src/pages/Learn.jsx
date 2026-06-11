import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  HeartPulse,
  Dumbbell,
  Users,
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

const SECTIONS = [
  {
    title: "Health Awareness",
    icon: <HeartPulse className="h-6 w-6" />,
    items: [
      "Teen vaping facts",
      "Nicotine addiction",
      "Brain development",
      "Food access",
      "Nutrition",
      "Adolescent obesity",
    ],
  },
  {
    title: "Education",
    icon: <BookOpen className="h-6 w-6" />,
    items: [
      "English learning videos",
      "Lower-school learning support",
      "Study skills",
      "Student-created lessons",
    ],
  },
  {
    title: "Sports & Fitness",
    icon: <Dumbbell className="h-6 w-6" />,
    items: [
      "Tennis basics",
      "Footwork drills",
      "Strength training",
      "Staying active",
      "Sports confidence",
    ],
  },
  {
    title: "Youth Leadership",
    icon: <Users className="h-6 w-6" />,
    items: [
      "How to start a service project",
      "How to organize a gear drive",
      "How to create awareness campaigns",
      "How teens can volunteer",
    ],
  },
];

export default function Learn() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-teal-700">Learn</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              ELEVATE Resource Library
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Explore student-created resources for health awareness, education,
              sports, fitness, and youth leadership.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/learn/tutoring-education"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Tutoring & Education <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/learn/fitness"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Fitness <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
          {SECTIONS.map((section) => (
            <ResourceSection key={section.title} section={section} />
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4">
          <Card className="rounded-3xl border-teal-200">
            <CardContent className="p-8 md:p-10 text-center">
              <h2 className="text-3xl font-bold">Take Action</h2>
              <p className="mt-3 text-slate-600">
                Volunteer, share this resource, start a campaign, or contact
                ELEVATE to help create youth-led impact.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                >
                  Volunteer <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
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

function ResourceSection({ section }) {
  return (
    <Card className="rounded-3xl h-full">
      <CardContent className="p-8">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
            {section.icon}
          </div>
          <h2 className="text-2xl font-bold">{section.title}</h2>
        </div>

        <div className="mt-6 grid gap-3">
          {section.items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <h3 className="font-semibold text-slate-900">{item}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Resource coming soon.
              </p>
              <p className="mt-3 text-sm font-semibold text-teal-700">
                Take Action: Volunteer, share this resource, start a campaign,
                or contact ELEVATE.
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}