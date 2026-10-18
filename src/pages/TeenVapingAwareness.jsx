import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  HeartPulse,
  ShieldCheck,
  ExternalLink,
  Instagram,
  PlayCircle,
} from "lucide-react";

import flyerPdf from "../assets/elevate-foundation-pitch.pdf";
import posterImg from "../assets/posters/vaping-poster.jpeg"; // ✅ your poster

const AWARENESS_REEL_URL = "https://www.instagram.com/reel/Defj9VMt32_/";

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

function AwarenessReel() {
  return (
    <section
      id="awareness-reel"
      aria-labelledby="awareness-reel-title"
      className="scroll-mt-32 px-4 pt-16"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-teal-100 bg-slate-900 shadow-xl">
        <div className="grid items-center gap-10 px-5 py-8 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-3 py-1.5 text-sm font-semibold text-teal-200">
              <Instagram className="h-4 w-4" aria-hidden="true" />
              From awareness to action
            </span>
            <h2 id="awareness-reel-title" className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Meet Breathe: Quit Vaping
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              See how ELEVATE’s teen vaping research inspired Breathe: Quit
              Vaping. Watch the introduction, then share it with a friend,
              family member, or school community to keep the conversation going.
            </p>
            <a
              href={AWARENESS_REEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-2xl bg-teal-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900"
            >
              Watch on Instagram
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Opens the reel on Instagram in a new tab.
            </p>
          </div>

          <a
            href={AWARENESS_REEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch the Breathe: Quit Vaping reel on Instagram (opens in a new tab)"
            className="group relative mx-auto flex aspect-[4/5] w-full min-w-0 max-w-[380px] flex-col justify-between overflow-hidden rounded-3xl border border-teal-200/20 bg-gradient-to-br from-teal-700 via-teal-900 to-slate-950 p-7 shadow-2xl transition hover:border-teal-200/60 hover:shadow-teal-950/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-16 h-72 w-72 rounded-full border border-teal-200/15" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-6 top-28 h-48 w-48 rounded-full border border-teal-200/15 bg-teal-300/5" />
            <div className="relative flex items-center gap-2 text-sm font-medium text-teal-100">
              <Instagram className="h-5 w-5" aria-hidden="true" />
              ELEVATE · Instagram Reel
            </div>
            <div className="relative py-8">
              <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition group-hover:bg-white/20">
                <PlayCircle className="h-9 w-9" aria-hidden="true" />
              </span>
              <p className="text-5xl font-extrabold tracking-tight text-white">Breathe</p>
              <p className="mt-2 text-xl font-medium text-teal-100">Quit Vaping</p>
              <p className="mt-4 text-sm leading-relaxed text-teal-100/80">An introduction from ELEVATE</p>
            </div>
            <div className="relative flex items-center justify-between gap-3 border-t border-white/20 pt-5 font-semibold text-white">
              <span>Play on Instagram</span>
              <ExternalLink className="h-5 w-5 shrink-0" aria-hidden="true" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function TeenVapingAwareness() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 to-slate-200 pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-teal-700">Project</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-800">
              Teen Vaping Awareness Campaign
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              Vihaan’s Teen Vaping Awareness project uses student surveys, research, and peer education to help teens understand the risks of vaping, nicotine addiction, and the impact of vaping on brain development. Through ELEVATE, this work can grow into school presentations, student campaigns, posters, videos, and community awareness events.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#ways-to-help"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Ways to Help <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#awareness-reel"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Watch the Reel <PlayCircle className="h-4 w-4" aria-hidden="true" />
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

      <AwarenessReel />

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
