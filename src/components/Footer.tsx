import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden bg-black border-t border-white/10">
      {/* Subtle animated background orbs (consistent with other sections) */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full w-80 h-80 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-pink-600/10 blur-3xl"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -60, 60, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${20 + 20 * i}%`,
              bottom: "10%",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-center">
        <div className="inline-block px-12 py-8 border shadow-2xl rounded-3xl bg-white/5 backdrop-blur-xl border-white/20">
          <p className="text-lg font-medium text-gray-300">
            © {currentYear}{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
              Hsu Myat Wai Maung
            </span>
            . Made with{" "}
            <span className="text-red-400">❤️</span>{" "}
            using React + Tailwind + TypeScript
          </p>
        </div>

        {/* Back to Top Button */}
        <motion.a
          href="#"
          whileHover={{ y: -8, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute p-4 transition-all duration-500 -translate-x-1/2 border rounded-full -top-8 left-1/2 bg-white/10 backdrop-blur-md border-white/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/40 group"
        >
          <ArrowUp className="w-6 h-6 transition-colors text-cyan-300 group-hover:text-cyan-200" />
        </motion.a>
      </div>
    </footer>
  );
}
