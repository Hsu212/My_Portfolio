import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = ["About", "Projects", "Contact"];

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="relative border-b border-white/10 bg-gray-950/80 backdrop-blur-2xl">
        <div className="container relative flex items-center justify-between px-6 py-5 mx-auto max-w-7xl">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-black text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text"
          >
            hmwm
          </motion.a>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-12 md:flex">
            {navItems.map((item) => {
              const lowerItem = item.toLowerCase();
              const isActive = activeSection === lowerItem;
              return (
                <motion.a
                  key={item}
                  href={`#${lowerItem}`}
                  className={`relative text-lg font-medium transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-gray-200 hover:text-primary"
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-primary to-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="z-50 md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 overflow-hidden border rounded-xl bg-white/5 border-white/20"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-8 h-8 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-8 h-8 text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Modern Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col bg-gray-950 md:hidden"
          >
            {/* Animated Background for Mobile Menu */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[40%] bg-primary/30 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[40%] bg-secondary/30 blur-[120px] rounded-full" />
            </div>

            <div className="relative flex flex-col items-center justify-center flex-grow px-6 space-y-10 text-center">
              {navItems.map((item, i) => {
                const lowerItem = item.toLowerCase();
                const isActive = activeSection === lowerItem;
                return (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i + 0.2 }}
                    href={`#${lowerItem}`}
                    onClick={() => setIsOpen(false)}
                    className="relative group"
                  >
                    <span className={`text-5xl font-black tracking-tighter transition-all duration-300 ${
                      isActive 
                        ? "text-white" 
                        : "text-gray-600 group-hover:text-gray-300"
                    }`}>
                      {item}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeCircle"
                        className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Footer (Socials) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative p-12 border-t border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="flex justify-center gap-8">
                <a href="https://github.com/Hsu212" className="text-gray-400 hover:text-primary transition-colors"><Github /></a>
                <a href="https://www.linkedin.com/in/hsu-maung-373216393/" className="text-gray-400 hover:text-primary transition-colors"><Linkedin /></a>
                <a href="mailto:kienbrown76@gmail.com" className="text-gray-400 hover:text-primary transition-colors"><Mail /></a>
              </div>
              <p className="mt-6 text-sm text-center text-gray-500">Available for collaborations</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
