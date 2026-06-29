import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 lg:px-10">
        <div className="max-w-3xl text-center lg:text-left">
          <h1 className="text-6xl font-extrabold tracking-[0.12em] md:text-7xl lg:text-8xl bg-gradient-to-r from-[#ff35d1] via-[#9b5cff] to-[#2d8cff] bg-clip-text text-transparent">
            ZOGO LAB
          </h1>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Crafting Immersive
            <br />
            Digital Worlds
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300 mx-auto lg:mx-0">
            We build games, apps, and digital experiences that push creative
            boundaries
          </p>

          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">
            <a
              href="#portfolio"
              className="w-[180px] rounded-xl bg-gradient-to-r from-[#8d4cff] to-[#ff25b8] px-6 py-4 text-center text-base font-bold text-white shadow-[0_0_30px_rgba(255,37,184,0.35)] transition-all duration-300 hover:-translate-y-1"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-[180px] rounded-xl border-2 border-[#2d8cff] px-6 py-4 text-center text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2d8cff]/15"
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