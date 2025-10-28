/**
 * Reusable Framer Motion variants and animation constants
 * Used across all components for consistent, performant animations
 */

import { Variants } from "framer-motion";

// ===== TIMING CONSTANTS =====
export const TIMING = {
  QUICK: 0.15,
  STANDARD: 0.3,
  EMPHASIS: 0.5,
  EPIC: 0.8,
};

export const EASING = {
  SNAPPY: [0.34, 1.56, 0.64, 1], // Spring-like
  SMOOTH: [0.4, 0, 0.2, 1], // Material Design
  ORGANIC: [0.34, 1.56, 0.64, 1], // Natural feel
  MECHANICAL: [0.25, 0.46, 0.45, 0.94], // Robotic precision
};

// ===== CONTAINER ANIMATIONS =====
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// ===== FADE ANIMATIONS =====
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: TIMING.STANDARD,
      ease: EASING.SMOOTH,
    },
  },
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.STANDARD,
      ease: EASING.SMOOTH,
    },
  },
};

export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.STANDARD,
      ease: EASING.SMOOTH,
    },
  },
};

// ===== SLIDE ANIMATIONS =====
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: TIMING.STANDARD,
      ease: EASING.SMOOTH,
    },
  },
};

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: TIMING.STANDARD,
      ease: EASING.SMOOTH,
    },
  },
};

// ===== SCALE ANIMATIONS =====
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: TIMING.STANDARD,
      ease: EASING.SNAPPY,
    },
  },
};

export const scaleUpOnHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: TIMING.QUICK,
      ease: EASING.SNAPPY,
    },
  },
};

// ===== MAGNETIC HOVER VARIANTS =====
export const magneticHoverVariants: Variants = {
  rest: { x: 0, y: 0 },
  hover: {
    x: -5,
    y: -5,
    transition: {
      duration: TIMING.QUICK,
      ease: EASING.SNAPPY,
    },
  },
};

// ===== GLOW ANIMATIONS =====
export const glowOnHoverVariants: Variants = {
  rest: {
    boxShadow: "0 0 0px rgba(0, 217, 255, 0)",
  },
  hover: {
    boxShadow: "0 0 20px rgba(0, 217, 255, 0.5)",
    transition: {
      duration: TIMING.QUICK,
      ease: EASING.SMOOTH,
    },
  },
};

// ===== BUTTON ANIMATIONS =====
export const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export const buttonGlowVariants: Variants = {
  rest: {
    boxShadow: "0 0 0px rgba(0, 217, 255, 0.3)",
  },
  hover: {
    boxShadow: "0 0 20px rgba(0, 217, 255, 0.6)",
  },
  tap: {
    boxShadow: "0 0 10px rgba(0, 217, 255, 0.4)",
  },
};

// ===== TEXT ANIMATIONS =====
export const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.STANDARD,
      ease: EASING.SMOOTH,
    },
  },
};

export const letterSpacingVariants: Variants = {
  hidden: { letterSpacing: "0em" },
  visible: {
    letterSpacing: "0.1em",
    transition: {
      duration: TIMING.EMPHASIS,
      ease: EASING.SMOOTH,
    },
  },
};

// ===== PARALLAX ANIMATIONS =====
export const parallaxVariants = (offset: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: TIMING.STANDARD,
      ease: EASING.SMOOTH,
    },
  },
});

// ===== SCROLL REVEAL ANIMATIONS =====
export const scrollRevealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.EMPHASIS,
      ease: EASING.SMOOTH,
    },
  },
};

// ===== BLUR FADE IN =====
export const blurFadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: TIMING.EMPHASIS,
      ease: EASING.SMOOTH,
    },
  },
};

// ===== GRADIENT ANIMATIONS =====
export const gradientShiftVariants: Variants = {
  hidden: { backgroundPosition: "0% 50%" },
  visible: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

// ===== INPUT/FORM ANIMATIONS =====
export const inputFocusVariants: Variants = {
  unfocused: {
    borderColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 0 0px rgba(0, 217, 255, 0)",
  },
  focused: {
    borderColor: "rgba(0, 217, 255, 0.5)",
    boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
    transition: {
      duration: TIMING.QUICK,
      ease: EASING.SMOOTH,
    },
  },
};

// ===== VALIDATION ANIMATIONS =====
export const successPulseVariants: Variants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.6,
      ease: EASING.SNAPPY,
    },
  },
};

export const shakeVariants: Variants = {
  hidden: { x: 0 },
  visible: {
    x: [-8, 8, -8, 8, -4, 4, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// ===== CARD ANIMATIONS =====
export const cardHoverVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 217, 255, 0.2)",
    transition: {
      duration: TIMING.QUICK,
      ease: EASING.SNAPPY,
    },
  },
};

export const cardTiltVariants: Variants = {
  rest: { rotateX: 0, rotateY: 0 },
  hover: {
    rotateX: 5,
    rotateY: -5,
    transition: {
      duration: TIMING.QUICK,
      ease: EASING.SMOOTH,
    },
  },
};

// ===== ROTATION ANIMATIONS =====
export const rotateVariants = (duration: number = 20): Variants => ({
  visible: {
    rotate: 360,
    transition: {
      duration,
      repeat: Infinity,
      ease: "linear",
    },
  },
});

// ===== FLOAT ANIMATIONS =====
export const floatVariants = (offset: number = 10): Variants => ({
  visible: {
    y: [0, -offset, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

// ===== HERO SPECIFIC =====
export const heroHaloVariants: Variants = {
  visible: {
    boxShadow: [
      "0 0 20px rgba(0, 217, 255, 0.4)",
      "0 0 40px rgba(0, 217, 255, 0.6)",
      "0 0 20px rgba(0, 217, 255, 0.4)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const heroCursorVariants = (x: number, y: number): Variants => ({
  visible: {
    x,
    y,
    transition: {
      duration: 0.3,
      ease: EASING.SMOOTH,
    },
  },
});

// ===== EXPERIENCE TIMELINE =====
export const timelineLineVariants: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: TIMING.EMPHASIS,
      ease: EASING.SMOOTH,
    },
  },
};

export const timelineCardVariants = (index: number): Variants => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: TIMING.STANDARD,
      delay: index * 0.1,
      ease: EASING.SMOOTH,
    },
  },
});

// ===== SKILLS GRID =====
export const skillGridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const skillItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: TIMING.STANDARD,
      ease: EASING.SNAPPY,
    },
  },
};

export const skillRotateOnHoverVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 10,
    transition: {
      duration: TIMING.QUICK,
      ease: EASING.SNAPPY,
    },
  },
};

// ===== PROJECTS =====
export const projectCardVariants: Variants = {
  rest: { opacity: 1, y: 0 },
  hover: {
    opacity: 1,
    y: -10,
  },
};

export const projectImageVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
};

export const projectOverlayVariants: Variants = {
  rest: { opacity: 0.3 },
  hover: { opacity: 0.6 },
};

// ===== UTILITY HOOK =====
export const useMotionVariants = () => ({
  // Containers
  containerVariants,
  staggerContainerVariants,

  // Fades
  fadeInVariants,
  fadeInUpVariants,
  fadeInDownVariants,

  // Slides
  slideInLeftVariants,
  slideInRightVariants,

  // Scales
  scaleInVariants,
  scaleUpOnHoverVariants,

  // Hovers
  magneticHoverVariants,
  glowOnHoverVariants,
  cardHoverVariants,

  // Buttons & Forms
  buttonVariants,
  buttonGlowVariants,
  inputFocusVariants,

  // Text & Typography
  textRevealVariants,
  letterSpacingVariants,
  blurFadeInVariants,

  // Advanced
  parallaxVariants,
  scrollRevealVariants,
  gradientShiftVariants,

  // Validation
  successPulseVariants,
  shakeVariants,

  // Specialized
  heroHaloVariants,
  timelineLineVariants,
  skillGridContainerVariants,
  skillItemVariants,
  projectCardVariants,
});
