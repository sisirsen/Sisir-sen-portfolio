import React, { useRef } from "react";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  const formData = useRef("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r6rhhz3",
        "template_h4tw7cw",
        formData.current,
        "VTcyvp3gUju7HCnFi",
      )
      .then(() => {
        try {
          toast.success("Message sent successfully!");
          formData.current.reset();
        } catch (error) {
          toast.error("Something went wrong!");
        }
      });
  };
  return (
    <div id="contact" className="py-20 p-6 md:p-10 md:py-27">
      <div className="flex items-center justify-center text-2xl md:text-4xl text-cyan-500 md:font-extrabold underline underline-offset-10">
        <span className="text-white">
          Get In <span className="text-cyan-500">Touch</span>
        </span>
      </div>
      {/*main*/}
      <div className="md:flex gap-10">
        <div>
          <div className="mt-15">
            <div className="text-2xl text-white font-bold">
              Contact Information
            </div>
            <div className="mt-3 text-gray-400 max-w-3xl text-md">
              Feel free to reach out to me for any questions or opportunities.
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.{" "}
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-3">
                <FiMapPin className="p-3 h-[40px] w-[40px] rounded-xl bg-slate-700 shadow-2xl text-cyan-500" />
                <div className="text-white font-bold">
                  Location
                  <div className="text-gray-400">Kolkata,West Bengal</div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <FiMail className="p-3 h-[40px] w-[40px] rounded-xl bg-slate-700 shadow-2xl text-cyan-500" />
                <div className="text-white font-bold">
                  Email
                  <div className="text-gray-400">worksisir01@gmail.com</div>
                </div>
              </div>

              <div className="mt-8 text-lg font-bold">
                <div className="text-white">Find Me Here</div>
                <div className="flex gap-3 mt-4 ">
                  <a
                    href="https://github.com/sisirsen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="p-3 h-[40px] w-[40px] md:hover:-translate-y-1 md:hover:ease-in-out md:hover:shadow-[0_10px_18px_rgb(255,255,255,0.1)] md:hover:transition-all md:hover:duration-500  bg-slate-700 rounded-xl md:hover:bg-cyan-500 text-cyan-500 md:hover:text-purple-800 transition duration-200 active:bg-cyan-800" />
                  </a>

                  <a
                    href="https://in.linkedin.com/in/sisir-sen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin className="p-3 h-[40px] w-[40px] md:hover:-translate-y-1 md:hover:ease-in-out md:hover:shadow-[0_10px_18px_rgb(255,255,255,0.1)] md:hover:transition-all md:hover:duration-500 bg-slate-700 rounded-xl md:hover:bg-cyan-500 text-cyan-500 md:hover:text-purple-800 transition duration-200 active:bg-cyan-800" />
                  </a>

                  <a
                    href="https://x.com/sisir_codes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiTwitter className="p-3 h-[40px] w-[40px] md:hover:-translate-y-1 md:hover:ease-in-out md:hover:shadow-[0_10px_18px_rgb(255,255,255,0.1)] md:hover:transition-all md:hover:duration-500 bg-slate-700 rounded-xl md:hover:bg-cyan-500 text-cyan-500 md:hover:text-purple-800 transition duration-200 active:bg-cyan-800" />
                  </a>
                </div>
              </div>

              <div className="mt-10 ">
  <div className="flex items-center gap-3">
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
    </span>

    <h3 className="font-semibold text-white">
      Available for Work
    </h3>
  </div>

  <p className="mt-3 text-gray-400">
    Open to internships, full-time opportunities, and collaborations.
  </p>
</div>
            </div>
          </div>
        </div>

        <form autoComplete="off" onSubmit={sendEmail} ref={formData}>
          <div className="mt-12 rounded-3xl px-8 py-8 bg-black/30">
            <div>
              <label
                className="text-white flex justify-center md:justify-normal font-bold"
                htmlFor="user_name"
              >
                Your Name
              </label>
              <input
                className="border-2 mt-3 text-white bg-gray-800/40 shadow-2xl focus:border-cyan-500/50  p-2 outline-none h-[50px] w-full md:w-[600px] rounded-xl border-white/10 "
                name="user_name"
                id="user_name"
                spellCheck="false"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mt-5">
              <label
                className="text-white flex justify-center md:justify-normal font-bold"
                htmlFor="user_email"
              >
                Your Email
              </label>
              <input
                className="border-2 mt-3 text-white bg-gray-800/40 shadow-2xl focus:border-cyan-500/50 p-2 outline-none h-[50px] w-full md:w-[600px] rounded-xl border-white/10 "
                name="user_email"
                id="user_email"
                type="email"
                placeholder="Enter your Email"
                spellCheck="false"
                required
              />
            </div>

            <div className="mt-5">
              <label
                className="text-white flex justify-center md:justify-normal font-bold"
                htmlFor="user_subject"
              >
                Subject
              </label>
              <input
                className="border-2 mt-3 text-white bg-gray-800/40 shadow-2xl focus:border-cyan-500/50  p-2 outline-none h-[50px] w-full md:w-[600px] rounded-xl border-white/10"
                placeholder="Enter your subject"
                name="user_subject"
                id="user_subject"
                spellCheck="false"
                type="text"
                required
              />
            </div>

            <div className="mt-5">
              <label
                className="text-white flex justify-center md:justify-normal font-bold"
                htmlFor="user_message"
              >
                Message
              </label>
              <textarea
                className="border-2 mt-3 text-white bg-gray-800/40 shadow-2xl focus:border-cyan-500/50 p-3 overflow-hidden outline-none h-[150px] w-full md:w-[600px] rounded-xl border-white/10"
                placeholder="Enter the message"
                name="user_message"
                id="user_message"
                spellCheck="false"
                type="text"
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-center mt-8">
              <button className="flex items-center justify-center cursor-pointer gap-1 w-[600px] h-[50px] text-white font-bold bg-gradient-to-r from-cyan-500  via-blue-500 to-purple-600 active:from-cyan-700
  active:to-blue-800 rounded-full outline-none md:hover:-translate-y-1  md:hover:shadow-[0_8px_18px_rgba(255,255,255,0.2)] md:transition-all md:ease-in-out md:duration-400 active:bg-cyan-600">
                Send Message <FiSend className="h-5 w-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
