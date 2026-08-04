import React from "react";
import icons from "../utils/iconAccess";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function Projects() {

  const projects = [
  {
    id: 1,
    number: "01",
    title: "NEXORA",
    subtitle: "Crypto Dashboard & Learning Platform",
    image: icons.nexora,
    description:
      "A cryptocurrency dashboard that provides live market data, trending coins, global statistics, interactive charts and beginner-friendly crypto learning resources.",

    technologies: [
      "React.js",
      "Tailwind CSS",
      "CoinGecko API",
    ],

    features: [
      "Live Cryptocurrency Data",
      "Trending Coins",
      "Global Statistics",
      "Learning Hub",
      "Responsive Design",
      "learning Page",
      "Crypto News",
      "Crypto Calender"
    ],

    live: "https://nexora-silk-mu.vercel.app/",
    github: "https://github.com/sisirsen/Nexora",
  },
  {
  id: 2,
  number: "02",
  title: "PORTFOLIO",
  subtitle: "Personal Developer Portfolio",
  image: icons.portfolioapp,
  description:
    "A modern and responsive portfolio website built to showcase my projects, skills, journey, and contact information with smooth animations and a clean user interface.",

  technologies: [
    "React.js",
    "Tailwind CSS",
  ],

  features: [
    "Responsive Design",
    "Modern UI",
    "Interactive Timeline",
    "Project Showcase",
    "Skills Section",
    "Contact Form",
    "Smooth Animations",
    "Dark Theme",
  ],

  live: "https://sisirsen-portfolio.vercel.app/",
  github: "https://github.com/sisirsen/Sisirsen-portfolio",
},

{
  id: 3,
  number: "03",
  title: "PLUVIA",
  subtitle: "Weather Forecast Application",
  image: icons.weatherapp,
  description:
    "A responsive weather application that fetches real-time weather information using the OpenWeather API and displays temperature, humidity, wind speed, and weather conditions.",

  technologies: [
    "HTML",
    "Tailwind CSS",
    "JavaScript",
    "OpenWeather API",
  ],

  features: [
    "Real-time Weather",
    "City Search",
    "Temperature Details",
    "Humidity & Wind",
    "Weather Icons",
    "Responsive Design",
    "API Integration",
  ],

  live: "https://pluvia-sable.vercel.app/",
  github: "https://github.com/sisirsen/Pluvia",
},

{
  id: 4,
  number: "04",
  title: "TASK MANAGEMENT APP",
  subtitle: "Task & Productivity Manager",
  image: icons.taskmanagement,
  description:
    "A task management application that allows users to add, complete, and delete tasks. It also includes a random fact section powered by an external API for a more engaging experience.",

  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "REST API",
  ],

  features: [
    "Add Tasks",
    "Delete Tasks",
    "Mark as Completed",
    "Task Management",
    "Random Fact Box",
    "REST API Integration",
    "Responsive Design",
  ],

  live: "https://todo-list-iota-silk-22.vercel.app/",
  github: "https://github.com/sisirsen/Task-Manager-App",
},

{
  id: 5,
  number: "05",
  title: "QUANTIX",
  subtitle: "Modern Calculator Application",
  image: icons.calculatorapp,
  description:
    "A modern calculator built with React featuring keyboard support, responsive design, clean UI, and smooth user interactions for everyday calculations.",

  technologies: [
    "React.js",
    "Tailwind CSS",
  ],

  features: [
    "Keyboard Support",
    "Dark Theme",
    "Responsive Layout",
    "Clean UI",
    "Modern Design",
    "Error Handling",
  ],

  live: "https://quantix-mu.vercel.app/",
  github: "https://github.com/sisirsen/Quantix",
},
];

 

  return (
    <div id="projects" className="bg-[#020617]  py-20">

       <div className="flex items-center justify-center text-2xl md:text-4xl text-cyan-500 font-extrabold underline underline-offset-10">
        <span className="text-white">
          My <span className="text-cyan-500">Projects</span>
        </span>
      </div>


<div className=" px-10 mx-auto">

  {projects.map((project, index) => (

    <section key={project.id} className=" mt-15">

      {/* Number */}

      <span className="text-cyan-400 py-1 px-3 bg-gray-600 rounded-lg text-lg ">
        {project.number}
      </span>

      {/* Title */}

      <h1 className="text-3xl md:text-5xl font-black text-white mt-3">
        {project.title}
      </h1>

      <h2 className="text-xl text-gray-400 mt-2">
        {project.subtitle}
      </h2>

      {/* Tech */}

      <div className="flex flex-wrap gap-3 mt-6">

        {project.technologies.map((tech) => (

          <span
            key={tech}
            className="text-cyan-400"
          >
            {tech}
          </span>

        ))}

      </div>

      <div className="h-px bg-slate-700 my-10"></div>

      {/* Image + Description */}

      <div
        className={`flex flex-col lg:flex-row items-center gap-16 ${
          index % 2 !== 0
            ? "lg:flex-row-reverse"
            : ""
        }`}
      >

        <div className="lg:w-1/2">

          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl"
          />

        </div>

        <div className="lg:w-1/2">

          <p className="text-gray-300 leading-8">
            {project.description}
          </p>

        </div>

      </div>

      <div className="h-px bg-slate-700 my-10"></div>

      {/* Features */}

      <div className="grid md:grid-cols-2 gap-5">

        {project.features.map((feature) => (

          <div
            key={feature}
            className="flex gap-3"
          >

            <span className="text-cyan-400">
              ✓
            </span>

            <span className="text-gray-300">
              {feature}
            </span>

          </div>

        ))}

      </div>

      <div className="h-px bg-slate-700 my-10"></div>

      {/* Buttons */}

      <div className="flex gap-8">

        <a
        target="_Blank"
        rel="noopener noreferrer"
          href={project.live}
          className="text-cyan-400 flex gap-1 items-center hover:text-purple-500"
        >
          Live Demo <FiExternalLink/>
        </a>

        <a
        target="_Blank"
        rel="noopener noreferrer"
        href={project.github}
        className="text-cyan-400 flex gap-1 items-center hover:text-purple-500"
        >
          GitHub <FiGithub/>
        </a>

      </div>

    </section>

  ))}

</div>
    </div>
  );
}

export default Projects;
