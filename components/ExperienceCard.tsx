import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-3xl items-center space-y-4 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[600px] snap-center bg-white bg-gradient-to-tr from-white to-darkGreen/20 p-6 md:p-8 transition-opacity duration-200">
      <motion.img
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={experience?.companyImage ? urlFor(experience.companyImage).url() : ""}
        alt={`${experience?.company} logo`}
      />
      <div className="w-full px-0 md:px-5">
        <div className="text-center">
          <h4 className="text-xl md:text-2xl font-light text-black">
            {experience?.jobTitle}
          </h4>
          <p className="font-bold text-lg md:text-xl mt-1 text-lightGreen">
            {experience?.company}
          </p>
          <p className="uppercase py-3 text-gray-500 text-sm">
            {new Date(experience?.dateStarted).toLocaleDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience?.dateEnded).toLocaleDateString()}
          </p>
        </div>
        <div className="flex justify-center space-x-2 my-2">
          {experience?.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="h-8 w-8 rounded-full object-cover"
              src={technology?.image ? urlFor(technology.image).url() : ""}
              alt={technology.title}
            />
          ))}
        </div>
      </div>
      <div className="w-full max-h-48 md:max-h-40 overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-darkGreen/80 px-4 md:px-6">
        <ul className="list-disc space-y-2 text-black text-sm md:text-base text-left pl-5">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
