import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "../assets/mypp.jpg"; 

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaVuejs 
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

// Modern staggered entrance for the name
const nameContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// FIXED: Added 'as const' to resolve TypeScript error 2322
const letterVariants = {
  hidden: { opacity: 0, scale: 0, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  },
} as const;

export function Hero() {
  const name = "Hsu Myat Wai Maung";

  const floatingIcons = [
    { Icon: FaHtml5, size: "text-5xl", position: "-top-12 -left-12", delay: 0 },
    { Icon: FaCss3Alt, size: "text-4xl", position: "-top-16 right-0", delay: 0.5 },
    { Icon: FaJsSquare, size: "text-5xl", position: "bottom-0 -left-20", delay: 1 },
    { Icon: SiTypescript, size: "text-4xl", position: "-bottom-12 -right-12", delay: 1.5 },
    { Icon: FaReact, size: "text-6xl", position: "top-1/4 -left-28", delay: 2 },
    { Icon: SiNextdotjs, size: "text-5xl", position: "top-1/2 -right-24", delay: 2.5 },
    { Icon: FaVuejs, size: "text-4xl", position: "bottom-1/4 -left-24", delay: 3 },
    { Icon: FaNodeJs, size: "text-5xl", position: "-bottom-20 right-1/4", delay: 3.5 },
    { Icon: SiTailwindcss, size: "text-5xl", position: "-top-24 left-1/2", delay: 4 },
  ];

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-transparent">
      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          
          <div className="max-w-xl text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={nameContainer}
              className="mb-4"
            >
              <h2 className="mb-2 text-xl font-medium text-primary">Hi, I'm</h2>
              {/* whitespace-nowrap ensures your name doesn't split into two lines */}
              <h1 className="text-5xl font-black tracking-tight select-none md:text-6xl lg:text-7xl whitespace-nowrap">
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
                    {name.split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        variants={letterVariants}
                        className="inline-block cursor-default"
                        // Interactive Letter Animation: Bounce and rotate on hover
                        whileHover={{ 
                          y: -15,
                          scale: 1.3,
                          rotate: Math.random() > 0.5 ? 10 : -10,
                          color: "#0ea5e9",
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </span>
                  {/* Pulsing background glow stays with the name */}
                  <motion.span 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/40 to-secondary/40 -z-10" 
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="mb-10 text-base font-medium tracking-wide text-gray-400 select-none md:text-lg"
            >
              Full-Stack Developer • Crafting immersive digital experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <a href="#projects" className="relative inline-flex items-center px-8 py-4 overflow-hidden text-lg font-semibold bg-white rounded-full group dark:bg-gray-950">
                <span className="absolute inset-0 rounded-full p-[3px] overflow-hidden">
                  <span className="absolute inset-0 rounded-full bg-conic-gradient animate-rotate-conic" />
                </span>
                <span className="absolute inset-[3px] rounded-full bg-white dark:bg-gray-950" />
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 text-primary group-hover:text-white dark:text-white">
                  View My Work
                  <ArrowDown className="w-5 h-5 rotate-[-90deg] group-hover:rotate-0 transition-transform" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Profile Image & Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center order-first md:justify-end md:order-last"
          >
            <div className="relative z-30">
              <img
                src={profileImg}
                alt="Profile"
                className="relative z-20 object-cover w-64 h-64 border-4 rounded-full shadow-2xl sm:w-72 sm:h-72 md:w-96 md:h-96 border-white/20"
              />

              {floatingIcons.map(({ Icon, size, position, delay }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${position} ${size} text-primary/90 dark:text-primary/70 z-50`}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 15, -10],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    y: { duration: 5 + index % 3, repeat: Infinity, ease: "easeInOut", delay },
                    x: { duration: 7 + index % 4, repeat: Infinity, ease: "easeInOut", delay },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear", delay },
                  }}
                  whileHover={{ scale: 1.4, rotate: 15, color: "#8b5cf6" }}
                >
                  <Icon />
                </motion.div>
              ))}

              <div className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
