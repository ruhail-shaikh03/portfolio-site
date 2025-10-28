"use client";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, the name's ${pageInfo?.name}`,
      "I like to play 🏓",
      "I_like_to_code.py",
      "And I'm addicted to ☕️",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const initial = `Hi, the name's ${pageInfo?.name}`;

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-full h-32 w-32 mx-auto object-cover border-2 border-mint-green/30 shadow-glow-lg z-10"
        src={pageInfo?.heroImage ? urlFor(pageInfo.heroImage).url() : ""}
        alt={pageInfo?.name}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="z-20"
      >
        <h2 className="text-sm uppercase text-mint-green pb-2 tracking-[12px] md:tracking-[18px] font-medium">
          {pageInfo?.role}
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold px-4 md:px-10 text-ice-white leading-tight">
          <span className="mr-1">{mounted ? text : initial}</span>
          {mounted ? <Cursor cursorColor="#64FFDA" cursorStyle="█" /> : null}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 flex flex-wrap gap-4 justify-center"
        >
          <Link href="#about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-2 md:py-3 border-2 border-mint-green/50 rounded-full uppercase text-xs md:text-sm tracking-widest text-ice-white font-medium transition-all duration-300 hover:text-text-dark hover:border-mint-green hover:bg-mint-green hover:shadow-glow-sm backdrop-blur-sm bg-navy-light/50"
            >
              About
            </motion.button>
          </Link>
          <Link href="#experience">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-2 md:py-3 border-2 border-mint-green/50 rounded-full uppercase text-xs md:text-sm tracking-widest text-ice-white font-medium transition-all duration-300 hover:text-text-dark hover:border-mint-green hover:bg-mint-green hover:shadow-glow-sm backdrop-blur-sm bg-navy-light/50"
            >
              Experience
            </motion.button>
          </Link>
          <Link href="#skills">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-2 md:py-3 border-2 border-mint-green/50 rounded-full uppercase text-xs md:text-sm tracking-widest text-ice-white font-medium transition-all duration-300 hover:text-text-dark hover:border-mint-green hover:bg-mint-green hover:shadow-glow-sm backdrop-blur-sm bg-navy-light/50"
            >
              Skills
            </motion.button>
          </Link>
          <Link href="#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-2 md:py-3 border-2 border-mint-green/50 rounded-full uppercase text-xs md:text-sm tracking-widest text-ice-white font-medium transition-all duration-300 hover:text-text-dark hover:border-mint-green hover:bg-mint-green hover:shadow-glow-sm backdrop-blur-sm bg-navy-light/50"
            >
              Projects
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
