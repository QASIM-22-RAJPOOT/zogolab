import React from "react";
import AboutCard from "../cardcomponent/AboutCard.jsx";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 min-h-[calc(100vh-76px)] bg-[#080808] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="bg-gradient-to-r from-[#ff35d1] via-[#a55cff] to-[#2d8cff] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            About Zogo Lab
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            We are a creative technology studio specializing in crafting
            cutting-edge games, immersive apps, and digital experiences. Our
            team combines artistic vision with technical mastery to deliver
            products that captivate and inspire.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AboutCard
            title="Creativity"
            desc="We bring bold creative vision to every project, blending art and technology to craft unique experiences."
            color="#ff2aa3"
            iconType="creativity"
          />

          <AboutCard
            title="Innovation"
            desc="Pushing boundaries with emerging technologies and forward-thinking solutions that set new standards."
            color="#9b5cff"
            iconType="innovation"
          />

          <AboutCard
            title="Technical Expertise"
            desc="Deep technical knowledge across platforms and engines, ensuring robust and performant results."
            color="#ff7a00"
            iconType="technical"
          />

          <AboutCard
            title="Visual Excellence"
            desc="Stunning visuals and polished aesthetics that elevate every pixel and create lasting impressions."
            color="#1683ff"
            iconType="visual"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
