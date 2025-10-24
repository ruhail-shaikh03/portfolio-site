import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import { PortableText } from "@portabletext/react";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen cursor-pointer hover:bg-darkGreen/5 transition-colors duration-300"
            onClick={() => project.linkToBuild && window.open(project.linkToBuild, '_blank')}
          >
            <motion.img
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className=" h-28 xl:h-80 md:h-72 object-contain"
              src={project?.image ? urlFor(project.image).url() : ""}
              alt=""
            />

            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-darkGreen/50">
                  Project {i + 1}:
                </span>{" "}
                {project?.title}
                {project?.linkToBuild && (
                  <span className="text-sm text-darkGreen/70 ml-2">(Click to view)</span>
                )}
              </h4>

              <div className="text-sm md:text-md lg:text-lg text-justify">
                <PortableText 
                  value={project?.summary} 
                  components={{
                    block: {
                      normal: ({children}) => <p className="mb-2">{children}</p>,
                      h2: ({children}) => <h2 className="text-xl md:text-2xl font-bold mb-3 mt-4 text-darkGreen">{children}</h2>,
                      h3: ({children}) => <h3 className="text-lg md:text-xl font-semibold mb-2 mt-3 text-darkGreen">{children}</h3>,
                    },
                    list: {
                      bullet: ({children}) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
                      number: ({children}) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
                    },
                    listItem: {
                      bullet: ({children}) => <li className="ml-4">{children}</li>,
                      number: ({children}) => <li className="ml-4">{children}</li>,
                    },
                    marks: {
                      strong: ({children}) => <strong className="font-bold text-darkGreen">{children}</strong>,
                      em: ({children}) => <em className="italic">{children}</em>,
                      code: ({children}) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[20%] md:top-[30%] bg-darkGreen/40 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
