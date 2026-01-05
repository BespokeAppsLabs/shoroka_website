"use client";

export function CTASection() {
  return (
    <section className="w-full mx-auto px-4 py-20 relative z-10">
      <div className="flex items-center flex-col justify-center px-2 md:px-10 py-12 w-full h-full">
        <h2 className="text-foreground text-3xl md:text-7xl font-bold text-center font-serif leading-tight">
          Ready to Forge Your <br />
          <span className="text-shoroka-gold italic">Digital Legacy?</span>
        </h2>
        <p className="text-foreground text-base md:text-xl max-w-2xl mt-8 text-center opacity-90 leading-relaxed">
          Partner with Shoroka Creations for premium plant hire, logistics, and
          web excellence. The future is built here.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
          <button
            type="button"
            className="px-10 py-4 bg-shoroka-gold text-shoroka-purple font-bold rounded-full hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(199,169,99,0.3)]"
          >
            CONTACT US
          </button>
          <button
            type="button"
            className="px-10 py-4 text-foreground font-bold rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors"
          >
            VIEW SERVICES
          </button>
        </div>
      </div>
    </section>
  );
}
