import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_chguc1p",
        "template_mro12wu",
        form.current,
        "57JjHydyUuwRar0iW"
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        e.target.reset();
        setTimeout(() => setSuccess(null), 3000);
      })
      .catch(() => {
        setSuccess(false);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 lg:px-12 py-24 scroll-mt-24 bg-white dark:bg-black"
    >

      {/* 🔥 Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl sm:text-5xl font-semibold bg-gradient-to-r 
        from-gray-800 via-gray-600 to-gray-500 
        dark:from-white dark:via-gray-300 dark:to-gray-500 
        bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      {/* Container */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // ✅ smooth delay
            },
          },
        }}
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center justify-center">

        {/* 🔥 FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md mx-auto p-8 rounded-2xl 
          bg-gray-100 dark:bg-white/5 
          backdrop-blur-xl 
          border border-gray-300 dark:border-white/10 
          shadow-xl flex flex-col gap-5"
        >

          {/* Inputs */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="px-4 py-3 bg-transparent 
border border-gray-300 dark:border-white/10 
text-black dark:text-white 
rounded-lg 
outline-none transition-all duration-300
focus:border-purple-400 
focus:ring-2 focus:ring-purple-400/30 
focus:scale-[1.02] 
hover:border-purple-300"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="px-4 py-3 bg-transparent 
border border-gray-300 dark:border-white/10 
text-black dark:text-white 
rounded-lg 
outline-none transition-all duration-300
focus:border-purple-400 
focus:ring-2 focus:ring-purple-400/30 
focus:scale-[1.02] 
hover:border-purple-300"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="px-4 py-3 bg-transparent 
border border-gray-300 dark:border-white/10 
text-black dark:text-white 
rounded-lg 
outline-none transition-all duration-300
focus:border-purple-400 
focus:ring-2 focus:ring-purple-400/30 
focus:scale-[1.02] 
hover:border-purple-300"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="px-4 py-3 bg-transparent 
border border-gray-300 dark:border-white/10 
text-black dark:text-white 
rounded-lg 
outline-none transition-all duration-300
focus:border-purple-400 
focus:ring-2 focus:ring-purple-400/30 
focus:scale-[1.02] 
hover:border-purple-300"
          ></textarea>

          {/* 🔥 Button */}
          <motion.button
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.95 }}
  disabled={loading}
  type="submit"
  className="relative mt-2 px-6 py-3 rounded-full font-medium overflow-hidden group 
  bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white 
  shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
>
  {/* Glow Pulse */}
  <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-xl transition duration-500"></span>

  {/* Button Text */}
  <span className="relative z-10 flex items-center justify-center gap-2">
    {loading ? (
      <>
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        Sending...
      </>
    ) : (
      "Send Message"
    )}
  </span>
</motion.button>

          {/* Messages */}
          {success === true && (
            <p className="text-green-500 text-sm mt-2">
              Message sent successfully 🚀
            </p>
          )}

          {success === false && (
            <p className="text-red-500 text-sm mt-2">
              Something went wrong ❌
            </p>
          )}
        </motion.form>

        {/* 🔥 INFO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-gray-600 dark:text-gray-400 text-center lg:text-left"
        >

          <p className="text-lg leading-relaxed max-w-xl">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about tech 🚀
          </p>

          {/* Info Cards */}
          <div className="space-y-4 flex flex-col items-center lg:items-start">

         <motion.div
  whileHover={{ y: -6, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 120 }}
  className="w-full max-w-sm p-5 rounded-xl 
  bg-gray-100 dark:bg-white/5 
  border border-gray-300 dark:border-white/10 
  backdrop-blur-lg 
  hover:border-purple-400/40 transition"
>
  <p className="text-black dark:text-white font-semibold mb-1">
    Email
  </p>
  <p>aadityaaaliwal@gmail.com</p>
</motion.div>

            <motion.div
  whileHover={{ y: -6, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 120 }}
  className="w-full max-w-sm p-5 rounded-xl 
  bg-gray-100 dark:bg-white/5 
  border border-gray-300 dark:border-white/10 
  backdrop-blur-lg 
  hover:border-purple-400/40 transition"
>
  <p className="text-black dark:text-white font-semibold mb-1">
    Phone
  </p>
  <p>+91 99939 73064</p>
</motion.div>

          </div>
          
</motion.div> 
      </motion.div>
    </section>
  );
};

export default Contact;