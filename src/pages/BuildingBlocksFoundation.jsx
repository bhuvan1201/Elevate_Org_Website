import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>{children}</div>
);
const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

function BulletList({ items }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-teal-600 shrink-0" />
          <span className="text-slate-700">{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BuildingBlocksFoundation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold text-teal-700">Partner</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-800">
              Building Blocks Foundation
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              We provide free Math and English tutoring through weekly live tutoring and on-demand learning content.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

                <Link
                    to="/learn"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                >
                    Go to Learn Page <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
                >
                    Request Tutoring Help
                </Link>

            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-3xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-teal-700" />
                  <p className="font-semibold text-slate-800">Tutoring & Learning</p>
                </div>
                <BulletList
                  items={[
                    "Weekly live tutoring (Building Blocks Foundation)",
                    "On-demand tutoring videos hosted on the site",
                  ]}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl" id="subjects">
            <CardContent>
              <div className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-slate-700" />
                <h2 className="text-xl font-semibold">Subjects</h2>
              </div>
              <BulletList
                items={[
                  "Math fundamentals",
                  "English grammar and writing",
                  "Homework and concept reinforcement",
                ]}
              />
              <p className="mt-4 text-sm text-slate-500">
                Add links to tutoring sign-up and video library when ready.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-slate-700" />
                <h2 className="text-xl font-semibold">How to help</h2>
              </div>
              <BulletList
                items={[
                  "Volunteer as a tutor",
                  "Sponsor learning materials",
                  "Partner with schools to expand reach",
                ]}
              />
              <div className="mt-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition"
                >
                  Contact us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
