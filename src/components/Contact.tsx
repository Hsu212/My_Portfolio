import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Github, Facebook, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
    setIsHovered(false);
  };

  const socials = [
    { icon: Github, link: "https://github.com/Hsu212", label: "GitHub" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/hsu-maung-373216393/", label: "LinkedIn" },
    { icon: Facebook, link: "https://www.facebook.com/hsu.maung.2001", label: "Facebook" },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-transparent">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary blur-[120px] rounded-full"
        />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white md:text-7xl mb-6">
            Let's <span className="text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind or just want to chat? My inbox is always open.
          </p>
        </motion.div>

        <div className="flex justify-center perspective-2000">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-2xl group"
          >
            {/* 3D Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Main Contact Card */}
            <div 
              style={{ transform: "translateZ(50px)" }}
              className="relative p-12 md:p-16 bg-gray-900/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden"
            >
              {/* Internal Shine */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"
                animate={{ x: isHovered ? 400 : -400 }}
                transition={{ duration: 1 }}
              />

              <div className="relative z-10 text-center">
                <motion.div 
                  style={{ transform: "translateZ(80px)" }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 mb-8 border border-primary/20"
                >
                  <Mail className="w-10 h-10 text-primary" />
                </motion.div>

                <h3 style={{ transform: "translateZ(60px)" }} className="text-3xl font-bold text-white mb-8">
                  kienbrown76@gmail.com
                </h3>

                <motion.a
                  href="mailto:kienbrown76@gmail.com"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transform: "translateZ(70px)" }}
                  className="relative inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black rounded-2xl group overflow-hidden transition-all shadow-lg shadow-primary/20"
                >
                  <span className="relative z-10">Send a Message</span>
                  <Send className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.a>

                <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-6" style={{ transform: "translateZ(40px)" }}>
                  {socials.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
