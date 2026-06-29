const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Concept & Planning",
      desc: "Research, strategy, and creative direction",
      gradient: "from-[#a855f7] to-[#ec4899]",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      desc: "Visual concepts, wireframes, and interactive prototypes",
      gradient: "from-[#3b82f6] to-[#8b5cf6]",
    },
    {
      number: "03",
      title: "Development",
      desc: "Clean code, agile sprints, and technical excellence",
      gradient: "from-[#3b82f6] to-[#6366f1]",
    },
    {
      number: "04",
      title: "Testing & QA",
      desc: "Rigorous testing, bug fixing, and quality assurance",
      gradient: "from-[#ec4899] to-[#f97316]",
    },
    {
      number: "05",
      title: "Launch & Support",
      desc: "Deployment, monitoring, and ongoing maintenance",
      gradient: "from-[#f97316] to-[#ec4899]",
    },
  ];

  const whyChoose = [
    {
      title: "Creative Game Experiences",
      desc: "We craft engaging, immersive gaming worlds with stunning visuals and compelling gameplay that captivate players.",
      color: "#ec4899",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
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
      title: "Modern Technology Stack",
      desc: "Built with cutting-edge tools and frameworks to ensure performance, scalability, and future-proof digital solutions.",
      color: "#8b5cf6",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <rect
            x="7"
            y="7"
            width="10"
            height="10"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Professional Design Quality",
      desc: "Every pixel is crafted with precision. Our designs blend aesthetics with functionality for premium visual experiences.",
      color: "#1683ff",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
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
      title: "Complete Digital Solutions",
      desc: "From concept to deployment, we provide end-to-end solutions for games, apps, web, and creative design.",
      color: "#f97316",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
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
  ];

  return (
    <main
      id="process"
      className="scroll-mt-24 bg-[#070707] text-white"
    >
      {/* Development Process */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-[#8b5cf6]/30 bg-[#120b1c] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#a855f7]">
              How We Work
            </span>

            <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
              Development Process
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500">
              From concept to launch, we follow a proven workflow that delivers
              exceptional results
            </p>
          </div>

          <div className="relative mt-20">
            <div className="absolute left-[10%] right-[10%] top-[36px] hidden h-[2px] bg-gradient-to-r from-[#ec4899] via-[#3b82f6] to-[#ec4899] opacity-40 lg:block"></div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center"
                >
                  <div
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.gradient} text-lg font-extrabold shadow-[0_0_35px_rgba(168,85,247,0.55)]`}
                  >
                    {step.number}
                  </div>

                  <div className="h-12 w-[2px] bg-gradient-to-b from-[#8b5cf6] to-transparent"></div>

                  <h2 className="text-base font-extrabold">{step.title}</h2>

                  <p className="mt-4 max-w-[185px] text-sm leading-6 text-gray-500">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-[#0b0b0b] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-[#ec4899]/30 bg-[#1b0d17] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#ec4899]">
              Why Us
            </span>

            <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
              Why Choose Zogo Lab
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500">
              We combine creativity, technology, and passion to deliver
              outstanding digital experiences
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-2">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="absolute inset-0 rounded-2xl border opacity-80 transition-all duration-300 group-hover:opacity-100"
                  style={{ borderColor: item.color }}
                ></div>

                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                  style={{
                    background: `radial-gradient(circle at top left, ${item.color}, transparent 45%)`,
                  }}
                ></div>

                <div className="relative z-10">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{
                      color: item.color,
                      backgroundColor: `${item.color}18`,
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Process;