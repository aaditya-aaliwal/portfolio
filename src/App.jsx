import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Cursor from "./components/Cursor"; 
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-x-hidden bg-white dark:bg-black text-stone-800 dark:text-stone-300 antialiased">

      {/* 🔥 Cursor (TOP LEVEL) */}
      <Cursor />

      {/* 🌌 Background (FIXED) */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-white dark:bg-black">

          {/* Grid */}
          <div
            className="absolute inset-0 
            bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] 
            dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
            linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
            bg-[size:14px_24px]"
          />

          {/* Glow */}
          <div
            className="absolute left-0 right-0 top-[-10%] 
            h-[1000px] w-[1000px] rounded-full 
            bg-[radial-gradient(circle_400px_at_50%_300px,rgba(0,0,0,0.08),transparent)] 
            dark:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"
          />

        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12">
        <Navbar />
        <Home />
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;