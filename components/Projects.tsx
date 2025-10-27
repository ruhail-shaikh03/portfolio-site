import { motion } from "framer-motion";
import React, { useRef } from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import { PortableText } from "@portabletext/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <div className="h-screen relative flex flex-col items-center justify-start overflow-hidden text-left">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-20">
        Projects
      </h3>

      <div className="relative w-full flex items-center justify-center mt-32 md:mt-40">
        <ChevronLeftIcon
          className="absolute left-2 md:left-5 lg:left-10 top-1/2 transform -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 text-gray-400 cursor-pointer z-30 hover:text-darkGreen transition-colors duration-200"
          onClick={() => scroll("left")}
        />

        <div
          ref={scrollRef}
          className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar-hide"
        >
          {projects?.map((project, i) => (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col items-center p-4"
            >
              <div className="flex flex-col items-center justify-start max-h-[calc(100vh-220px)] overflow-y-auto p-4 scrollbar-hide">
                {project?.image && (
                  <motion.img
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="h-28 md:h-40 lg:h-52 object-contain mb-4 flex-shrink-0 cursor-pointer"
                    src={urlFor(project.image).url()}
                    alt=""
                    onClick={() =>
                      project.linkToBuild &&
                      window.open(project.linkToBuild, "_blank")
                    }
                  />
                )}

                <div className="space-y-4 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-lg md:text-2xl lg:text-3xl font-semibold text-center">
                    <span className="underline decoration-darkGreen/50">
                      Project {i + 1}:
                    </span>{" "}
                    {project?.title}
                    {project?.linkToBuild && (
                      <span className="text-sm text-darkGreen/70 ml-2">
                        (Click image to view)
                      </span>
                    )}
                  </h4>

                  <div className="text-sm md:text-base lg:text-lg text-justify">
                    <PortableText
                      value={project?.summary}
                      components={{
                        block: {
                          normal: ({ children }) => (
                            <p className="mb-2">{children}</p>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-xl md:text-2xl font-bold mb-3 mt-4 text-darkGreen">
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-lg md:text-xl font-semibold mb-2 mt-3 text-darkGreen">
                              {children}
                            </h3>
                          ),
                        },
                        list: {
                          bullet: ({ children }) => (
                            <ul className="list-disc list-inside mb-3 space-y-1">
                              {children}
                            </ul>
                          ),
                        },
                        marks: {
                          strong: ({ children }) => (
                            <strong className="font-bold text-darkGreen">
                              {children}
                            </strong>
                          ),
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ChevronRightIcon
          className="absolute right-2 md:right-5 lg:right-10 top-1/2 transform -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 text-gray-400 cursor-pointer z-30 hover:text-darkGreen transition-colors duration-200"
          onClick={() => scroll("right")}
        />
      </div>
      
      <div className="w-full absolute top-[30%] bg-darkGreen/40 left-0 h-[500px] -skew-y-12 z-0" />
    </div>
  );
}
