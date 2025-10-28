import { motion, useViewportScroll, useTransform } from "framer-motion";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import { 
  fadeInUpVariants, 
  scrollRevealVariants,
  containerVariants 
} from "../hooks/useMotionVariants";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <motion.section
      className="relative py-12 px-4 sm:px-6 lg:px-8 bg-navy-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Gradient background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mint-green/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Mobile: Centered layout with small picture */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-5 mb-6 px-4">
          {/* Profile Pic */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg h-40 w-40 object-cover object-center"
            src={pageInfo?.profilePic ? urlFor(pageInfo.profilePic).url() : ""}
            alt={pageInfo?.name}
          />

          {/* Content for Mobile */}
          <motion.div
            className="flex flex-col items-center space-y-4 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Section label */}
            <motion.div variants={fadeInUpVariants}>
              <p className="uppercase tracking-[3px] text-mint-green text-xs font-semibold mb-2">
                About
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeInUpVariants}
              className="text-xl font-bold text-ice-white leading-tight mb-3"
            >
              Here is a{" "}
              <span className="text-mint-green">
                little
              </span>{" "}
              background
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUpVariants}
              className="text-xs text-text-medium leading-relaxed mb-2"
            >
              {pageInfo?.backgroundInformation}
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeInUpVariants} className="pt-2">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-4 py-1.5 rounded-lg font-medium text-text-dark bg-mint-green hover:opacity-90 transition-all duration-300 text-xs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get to Know Me Better
                <motion.span
                  className="ml-1.5"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop: Side-by-side layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Glassmorphic border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-aqua-500/20 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image container with glow */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-lg group"
                animate={
                  isImageHovered
                    ? {
                        boxShadow: "0 0 40px rgba(0, 217, 255, 0.4)",
                      }
                    : {
                        boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)",
                      }
                }
                transition={{ duration: 0.3 }}
              >
                <img
                  className="w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto object-cover max-h-[650px]"
                  src={pageInfo?.profilePic ? urlFor(pageInfo.profilePic).url() : ""}
                  alt={pageInfo?.name}
                />

                {/* Overlay gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-aqua-500/0 group-hover:from-cyan-500/10 group-hover:to-aqua-500/10 transition-all duration-300"
                  animate={
                    isImageHovered
                      ? { opacity: 1 }
                      : { opacity: 0 }
                  }
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border border-cyan-500/30 rounded-full"
                animate={{
                  rotate: 360,
                  opacity: isImageHovered ? 0.8 : 0.4,
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.3 },
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 border border-aqua-500/20 rounded-full"
                animate={{
                  rotate: -360,
                  opacity: isImageHovered ? 0.8 : 0.3,
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.3 },
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex flex-col items-start space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Section label */}
            <motion.div variants={fadeInUpVariants}>
              <p className="uppercase tracking-[3px] text-mint-green text-xs font-semibold">
                About
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeInUpVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-ice-white leading-tight"
            >
              Here is a{" "}
              <span className="text-mint-green">
                little
              </span>{" "}
              background
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUpVariants}
              className="text-base md:text-lg text-text-medium leading-relaxed max-w-xl"
            >
              {pageInfo?.backgroundInformation}
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeInUpVariants} className="pt-2">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-3 rounded-lg font-medium text-text-dark bg-mint-green hover:opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get to Know Me Better
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
