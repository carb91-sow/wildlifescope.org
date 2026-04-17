{/* Hero */}
<section className="relative min-h-screen overflow-hidden border-b border-white/10">
  <div className="absolute inset-0">
    <Image
      src="/images/hero-field-research.jpg" // Updated path
      alt="WildlifeScope field research team at night"
      fill
      priority
      className="object-cover object-center brightness-125 contrast-90" // Brightens the image by 25%
      sizes="100vw"
    />
    
    {/* LIGHTER OVERLAYS: Reduced from 5 layers to 2 */}
    {/* A soft dark gradient only at the bottom to transition into the next section */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0b0d09]" />
    
    {/* A very subtle side gradient to help text readability without darkening the photo */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
  </div>

  <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-20 lg:px-8 lg:pt-36 lg:pb-24">
    <div className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-6 inline-flex items-center gap-3"
      >
        <span className="h-12 w-2 bg-[#f4c542]" />
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f4c542]">
          WildlifeScope
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.8 }}
        className="max-w-5xl font-serif text-5xl font-bold leading-[0.96] text-white md:text-7xl lg:text-8xl drop-shadow-lg"
      >
        Editorial stories from the front lines of conservation
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.8 }}
        className="mt-8 max-w-3xl text-lg leading-8 text-white md:text-xl drop-shadow-md"
      >
        WildlifeScope is a platform for biodiversity protection and 
        science-based storytelling from the front lines of research in Bangladesh.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24, duration: 0.8 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <Link
          href="/conservation"
          className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd45c] shadow-lg"
        >
          Explore Our Work
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-[#f4c542] hover:text-[#f4c542]"
        >
          Get Involved
        </Link>
      </motion.div>
    </div>
  </div>
</section>
