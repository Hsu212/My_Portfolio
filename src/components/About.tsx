import { motion } from "framer-motion";
import { GraduationCap, Heart, Briefcase } from "lucide-react";

const skills = [
  "React", "TypeScript", "Next.js", "Node.js", "HTML", "CSS",
  "Tailwind CSS", "Framer Motion", "Vue.js", "JavaScript"
];

// Duplicate the list for seamless infinite scroll
const duplicatedSkills = [...skills, ...skills];

const letterVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 1.2,
      ease: [0.68, -0.55, 0.27, 1.55] as const,  // Add 'as const' here
    },
  }),
};

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
  const heading = "About Me";
  
  // Modern gradient palette that cycles nicely
  const gradients = [
    "from-primary/30 to-purple-600/40",
    "from-purple-500/30 to-secondary/40",
    "from-secondary/30 to-cyan-500/40",
    "from-cyan-500/30 to-rose-500/40",
    "from-rose-500/30 to-primary/40",
    "from-primary/40 to-teal-500/30",
    "from-purple-600/30 to-rose-400/40",
    "from-teal-500/30 to-cyan-400/40",
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden lg:py-40 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950/20">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-400/20 blur-3xl" />
        <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-cyan-400/20 blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* About Me Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center lg:mb-20"
        >
          <h2 className="inline-block text-5xl font-black text-transparent bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text md:text-6xl lg:text-6xl">
            {heading.split("").map((letter, i) => (
              <motion.span key={i} custom={i} variants={letterVariants} className="inline-block">
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="max-w-3xl mx-auto mt-6 text-lg text-gray-400 lg:text-xl"
          >
            {description.split("").map((letter, i) => (
              <motion.span key={i} custom={i + heading.length} variants={letterVariants} className="inline-block">
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-12 lg:gap-20 md:grid-cols-3"
        >
          {/* Education */}
          <motion.div variants={item} className="relative group">
            <div className="absolute transition duration-700 -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 to-cyan-500/30 blur-xl opacity-70 group-hover:opacity-100" />
            <div className="relative h-full p-10 transition-all duration-500 border shadow-2xl bg-gray-900/60 backdrop-blur-2xl border-gray-700/50 rounded-3xl hover:shadow-3xl hover:-translate-y-4">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 shadow-lg rounded-2xl bg-gradient-to-br from-primary to-cyan-500">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-6 text-3xl font-bold text-center">Education</h3>
              <p className="text-lg text-center text-gray-300">Bachelor of Computer Science</p>
              <p className="mt-2 text-xl font-semibold text-center text-primary">Ton Duc Thang University</p>
              <p className="mt-4 text-center text-gray-400">2022 – 2026</p>
            </div>
          </motion.div>

          {/* Passion */}
          <motion.div variants={item} className="relative group md:scale-110">
            <div className="absolute transition duration-700 -inset-1 rounded-3xl bg-gradient-to-br from-secondary/40 to-rose-500/40 blur-xl opacity-70 group-hover:opacity-100" />
            <div className="relative h-full p-12 transition-all duration-500 border shadow-2xl bg-gray-900/70 backdrop-blur-2xl border-gray-700/60 rounded-3xl hover:shadow-3xl hover:-translate-y-6 md:hover:-translate-y-8">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 shadow-lg rounded-2xl bg-gradient-to-br from-secondary to-rose-500">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-6 text-3xl font-bold text-center">My Passion</h3>
              <p className="text-lg leading-relaxed text-center text-gray-200">
                Crafting <span className="font-bold text-secondary">pixel-perfect</span> and <span className="font-bold text-rose-400">delightful</span> user interfaces using the modern React ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={item} className="relative group">
            <div className="absolute transition duration-700 -inset-1 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 blur-xl opacity-70 group-hover:opacity-100" />
            <div className="relative h-full p-10 transition-all duration-500 border shadow-2xl bg-gray-900/60 backdrop-blur-2xl border-gray-700/50 rounded-3xl hover:shadow-3xl hover:-translate-y-4">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-6 text-3xl font-bold text-center">Experience</h3>
              <p className="text-lg text-center text-gray-300">Freelance Frontend Developer</p>
              <p className="mt-2 text-xl font-semibold text-center text-emerald-400">Self-employed</p>
              <p className="mt-4 text-center text-gray-400">2025 – Present</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Updated Modern Tech Stack Section */}
        <div className="mt-40">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-4xl font-black text-center text-transparent lg:text-5xl bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text"
          >
            Tech Stack I Love
          </motion.h3>

          <div className="py-12 overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex gap-16"
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.2, y: -16 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                >
                  <div className={`relative px-14 py-8 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} backdrop-blur-xl border border-white/20 shadow-2xl`}>
                    <div className="absolute inset-0 rounded-full bg-white/10 blur-xl" />
                    <span className="relative z-10 text-3xl font-black tracking-wide text-white drop-shadow-2xl">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

