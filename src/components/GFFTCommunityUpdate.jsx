import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { communityPhotos, communityVideo } from "./gfftCommunityMedia";

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-4";

export default function GFFTCommunityUpdate() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photo = communityPhotos[photoIndex];

  function changePhoto(offset) {
    setPhotoIndex((current) => (current + offset + communityPhotos.length) % communityPhotos.length);
  }

  function handleGalleryKeys(event) {
    // Buttons retain their native keyboard behavior; the gallery itself supports
    // arrow keys plus Home/End when focused.
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft") { event.preventDefault(); changePhoto(-1); }
    if (event.key === "ArrowRight") { event.preventDefault(); changePhoto(1); }
    if (event.key === "Home") { event.preventDefault(); setPhotoIndex(0); }
    if (event.key === "End") { event.preventDefault(); setPhotoIndex(communityPhotos.length - 1); }
  }

  return (
    <section id="tennis-community" aria-labelledby="tennis-community-title" className="scroll-mt-32 bg-gradient-to-b from-white to-teal-50/60 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-teal-700">Youth-Led Volunteering</p>
          <h2 id="tennis-community-title" className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Supporting GFFT’s Tennis Community
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Vihaan and Hitha supported a GFFT tennis program by helping coordinate
            players, keep match scores, manage court schedules, calculate results,
            present prizes, and support event cleanup.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Through this experience, they had the opportunity to contribute to the
            tennis community and support young players, turning their passion for
            tennis into meaningful community impact.
          </p>
        </motion.div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-5 md:px-8">
            <h3 className="inline-flex items-center gap-2 text-xl font-bold text-slate-900">
              <Camera className="h-5 w-5 text-teal-700" aria-hidden="true" />
              Volunteering in Action
            </h3>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">{communityPhotos.length} photos</span>
          </div>

          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="GFFT volunteer photo gallery"
            aria-describedby="community-gallery-help"
            tabIndex={0}
            onKeyDown={handleGalleryKeys}
            className={`rounded-b-3xl ${focusRing}`}
          >
            <p id="community-gallery-help" className="sr-only">Use the left and right arrow keys to browse photos, or choose a thumbnail.</p>
            <figure>
              <div className="relative flex aspect-[4/3] items-center justify-center bg-slate-950 md:aspect-[16/10]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => changePhoto(-1)}
                  aria-label="Previous volunteering photo"
                  className={`absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-900/90 text-white transition hover:bg-teal-700 md:left-5 ${focusRing}`}
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => changePhoto(1)}
                  aria-label="Next volunteering photo"
                  className={`absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-900/90 text-white transition hover:bg-teal-700 md:right-5 ${focusRing}`}
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <figcaption aria-live="polite" aria-atomic="true" className="flex flex-col gap-2 px-5 py-4 text-sm sm:flex-row sm:items-center md:px-8">
                <span className="shrink-0 font-bold text-teal-800">Photo {photoIndex + 1} of {communityPhotos.length}</span>
                <span className="text-slate-600">{photo.alt}</span>
              </figcaption>
            </figure>

            <div className="grid grid-cols-5 gap-2 border-t border-slate-100 p-4 sm:grid-cols-10 md:gap-3 md:p-6" aria-label="Choose a volunteering photo">
              {communityPhotos.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setPhotoIndex(index)}
                  aria-label={`Show photo ${index + 1}: ${item.alt}`}
                  aria-pressed={index === photoIndex}
                  className={`aspect-square min-h-11 overflow-hidden rounded-xl border-2 transition ${index === photoIndex ? "border-teal-700 ring-2 ring-teal-700 ring-offset-2" : "border-transparent opacity-75 hover:border-teal-300 hover:opacity-100"} ${focusRing}`}
                >
                  <img src={item.thumbnail} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <h3 className="inline-flex items-center gap-2 text-2xl font-bold text-slate-900">
            <PlayCircle className="h-6 w-6 text-teal-700" aria-hidden="true" />
            A Moment from the Program
          </h3>
          <p className="mt-2 text-slate-600">Vihaan and Hitha helping with event cleanup.</p>

          <figure className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <video
              src={communityVideo.src}
              poster={communityVideo.poster}
              controls
              playsInline
              preload="none"
              aria-label={`GFFT tennis community: ${communityVideo.caption}`}
              className={`aspect-video w-full bg-slate-950 object-contain ${focusRing}`}
            >
              Your browser does not support video playback. <a href={communityVideo.src}>Open this video</a>.
            </video>
            <figcaption className="flex items-center justify-between gap-4 p-4 text-sm">
              <span className="text-slate-700">{communityVideo.caption}</span>
              <span className="shrink-0 font-semibold text-teal-700">{communityVideo.duration}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
