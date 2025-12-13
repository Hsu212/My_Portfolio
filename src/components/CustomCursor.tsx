import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(".cursor-hover")) {
        setIsHoveringText(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement;
      if (!related || !related.closest(".cursor-hover")) {
        setIsHoveringText(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Small inner dot */}
      <motion.div
        className="fixed z-50 w-3 h-3 rounded-full pointer-events-none bg-primary"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* Outer glowing ring - expands on text hover */}
      <motion.div
        className="fixed z-50 border-2 rounded-full pointer-events-none border-primary/60"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHoveringText ? 90 : 50,
          height: isHoveringText ? 90 : 50,
          borderWidth: isHoveringText ? 4 : 2,
          boxShadow: isHoveringText
            ? "0 0 50px rgba(14, 165, 233, 0.9)"
            : "0 0 25px rgba(14, 165, 233, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </>
  );
}