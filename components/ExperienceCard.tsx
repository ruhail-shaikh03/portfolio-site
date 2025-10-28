import { motion } from "framer-motion";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import { 
  cardHoverVariants, 
  fadeInUpVariants,
  containerVariants 
} from "../hooks/useMotionVariants";

type Props = { experience: Experience; index?: number };

export default function ExperienceCard({ experience, index = 0 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      className="relative flex flex-col rounded-2xl items-center space-y-4 flex-shrink-0 w-full sm:w-[320px] md:w-[450px] lg:w-[550px] snap-center p-6 md:p-8 glass-effect group cursor-pointer"
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      custom={index}
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      {/* Gradient accent background */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-aqua-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Company Logo */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <motion.img
          className="h-16 md:h-20 lg:h-24 object-contain"
          src={experience?.companyImage ? urlFor(experience.companyImage).url() : ""}
          alt={`${experience?.company} logo`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        {experience.isCurrentlyWorkingHere && (
          <motion.div
            className="absolute bottom-0 right-0 px-2 py-1 bg-emerald-500 text-white text-xs rounded-full font-semibold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Current
          </motion.div>
        )}
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="w-full text-center space-y-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Job Title */}
        <motion.h4
          variants={fadeInUpVariants}
          className="text-xl md:text-2xl font-bold text-slate-800"
        >
          {experience?.jobTitle}
        </motion.h4>

        {/* Company Name */}
        <motion.p
          variants={fadeInUpVariants}
          className="text-base md:text-lg font-semibold text-cyan-500"
        >
          {experience?.company}
        </motion.p>

        {/* Date Range */}
        <motion.p
          variants={fadeInUpVariants}
          className="text-sm text-slate-600 uppercase tracking-wider"
        >
          {new Date(experience?.dateStarted).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
          })}{" "}
          -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
              })}
        </motion.p>
      </motion.div>

      {/* Technologies Grid */}
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experience?.technologies?.map((technology, idx) => (
          <motion.div
            key={technology._id}
            className="relative"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <img
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-cyan-500/30 shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
              src={technology?.image ? urlFor(technology.image).url() : ""}
              alt={technology.title}
              title={technology.title}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Achievements Points */}
      <motion.div
        className="w-full"
        animate={{ height: isExpanded ? "auto" : "0px" }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <motion.div
          className="max-h-64 overflow-y-auto scrollbar-thin pt-4"
          variants={containerVariants}
        >
          <ul className="list-disc space-y-2 text-slate-700 text-sm md:text-base text-left pl-5 pr-2">
            {experience?.points?.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="leading-relaxed"
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Expand/Collapse Indicator */}
      <motion.div
        className="flex items-center gap-2 text-xs text-slate-600 uppercase tracking-widest pt-2"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>
          {experience?.points && experience.points.length > 0
            ? isExpanded
              ? "− Click to collapse"
              : "+ Click to expand"
            : ""}
        </span>
      </motion.div>
    </motion.article>
  );
}
