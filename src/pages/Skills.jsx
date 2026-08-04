import React from "react";
import icons from "../utils/iconAccess";
import { SiPython, SiDjango, SiPostman } from "react-icons/si";
import {
  FaUsers,
  FaPuzzlePiece,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

import { HiChatBubbleLeftRight } from "react-icons/hi2";

import { BsLightningChargeFill } from "react-icons/bs";

function Skills() {

  const professionalSkills = [
  {
    id: 1,
    icon: HiChatBubbleLeftRight,
    title: "Communication",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "Teamwork",
  },
  {
    id: 3,
    icon: FaPuzzlePiece,
    title: "Problem Solving",
  },
  {
    id: 4,
    icon: FaClock,
    title: "Punctuality",
  },
  {
    id: 5,
    icon: BsLightningChargeFill,
    title: "Adaptability",
  },
  {
    id: 6,
    icon: FaCheckCircle,
    title: "Reliability",
  },
];

const tools = [
  {
    id: 1,
    image: icons.html,
    title: "HTML",
  },
  {
    id: 2,
    image: icons.tailwind,
    title: "Tailwind CSS",
  },
  {
    id: 3,
    image: icons.js,
    title: "JavaScript",
  },
  {
    id: 4,
    image: icons.react,
    title: "React JS",
  },
  {
    id: 5,
    icon: SiPython,
    title: "Python",
  },
  {
    id: 6,
    icon: SiDjango,
    title: "Django",
  },
  {
    id: 7,
    image: icons.git,
    title: "Git",
  },
  {
    id: 8,
    image: icons.github,
    title: "GitHub",
  },
  {
    id: 9,
    icon: SiPostman,
    title: "Postman",
  },
  {
    id: 10,
    image: icons.vercel,
    title: "Vercel",
  },
  {
    id: 11,
    image: icons.figma,
    title: "Figma",
  },
  {
    id: 12,
    image: icons.vscode,
    title: "VS Code",
  },
];


  return (
    <div id="skills" className=" py-20">
      <div className="flex items-center justify-center text-white text-2xl md:text-4xl font-extrabold underline gap-3 underline-offset-11 decoration-cyan-500">
        <span className="text-white">
          My <span className="text-cyan-500">Skills</span>
        </span>
      </div>

      {/* Professional Skills */}

    <div className="flex text-2xl md:text-3xl font-black mt-20 justify-center">
        <span className="text-white">
          Soft
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent pl-2">
            Skills
          </span>
        </span>
      </div>

        <div className="flex justify-center flex-wrap gap-6 mt-10">
  {professionalSkills.map((skill) => {
    const Icon = skill.icon;

    return (
      <div
        key={skill.id}
        className="bg-[#1E293B] rounded-2xl h-[110px] w-[160px] md:h-[130px] md:w-[170px] flex flex-col items-center justify-center gap-4 border border-transparent hover:border-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,.25)] transition-all duration-300"
      >
        <Icon className="text-3xl md:text-4xl text-cyan-400 transition-transform duration-300 group-hover:scale-110" />

        <h3 className="text-white font-semibold text-center">
          {skill.title}
        </h3>
      </div>
    );
  })}
</div>
      

      {/*Tools & Technologies */}

      <div className="flex text-2xl md:text-3xl font-black mt-20 justify-center">
        <span className="text-white">
          Tools &
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent pl-2">
            Technologies
          </span>
        </span>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
  {tools.map((tool) => (
    <div
      key={tool.id}
      className="h-[110px] w-[160px] md:h-[120px] md:w-[200px]
      bg-[#1E293B] rounded-2xl shadow-2xl
      flex flex-col items-center justify-center gap-2
      md:hover:-translate-y-1
      md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)]
      transition-all duration-500"
    >
      {tool.icon ? (
  <tool.icon className={`text-4xl md:h-10 md:w-10 h-8 w-8  ${tool.icon===SiPython ? 'text-yellow-400': tool.icon===SiPostman? "text-orange-500" : 'text-green-500'}`}/>
) : (
  <img src={tool.image} alt={tool.title} className="md:h-10 md:w-10 h-8 w-8 rounded-lg object-contain" />
)}

      <span className="text-white font-semibold">
        {tool.title}
      </span>
    </div>
  ))}
</div>
</div>
  );
}

export default Skills
