import React from "react";
import icons from "../utils/iconAccess";

const Footer = () => {
  return (
    <footer className="bg-[#05091A] text-white px-6 py-6">
     
      <div className="flex justify-between w-full  ">
       
        <div>
          <h1
            className="bg-gradient-to-r from-blue-500 to-purple-500 
               bg-clip-text text-transparent 
               text-2xl font-bold 
               w-fit "
          >
            SISIR SEN
          </h1>
          <p className="text-sm mt-2 text-gray-400">
            Build with modern web experiences.
          </p>
        </div>

        <div className="flex items-center text-sky-500">   
          <div className="flex gap-5">
            <button className="cursor-pointer h-6 w-6"><img src={icons.gitButton} alt="githubButton" /></button>
            <button className="cursor-pointer h-5 w-4"><img src={icons.linkedinButton} alt="linkedInButton" /></button>
            <button className="cursor-pointer h-7 w-7"><img src={icons.xButton} alt="XButton" /></button>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sisir Sen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
