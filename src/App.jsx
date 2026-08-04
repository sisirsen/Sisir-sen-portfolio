import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/buttons/ScrollToTop";
import { motion } from "framer-motion";

function App() {
  return (
    <>

 <Navbar />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
     

      <Home />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <ScrollToTop />

      
    </motion.div>

    <Footer />

    </>
  );
}

export default App;
