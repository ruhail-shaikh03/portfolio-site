import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";
import { skillGridContainerVariants, fadeInUpVariants } from "../hooks/useMotionVariants";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  // Group skills by category if available
  const groupedSkills = skills.reduce((acc, skill) => {
    const group = skill.title.includes("AI") || skill.title.includes("ML")
      ? "AI/ML"
      : skill.title.includes("Web") || skill.title.includes("React") || skill.title.includes("Node")
      ? "Web"
      : "Other";
    if (!acc[group]) acc[group] = [];
    acc[group].push(skill);
    return acc;
  }, {} as Record<string, SkillType[]>);

  return (
    <motion.section
      className="relative py-12 px-4 sm:px-6 lg:px-8 bg-navy-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Gradient background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-mint-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-mint-green/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          variants={skillGridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeInUpVariants}
            className="text-xs md:text-sm uppercase tracking-[3px] text-mint-green font-semibold"
          >
            Technical Arsenal
          </motion.p>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ice-white mt-3"
          >
            Technical <span className="text-mint-green">Skills</span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-base md:text-lg text-text-medium mt-4 max-w-2xl mx-auto"
          >
            A comprehensive toolkit of technologies and frameworks I&apos;ve mastered throughout my career
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4 p-2 md:p-0"
          variants={skillGridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills?.map((skill, idx) => (
            <Skill key={skill._id} skill={skill} index={idx} />
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row gap-6 md:gap-12 justify-center text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          
        </motion.div>
      </div>
    </motion.section>
  );
}
