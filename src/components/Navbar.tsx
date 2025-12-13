import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Subtle animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full w-72 h-72 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl"
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

      {/* Main glass navbar - now pure dark style */}
      <div className="relative border-b border-white/10 bg-gray-950/80 backdrop-blur-2xl">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-primary/10 via-purple-500/5 to-secondary/10" />
        
        <div className="container relative flex items-center justify-between px-6 py-6 mx-auto max-w-7xl">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-4xl font-black text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text"
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
                className="relative text-lg font-medium text-gray-200 transition-all duration-300 hover:text-primary"
              >
                {item}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 transition-all border rounded-full bg-white/5 backdrop-blur-md border-white/20 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/30"
            >
              {isOpen ? <X className="w-7 h-7 text-primary" /> : <Menu className="w-7 h-7 text-primary" />}
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
            className="absolute inset-x-0 border-b top-full bg-gray-950/90 backdrop-blur-2xl border-white/10 md:hidden"
          >
            <div className="container px-6 py-12 mx-auto space-y-8 text-center max-w-7xl">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-3xl font-bold text-transparent transition-all duration-500 bg-gradient-to-r from-primary to-secondary bg-clip-text hover:from-secondary hover:to-purple-400"
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
