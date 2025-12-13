import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { 
    title: "E-Commerce Platform", 
    desc: "Full-stack online store with Stripe & Prisma", 
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"], 
    image: "/assets/SMHome.png", 
    // Enter your links here
    live: "https://furniture-store-ecommerce-website.vercel.app/", 
    github: "https://github.com/Hsu212/SMHome_Furniture_Store_Ecommerce_Website" 
  },
  { 
    title: "TaskFlow", 
    desc: "Real-time collaboration app with WebSockets", 
    tags: ["React", "Node.js", "Socket.io", "MongoDB"], 
    image: "/images/project2.jpg", 
    live: "https://your-live-demo-link.com", // REPLACE THIS
    github: "https://github.com/Hsu212/your-repo-name" // REPLACE THIS
  },
  { 
    title: "AI SaaS Dashboard", 
    desc: "Modern admin panel with charts & auth", 
    tags: ["Next.js", "Tailwind", "Recharts", "Clerk"], 
    image: "/images/project3.jpg", 
    live: "https://your-live-demo-link.com", // REPLACE THIS
    github: "https://github.com/Hsu212/your-repo-name" // REPLACE THIS
  },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.25 } } };
const item = { hidden: { opacity: 0, y: 80, rotateX: -15 }, show: { opacity: 1, y: 0, rotateX: 0 } };

export function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-transparent section">
      {/* Background elements removed to show the global 3D Background */}
      
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
              className="relative group perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative p-1 overflow-hidden border rounded-3xl border-white/10 bg-white/5 backdrop-blur-2xl">
                {/* Gradient border glow */}
                <div className="absolute inset-0 transition-opacity duration-700 opacity-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 group-hover:opacity-100 blur-xl" />
                
                <div className="relative h-full transition-all duration-500 border shadow-2xl rounded-3xl bg-black/60 backdrop-blur-xl border-white/20">
                  <div className="overflow-hidden aspect-video rounded-t-3xl">
                    <img
                      src={project.image || "https://via.placeholder.com/600x400"}
                      alt={project.title}
                      className="object-cover w-full h-full transition duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text">
                      {project.title}
                    </h3>
                    <p className="mb-6 text-sm text-gray-300">{project.desc}</p>

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

                    <div className="flex items-center justify-between">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium transition-colors text-cyan-400 hover:text-cyan-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
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
