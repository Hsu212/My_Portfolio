import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // 3D Tilt Logic for the Footer Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-transparent">
      {/* Top Divider with Gradient Mask to prevent overlap issues */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          
          {/* Back to Top Button - Modern Floating Design */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -8, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group relative mb-16 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 shadow-xl"
          >
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <ArrowUp className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform text-xs font-bold tracking-widest uppercase text-primary whitespace-nowrap">
              Back to Top
            </span>
          </motion.button>

          {/* 3D Main Footer Card */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-4xl perspective-1000"
          >
            <div 
              style={{ transform: "translateZ(50px)" }}
              className="relative p-10 md:p-12 border border-white/5 bg-gray-900/30 backdrop-blur-2xl rounded-[3rem] shadow-2xl overflow-hidden text-center"
            >
              {/* Subtle Internal Glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-8 tracking-tight">
                  <span className="text-gray-400">Design & Build by </span>
                  <span className="text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text">
                    Hsu Myat Wai Maung
                  </span>
                </h3>

                <div className="flex justify-center gap-6 mb-10">
                  {[
                    { icon: Github, link: "https://github.com/Hsu212" },
                    { icon: Linkedin, link: "https://www.linkedin.com/in/hsu-maung-373216393/" },
                    { icon: Mail, link: "mailto:kienbrown76@gmail.com" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium text-gray-500">
                  <p>© {currentYear} All Rights Reserved</p>
                  <span className="hidden md:block text-gray-800">•</span>
                  <p className="flex items-center gap-2">
                    Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" /> using TypeScript,React,TailWindCss,Framer-motion
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Bottom Spacing/Tagline */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-700 select-none"
          >
            Stay Focused • Keep Coding • Dream Big
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
