import React from "react";

const Services = () => {
  const services = [
    {
      title: "Game Development",
      desc: "From concept to launch — immersive games across mobile, PC, and console platforms.",
      color: "#ff2aa3",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M7 15h3M8.5 13.5v3M15 15h.01M17.5 15h.01M6.5 8h11C20 8 21 10 21.5 14.5c.4 3.2-.8 5.5-2.8 5.5-1.3 0-2.1-.8-3-2H8.3c-.9 1.2-1.7 2-3 2-2 0-3.2-2.3-2.8-5.5C3 10 4 8 6.5 8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "App Development",
      desc: "Native and cross-platform apps with seamless UX and peak performance.",
      color: "#8b5cff",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <rect
            x="7"
            y="3"
            width="10"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 17h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Software Solutions",
      desc: "Custom enterprise software, APIs, and scalable backend infrastructure.",
      color: "#1683ff",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M8 8L4 12l4 4M16 8l4 4-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Web Development",
      desc: "Modern, responsive websites and web apps built for speed and conversion.",
      color: "#ff7a00",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M3 12h18M12 3c2.2 2.4 3.2 5.4 3.2 9S14.2 18.6 12 21M12 3c-2.2 2.4-3.2 5.4-3.2 9s1 6.6 3.2 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Graphic Design",
      desc: "Brand identity, marketing assets, and visual storytelling that stand out.",
      color: "#d946ef",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 0-4H13a1.5 1.5 0 0 1 0-3h2a6 6 0 0 0 0-12H12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="7.5" cy="10" r="1" fill="currentColor" />
          <circle cx="10" cy="7" r="1" fill="currentColor" />
          <circle cx="14" cy="7" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      desc: "Intuitive interfaces and user journeys designed for delight and engagement.",
      color: "#ff2aa3",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M3 12l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "3D Modeling & Environment",
      desc: "Photorealistic 3D assets, environments, and animations for games and media.",
      color: "#8b5cff",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 12 20 7.5M12 12v9M12 12 4 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-24 min-h-[calc(100vh-76px)] bg-[#070707] px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-[#ff35d1] via-[#a55cff] to-[#2d8cff] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Our Services
          </h1>

          <p className="mt-5 text-base text-gray-500 md:text-lg">
            End-to-end creative and technical solutions for the digital age
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-[#131313] p-7 transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="absolute left-0 top-0 h-[2px] w-full"
                style={{
                  background: `linear-gradient(to right, ${service.color}, transparent)`,
                }}
              ></div>

              <div
                className="absolute inset-0 rounded-2xl border opacity-60 transition-all duration-300 group-hover:opacity-100"
                style={{ borderColor: service.color }}
              ></div>

              <div className="relative z-10">
                <div style={{ color: service.color }}>{service.icon}</div>

                <h2 className="mt-6 text-lg font-extrabold text-white">
                  {service.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-500">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;