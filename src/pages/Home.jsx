import React from "react";
import icons from "../../src/utils/iconAccess";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      id="home"
      className="md:p-20 p-7 py-20 md:py-32 md:flex items-center md:justify-between w-full "
    >
      <div>
        <div className="flex justify-center md:justify-normal items-center gap-2 py-2 rounded-full text-green-400 text-sm font-medium">
    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
    Available for Work
</div>
        <div className="text-white flex justify-center md:justify-normal gap-3 text-4xl md:text-6xl font-extrabold flex-wrap">
          <span>Hi, I'm</span>

          <div className="shine-text ">
            SISIR
          </div>
        </div>

        {/* <h1 className="text-6xl font-bold">
  Hi, I'm{" "}
  <span className="shine-text">
    SISIR
  </span>
</h1> */}


        <div className="mt-6 flex justify-center md:justify-normal">
          <TypeAnimation
            sequence={["Frontend Developer", 1000, "React Developer", 1000, "Python Developer", 1000, "Django Developer", 1000]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className=" text-lg md:text-2xl font-bold text-white"
          />
        </div>

        <div className="text-gray-400 mt-5 pl-4 md:pl-0 text-sm md:text-md text-center mx-auto md:text-left max-w-lg">
          <span>
           I build modern, scalable, and responsive web applications using React, JavaScript, Django REST Framework, and REST APIs with a focus on clean UI, performance, and maintainable code.
          </span>
        </div>

        <div className="flex justify-center md:justify-normal items-center gap-6 mt-8">
          <a
            href="#contact"
            className="py-3 px-6 flex justify-center items-center cursor-pointer font-bold text-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 active:from-purple-800 active:to-blue-800 rounded-xl md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:hover:transition-all md:hover:duration-500"
          >
            <span className=" animate-pulse font-bold hover:animate-none">Hire Me</span>
          </a>

          <a
            href="#projects"
            className="text-cyan-400 flex items-center justify-center border-2 cursor-pointer hover:bg-gray-800 py-3 px-5 rounded-xl transition-all duration-200"
          >
            <span className=" font-bold "> View Work</span>
          </a>
        </div>

        <div className=" flex items-center justify-center md:flex md:justify-normal gap-4 mt-8 ">
          <a
            href="https://github.com/sisirsen"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] cursor-pointer rounded-full bg-black flex items-center justify-center md:hover:bg-cyan-800 transition-all duration-300 md:hover:-translate-y-1 md:ease-in-out md:hover:transition-all md:hover:duration-500 active:hover:bg-cyan-800 hover:rotate-12"
          >
            <FaGithub className="text-white text-2xl" />
          </a>

          <a
            href="https://in.linkedin.com/in/sisir-sen"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] cursor-pointer rounded-full bg-black flex items-center justify-center md:hover:bg-cyan-800 transition-all duration-300 md:hover:-translate-y-1 md:ease-in-out md:hover:transition-all md:hover:duration-500 active:hover:bg-cyan-800 hover:rotate-12"
          >
            <FaLinkedinIn className="text-white text-xl" />
          </a>

          <a
            href="https://x.com/sisir_codes"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] cursor-pointer rounded-full bg-black flex items-center justify-center md:hover:bg-cyan-800 transition-all duration-300 md:hover:-translate-y-1 md:ease-in-out md:hover:transition-all md:hover:duration-500 active:hover:bg-cyan-800 hover:rotate-12"
          >
            <FaXTwitter className="text-white text-xl" />
          </a>
        </div>

       <div className="flex flex-wrap justify-center md:justify-normal gap-3 mt-8">
  {["React", "JavaScript", "Django REST",].map((tech) => (
    <span
      key={tech}
      className="px-4 py-2 rounded-xl border border-cyan-800 bg-slate-800/50 text-sm text-gray-300 hover:border-green-500 hover:text-cyan-500 transition-all duration-300 cursor-default"
    >
      {tech}
    </span>
  ))}
</div>
      </div>

      {/* <div className="flex justify-center md:flex md:justify-normal ">
        <img
         
          src={icons.MyImage}
          alt="image"
        />
      </div> */}

      <motion.div
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <img  className=" mt-15 md:mt-8 shadow-[0px_0px_18px_#263d84] md:hover:-translate-y-2 md:hover:shadow-[0px_0px_18px_rgba(255,255,255,0.3)] rounded-full transition-all duration-500 md:h-[450px] md:w-[450px] overflow-hidden object-cover " src={icons.MyImage} alt="Profile" />
</motion.div>
    </div>
  );
}

export default Home;
