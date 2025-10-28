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
      className="relative min-h-screen flex flex-col items-center justify-center py-20 md:py-0 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Gradient background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-aqua-500/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        className="absolute top-20 md:top-24 z-20 text-center"
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-xs md:text-sm uppercase tracking-[3px] text-cyan-400 font-semibold">
          Featured Work
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3">
          Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-aqua-400">Showcase</span>
        </h2>
      </motion.div>

      {/* Projects Carousel */}
      <div className="relative w-full flex items-center justify-center mt-40 md:mt-48">
        {/* Left Arrow */}
        <motion.button
          className="absolute left-2 md:left-5 lg:left-10 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full glass-effect hover:shadow-glow-md transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("left")}
        >
          <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8 text-cyan-400 hover:text-cyan-300" />
        </motion.button>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar-hide"
          onScroll={(e) => {
            const element = e.target as HTMLDivElement;
            const index = Math.round(element.scrollLeft / element.clientWidth);
            setActiveIndex(index);
          }}
        >
          {projects?.map((project, i) => (
            <motion.div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col items-center p-4"
              variants={projectCardVariants}
              initial="rest"
              whileHover="hover"
            >
              <div className="flex flex-col items-center justify-start max-h-[calc(100vh-220px)] overflow-y-auto p-4 scrollbar-hide space-y-6">
                {/* Project Image with overlay */}
                {project?.image && (
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.img
                      className="h-40 md:h-56 lg:h-72 object-contain flex-shrink-0 rounded-xl shadow-lg"
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
                  className="space-y-4 px-0 md:px-10 max-w-4xl"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Title */}
                  <motion.h3
                    variants={fadeInUpVariants}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center"
                  >
                    {project?.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.div
                    variants={fadeInUpVariants}
                    className="text-sm md:text-base lg:text-lg text-slate-300 text-justify leading-relaxed"
                  >
                    <PortableText
                      value={project?.summary}
                      components={{
                        block: {
                          normal: ({ children }) => (
                            <p className="mb-4">{children}</p>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-xl md:text-2xl font-bold mb-3 mt-4 text-cyan-400">
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-lg md:text-xl font-semibold mb-2 mt-3 text-aqua-400">
                              {children}
                            </h3>
                          ),
                        },
                        list: {
                          bullet: ({ children }) => (
                            <ul className="list-disc list-inside mb-3 space-y-2 text-slate-300">
                              {children}
                            </ul>
                          ),
                        },
                        marks: {
                          strong: ({ children }) => (
                            <strong className="font-bold text-cyan-300">
                              {children}
                            </strong>
                          ),
                          em: ({ children }) => (
                            <em className="italic text-aqua-300">
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
                      className="flex flex-wrap gap-2 justify-center pt-4"
                    >
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech._id}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs md:text-sm text-cyan-300 font-medium"
                          whileHover={{ scale: 1.05, borderColor: "#00D9FF" }}
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
                      className="flex justify-center pt-4"
                    >
                      <motion.a
                        href={project.linkToBuild}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-aqua-500 text-white font-medium rounded-lg hover:shadow-glow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
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
          className="absolute right-2 md:right-5 lg:right-10 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full glass-effect hover:shadow-glow-md transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("right")}
        >
          <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8 text-cyan-400 hover:text-cyan-300" />
        </motion.button>
      </div>

      {/* Pagination Indicators */}
      <motion.div
        className="flex gap-2 justify-center mt-8 z-20"
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
                ? "w-8 bg-cyan-400"
                : "w-2 bg-slate-500 hover:bg-slate-400"
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
