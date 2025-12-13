import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
    title: "E-Commerce Website", 
    desc: "Full-stack online store with Stripe & Prisma integration for seamless payments.", 
    tags: ["React", "TypeScript", "CSS"], 
    image: "https://github.com/Hsu212/My_Portfolio/blob/main/src/assets/SMHome.png?raw=true", 
    live: "https://furniture-store-ecommerce-website.vercel.app/", 
    github: "https://github.com/Hsu212/SMHome_Furniture_Store_Ecommerce_Website" 
  },
  { 
    title: "Riverpod Testing To do list app", 
    desc: "Modern admin panel with real-time charts, authentication, and user management.", 
    tags: ["Dart", "Firebase"], 
    image: "https://github.com/Htet-2aung/riverpod-testing-to-do-list-app/blob/main/localhost_56445_(iPhone%2012%20Pro)%20(1)%20(1).png?raw=true", 
    live: "#", 
    github: "https://github.com/Hsu212/riverpod-testing-to-do-list-app" 
  },
  { 
    title: "AuraCycle Menstruation Tracker Website", 
    desc: "Modern admin panel with real-time charts, authentication, and user management.", 
    tags: ["TypeScript", "React", "CSS", "HTML"], 
    image: "https://github.com/Hsu212/My_Portfolio/blob/main/AuraCycle.png?raw=true", 
    live: "https://aura-cycle-menstraul-tracker.vercel.app/signin", 
    github: "https://github.com/Hsu212/AuraCycle_Menstrual_Tracker" 
  },
  /*{ 
    title: "Riverpod Testing To do list app", 
    desc: "Modern admin panel with real-time charts, authentication, and user management.", 
    tags: ["Next.js", "Tailwind", "Recharts", "Clerk"], 
    image: "https://github.com/Htet-2aung/riverpod-testing-to-do-list-app/blob/main/localhost_56445_(iPhone%2012%20Pro)%20(1)%20(1).png?raw=true", 
    live: "#", 
    github: "https://github.com/Hsu212/riverpod-testing-to-do-list-app" 
  },*/
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.25 } } };
const item = { hidden: { opacity: 0, y: 80, rotateX: -15 }, show: { opacity: 1, y: 0, rotateX: 0 } };

export function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-transparent section">
      <div className="container relative z-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-5xl font-black text-center text-transparent md:text-7xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ 
                y: -20, 
                rotateY: 5, 
                rotateX: 2,
                transition: { duration: 0.5 }
              }}
              className="relative group"
            >
              <div className="relative p-1 overflow-hidden border rounded-3xl border-white/10 bg-white/5 backdrop-blur-2xl">
                <div className="absolute inset-0 transition-opacity duration-700 opacity-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 group-hover:opacity-100 blur-xl" />
                
                <div className="relative h-full transition-all duration-500 border shadow-2xl rounded-3xl bg-black/60 backdrop-blur-xl border-white/20">
                  <div className="relative overflow-hidden bg-gray-800 aspect-video rounded-t-3xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition duration-1000 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.classList.add('bg-gradient-to-br', 'from-gray-700', 'to-gray-900');
                      }}
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text">
                      {project.title}
                    </h3>
                    <p className="mb-6 text-sm text-gray-300 line-clamp-3">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium border rounded-full bg-white/5 border-white/10 text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="relative z-20 flex items-center justify-between pointer-events-auto">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-sm font-medium transition-all ${
                          project.live === "#" ? "opacity-50 cursor-not-allowed text-gray-500" : "text-cyan-400 hover:text-cyan-300 hover:scale-105"
                        }`}
                        onClick={(e) => project.live === "#" && e.preventDefault()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-sm font-medium transition-all ${
                          project.github === "#" ? "opacity-50 cursor-not-allowed text-gray-500" : "text-purple-400 hover:text-purple-300 hover:scale-105"
                        }`}
                        onClick={(e) => project.github === "#" && e.preventDefault()}
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
