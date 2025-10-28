import React, { useState } from "react";
import { motion } from "framer-motion";
import { Skill as mySkill } from "../typings";
import { urlFor } from "../sanity";
import { skillRotateOnHoverVariants, scaleUpOnHoverVariants } from "../hooks/useMotionVariants";

type Props = {
  skill: mySkill;
  directionLeft?: boolean;
  index?: number;
};

export default function Skill({ skill, index = 0 }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <motion.div
        className="relative group cursor-pointer"
        variants={skillRotateOnHoverVariants}
        initial="rest"
        whileHover="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glassmorphic container */}
        <div className="relative p-4 rounded-2xl glass-effect">
          {/* Skill Image */}
          <motion.img
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
            src={skill?.image ? urlFor(skill.image).url() : ""}
            alt={skill?.title}
            animate={isHovered ? { filter: "grayscale(0%)" } : { filter: "grayscale(50%)" }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Hover Overlay Card */}
        <motion.div
          className="absolute inset-0 rounded-2xl glass-lg flex flex-col items-center justify-center space-y-2 backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {/* Skill Title */}
          <p className="text-xs md:text-sm font-bold text-cyan-300 text-center">
            {skill?.title}
          </p>

          {/* Progress Bar */}
          <div className="w-16 md:w-20 h-2 rounded-full bg-slate-600/40 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-aqua-400"
              initial={{ width: 0 }}
              animate={isHovered ? { width: `${skill.progress}%` } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* Percentage Text */}
          <p className="text-lg md:text-xl font-bold text-white">
            {skill.progress}%
          </p>

          {/* Proficiency Label */}
          <p className="text-xs text-slate-300">
            {skill.progress >= 80 ? "Expert" : skill.progress >= 60 ? "Advanced" : "Intermediate"}
          </p>
        </motion.div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={
            isHovered
              ? { boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)" }
              : { boxShadow: "0 0 0px rgba(0, 217, 255, 0)" }
          }
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
