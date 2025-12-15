import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Info } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Background3D } from "./components/Background3D"; 
import { DetailsOverlay } from "./components/DetailsOverlay";

function App() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll Lock: Prevents background movement when overlay is open
  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOverlayOpen]);

  // 3D Tilt Logic for the Circular Button
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);

  const btnMouseXSpring = useSpring(btnX, { stiffness: 150, damping: 20 });
  const btnMouseYSpring = useSpring(btnY, { stiffness: 150, damping: 20 });

  const btnRotateX = useTransform(btnMouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const btnRotateY = useTransform(btnMouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    btnX.set((e.clientX - rect.left) / rect.width - 0.5);
    btnY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleBtnMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    // FIX 3: Added 'overflow-x-hidden' and 'w-full' to prevent horizontal scroll issues
    <div className="relative min-h-screen w-full overflow-x-hidden text-gray-100 bg-gray-950 selection:bg-primary/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-secondary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Background3D /> 
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* --- MINIMIZED CIRCULAR 3D ANIMATED BUTTON (BOTTOM-LEFT) --- */}
      <div className="fixed bottom-10 left-10 z-[60] perspective-1000">
        <motion.div
          onMouseMove={handleBtnMouseMove}
          onMouseLeave={handleBtnMouseLeave}
          style={{
            rotateX: btnRotateX,
            rotateY: btnRotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative group"
        >
          {/* Circular Glow Shadow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          
          <motion.button
            onClick={() => setIsOverlayOpen(true)}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-16 h-16 bg-white text-gray-950 rounded-full border border-white/20 shadow-2xl overflow-hidden"
            style={{ transform: "translateZ(50px)" }}
          >
            {/* Internal Shine Sweep */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/30 to-transparent pointer-events-none"
              animate={{ x: [ -100, 100 ], opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 p-2 bg-gray-950 rounded-lg" style={{ transform: "translateZ(30px)" }}>
              <Info className="w-6 h-6 text-white" />
            </div>

            {/* Notification Pulse Indicator */}
            <div className="absolute top-3 right-3 z-20">
               <span className="flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
               </span>
            </div>
          </motion.button>

          {/* Side Label on Hover */}
          <div className="absolute left-20 top-1/2 -translate-y-1/2 pointer-events-none">
            <span className="bg-gray-900/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10">
              View Details
            </span>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOverlayOpen && <DetailsOverlay onClose={() => setIsOverlayOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
