import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiMoon, FiSun } from "react-icons/fi";
import logoDark from "../assets/logo-dark.png";   // for light mode
import logoLight from "../assets/logo-light.png"; // for dark mode

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // ✅ Theme with persistence
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
  stiffness: 60,
  damping: 20,
  mass: 0.5,
});

  const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

  // ✅ Apply theme
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // ✅ Scroll active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll function
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -90;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // ✅ Toggle theme
  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <>
      {/* 🔥 Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 z-50"
      />

      {/* 🔥 Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-40 px-6 lg:px-12 py-4 transition-all duration-300 ease-out ${
          scrolled
            ? "backdrop-blur-xl bg-white/70 dark:bg-black/30 border-b border-gray-300 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">

          {/* Logo */}
          <motion.div
  className="relative cursor-pointer flex items-center"
  whileHover="hover"
  initial="rest"
  animate="rest"
>
  {/* Glow Background */}
  <motion.div
    variants={{
      rest: { opacity: 0, scale: 0.8 },
      hover: { opacity: 1, scale: 1.5 },
    }}
    transition={{ duration: 0.3 }}
    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl"
  />

  {/* Logo */}
  <motion.img
  src={dark ? logoLight : logoDark}
  alt="logo"
  className="w-28 h-auto relative z-10 object-contain"
  variants={{
    rest: { scale: 1 },
    hover: { scale: 1.08 },
  }}
  initial="rest"
  whileHover="hover"
  transition={{ type: "spring", stiffness: 120, damping: 10 }}
/>
</motion.div>

          {/* 🔥 Nav Links */}
          <div className="hidden lg:flex items-center gap-10 text-gray-700 dark:text-gray-400">
            {navLinks.map((link) => (
  <button
    key={link.id}
    onClick={() => {
      setActive(link.id);
      handleScrollTo(link.id);
    }}
    className="relative group"
  >
    <span
      className={`transition duration-300 ${
    active === link.id
      ? "text-black dark:text-white"
      : "group-hover:text-black dark:group-hover:text-white"
  }`}
    >
      <div className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 transition-all duration-300 ${
  active === link.id ? "w-full" : "w-0 group-hover:w-full"
}`}></div>
      {link.label}
    </span>
  </button>
))}
          </div>

          {/* 🔥 Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            {/* 🌙 Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:scale-110 transition duration-300"
            >
              {dark ? <FiSun className="text-yellow-400" /> : <FiMoon />}
            </button>

            {/* 🔥 Contact Button */}
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-5 py-2 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition duration-300 hover:scale-105 active:scale-95"
            >
              Contact →
            </button>

          </div>

          {/* Mobile Menu */}
          {/* Mobile Right Controls */}
<div className="lg:hidden flex items-center gap-3">

  {/* 🌙 Theme Toggle OUTSIDE */}
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:scale-110 transition"
  >
    {dark ? (
      <FiSun className="text-yellow-400" size={20} />
    ) : (
      <FiMoon size={20} />
    )}
  </button>

  {/* 🍔 Menu Button */}
  <button onClick={() => setIsOpen(true)}>
    <HiMenu size={28} className="text-black dark:text-white" />
  </button>

</div>
        </div>
      </motion.nav>

      {/* 🔥 Mobile Sidebar */}
<AnimatePresence>
  {isOpen && (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut"}}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className="fixed top-0 right-0 h-full w-[75%] bg-white dark:bg-black z-50 p-6 flex flex-col"
      >
        {/* Close button */}
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsOpen(false)}>
            <HiX size={28} className="text-black dark:text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-8 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          {navLinks.map((link, i) => (
  <motion.button
    key={link.id}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: i * 0.1 }}
    onClick={() => {
      setActive(link.id);
      handleScrollTo(link.id);
      setIsOpen(false);
    }}
    className="text-left hover:text-black dark:hover:text-white transition transform hover:translate-x-2 tracking-wide"
  >
    {link.label}
  </motion.button>
))}
        </div>

        {/* Mobile Bottom */}
        <div className="mt-auto pt-10 flex justify-between items-center">
          <button
            onClick={() => handleScrollTo("contact")}
            className="text-black dark:text-white"
          >
            Contact →
          </button>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </>
  );
};

export default Navbar;