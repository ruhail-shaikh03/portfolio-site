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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly md:justify-start mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center w-full">
        Experience
      </h3>

      <div className="relative w-full flex items-center justify-center mt-10 md:mt-40">
        <ChevronLeftIcon
          className="absolute left-[-20px] md:left-[-10px] top-1/2 transform -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 text-gray-400 cursor-pointer z-30 hover:text-darkGreen transition-colors duration-200"
          onClick={() => scroll("left")}
        />

        <div
          ref={scrollRef}
          className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-hide"
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
          className="absolute right-[-20px] md:right-[-10px] top-1/2 transform -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 text-gray-400 cursor-pointer z-30 hover:text-darkGreen transition-colors duration-200"
          onClick={() => scroll("right")}
        />
      </div>
    </motion.div>
  );
}
