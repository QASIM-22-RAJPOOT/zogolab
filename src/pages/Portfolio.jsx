import { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Games", "Apps", "Websites", "UI/UX", "3D"];

  const projects = [
    {
      title: "Neon Drift Racing",
      desc: "High-octane arcade racer with neon-soaked cityscapes",
      category: "Games",
      tag: "Game",
      gradient: "from-[#ff2aa3] to-[#8b5cff]",
      size: "normal",
    },
    {
      title: "Pulse Fitness",
      desc: "AI-powered fitness companion with real-time tracking",
      category: "Apps",
      tag: "App",
      gradient: "from-[#8b5cff] to-[#2d8cff]",
      size: "normal",
    },
    {
      title: "Horizon Studios",
      desc: "Cinematic portfolio site for a film production house",
      category: "Websites",
      tag: "Website",
      gradient: "from-[#2d8cff] to-[#ff7a00]",
      size: "normal",
    },
    {
      title: "FinVault Dashboard",
      desc: "Premium fintech dashboard with real-time analytics",
      category: "UI/UX",
      tag: "UI/UX",
      gradient: "from-[#ff7a00] to-[#ff2aa3]",
      size: "wide",
    },
    {
      title: "Mythic Realms",
      desc: "Fantasy 3D environment design for an open-world RPG",
      category: "3D",
      tag: "3D",
      gradient: "from-[#ff2aa3] to-[#8b5cff]",
      size: "wide",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 min-h-[calc(100vh-76px)] bg-[#070707] px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-[#ff35d1] via-[#a55cff] to-[#2d8cff] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Our Portfolio
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
            A showcase of our finest work across games, apps, and digital
            experiences
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-7 py-3 text-sm font-semibold transition-all duration-300 active:scale-95 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#8b5cff] to-[#ff2aa3] text-white shadow-[0_0_25px_rgba(255,42,163,0.35)]"
                  : "bg-[#171717] text-gray-500 hover:bg-[#222222] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={`group relative h-[300px] overflow-hidden rounded-2xl bg-[#030414] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(139,92,255,0.25)] ${
                project.size === "wide" ? "lg:col-span-2" : ""
              }`}
            >
              {/* Dark Gradient Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#10144a_0%,transparent_45%),linear-gradient(145deg,#05051a_0%,#000000_75%)]"></div>

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-7">
                <span
                  className={`mb-3 w-fit rounded-full bg-gradient-to-r ${project.gradient} px-4 py-1 text-xs font-bold text-white`}
                >
                  {project.tag}
                </span>

                <h2 className="text-2xl font-extrabold text-white">
                  {project.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-16 text-center text-gray-500">No projects found.</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;