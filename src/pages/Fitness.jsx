<section className="py-16 bg-white">
  <div className="mx-auto max-w-7xl px-4">
    <h2 className="text-3xl md:text-4xl font-bold">
      Tennis Video Tutorials
    </h2>

    <p className="mt-2 text-slate-600">
      Learn serving fundamentals, footwork, and technique through
      step-by-step demonstrations.
    </p>

    <div className="mt-8 grid lg:grid-cols-2 gap-8">
      <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            title="Serve Tutorial"
            allowFullScreen
          />
        </div>

        <div className="p-5">
          <h3 className="font-bold text-xl">
            Beginner Tennis Serve
          </h3>
          <p className="mt-2 text-slate-600">
            Learn proper grip, stance, toss, and follow-through.
          </p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID_2"
            title="Advanced Serve"
            allowFullScreen
          />
        </div>

        <div className="p-5">
          <h3 className="font-bold text-xl">
            Power & Consistency
          </h3>
          <p className="mt-2 text-slate-600">
            Improve accuracy, rhythm, and serve speed.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>