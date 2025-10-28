/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Enhanced color palette: Futuristic Minimalism
      colors: {
        // Original palette (maintained for compatibility)
        lightGreen: "#68B2A0",
        darkGreen: "#2C6975",
        lightBackground: "#F8F8F8",
        darkBackground: "#22262D",
        darkBlack: "#000000",
        grayColor: "#22262D",
        yellowColor: "#FFE033",
        
        // New futuristic palette for AI Engineer identity
        cyan: {
          50: "#F0FFFE",
          100: "#CCFFFC",
          200: "#99FFF9",
          300: "#66FFF6",
          400: "#33FFF3",
          500: "#00D9FF", // Primary accent
          600: "#00B8D4",
          700: "#0097AA",
          800: "#006B7A",
          900: "#004D52",
        },
        aqua: {
          50: "#F0FFFE",
          100: "#CCFFF8",
          200: "#99FFF1",
          300: "#66FFEA",
          400: "#33FFE3",
          500: "#64FFDA", // Secondary accent
          600: "#4DE5C3",
          700: "#36CBAC",
          800: "#1F9D7F",
          900: "#0B6F52",
        },
        navy: {
          50: "#F8FAFC",
          100: "#E2E8F0",
          200: "#CBD5E0",
          300: "#A0AEC0",
          400: "#718096",
          500: "#4A5568",
          600: "#2D3748",
          700: "#1A202C",
          800: "#0F111D", // Dark mode background
          900: "#0A0E27", // Deep navy background
        },
        slate: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },

      // Enhanced typography
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"], // Headings
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"], // Body
        mono: ["JetBrains Mono", "Menlo", "monospace"], // Code
      },

      fontSize: {
        // Extended scale for professional hierarchy
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
        "7xl": ["4.5rem", { lineHeight: "1.1" }],
      },

      // Enhanced spacing (8px base unit)
      spacing: {
        // Existing + new
        0: "0",
        0.5: "0.125rem", // 2px
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        7: "1.75rem", // 28px
        8: "2rem", // 32px
        9: "2.25rem", // 36px
        10: "2.5rem", // 40px
        12: "3rem", // 48px
        14: "3.5rem", // 56px
        16: "4rem", // 64px
        18: "4.5rem", // 72px
        20: "5rem", // 80px
        24: "6rem", // 96px
        28: "7rem", // 112px
        32: "8rem", // 128px
        36: "9rem", // 144px
        40: "10rem", // 160px
        44: "11rem", // 176px
        48: "12rem", // 192px
        52: "13rem", // 208px
        56: "14rem", // 224px
        60: "15rem", // 240px
        64: "16rem", // 256px
        72: "18rem", // 288px
        80: "20rem", // 320px
        96: "24rem", // 384px
      },

      // Enhanced shadows for depth and glassmorphism
      boxShadow: {
        // Soft elevation shadows
        "soft-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "soft-base": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "soft-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "soft-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "soft-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",

        // Glow effects for accent elements
        "glow-sm": "0 0 8px rgba(0, 217, 255, 0.3)",
        "glow-base": "0 0 16px rgba(0, 217, 255, 0.4)",
        "glow-md": "0 0 24px rgba(0, 217, 255, 0.5)",
        "glow-lg": "0 0 32px rgba(0, 217, 255, 0.6)",
        "glow-aqua": "0 0 16px rgba(100, 255, 218, 0.4)",
        "glow-gold": "0 0 16px rgba(255, 215, 0, 0.3)",

        // Glassmorphism shadows
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-lg": "0 12px 48px 0 rgba(31, 38, 135, 0.45)",
      },

      // Border radius scale
      borderRadius: {
        none: "0",
        sm: "0.375rem", // 6px
        base: "0.5rem", // 8px
        md: "0.75rem", // 12px
        lg: "1rem", // 16px
        xl: "1.5rem", // 24px
        "2xl": "2rem", // 32px
        "3xl": "2.5rem", // 40px
        full: "9999px",
      },

      // Custom animations
      animation: {
        // Entrance animations
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",

        // Continuous animations
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "gradient-shift": "gradientShift 3s ease infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",

        // Interactive animations
        "bounce-sm": "bounceSm 0.6s ease-in-out",
        "shake": "shake 0.5s ease-in-out",
      },

      keyframes: {
        // Entrance keyframes
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },

        // Continuous animations
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 217, 255, 0.7)" },
          "50%": { boxShadow: "0 0 0 10px rgba(0, 217, 255, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        // Interactive animations
        bounceSm: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-8px)" },
          "50%": { transform: "translateX(8px)" },
          "75%": { transform: "translateX(-4px)" },
        },
      },

      // Transition durations
      transitionDuration: {
        150: "150ms",
        250: "250ms",
        350: "350ms",
        500: "500ms",
      },

      // Backdrop blur for glassmorphism
      backdropBlur: {
        xs: "4px",
        sm: "8px",
        base: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
      },

      // Gradient stops
      gradientColorStops: {
        "primary": "#00D9FF",
        "secondary": "#64FFDA",
        "dark": "#0A0E27",
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar"),
    // Custom glassmorphism plugin
    function ({ addComponents, theme }) {
      addComponents({
        ".glass-effect": {
          "@apply relative backdrop-blur-md bg-white bg-opacity-5 border border-white border-opacity-10 rounded-2xl": {},
        },
        ".glass-effect-lg": {
          "@apply relative backdrop-blur-lg bg-white bg-opacity-8 border border-white border-opacity-15 rounded-3xl": {},
        },
        ".glass-dark": {
          "@apply relative backdrop-blur-md bg-black bg-opacity-20 border border-white border-opacity-5 rounded-2xl": {},
        },
      });
    },
  ],
};
