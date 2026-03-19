import profileBW from "../assets/profile-bw.png";
import profileColor from "../assets/profile-color.png";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import MagneticButton from "../components/MagneticButton";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const checkTheme = () => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  };

  checkTheme();

  const observer = new MutationObserver(checkTheme);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}, []);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 5;
    const rotateY = (x / rect.width - 0.5) * -5;

    imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const reset = () => {
    imgRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const text = "Full Stack Developer";

  return (
    <motion.section
      id="home"
       initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-24 text-center overflow-hidden bg-white dark:bg-black scroll-mt-24"
    >

      {/* 🔥 Cursor Glow */}
      <div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 z-0 transition-transform duration-200"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35), transparent 60%)",
          left: position.x - 250,
          top: position.y - 250,
        }}
      />

      {/* 🌠 Stars (only in dark mode) */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden dark:block">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 🌌 Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-purple-500/20 dark:bg-purple-600/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-140px] right-[-140px] w-[450px] h-[450px] bg-blue-500/20 dark:bg-blue-600/20 blur-[140px] rounded-full"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* 👤 Profile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 relative flex items-center justify-center z-10 perspective-[1000px]"
      >
        <div className="absolute w-56 h-56 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-[100px] opacity-20 rounded-full"></div>

        <div className="relative group">
  
  {/* 🔥 Glow Ring */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

  {/* 👤 Image Container */}
  <div
    ref={imgRef}
    onMouseMove={handleMove}
    onMouseLeave={reset}
    className="relative transition-transform duration-300 ease-out"
  >
    <img
      src={darkMode ? profileBW : profileColor}
      alt="profile"
      className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full object-cover 
border-2 border-white/20 dark:border-white/10
shadow-[0_20px_60px_rgba(0,0,0,0.6)]
group-hover:scale-105 transition duration-500 ease-out"
    />
  </div>
</div>
      </motion.div>

      {/* 👋 Intro */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3 tracking-wide z-10"
      >
        Hi! I'm{" "}
<span className="font-semibold text-gray-900 dark:text-white tracking-wide">
  Aaditya Aaliwal
</span>{" "}
👋
      </motion.p>

      {/* ✨ Heading */}
      <motion.h1 initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
  className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-center tracking-tight">
  Full Stack Developer{" "}
  <span className="block text-gray-600 dark:text-gray-400">
    crafting modern web experiences.
  </span>
</motion.h1>

      {/* 📄 Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="mt-5 text-gray-600 dark:text-gray-400 max-w-md sm:max-w-xl text-sm sm:text-base leading-relaxed z-10"
      >
        I build scalable, high-performance applications using React, Node.js,
        and modern technologies to deliver exceptional user experiences.
      </motion.p>

      {/* 🔥 Buttons */}
      <motion.div initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
  className="flex flex-col gap-4 mt-8 w-full max-w-xs mx-auto sm:flex-row sm:max-w-none sm:justify-center z-10">

        {/* Contact */}
        <MagneticButton>
          <button
  onClick={() => scrollToSection("contact")}
  className="group relative overflow-hidden px-6 py-3 rounded-full 
  bg-gradient-to-r from-purple-500 to-blue-500 
  text-white font-medium 
  shadow-lg hover:shadow-purple-500/40 
  hover:scale-105 active:scale-95 
  transition-all duration-300"
>
  Contact Me →

  {/* ✨ Shine Effect */}
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute left-[-100%] top-0 h-full w-1/2 
    bg-white/30 blur-md transform rotate-12 
    transition-all duration-700 
    group-hover:left-[120%]"></span>
  </span>
</button>
        </MagneticButton>

        {/* Resume */}
        <MagneticButton>
          <a
  href="/resume.pdf"
  download
  className="group relative overflow-hidden px-6 py-3 rounded-full 
  bg-gradient-to-r from-purple-500 to-blue-500 
  text-white font-medium 
  shadow-lg hover:shadow-purple-500/40 
  hover:scale-105 active:scale-95 
  transition-all duration-300 text-center"
>
  My Resume ↓

  {/* ✨ Shine Effect */}
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute left-[-100%] top-0 h-full w-1/2 
    bg-white/30 blur-md transform rotate-12 
    transition-all duration-700 
    group-hover:left-[120%]"></span>
  </span>
</a>
        </MagneticButton>

      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
    </motion.section>
  );
};

export default Home;