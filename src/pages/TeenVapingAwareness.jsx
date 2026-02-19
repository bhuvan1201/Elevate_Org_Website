import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  HeartPulse,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

import flyerPdf from "../assets/elevate-foundation-pitch.pdf";
import posterImg from "../assets/posters/vaping-poster.jpeg"; // ✅ your poster

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

function Stat({ value, label }) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6">
        <div className="text-3xl font-bold text-slate-900">{value}</div>
        <div className="text-sm text-slate-600 mt-1">{label}</div>
      </CardContent>
    </Card>
  );
}

export default function TeenVapingAwareness() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-teal-700">Project</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-800">
              Teen Vaping Awareness
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              Led by <span className="font-semibold text-slate-800">Vihaan Ganganala</span>. A research-driven initiative
              to understand vaping behaviors and turn insights into prevention action.
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
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Stat value="445" label="Students surveyed" />
                  <Stat value="8.5%" label="Reported current vaping" />
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Key drivers: curiosity + peer influence; common locations: bathrooms + hallways.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Section title="The Problem" icon={<ShieldCheck className="h-5 w-5" />}>
              Teen vaping remains one of the most pressing adolescent health concerns in the United States. Despite
              growing awareness of health risks, vaping continues to expose teens to nicotine addiction, toxic chemicals,
              and long-term neurological harm.
            </Section>

            <Section title="Why It Matters" icon={<HeartPulse className="h-5 w-5" />}>
              <BulletList
                items={[
                  "Nicotine affects teen brain development",
                  "Peer pressure and flavored products increase initiation",
                  "Awareness alone does not always translate to behavior change",
                ]}
              />
            </Section>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Section title="Actions Taken" icon={<ClipboardList className="h-5 w-5" />}>
              <BulletList
                items={[
                  "Designed and conducted a local survey of 445 high school students",
                  "Analyzed vaping behaviors, access, peer influence, and awareness",
                  "Compared Wichita-area data with Kansas and national trends",
                  "Created school-ready presentations and prevention resources",
                  "Engaged state leadership for potential public health funding pathways",
                ]}
              />
            </Section>

            <Section title="Key Findings & Results" icon={<BarChart3 className="h-5 w-5" />}>
              <BulletList
                items={[
                  "8.5% of surveyed students reported current vaping",
                  "Curiosity and peer influence were the most common motivators",
                  "Bathrooms and hallways were the most reported locations of use",
                  "Awareness of harm was high, yet access and social pressure persisted",
                ]}
              />
            </Section>
          </div>

          <div className="grid md:grid-cols-2 gap-6" id="resources">
            <Section title="Resources" icon={<ClipboardList className="h-5 w-5" />}>
              <BulletList
                items={[
                  "Teen-friendly vaping factsheets",
                  "Family discussion guides",
                  "School presentation toolkit",
                  "National and Kansas cessation resources",
                ]}
              />
            </Section>

            <Section title="Ways to Help" icon={<ArrowRight className="h-5 w-5" />}>
              <div id="ways-to-help">
                <BulletList
                  items={[
                    "Host a school presentation",
                    "Sponsor prevention materials",
                    "Partner on youth health education initiatives",
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
