import { motion, useScroll, useTransform } from "framer-motion";

export function Background3D() {
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for the grid
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-gray-950">
      {/* 3D Perspective Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ perspective: "1000px" }}
      >
        <motion.div 
          style={{ y: gridY, rotateX: 45 }}
          className="absolute inset-0 w-[200%] -left-[50%] h-[200%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
        />
      </div>

      {/* Floating 3D Orbs (Global) */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/10 via-purple-500/10 to-secondary/10 blur-3xl"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Depth Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.8)_100%)]" />
    </div>
  );
}