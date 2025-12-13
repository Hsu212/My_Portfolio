import { motion } from "framer-motion";
import { GraduationCap, Heart, Briefcase } from "lucide-react";

const skills = [
  "React", "TypeScript", "Next.js", "Node.js",
  "Tailwind CSS", "Framer Motion", "Vue.js", "JavaScript"
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden lg:py-40 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
      {/* Subtle background elements for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
        <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-cyan-400/20 blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 text-center"
        >
          <h2 className="text-3xl font-black text-transparent lg:text-8xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
            About Me
          </h2>
          <p className="mx-auto mt-8 text-xl text-gray-600 max-w-1xl lg:text-2xl dark:text-gray-300">
            A passionate frontend developer crafting pixel-perfect, delightful experiences with modern web technologies.
          </p>
        </motion.div>

        {/* Modern glassmorphic timeline-style cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-12 lg:gap-20 md:grid-cols-3"
        >
          {/* Education */}
          <motion.div variants={item} className="relative group">
            <div className="absolute transition duration-700 -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-xl opacity-70 group-hover:opacity-100" />
            <div className="relative h-full p-10 transition-all duration-500 border shadow-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border-white/30 dark:border-gray-700/50 rounded-3xl hover:shadow-3xl hover:-translate-y-4">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 shadow-lg rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-6 text-3xl font-bold text-center">Education</h3>
              <p className="text-lg text-center text-gray-700 dark:text-gray-300">
                Bachelor of Computer Science
              </p>
              <p className="mt-2 text-xl font-semibold text-center text-blue-600 dark:text-blue-400">
                Ton Duc Thang University
              </p>
              <p className="mt-4 text-center text-gray-500 dark:text-gray-400">2022 – 2026</p>
            </div>
          </motion.div>

          {/* Passion (elevated center card) */}
          <motion.div variants={item} className="relative group md:scale-110">
            <div className="absolute transition duration-700 -inset-1 rounded-3xl bg-gradient-to-br from-pink-500/40 to-rose-500/40 blur-xl opacity-70 group-hover:opacity-100" />
            <div className="relative h-full p-12 transition-all duration-500 border shadow-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border-white/40 dark:border-gray-700/60 rounded-3xl hover:shadow-3xl hover:-translate-y-6 md:hover:-translate-y-8">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 shadow-lg rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-6 text-3xl font-bold text-center">My Passion</h3>
              <p className="text-lg leading-relaxed text-center text-gray-700 dark:text-gray-200">
                Crafting <span className="font-bold text-pink-600 dark:text-pink-400">pixel-perfect</span> and{' '}
                <span className="font-bold text-rose-600 dark:text-rose-400">delightful</span> user interfaces using the modern React ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={item} className="relative group">
            <div className="absolute transition duration-700 -inset-1 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 blur-xl opacity-70 group-hover:opacity-100" />
            <div className="relative h-full p-10 transition-all duration-500 border shadow-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border-white/30 dark:border-gray-700/50 rounded-3xl hover:shadow-3xl hover:-translate-y-4">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-6 text-3xl font-bold text-center">Experience</h3>
              <p className="text-lg text-center text-gray-700 dark:text-gray-300">
                Freelance Frontend Developer
              </p>
              <p className="mt-2 text-xl font-semibold text-center text-emerald-600 dark:text-emerald-400">
                Self-employed
              </p>
              <p className="mt-4 text-center text-gray-500 dark:text-gray-400">2025 – Present</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Ultra Modern Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-40 text-center"
        >
          <h3 className="mb-20 text-5xl font-black text-transparent lg:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
            Tech Stack I Love
          </h3>

          <div className="flex flex-wrap justify-center max-w-6xl gap-8 mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const
                }}
                whileHover={{
                  y: -16,
                  rotateY: 15,
                  scale: 1.15,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="relative group"
              >
                <div className="absolute transition duration-700 -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-90" />
                <div className="relative px-10 py-6 border shadow-xl bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl border-white/20 dark:border-gray-700/50 rounded-3xl">
                  <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}