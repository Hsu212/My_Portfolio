import { motion } from "framer-motion";
import { X, Download, School, MapPin, Briefcase, Code, Github } from "lucide-react";

interface DetailsOverlayProps {
  onClose: () => void;
}

export function DetailsOverlay({ onClose }: DetailsOverlayProps) {
  // 1. Project Categories
  const universityProjects = [
    { 
      title: "Riverpod To Do List", 
      desc: "Academic project focused on state management architecture and Firebase integration.",
      tags: ["Dart", "Firebase", "Riverpod"],
      github: "https://github.com/Hsu212/riverpod-testing-to-do-list-app"
    },
    { 
      title: "PLATE.AI", 
      desc: "Independent research project for real-time Vietnamese license plate recognition using AI.",
      tags: ["React", "FastAPI", "Python"],
      github: "https://github.com/Hsu212/PLATE.AI"
    },
    { 
      title: "Car Plate Number Recognition App", 
      desc: "Detecting car plate number using advanced image processing and computer vision techniques.",
      tags: ["JavaScript", "React", "Python"],
      github: "https://github.com/Hsu212/Car-Plate-Number-Recognition-App"
    }
    
  ];

  const selfProjects = [
    { 
      title: "Free2Learn E-Learning System", 
      desc: "A Free Online Language Learning Website",
      tags: ["JavaScript", "Vue", "HTML", "CSS"],
      github: "https://free2-learn-e-learning-system.vercel.app/"
    },
    { 
      title: "AuraCycle", 
      desc: "A health-tech menstruation tracker",
      tags: ["TypeScript", "React"],
      github: "https://github.com/Hsu212/AuraCycle_Menstrual_Tracker"
    },
    { 
      title: "SM Home E-Commerce Website", 
      desc: "A furniture store website(user panel)",
      tags: ["TypeScript", "React"],
      github: "https://github.com/Hsu212/SMHome_Furniture_Store_Ecommerce_Website"
    },
    { 
      title: "NovaShelf_Book_Reader", 
      desc: "A featured-rich book discovery web",
      tags: ["JavaScript", "Next.js"],
      github: "https://github.com/Hsu212/NovaShelf_Book_Reader"
    },
    { 
      title: "Ode Music Player", 
      desc: "Free to use music player",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Hsu212/Ode_Music_Player"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Fixed scrolling container with solid high-contrast background
      className="fixed inset-0 z-[100] bg-gray-950 overflow-y-auto"
    >
      {/* Subtle depth lighting */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-24 relative max-w-6xl z-10">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="fixed top-8 right-8 z-[110] p-4 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors shadow-lg"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* --- Journey Section --- */}
        <section className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-16 text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text"
          >
            My Journey
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8 bg-gray-900/60 p-10 rounded-[3rem] border border-white/20 backdrop-blur-md shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-primary/20 rounded-2xl border border-primary/30"><MapPin className="text-primary w-6 h-6" /></div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Originally From</h4>
                  <p className="text-xl font-bold text-white">Myanmar (Burma)</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 bg-secondary/20 rounded-2xl border border-secondary/30"><School className="text-secondary w-6 h-6" /></div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Education</h4>
                  <p className="text-xl font-bold text-white">Ton Duc Thang University</p>
                  <p className="text-gray-300">Vietnam</p>
                </div>
              </div>
              
              <motion.a 
                href="/Hsu Myat Wai Maung.pdf" 
                download 
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-3 w-full py-5 bg-white text-gray-950 rounded-2xl font-black shadow-xl"
              >
                <Download className="w-5 h-5" /> Download CV
              </motion.a>
            </div>

            <div className="bg-gray-900/60 p-10 rounded-[3rem] border border-white/20 backdrop-blur-md flex flex-col justify-center shadow-2xl">
              <h4 className="text-2xl font-black text-white mb-6">Academic Background</h4>
              <p className="text-gray-200 text-lg leading-relaxed">
                Currently a <span className="text-primary font-bold">final-year Computer Science</span> student. My education emphasizes Machine Learning, Deep Learning, Object Detection, NLP, Speech Processing and Software Engineering with Flutter, while my independent work focuses on <span className="text-secondary font-bold">Web development</span>.
              </p>
            </div>
          </div>
        </section>

        {/* --- Categorized Project Archive --- */}
        <section>
          <h2 className="text-5xl font-black mb-20 text-white">Project Archive</h2>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Column: Self Projects */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-primary/30">
                <Code className="text-primary w-8 h-8" />
                <h3 className="text-3xl font-black text-white">Self-Initiated</h3>
              </div>
              <div className="space-y-8">
                {selfProjects.map(p => (
                  <div key={p.title} className="p-8 bg-gray-900/40 rounded-3xl border border-white/10 hover:border-primary/50 transition-all group">
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{p.title}</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold uppercase text-cyan-300">{tag}</span>
                      ))}
                    </div>
                    <a href={p.github} className="inline-flex items-center gap-2 text-white/80 font-bold hover:text-primary transition-colors">
                      <Github size={18}/> View Source
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Column: University Projects */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-secondary/30">
                <Briefcase className="text-secondary w-8 h-8" />
                <h3 className="text-3xl font-black text-white">University</h3>
              </div>
              <div className="space-y-8">
                {universityProjects.map(p => (
                  <div key={p.title} className="p-8 bg-gray-900/40 rounded-3xl border border-white/10 hover:border-secondary/50 transition-all group">
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">{p.title}</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-[10px] font-bold uppercase text-emerald-400">{tag}</span>
                      ))}
                    </div>
                    <a href={p.github} className="inline-flex items-center gap-2 text-white/80 font-bold hover:text-secondary transition-colors">
                      <Github size={18}/> View Source
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
