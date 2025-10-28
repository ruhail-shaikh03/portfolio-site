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
        <div className="relative p-2 rounded-xl bg-white border border-mint-green/20">
          {/* Skill Image */}
          <motion.img
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
            src={skill?.image ? urlFor(skill.image).url() : ""}
            alt={skill?.title}
            animate={isHovered ? { filter: "grayscale(0%)" } : { filter: "grayscale(50%)" }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Hover Overlay Card */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-navy-light/90 flex flex-col items-center justify-center space-y-2 backdrop-blur-lg border border-mint-green/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {/* Skill Title */}
          <p className="text-xs md:text-sm font-bold text-ice-white text-center">
            {skill?.title}
          </p>

          {/* Progress Bar */}
          <div className="w-16 md:w-20 h-2 rounded-full bg-navy-dark/60 overflow-hidden">
            <motion.div
              className="h-full bg-mint-green"
              initial={{ width: 0 }}
              animate={isHovered ? { width: `${skill.progress}%` } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* Percentage Text */}
          <p className="text-lg md:text-xl font-bold text-mint-green">
            {skill.progress}%
          </p>
        </motion.div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={
            isHovered
              ? { boxShadow: "0 0 30px rgba(100, 255, 218, 0.5)" }
              : { boxShadow: "0 0 0px rgba(100, 255, 218, 0)" }
          }
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
