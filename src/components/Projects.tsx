import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Info } from "lucide-react";

// --- Ultra-Smooth 3D Flip Project Card Component ---
function ProjectCard({ project }: { project: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[420px] lg:h-[480px] w-full perspective-2000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)} 
    >
      <motion.div
        className="relative w-full h-full transition-all"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          scale: isFlipped ? 1.02 : 1 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 120, 
          damping: 20, 
          mass: 0.8 
        }}
      >
        {/* FRONT SIDE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-gray-900/20 backdrop-blur-md shadow-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-full">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full opacity-70 transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.classList.add('bg-gradient-to-br', 'from-gray-800', 'to-black');
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"
              animate={{ x: isFlipped ? 200 : -200 }}
              transition={{ duration: 0.8 }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-10 lg:left-10 lg:right-10">
              <motion.h3 
                className="text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight"
                style={{ transform: "translateZ(50px)" }}
              >
                {project.title}
              </motion.h3>
              <div className="flex items-center gap-2 text-primary font-semibold tracking-wide uppercase text-xs">
                <Info className="w-4 h-4" />
                <span>Hover to Explore</span>
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[2.5rem] border-2 border-white/10 bg-[#0a0a0c] p-8 lg:p-12 flex flex-col justify-between shadow-2xl"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-3xl rounded-full -z-10" />

          <div>
            <h3 className="text-2xl lg:text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-4 lg:mb-6">
              {project.title}
            </h3>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 font-medium">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {project.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 lg:px-4 lg:py-1.5 text-[10px] lg:text-[11px] font-bold tracking-widest uppercase border border-white/5 rounded-xl bg-white/5 text-cyan-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 lg:pt-8 border-t border-white/5">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 text-base lg:text-lg font-bold transition-all ${
                project.live === "#" ? "opacity-20 cursor-not-allowed text-gray-500" : "text-primary hover:text-white"
              }`}
              onClick={(e) => {
                e.stopPropagation(); 
                if (project.live === "#") e.preventDefault();
              }}
            >
              <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-base lg:text-lg font-bold text-gray-500 hover:text-white transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 lg:w-5 lg:h-5" />
              Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  const projects = [
    { 
      title: "PLATE.AI", 
      desc: "A full-stack web application for real-time, high-accuracy detection and recognition of Vietnamese license plates, showcasing an end-to-end AI solution.", 
      tags: ["JavaScript", "React", "Node.js", "FastAPI", "Python"], 
      image: "https://github.com/Htet-2aung/PLATE.AI/raw/main/assets/Captura%20de%20pantalla%202025-06-09%20181711.png?raw=true", 
      live: "https://plate-ai-theta.vercel.app/", 
      github: "https://github.com/Hsu212/PLATE.AI" 
    },
    { 
      title: "E-Commerce", 
      desc: "A Furniture store", 
      tags: ["React", "TypeScript", "CSS"], 
      image: "https://github.com/Hsu212/My_Portfolio/blob/main/src/assets/SMHome.png?raw=true", 
      live: "https://furniture-store-ecommerce-website.vercel.app/", 
      github: "https://github.com/Hsu212/SMHome_Furniture_Store_Ecommerce_Website" 
    },
    { 
      title: "E-Learning", 
      desc: "Free Online Learning Website For Languages", 
      tags: ["Vue", "JavaScript", "HTML", "CSS"], 
      image: "https://github.com/Hsu212/Free2Learn_E-Learning_System/blob/main/public/F2L.png?raw=true", 
      live: "https://freeto2learn.netlify.app/", 
      github: "https://github.com/Hsu212/Free2Learn_E-Learning_System" 
    },
    { 
      title: "Riverpod Tasker", 
      desc: "Modern task management application utilizing Riverpod for robust state management and Firebase for real-time data sync.", 
      tags: ["Dart", "Firebase", "Riverpod"], 
      image: "https://github.com/Htet-2aung/riverpod-testing-to-do-list-app/blob/main/localhost_56445_(iPhone%2012%20Pro)%20(1)%20(1).png?raw=true", 
      live: "#", 
      github: "https://github.com/Hsu212/riverpod-testing-to-do-list-app" 
    },
    { 
      title: "AuraCycle", 
      desc: "Health-focused web application for menstruation tracking with a clean, modern user interface built for reliability and privacy.", 
      tags: ["TypeScript", "React", "Tailwind"], 
      image: "https://github.com/Hsu212/My_Portfolio/blob/main/AuraCycle.png?raw=true", 
      live: "https://aura-cycle-menstraul-tracker.vercel.app/signin", 
      github: "https://github.com/Hsu212/AuraCycle_Menstrual_Tracker" 
    },
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-24 overflow-hidden bg-transparent section">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 lg:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Featured <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">Works</span>
          </h2>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-50" />
        </motion.div>

        <div className="grid gap-8 lg:gap-12 md:grid-cols-2 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
