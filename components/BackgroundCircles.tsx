"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  // Track mouse for subtle parallax effect
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) * 0.01;
      const y = (clientY - window.innerHeight / 2) * 0.01;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Outermost Circle - Slow rotation with parallax */}
      <motion.div
        className="absolute border border-cyan-500/20 rounded-full h-[200px] w-[200px]"
        animate={{
          rotate: 360,
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          x: { duration: 0.3, ease: "easeOut" },
          y: { duration: 0.3, ease: "easeOut" },
        }}
      />

      {/* Second Circle - Medium rotation with glow */}
      <motion.div
        className="absolute border border-aqua-500/20 rounded-full h-[300px] w-[300px]"
        animate={{
          rotate: -360,
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          x: { duration: 0.3, ease: "easeOut" },
          y: { duration: 0.3, ease: "easeOut" },
        }}
      />

      {/* Third Circle - Breathing animation */}
      <motion.div
        className="absolute border border-cyan-400/15 rounded-full h-[500px] w-[500px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        transition={{
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 0.3, ease: "easeOut" },
          y: { duration: 0.3, ease: "easeOut" },
        }}
      />

      {/* Large Pulsing Circle - Main focus */}
      <motion.div
        className="absolute border border-cyan-500/30 h-[510px] w-[510px] md:h-[650px] md:w-[650px] rounded-full shadow-glow-lg"
        animate={{
          boxShadow: [
            "0 0 20px rgba(0, 217, 255, 0.3)",
            "0 0 40px rgba(0, 217, 255, 0.5)",
            "0 0 20px rgba(0, 217, 255, 0.3)",
          ],
          x: mousePosition.x * 0.8,
          y: mousePosition.y * 0.8,
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 0.3, ease: "easeOut" },
          y: { duration: 0.3, ease: "easeOut" },
        }}
      />

      {/* Outermost Large Circle - Slow pulse */}
      <motion.div
        className="absolute border border-aqua-400/10 rounded-full h-[800px] w-[800px]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.35, 0.2],
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3,
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 0.3, ease: "easeOut" },
          y: { duration: 0.3, ease: "easeOut" },
        }}
      />

      {/* Accent Gradient Orb - Hidden on mobile */}
      <motion.div
        className="hidden lg:block absolute rounded-full h-[400px] w-[400px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(100, 255, 218, 0.3), transparent)",
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
