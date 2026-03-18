import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-6 lg:px-12 py-24 scroll-mt-24 bg-white dark:bg-black"
    >

      {/* 🔥 Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* 🔥 Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-16 text-center text-4xl sm:text-5xl font-semibold bg-gradient-to-r 
        from-gray-800 via-gray-600 to-gray-500 
        dark:from-white dark:via-gray-300 dark:to-gray-500 
        bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={container}
        className="space-y-12"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-2xl overflow-hidden 
            border border-gray-300 dark:border-white/10 
            bg-gray-100 dark:bg-white/5 
            backdrop-blur-xl shadow-xl 
            hover:border-purple-400/40 transition"
          >

            {/* 🔥 Glow Border Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl"></div>

            <div className="relative flex flex-col lg:flex-row">

              {/* IMAGE */}
              <div className="relative w-full lg:w-1/2 overflow-hidden">

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-black/5 dark:group-hover:bg-black/20 transition duration-500 z-10"></div>

                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] sm:h-[260px] lg:h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="relative p-6 flex flex-col justify-between w-full lg:w-1/2">

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* 🔥 Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full 
                      bg-gray-200 dark:bg-white/10 
                      text-gray-700 dark:text-gray-300 
                      border border-gray-300 dark:border-white/10 
                      hover:bg-gray-300 dark:hover:bg-white/20 
                      hover:scale-105 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 🔥 Buttons */}
                <div className="flex gap-3 mt-6 flex-wrap">

                  {/* Live Demo */}
                  <motion.a
                    href={project.liveLink || "#"}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 text-sm rounded-full font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:opacity-90 transition"
                  >
                    Live Demo
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    href={project.githubLink || "#"}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 text-sm rounded-full 
                    border border-gray-300 dark:border-white/20 
                    text-gray-700 dark:text-gray-300 
                    hover:bg-gray-200 dark:hover:bg-white/10 
                    hover:text-black dark:hover:text-white transition"
                  >
                    GitHub
                  </motion.a>

                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
};

export default Projects;