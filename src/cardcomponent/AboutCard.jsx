import React from "react";
import AboutIcon from "../icons/AboutIcon.jsx";

const AboutCard = ({ title, desc, color, iconType }) => {
  return (
    <div className="group rounded-2xl border border-[#6f42ff]/30 bg-[#111111] p-7 shadow-[0_0_25px_rgba(111,66,255,0.16)] transition-all duration-300 hover:-translate-y-2 hover:border-[#8f5cff]/70 hover:shadow-[0_0_35px_rgba(143,92,255,0.35)]">
      <AboutIcon type={iconType} color={color} />

      <h2 className="mt-6 text-xl font-extrabold text-white">{title}</h2>

      <p className="mt-5 text-sm leading-7 text-gray-400">{desc}</p>
    </div>
  );
};

export default AboutCard;