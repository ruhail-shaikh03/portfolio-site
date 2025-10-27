import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left max-w-[2000px] px-4 sm:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-10">
        Skills
      </h3>
      <motion.div
        initial={false}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-4 lg:grid-cols-8 gap-5 p-4 place-items-center"
      >
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}
