import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = clientWidth * 0.8; // Assuming cards take up about 80% of the container width
      const scrollTo =
        direction === "left"
          ? scrollLeft - cardWidth
          : scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-left max-w-full px-10 justify-start mx-auto items-center py-12 min-h-fit bg-white"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-10 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xs md:text-sm uppercase tracking-[3px] text-cyan-500 font-semibold mb-4">
          Professional Journey
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">
          Work <span className="text-cyan-500">Experience</span>
        </h2>
      </motion.div>

      <div className="relative w-full flex items-center justify-center">
        <ChevronLeftIcon
          className="absolute left-[-20px] md:left-[-10px] top-1/2 transform -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 text-cyan-500 cursor-pointer z-30 hover:text-cyan-400 transition-colors duration-200"
          onClick={() => scroll("left")}
        />

        <div
          ref={scrollRef}
          className="w-full flex space-x-5 overflow-x-scroll p-4 md:p-6 snap-x snap-mandatory scrollbar-hide"
        >
          {experiences
            ?.slice()
            .sort(
              (a, b) =>
                new Date(b.dateStarted).getTime() -
                new Date(a.dateStarted).getTime()
            )
            .map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
        </div>

        <ChevronRightIcon
          className="absolute right-[-20px] md:right-[-10px] top-1/2 transform -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 text-cyan-500 cursor-pointer z-30 hover:text-cyan-400 transition-colors duration-200"
          onClick={() => scroll("right")}
        />
      </div>
    </motion.div>
  );
}
