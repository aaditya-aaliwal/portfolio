import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { FaJava, FaNodeJs, FaAndroid } from "react-icons/fa";
import { SiMysql, SiExpress } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <RiReactjsLine />, level: 80, color: "text-cyan-400" },
      { name: "React Native", icon: <TbBrandReactNative />, level: 85, color: "text-blue-400" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "text-green-500" },
      { name: "Express", icon: <SiExpress />, level: 75, color: "text-gray-500 dark:text-gray-300" },
      { name: "Java", icon: <FaJava />, level: 80, color: "text-red-500" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql />, level: 90, color: "text-blue-500" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Android", icon: <FaAndroid />, level: 80, color: "text-green-400" },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
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

const Skills = () => {
  return (
    <motion.section
  id="skills"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative px-6 lg:px-12 py-24 scroll-mt-24 bg-white dark:bg-black"
    >

      {/* 🔥 Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      {/* 🔥 Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center text-4xl sm:text-5xl font-bold bg-gradient-to-r 
        from-gray-800 via-gray-600 to-gray-500 
        dark:from-white dark:via-gray-300 dark:to-gray-500 
        bg-clip-text text-transparent"
      >
        Skills & Technologies
      </motion.h2>

      {/* 🔥 Categories */}
    <div className="max-w-6xl mx-auto"> 
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2"
      >
        {skills.map((group, index) => (
          <motion.div
             key={index}
  variants={item}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  className="relative p-6 rounded-2xl backdrop-blur-xl 
  bg-gray-100 dark:bg-white/5 
  border border-gray-300 dark:border-white/10 
  shadow-xl group hover:border-purple-400/40 hover:shadow-purple-500/20 transition-all duration-300 ease-out"
          >

            {/* 🔥 Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-out"></div>

            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-6 text-black dark:text-white relative z-10">
              {group.category}
            </h3>

            {/* Skills */}
            <div className="space-y-5 relative z-10">
              {group.items.map((skill, i) => (
                <div key={i}>

                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-2">
                    <div className={`flex items-center gap-2 ${skill.color}`}>
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* 🔥 Progress Bar */}
                  <div className="w-full h-2 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-full"
                    />
                  </div>

                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </motion.div>
    </div>   
    </motion.section>
  );
};

export default Skills;