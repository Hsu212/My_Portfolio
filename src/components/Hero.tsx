import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "../assets/mypp.jpg"; 
import hoverImg from "../assets/mypp.png"; 

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaVuejs 
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { useState } from "react";

const nameContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

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
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Subtle rotation for the whole card
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const floatingIcons = [
    { Icon: FaHtml5, size: "text-4xl lg:text-5xl", position: "-top-12 -left-12", delay: 0 },
    { Icon: FaCss3Alt, size: "text-3xl lg:text-4xl", position: "-top-16 right-0", delay: 0.5 },
    { Icon: FaJsSquare, size: "text-4xl lg:text-5xl", position: "bottom-0 -left-20", delay: 1 },
    { Icon: SiTypescript, size: "text-3xl lg:text-4xl", position: "-bottom-12 -right-12", delay: 1.5 },
    { Icon: FaReact, size: "text-5xl lg:text-6xl", position: "top-1/4 -left-28", delay: 2 },
    { Icon: SiNextdotjs, size: "text-4xl lg:text-5xl", position: "top-1/2 -right-24", delay: 2.5 },
    { Icon: FaVuejs, size: "text-3xl lg:text-4xl", position: "bottom-1/4 -left-24", delay: 3 },
    { Icon: FaNodeJs, size: "text-4xl lg:text-5xl", position: "-bottom-20 right-1/4", delay: 3.5 },
    { Icon: SiTailwindcss, size: "text-4xl lg:text-5xl", position: "-top-24 left-1/2", delay: 4 },
  ];

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-transparent overflow-hidden py-20 lg:py-0">
      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          
          <div className="max-w-xl text-left order-last md:order-first">
            <motion.div initial="hidden" animate="visible" variants={nameContainer} className="mb-4">
              <h2 className="mb-2 text-lg md:text-xl font-medium text-primary">Hi, I'm</h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight select-none whitespace-normal lg:whitespace-nowrap leading-tight">
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
                    {name.split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        variants={letterVariants}
                        className="inline-block cursor-default"
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
              className="mb-8 text-sm sm:text-base lg:text-lg font-medium tracking-wide text-gray-400 select-none"
            >
              Full-Stack Developer • Crafting immersive digital experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <a href="#projects" className="relative inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 overflow-hidden text-base lg:text-lg font-semibold bg-white rounded-full group dark:bg-gray-950">
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

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div 
              className="relative z-30"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <motion.img
                src={profileImg}
                alt="Profile Base"
                animate={{ 
                  z: isHovered ? -20 : 0, 
                  opacity: isHovered ? 0.3 : 1,
                  scale: isHovered ? 0.95 : 1
                }}
                className="relative z-10 object-cover w-56 h-56 border-4 rounded-full shadow-2xl md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border-white/20"
              />

              <motion.img
                src={hoverImg}
                alt="Profile Emerging"
                initial={{ opacity: 0, z: -50 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0, 
                  z: isHovered ? 60 : -50,
                  scale: isHovered ? 1.05 : 0.9
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15 
                }}
                className="absolute inset-0 z-20 object-cover w-56 h-56 border-4 rounded-full shadow-2xl md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border-white/20"
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
                  style={{ transform: "translateZ(80px)" }}
                >
                  {Icon && <Icon />} 
                </motion.div>
              ))}

              <div className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
