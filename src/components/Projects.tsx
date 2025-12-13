import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", desc: "Full-stack online store with Stripe & Prisma", tags: ["Next.js", "TypeScript", "Prisma", "Stripe"], image: "/assets/SMHome.png", live: "https://furniture-store-ecommerce-website.vercel.app/", github: "https://github.com/Hsu212/SMHome_Furniture_Store_Ecommerce_Website" },
  { title: "TaskFlow", desc: "Real-time collaboration app with WebSockets", tags: ["React", "Node.js", "Socket.io", "MongoDB"], image: "/images/project2.jpg", live: "#", github: "#" },
  { title: "AI SaaS Dashboard", desc: "Modern admin panel with charts & auth", tags: ["Next.js", "Tailwind", "Recharts", "Clerk"], image: "/images/project3.jpg", live: "#", github: "#" },
  // Add more...
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.25 } } };
const item = { hidden: { opacity: 0, y: 80, rotateX: -15 }, show: { opacity: 1, y: 0, rotateX: 0 } };

export function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-black section">
      {/* Futuristic background with subtle gradient and floating orbs */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-cyan-900/20" />
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-3xl"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${20 * (i + 1)}%`,
              top: `${15 * (i % 3)}%`,
            }}
          />
        ))}
      </div>

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
                rotateY: 10, 
                rotateX: 5,
                transition: { duration: 0.5 }
              }}
              className="relative group perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative p-1 overflow-hidden border rounded-3xl border-white/10 bg-white/5 backdrop-blur-2xl">
                {/* Gradient border glow */}
                <div className="absolute inset-0 transition-opacity duration-700 opacity-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 group-hover:opacity-100 blur-xl" />
                
                <div className="relative h-full transition-all duration-500 border shadow-2xl rounded-3xl bg-black/40 backdrop-blur-xl border-white/20">
                  <div className="overflow-hidden aspect-video rounded-t-3xl">
                    <img
                      src={project.image || "https://via.placeholder.com/600x400"}
                      alt={project.title}
                      className="object-cover w-full h-full transition duration-1000 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="p-10">
                    <h3 className="mb-4 text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text">
                      {project.title}
                    </h3>
                    <p className="mb-8 text-gray-300">{project.desc}</p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-300 backdrop-blur-md transition-all hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-8">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 font-medium transition-colors text-cyan-400 hover:text-cyan-300"
                      >
                        <ExternalLink className="w-6 h-6" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 font-medium text-purple-400 transition-colors hover:text-purple-300"
                      >
                        <Github className="w-6 h-6" />
                        Source Code
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