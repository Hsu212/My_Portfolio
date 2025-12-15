import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Background3D } from "./components/Background3D"; 

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen text-gray-100 bg-gray-950 selection:bg-primary/30">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-secondary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Background3D /> 
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        {/* Each section now has 'relative' and consistent spacing to avoid visual overlap */}
        <main>
          <Hero />
          
          {/* Subtle Section Divider/Mask */}
          <div className="h-24 bg-gradient-to-b from-transparent to-gray-950/50" />
          
          <About />
          
          <div className="h-24 bg-gradient-to-b from-gray-950/50 to-transparent" />
          
          <Projects />
          
          <div className="h-24 bg-gradient-to-b from-transparent via-gray-950/80 to-transparent" />
          
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
