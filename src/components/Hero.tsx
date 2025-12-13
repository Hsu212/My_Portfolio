import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

export function Hero() {
  const name = "Hsu Myat Wai Maung";

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Modern layered background with subtle gradients and depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Floating gradient orbs for depth (2025 trend) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full top-20 -left-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-purple-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 120, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full bottom-10 -right-40 w-80 h-80 bg-gradient-to-tl from-secondary/30 to-pink-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl"
        />
      </div>

      {/* Optional subtle grid overlay for tech feel */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl">
        <div className="max-w-3xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 text-5xl font-black tracking-tight select-none md:text-7xl"
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              {/* Glowing gradient text with subtle shadow */}
              <span className="relative z-10 text-transparent bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text drop-shadow-2xl">
                {name.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + 10}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="inline-block"
                    whileHover={{
                      y: -12,
                      scale: 1.3,
                      color: "#a78bfa",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
              {/* Soft glow behind name */}
              <span className="absolute inset-0 blur-xl bg-gradient-to-r from-primary/40 to-secondary/40 -z-10" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mb-12 text-lg font-medium tracking-wide text-gray-700 select-none md:text-2xl dark:text-gray-200"
          >
            Full-Stack Developer • Crafting immersive digital experiences
          </motion.p>

          {/* Button remains completely unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="relative inline-flex items-center px-10 py-5 overflow-hidden text-lg font-semibold bg-white rounded-full group dark:bg-gray-950"
            >
              <span className="absolute inset-0 rounded-full p-[3px] overflow-hidden">
                <span className="absolute inset-0 rounded-full bg-conic-gradient animate-rotate-conic" />
              </span>

              <span className="absolute inset-[3px] rounded-full bg-white dark:bg-gray-950" />

              <span className="absolute inset-0 transition-transform duration-700 -translate-x-full bg-gradient-to-r from-primary to-secondary group-hover:translate-x-0" />

              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl opacity-60 animate-pulse" />

              <span className="relative z-10 flex items-center gap-4 transition-colors duration-500 text-primary group-hover:text-white dark:text-white">
                View My Work
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute -translate-x-1/2 bottom-10 left-1/2"
      >
        <ArrowDown className="w-10 h-10 text-primary/60" />
      </motion.div>
    </section>
  );
}