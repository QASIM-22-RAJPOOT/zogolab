const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero-bg.webp"
        aria-hidden="true"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-black/60" />

      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pt-24 sm:px-6 lg:px-10">
        <div className="w-full max-w-3xl text-center lg:text-left">
          <h1 className="bg-gradient-to-r from-[#ff35d1] via-[#9b5cff] to-[#2d8cff] bg-clip-text text-4xl font-extrabold tracking-[0.08em] text-transparent sm:text-5xl md:text-7xl lg:text-8xl">
            ZOGO LAB
            <span className="sr-only">
              {" "}
              — Game, App & Web Development Studio in Lahore, Pakistan
            </span>
          </h1>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Game, App & Web Development
            <br className="hidden sm:block" />
            Built for Modern Digital Experiences
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg lg:mx-0">
            Zogo Lab is a game, app and web development studio in Lahore,
            Pakistan. We create mobile games, modern websites, applications,
            UI/UX designs, software solutions and immersive 3D digital
            experiences.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base lg:mx-0">
            From interactive games and responsive websites to custom software
            and digital products, our team focuses on performance, creativity
            and user-friendly experiences.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#portfolio"
              aria-label="View Zogo Lab game, app and web development projects"
              className="w-full max-w-[220px] rounded-xl bg-gradient-to-r from-[#8d4cff] to-[#ff25b8] px-6 py-4 text-center text-base font-bold text-white shadow-[0_0_30px_rgba(255,37,184,0.35)] transition-all duration-300 hover:-translate-y-1 sm:w-[180px]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              aria-label="Contact Zogo Lab development studio"
              className="w-full max-w-[220px] rounded-xl border-2 border-[#2d8cff] px-6 py-4 text-center text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2d8cff]/15 sm:w-[180px]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;