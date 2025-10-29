import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";
import { fadeInDownVariants, containerVariants } from "../hooks/useMotionVariants";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md bg-navy-dark/80 border-b border-navy-light shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0"
        >
          <Link href="#hero">
            <motion.div
              className="text-xl font-bold text-mint-green cursor-pointer"
              whileHover={{ textShadow: "0 0 20px rgba(100, 255, 218, 0.5)" }}
            >
              Ruhail
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation - Center */}
        <motion.nav
          className="hidden md:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, idx) => (
            <Link key={link.href} href={link.href}>
              <motion.div
                className="relative text-sm uppercase tracking-widest text-ice-white cursor-pointer group font-medium hover:text-mint-green transition-colors"
                transition={{ duration: 0.3 }}
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-mint-green"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          ))}
        </motion.nav>

        {/* Social Icons */}
        <motion.div
          className="flex flex-row items-center gap-2 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socials.map((social, idx) => (
            <motion.div
              key={social._id}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <SocialIcon
                url={social.url}
                fgColor="#00D9FF"
                bgColor="rgba(0, 217, 255, 0.1)"
                style={{ width: "36px", height: "36px" }}
              />
            </motion.div>
          ))}

          {/* Contact Button */}
          <Link href="#contact">
            <motion.button
              className="ml-2 md:ml-4 px-4 md:px-6 py-2 rounded-full text-sm font-medium text-text-dark bg-mint-green hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </Link>
        </motion.div>
      </div>

    </motion.header>
  );
}
