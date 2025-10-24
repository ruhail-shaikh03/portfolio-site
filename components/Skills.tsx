import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-4 md:gap-5">
        {(() => {
          const all = skills ?? [];
          const half = Math.floor(all.length / 2);
          return (
            <>
              {all.slice(0, half).map((skill) => (
                <Skill key={skill._id} skill={skill} />
              ))}
              {all.slice(half).map((skill) => (
                <Skill key={skill._id} skill={skill} directionLeft />
              ))}
            </>
          );
        })()}
      </div>
    </motion.div>
  );
}
