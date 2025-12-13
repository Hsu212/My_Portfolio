import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  const navItems = ["About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Subtle animated background orbs (same as Projects section) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full w-72 h-72 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 blur-3xl"
            animate={{
              x: [0, 80, -80, 0],
              y: [0, -40, 40, 0],
            }}
            transition={{
              duration: 15 + i * 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ left: `${30 * (i + 1)}%`, top: "20%" }}
          />
        ))}
      </div>

      {/* Main glass navbar */}
      <div className="relative border-b border-white/10 bg-black/30 backdrop-blur-2xl">
        <div className="absolute inset-0 opacity-50 rounded-t-3xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        
        <div className="container relative flex items-center justify-between py-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text"
          >
            hmwm
          </motion.a>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-12 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="relative text-lg font-medium text-gray-200 transition-all duration-300 hover:text-cyan-300"
              >
                {item}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500 hover:w-full" />
              </motion.a>
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-4 transition-all duration-300 border rounded-full bg-white/5 backdrop-blur-md border-white/20 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-cyan-300" />}
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-3 transition-all border rounded-full bg-white/5 backdrop-blur-md border-white/20 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-cyan-300" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 transition-all border rounded-full bg-white/5 backdrop-blur-md border-white/20 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30"
            >
              {isOpen ? <X className="text-purple-300 w-7 h-7" /> : <Menu className="w-7 h-7 text-cyan-300" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 border-b top-full bg-black/60 backdrop-blur-2xl border-white/10 md:hidden"
          >
            <div className="container py-12 space-y-8 text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-3xl font-bold text-transparent transition-all duration-500 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text hover:from-purple-300 hover:to-pink-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}