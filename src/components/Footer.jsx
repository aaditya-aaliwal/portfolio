import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {

  // ✅ Add your real links here
  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/aaditya-aaliwal/",
    },
    {
      icon: FaGithub,
      url: "https://github.com/aaditya-aaliwal",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/aaditya__aaliwal/",
    },
    {
      icon: FaXTwitter,
      url: "https://x.com/AAliwal35821",
    },
    {
      icon: FaYoutube, 
      url: "https://www.youtube.com/@dem0nlive",
    },
  ];

  return (
    <footer className="relative px-6 pt-16 pb-8 mt-10
    border-t border-gray-300 dark:border-white/10 
    bg-white dark:bg-black"
    >

      {/* 🔥 Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* 🔥 Name */}
        <h2 className="text-2xl font-semibold bg-gradient-to-r 
        from-gray-800 via-gray-600 to-gray-500 
        dark:from-white dark:via-gray-300 dark:to-gray-500 
        bg-clip-text text-transparent">
          Aaditya Aaliwal
        </h2>

        {/* 🔥 Email */}
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          aadityaaaliwal@gmail.com
        </p>

        {/* 🔥 Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-gray-600 dark:text-gray-400">
          {socialLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, y: -3 }}
                className="hover:text-black dark:hover:text-white transition"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>

        {/* 🔥 Divider */}
        <div className="w-full h-[1px] bg-gray-300 dark:bg-white/10 my-8"></div>

        {/* 🔥 Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} Aaditya Aaliwal. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a 
              href="https://github.com/aaditya-aaliwal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/aaditya-aaliwal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.youtube.com/@dem0nlive" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition"
            >
              Youtube
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;