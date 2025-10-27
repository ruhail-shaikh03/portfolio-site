import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <motion.img
        initial={false}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        src={pageInfo?.profilePic ? urlFor(pageInfo.profilePic).url() : ""}
      />

      <div className="flex flex-col items-center md:items-start space-y-5 md:space-y-10 px-0 md:px-10">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
          About
        </h3>
        <h4 className="text-xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className=" underline decoration-darkGreen/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-lg lg:text-lg text-justify">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
