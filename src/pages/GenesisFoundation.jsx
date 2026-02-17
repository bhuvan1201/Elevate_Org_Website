import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
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

/* ---------- HERO BACKGROUND SLIDER ---------- */
function HeroBackgroundSlider({ images, speed = 40 }) {
  const track = [...images, ...images]; // seamless loop

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* moving images */}
      <div
        className="absolute inset-0 flex w-max"
        style={{ animation: `gfft-hero-slide ${speed}s linear infinite` }}
      >
        {track.map((src, i) => (
          <div key={i} className="h-full w-[70vw] md:w-[55vw] shrink-0">
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover contrast-110 saturate-110"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* overlay for readability (tweak these numbers if you want more/less image visibility) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/30 via-30% to-slate-200/15" />

      {/* soft top/bottom fade */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-100 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-200 to-transparent" />

      <style>{`
        /* LEFT → RIGHT */
        @keyframes gfft-hero-slide {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}

export default function GenesisFoundation() {
  const images = [gfft1, gfft2, gfft3, gfft4, gfft5]; // add more later

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
        <HeroBackgroundSlider images={images} speed={40} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-teal-700">Partner</p>

            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-slate-800">
              Genesis Foundation for Fitness &amp; Tennis (GFFT)
            </h1>

           

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.genesisfoundationwichita.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Visit GFFT Website ↗
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Contact us
              </Link>

              <a
  href={gfftFlyer}   // change to gfftFlyer on GFFT page
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl 
             border border-slate-300 bg-white text-slate-800 
             font-semibold hover:bg-slate-50 transition"
>
  View Flyer (PDF)
  <ExternalLink className="h-4 w-4" />
</a>

            </div>
          </motion.div>

          {/* RIGHT CARD */}
          
        </div>
      </section>

      {/* TENNIS FOR GOOD CARD — floating below hero */}
<section className="py-16 -mt-16 relative z-10">
  <div className="mx-auto max-w-5xl px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="rounded-3xl shadow-xl">
        <CardContent className="p-10">
          <div className="flex items-center gap-3 mb-4">
            <HeartHandshake className="h-6 w-6 text-teal-700" />
            <p className="font-semibold text-slate-800 text-xl">
              Tennis for Good
            </p>
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
      <section className="py-16">
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
