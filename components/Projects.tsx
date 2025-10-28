import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import { PortableText } from "@portabletext/react";
import { ChevronLeftIcon, ChevronRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { fadeInUpVariants, projectCardVariants, containerVariants } from "../hooks/useMotionVariants";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Gradient background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        className="w-full text-center mb-6 z-20"
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-xs md:text-sm uppercase tracking-[3px] text-cyan-500 font-semibold">
          Featured Work
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-2">
          Featured <span className="text-cyan-500">Projects</span>
        </h2>
      </motion.div>

      {/* Projects Carousel */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Arrow */}
        <motion.button
          className="absolute left-0 md:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-30 p-1.5 rounded-full glass-effect hover:shadow-glow-md transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("left")}
        >
          <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6 text-cyan-500 hover:text-cyan-500" />
        </motion.button>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="relative w-full max-w-4xl flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar-hide"
          onScroll={(e) => {
            const element = e.target as HTMLDivElement;
            const index = Math.round(element.scrollLeft / element.clientWidth);
            setActiveIndex(index);
          }}
        >
          {projects?.map((project, i) => (
            <motion.div
              key={project._id}
              className="w-full flex-shrink-0 snap-center flex flex-col items-center p-3"
              variants={projectCardVariants}
              initial="rest"
              whileHover="hover"
            >
              <div className="flex flex-col items-center justify-start max-h-[calc(100vh-200px)] overflow-y-auto p-3 scrollbar-hide space-y-4">
                {/* Project Image with overlay */}
                {project?.image && (
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.img
                      className="h-32 md:h-40 lg:h-48 object-contain flex-shrink-0 rounded-xl shadow-lg"
                      src={urlFor(project.image).url()}
                      alt={project.title}
                      onClick={() =>
                        project.linkToBuild &&
                        window.open(project.linkToBuild, "_blank")
                      }
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    />

                    {/* Gradient Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/0 to-aqua-500/0 group-hover:from-cyan-500/20 group-hover:to-aqua-500/20 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    {/* Click indicator */}
                    {project?.linkToBuild && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="bg-cyan-500/90 rounded-full p-3">
                          <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Project Content */}
                <motion.div
                  className="space-y-2 px-0 md:px-6 max-w-3xl"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Title */}
                  <motion.h3
                    variants={fadeInUpVariants}
                    className="text-lg md:text-xl lg:text-2xl font-bold text-slate-800 text-center"
                  >
                    {project?.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.div
                    variants={fadeInUpVariants}
                    className="text-xs md:text-sm lg:text-base text-slate-700 text-justify leading-relaxed"
                  >
                    <PortableText
                      value={project?.summary}
                      components={{
                        block: {
                          normal: ({ children }) => (
                            <p className="mb-2">{children}</p>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-sm md:text-base font-bold mb-2 mt-2 text-cyan-500">
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-sm md:text-base font-semibold mb-1 mt-2 text-cyan-500">
                              {children}
                            </h3>
                          ),
                        },
                        list: {
                          bullet: ({ children }) => (
                            <ul className="list-disc list-inside mb-2 space-y-1 text-text-medium">
                              {children}
                            </ul>
                          ),
                        },
                        marks: {
                          strong: ({ children }) => (
                            <strong className="font-bold text-cyan-500">
                              {children}
                            </strong>
                          ),
                          em: ({ children }) => (
                            <em className="italic text-cyan-500">
                              {children}
                            </em>
                          ),
                        },
                      }}
                    />
                  </motion.div>

                  {/* Technologies */}
                  {project?.technologies && project.technologies.length > 0 && (
                    <motion.div
                      variants={fadeInUpVariants}
                      className="flex flex-wrap gap-1.5 justify-center pt-2"
                    >
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech._id}
                          className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-500 font-medium"
                          whileHover={{ scale: 1.05, borderColor: "#06B6D4" }}
                        >
                          {tech.title}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}

                  {/* Visit Button */}
                  {project?.linkToBuild && (
                    <motion.div
                      variants={fadeInUpVariants}
                      className="flex justify-center pt-2"
                    >
                      <motion.a
                        href={project.linkToBuild}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
                      </motion.a>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <motion.button
          className="absolute right-0 md:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-30 p-1.5 rounded-full glass-effect hover:shadow-glow-md transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("right")}
        >
          <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-cyan-500 hover:text-cyan-500" />
        </motion.button>
      </div>

      {/* Pagination Indicators */}
      <motion.div
        className="flex gap-2 justify-center mt-4 z-20"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        {projects?.map((_, idx) => (
          <motion.button
            key={idx}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "w-8 bg-mint-green"
                : "w-2 bg-navy-light hover:bg-navy-light/80"
            }`}
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollTo({
                  left: idx * scrollRef.current.clientWidth,
                  behavior: "smooth",
                });
              }
            }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
