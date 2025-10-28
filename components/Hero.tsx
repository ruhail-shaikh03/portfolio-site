"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { 
  fadeInUpVariants, 
  fadeInDownVariants, 
  buttonVariants,
  buttonGlowVariants,
  heroHaloVariants,
  containerVariants
} from "../hooks/useMotionVariants";

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
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cursor tracking for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) * 0.02;
      const y = (clientY - window.innerHeight / 2) * 0.02;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const initial = `Hi, the name's ${pageInfo?.name}`;

  return (
    <motion.div 
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <BackgroundCircles />

      {/* Profile Image with Halo Glow */}
      <motion.div
        className="relative z-20"
        variants={fadeInDownVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={heroHaloVariants}
          animate="visible"
          className="absolute inset-0 rounded-full"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
        />
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover border-2 border-cyan-500/30 shadow-glow-lg"
          src={pageInfo?.heroImage ? urlFor(pageInfo.heroImage).url() : ""}
          alt={pageInfo?.name}
        />
      </motion.div>

      {/* Hero Text Content */}
      <motion.div 
        className="z-20 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Role/Title */}
        <motion.h2 
          variants={fadeInUpVariants}
          className="text-sm uppercase text-cyan-400 pb-2 tracking-[10px] md:tracking-[15px] font-medium"
        >
          {pageInfo?.role}
        </motion.h2>

        {/* Main Typewriter Heading */}
        <motion.h1 
          variants={fadeInUpVariants}
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-4 md:px-10 leading-tight"
        >
          <span className="mr-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-aqua-300 to-cyan-300">
            {mounted ? text : initial}
          </span>
          {mounted ? (
            <Cursor cursorColor="#00D9FF" cursorStyle="█" />
          ) : null}
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div 
          className="pt-8 flex flex-wrap gap-4 justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { href: "#about", label: "About" },
            { href: "#experience", label: "Experience" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
          ].map((btn, idx) => (
            <motion.div
              key={btn.href}
              variants={fadeInUpVariants}
              custom={idx}
              transition={{ delay: 0.1 * idx }}
            >
              <Link href={btn.href}>
                <motion.button
                  variants={buttonGlowVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="px-6 md:px-8 py-2 md:py-3 border-2 border-cyan-500/50 rounded-full uppercase text-xs md:text-sm tracking-widest text-cyan-300 font-medium transition-all duration-300 hover:text-white hover:border-cyan-400 backdrop-blur-sm bg-cyan-500/5"
                >
                  {btn.label}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xs uppercase tracking-widest text-slate-500">Scroll down</p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-500 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Download CV Button - Floating */}
      <motion.a
        href="#contact"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 md:block hidden"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        <motion.div
          className="p-4 rounded-full border-2 border-cyan-500/50 text-cyan-400 hover:text-white hover:border-cyan-400 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </motion.div>
  );
}
