import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  HeartPulse,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

import posterImg from "../assets/posters/obesity-poster.jpeg"; // ✅ your poster
import flyerPdf from "../assets/obesity-pitch.pdf";

const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
    {children}
  </div>
);
const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

function Section({ title, icon, children }) {
  return (
    <Card className="rounded-2xl">
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="text-slate-700">{icon}</span>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="mt-3 text-slate-600 leading-relaxed">{children}</div>
      </CardContent>
    </Card>
  );
}

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

export default function AdolescentObesity() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 to-slate-200 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-teal-700">Project</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-800">
              The Impact of Poverty & Food Access on Adolescent Obesity
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              Led by <span className="font-semibold text-slate-800">Hitha Ganganala</span>. A data-driven look at how
              affordability and structural barriers shape teen health outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#ways-to-help"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Ways to Help <ArrowRight className="h-4 w-4" />
              </a>

              <a
                              href={flyerPdf}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
                            >
                              View Pitch (PDF)
                            </a>

             

              {/* ✅ KEEP: top View Poster button */}
              <a
                href={posterImg}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                View Poster <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="rounded-3xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3">
                  <HeartPulse className="h-6 w-6 text-teal-700" />
                  <p className="font-semibold text-slate-800">At a glance</p>
                </div>
                <p className="mt-4 text-slate-600">
                  Obesity disproportionately affects teens from low-income households due to limited access to nutritious food,
                  higher food costs, and barriers to physical activity.
                </p>
                <div className="mt-4 text-sm text-slate-500">
                  Local survey: 135 Wichita-area students + state/national comparisons.
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Section title="The Problem" icon={<ShieldCheck className="h-5 w-5" />}>
              Adolescent obesity disproportionately affects teens from low-income households due to limited access to nutritious food,
              higher food costs, and environmental barriers to physical activity.
            </Section>

            <Section title="Why It Matters" icon={<HeartPulse className="h-5 w-5" />}>
              <BulletList
                items={[
                  "Increased risk of diabetes, cardiovascular disease, and mental health challenges",
                  "Long-term health inequities begin in adolescence",
                  "Food access is a structural issue—not an individual failure",
                ]}
              />
            </Section>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Section title="Actions Taken" icon={<ClipboardList className="h-5 w-5" />}>
              <BulletList
                items={[
                  "Conducted a student health survey of 135 Wichita-area students",
                  "Analyzed national and Kansas data on obesity and poverty levels",
                  "Studied affordability of nutritious meals across income brackets",
                  "Created data visualizations for community and policy audiences",
                ]}
              />
            </Section>

            <Section title="Key Findings & Results" icon={<BarChart3 className="h-5 w-5" />}>
              <BulletList
                items={[
                  "Obesity rates were highest among teens living below the poverty line",
                  "Food affordability declined after 2021 at both state and national levels",
                  "Wichita teens showed lower overall obesity rates but higher risk behaviors",
                  "Time, cost, and convenience were major barriers to healthy eating",
                ]}
              />
            </Section>
          </div>

          <div className="grid md:grid-cols-2 gap-6" id="solutions">
            <Section title="Solutions Proposed" icon={<ClipboardList className="h-5 w-5" />}>
              <BulletList
                items={[
                  "Expand access to affordable nutritious food",
                  "Strengthen school meal programs",
                  "Community-based nutrition education",
                  "Safe spaces for physical activity",
                ]}
              />
            </Section>

            <Section title="Ways to Help" icon={<ArrowRight className="h-5 w-5" />}>
              <div id="ways-to-help">
                <BulletList
                  items={[
                    "Partner with schools and food programs",
                    "Sponsor educational materials",
                    "Support nutrition equity initiatives",
                  ]}
                />
                <div className="mt-5">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition"
                  >
                    Contact us to partner <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
