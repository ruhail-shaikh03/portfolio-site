"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      {/* First ripple - 200px */}
      <motion.div
        className="absolute border border-cyan-500/50 rounded-full h-[200px] w-[200px] mt-64 md:mt-52"
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.3, 0.5, 0.7, 0.9, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Second ripple - 300px */}
      <motion.div
        className="absolute border border-aqua-500/50 rounded-full h-[300px] w-[300px] mt-64 md:mt-52"
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.3, 0.5, 0.7, 0.9, 0.3],
        }}
        transition={{
          duration: 2.5,
          delay: 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Third ripple - 500px */}
      <motion.div
        className="absolute border border-cyan-400/50 rounded-full h-[500px] w-[500px] mt-64 md:mt-52"
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.3, 0.5, 0.7, 0.9, 0.3],
        }}
        transition={{
          duration: 2.5,
          delay: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main pulsing circle - 510px/650px */}
      <motion.div
        className="absolute border border-cyan-500/50 h-[510px] w-[510px] md:h-[650px] md:w-[650px] mt-64 md:mt-52 rounded-full shadow-glow-base"
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.3, 0.5, 0.7, 0.9, 0.3],
        }}
        transition={{
          duration: 2.5,
          delay: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer ripple - 800px */}
      <motion.div
        className="absolute border border-aqua-400/50 rounded-full h-[800px] w-[800px] mt-64 md:mt-52"
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.3, 0.5, 0.7, 0.9, 0.3],
        }}
        transition={{
          duration: 2.5,
          delay: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
