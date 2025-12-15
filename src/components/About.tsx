import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GraduationCap, Heart, Briefcase } from "lucide-react";

// --- Refined 3D Card Component ---
function Card3D({ children, gradient }: { children: React.ReactNode, gradient: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full cursor-pointer perspective-1000 group"
    >
      <motion.div 
        className={`absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br ${gradient} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
        style={{ transform: "translateZ(-10px)" }}
      />
      
      <div 
        className="relative h-full p-10 border border-white/5 bg-gray-950/40 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden transition-colors duration-500 group-hover:bg-gray-900/60 group-hover:border-white/20 shadow-2xl"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        {children}
      </div>
    </motion.div>
  );
}

export function About() {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "HTML", "CSS",
    "Tailwind CSS", "Framer Motion", "Vue.js", "JavaScript"
  ];
  const duplicatedSkills = [...skills, ...skills];

  const gradients = [
    "from-primary/30 to-purple-600/40",
    "from-purple-500/30 to-secondary/40",
    "from-secondary/30 to-cyan-500/40",
    "from-cyan-500/30 to-rose-500/40",
    "from-rose-500/30 to-primary/40",
    "from-primary/40 to-teal-500/30",
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-transparent">
      <div className="container relative z-10 px-6 mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            About <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Education */}
          <Card3D gradient="from-sky-500 to-indigo-500">
            <div style={{ transform: "translateZ(80px)" }} className="flex items-center justify-center w-20 h-20 mx-auto mb-10 shadow-lg rounded-3xl bg-gradient-to-br from-sky-400 to-indigo-600">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h3 className="mb-4 text-3xl font-bold text-center text-white" style={{ transform: "translateZ(60px)" }}>Education</h3>
            <p className="text-lg text-center text-gray-400" style={{ transform: "translateZ(40px)" }}>B.S. Computer Science</p>
            <p className="mt-2 text-xl font-bold text-center text-sky-400" style={{ transform: "translateZ(50px)" }}>Ton Duc Thang University</p>
            <div className="mt-8 flex justify-center" style={{ transform: "translateZ(30px)" }}>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400">2022 – 2026</span>
            </div>
          </Card3D>

          {/* Passion */}
          <Card3D gradient="from-purple-500 to-pink-500">
            <div style={{ transform: "translateZ(80px)" }} className="flex items-center justify-center w-20 h-20 mx-auto mb-10 shadow-lg rounded-3xl bg-gradient-to-br from-purple-400 to-pink-600">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="mb-4 text-3xl font-bold text-center text-white" style={{ transform: "translateZ(60px)" }}>My Passion</h3>
            <p className="text-lg leading-relaxed text-center text-gray-300" style={{ transform: "translateZ(40px)" }}>
              Building <span className="text-white font-semibold">immersive interfaces</span> that bridge the gap between design and code.
            </p>
          </Card3D>

          {/* Experience */}
          <Card3D gradient="from-emerald-500 to-teal-500">
            <div style={{ transform: "translateZ(80px)" }} className="flex items-center justify-center w-20 h-20 mx-auto mb-10 shadow-lg rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-600">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h3 className="mb-4 text-3xl font-bold text-center text-white" style={{ transform: "translateZ(60px)" }}>Experience</h3>
            <p className="text-lg text-center text-gray-400" style={{ transform: "translateZ(40px)" }}>Frontend Developer</p>
            <p className="mt-2 text-xl font-bold text-center text-emerald-400" style={{ transform: "translateZ(50px)" }}>Self-employed</p>
            <div className="mt-8 flex justify-center" style={{ transform: "translateZ(30px)" }}>
              <span className="px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-sm text-emerald-400">2025 – Present</span>
            </div>
          </Card3D>
        </div>

        {/* Tech Stack Horizontal Scroll Section */}
        <div className="mt-40">
          {/* ADDED TITLE FOR PILLS SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h3 className="text-3xl font-black text-white md:text-5xl">
              Tech Stack <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">I Use</span>
            </h3>
            <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary to-secondary opacity-50" />
          </motion.div>

          <div className="py-12 overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              className="flex gap-12"
            >
              {duplicatedSkills.map((skill, index) => (
                <div key={`${skill}-${index}`} className="flex-shrink-0">
                  <div className={`px-12 py-6 rounded-3xl bg-gradient-to-br ${gradients[index % gradients.length]} backdrop-blur-3xl border border-white/5 shadow-xl`}>
                    <span className="text-2xl font-bold text-white/90">{skill}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
