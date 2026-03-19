import profileBW from "../assets/profilepic.png";     // B/W image
import profileColor from "../assets/profile-color.jpg"; // Color image
import { HERO_CONTENT } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { TbTools } from "react-icons/tb";
import { useState, useEffect } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut"},
  },
};

const Hero = () => {
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };

  return (
    <motion.section
  id="about"
  onMouseMove={handleMouseMove}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative min-h-screen flex items-center px-6 lg:px-12 py-24 overflow-hidden scroll-mt-24 bg-white dark:bg-black"
    >

      {/* BG Grid */}
      <div className="absolute inset-0 -z-20 opacity-20 
        bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] 
        dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]
        bg-[size:40px_40px]"
      ></div>

      {/* Glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] -z-10"
        style={{ x: smoothX, y: smoothY }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-20 relative z-10">

        {/* LEFT */}
        <motion.div
        className="max-w-xl order-2 lg:order-1"
          variants={container}
          initial="hidden"
          whileInView="show"
viewport={{ once: true }}
        >

         <motion.h2
  variants={item}
  className="inline-block px-4 py-1 mb-4 text-xs font-medium tracking-wider 
  uppercase rounded-full 
  bg-purple-500/10 text-purple-600 
  dark:bg-purple-500/20 dark:text-purple-300 
  border border-purple-400/20"
>
  Introduction
</motion.h2>

          <motion.h1
  variants={item}
  className="text-4xl sm:text-5xl font-bold mb-6 
  bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
  bg-clip-text text-transparent animate-gradient"
>
  About me
</motion.h1>

          <motion.p
            variants={item}
            className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* 🔥 CARDS */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >

            {/* Education */}
            <div className="p-5 rounded-xl 
bg-white/40 dark:bg-white/5 
backdrop-blur-xl 
border border-white/20 
shadow-lg 
hover:shadow-purple-500/20 
hover:-translate-y-2 
hover:scale-[1.03]
active:scale-[0.98]
transition-all duration-300 ease-out">
              <FaGraduationCap className="text-xl mb-3 text-black dark:text-white" />
              <p className="text-black dark:text-white font-semibold">Education</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                BTech in Information Technology
              </p>
            </div>

            {/* Projects */}
            <div className="p-5 rounded-xl 
bg-white/40 dark:bg-white/5 
backdrop-blur-xl 
border border-white/20 
shadow-lg 
hover:shadow-purple-500/20 
hover:-translate-y-2 
hover:scale-[1.02]
transition-all duration-300">
              <FaBriefcase className="text-xl mb-3 text-black dark:text-white" />
              <p className="text-black dark:text-white font-semibold">Projects</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Built 5+ projects
              </p>
            </div>

            {/* Tools */}
            <div className="p-5 rounded-xl 
bg-white/40 dark:bg-white/5 
backdrop-blur-xl 
border border-white/20 
shadow-lg 
hover:shadow-purple-500/20 
hover:-translate-y-2 
hover:scale-[1.03]
transition-all duration-300">
              <TbTools className="text-xl mb-3 text-black dark:text-white" />
              <p className="text-black dark:text-white font-semibold">Tools I Use</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                VS Code, Git, Postman
              </p>
            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
        className="order-1 lg:order-2"
          initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
        >
          <motion.div
            whileHover={{
              rotateX: 5,
  rotateY: -5,
  scale: 1.03,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-3xl bg-gray-200 dark:bg-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/10"></div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-xl opacity-70"></div>

            <div className="relative group">
  
  {/* Glow Border */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative group p-2">

  {/* Glow */}
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-xl opacity-70"></div>

  {/* Image */}
  <img
    src={darkMode ? profileBW : profileColor}
  alt="profile"
  className="relative w-full max-w-sm rounded-2xl object-cover 
  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
  group-hover:scale-105 hover:scale-[1.03] active:scale-[0.98]
  transition duration-500 ease-out"
  />
</div>
</div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;