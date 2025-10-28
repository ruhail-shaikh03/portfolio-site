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
      className="relative min-h-screen flex flex-col items-center justify-center py-20 md:py-0 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Gradient background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-aqua-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={skillGridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeInUpVariants}
            className="text-xs md:text-sm uppercase tracking-[3px] text-cyan-400 font-semibold"
          >
            Technical Arsenal
          </motion.p>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3"
          >
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-aqua-400">Expertise</span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-base md:text-lg text-slate-400 mt-4 max-w-2xl mx-auto"
          >
            A comprehensive toolkit of technologies and frameworks I've mastered throughout my career
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8 p-4 md:p-0"
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
          {[
            { label: "Expert", threshold: 80 },
            { label: "Advanced", threshold: 60 },
            { label: "Intermediate", threshold: 40 },
          ].map((level, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + idx * 0.1 }}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  idx === 0
                    ? "bg-cyan-400"
                    : idx === 1
                    ? "bg-aqua-400"
                    : "bg-slate-500"
                }`}
              />
              <p className="text-sm text-slate-300">{level.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
