import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
    {children}
  </div>
);

const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

const FITNESS_TOPICS = [
  "Tennis basics",
  "Footwork drills",
  "Strength training",
  "Staying active",
  "Sports confidence",
];

export default function Fitness() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold text-teal-700">Learn</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
              Sports & Fitness
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Beginner-friendly tennis and fitness resources to help younger students
              stay active, build confidence, and learn safe sports habits.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#fitness-resources"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Explore Resources <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Request a Video Topic
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="fitness-resources" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Fitness Resources</h2>
          <p className="mt-2 text-slate-600">
            Tennis basics, footwork, strength training, and confidence-building resources.
          </p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FITNESS_TOPICS.map((topic) => (
              <Card key={topic} className="rounded-3xl">
                <CardContent className="p-7">
                  <div className="h-12 w-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                    <Dumbbell className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-xl font-bold">{topic}</h3>
                  <p className="mt-2 text-slate-600">
                    Resource/video coming soon.
                  </p>

                  <p className="mt-5 text-sm font-semibold text-teal-700">
                    Take Action: Volunteer, share this resource, start a campaign, or contact ELEVATE.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-6 flex gap-3">
            <ShieldCheck className="h-6 w-6 text-amber-700 shrink-0" />
            <p className="text-amber-900">
              Fitness activities should be completed with parent, teacher, or coach supervision.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}