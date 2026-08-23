import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import Resume from '../assets/Resume.pdf'

function About() {
  const about = [
  {
    id: 1,
    text: "Built a strong foundation in HTML, CSS, JavaScript, and modern frontend development.",
  },
  {
    id: 2,
    text: "Built responsive web applications with React.Js, live REST API and modern UI.",
  },
  {
    id: 3,
    text: "Currently building REST APIs using Python and Django REST Framework.",
  },
  {
    id: 4,
    text: "Focused on reusable components, performance, and responsive design."
  },
  {
    id:5,
  text:"Always exploring modern web technologies and best development practices."
},
  {
    id: 6,
    text: "Excited to contribute to impactful projects while continuously learning modern web technologies.",
  },
];
  return (
    <div id="about" className="bg-[#020617]  py-20 md:p-17 md:py-27">
      <div className="flex items-center justify-center text-2xl md:text-4xl text-cyan-500 font-extrabold underline underline-offset-10">
        <span className="text-white">
          About <span className="text-cyan-500">Me</span>

        </span>
      </div>

      <div className="">
        <div className="flex justify-center p-5">
          <div className=" mt-10 relative max-w-5xl mx-auto py-10">

  {/* Vertical Line */}
  <div className="absolute left-1/2 top-0 h-full w-[2px] bg-cyan-500 -translate-x-1/2"></div>

  {about.map((item, index) => (
    <div
  key={item.id}
  className={`relative flex items-center mb-12  ${
    index % 2 === 0 ? "justify-start" : "justify-end"
  }`}
>
  <div
    className={`w-[42%] ${
      index % 2 === 0 ? "mr-16" : "ml-16"
    } bg-[#1E293B] rounded-xl p-5 shadow-xl hover:-translate-y-1
hover:shadow-cyan-500/20
transition-all
duration-300 `}
  >
    <p className="text-gray-300 text-sm md:text-md shadow-2xl text-center md:text-left">{item.text}</p>
  </div>

  {/* Circle */}
  <div className="absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-cyan-500 border-4 border-[#020617]"></div>

  {/* Horizontal Line */}
  <div
    className={`absolute top-1/2 h-[2px] bg-cyan-500 ${
      index % 2 === 0
        ? "left-[44%] w-[6%]"
        : "right-[44%] w-[6%]"
    }`}
  ></div>
</div>
  ))}
</div>
        </div>

        <div className="flex justify-center mt-12 gap-8 md:gap-40">
          <a 
          href={Resume}
          download="Sisir_Sen_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-5 flex items-center justify-center cursor-pointer font-bold text-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 active:from-purple-800 active:to-blue-800 rounded-3xl md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500">
            Resume <HiOutlineDownload className="h-5 w-5"/>
          </a>
          <a href="#contact" className="text-cyan-400 flex justify-center items-center border-2 cursor-pointer active:bg-gray-800 md:hover:bg-gray-800 h-[50px] w-[120px] transition-all duration-200 rounded-3xl">
            Connect
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
