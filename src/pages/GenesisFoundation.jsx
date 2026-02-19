import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, ShieldCheck, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import gfftFlyer from "../assets/gfft-flyer.pdf";

import gfft1 from "../assets/partners/gfft/gfft1.jpeg";
import gfft2 from "../assets/partners/gfft/gfft2.jpeg";
import gfft3 from "../assets/partners/gfft/gfft3.jpeg";
import gfft4 from "../assets/partners/gfft/gfft4.jpeg";
import gfft5 from "../assets/partners/gfft/gfft5.jpeg";

/* ---------- UI helpers ---------- */
const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
    {children}
  </div>
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

/* ---------- Home-style image slider card ---------- */
function ImageCarouselCard({ images = [], caption = "Community impact in action" }) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="relative aspect-[16/10] bg-slate-100">
        <img
          src={slides[idx]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable="false"
        />

        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/90 border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm">
            {caption}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 py-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={
              "h-2.5 w-2.5 rounded-full transition " +
              (i === idx ? "bg-teal-600" : "bg-slate-300 hover:bg-slate-400")
            }
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function GenesisFoundation() {
  const images = [gfft1, gfft2, gfft3, gfft4, gfft5];

  const primaryBtn =
    "inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition";
  const secondaryBtn =
    "inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO (Home-style layout) */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-teal-700">Partner</p>

            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Genesis Foundation for Fitness &amp; Tennis (GFFT)
            </h1>

            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              We partner with GFFT to expand access to tennis, mentorship, and opportunity for underserved youth.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.genesisfoundationwichita.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryBtn}
              >
                Visit GFFT Website ↗
              </a>

              <Link to="/contact" className={secondaryBtn}>
                Contact us
              </Link>

              <a href={gfftFlyer} target="_blank" rel="noreferrer" className={primaryBtn}>
                View Flyer (PDF) <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:justify-self-end w-full"
          >
            <ImageCarouselCard images={images} caption="Community impact in action" />
          </motion.div>
        </div>
      </section>

      {/* TENNIS FOR GOOD CARD */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="rounded-3xl shadow-xl">
              <CardContent className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <HeartHandshake className="h-6 w-6 text-teal-700" />
                  <p className="font-semibold text-slate-900 text-xl">Tennis for Good</p>
                </div>

                <p className="mt-3 text-slate-600">
                  Elevate Foundation uses tennis as a tool for empowerment and education access.
                </p>

                <BulletList
                  items={[
                    "Host tennis gear donation drives",
                    "Teach tennis to younger students",
                    "String tennis rackets and donate proceeds to education support",
                  ]}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* LOWER SECTION */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardContent>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-slate-700" />
                <h2 className="text-xl font-semibold">Impact</h2>
              </div>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Donated tennis gear is redistributed to underserved children through GFFT,
                helping students access sports, mentorship, and structured programs.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl" id="how-to-help">
            <CardContent>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-slate-700" />
                <h2 className="text-xl font-semibold">How to help</h2>
              </div>

              <BulletList
                items={[
                  "Donate gently used tennis gear",
                  "Host a donation drive at a school or club",
                  "Sponsor distribution and program logistics",
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
