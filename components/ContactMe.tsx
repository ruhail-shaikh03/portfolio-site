"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
import {
  containerVariants,
  fadeInUpVariants,
  inputFocusVariants,
  successPulseVariants,
  scaleInVariants,
} from "../hooks/useMotionVariants";

type Props = {
  pageInfo?: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const mailtoLink = `mailto:Ruhailrizwan@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi, my name is ${formData.name}.\n\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      // Show success message
      setIsSuccess(true);
      reset();

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);

      setIsSubmitting(false);
    }, 800);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+92 312 5556326",
    },
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "Ruhailrizwan@gmail.com",
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: "Islamabad, Pakistan",
    },
  ];

  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center py-20 md:py-0 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Gradient background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aqua-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div variants={fadeInUpVariants} className="space-y-4">
              <p className="text-xs md:text-sm uppercase tracking-[3px] text-cyan-400 font-semibold">
                Get In Touch
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Let's work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-aqua-400">together</span>
              </h2>
              <p className="text-lg text-slate-300">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
            </motion.div>

            {/* Contact Information Cards */}
            <motion.div className="space-y-4" variants={containerVariants}>
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={idx}
                    className="glass rounded-lg p-4 flex items-start gap-4 hover:shadow-glow-sm transition-all duration-300"
                    variants={fadeInUpVariants}
                    whileHover={{ y: -4, boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)" }}
                  >
                    <motion.div
                      className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-500/20 to-aqua-500/20 rounded-lg"
                      whileHover={{ rotate: 10 }}
                    >
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-wide font-semibold">
                        {info.label}
                      </p>
                      <p className="text-white font-medium mt-1">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className="glass-lg rounded-2xl p-8 md:p-10 space-y-6"
            variants={scaleInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white">Send me a message</h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label className="block text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <motion.input
                    {...register("name", { required: true })}
                    placeholder="Your name"
                    className="input-glow w-full"
                    type="text"
                    variants={inputFocusVariants}
                    initial="unfocused"
                    whileFocus="focused"
                  />
                </motion.div>

                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <motion.input
                    {...register("email", { required: true })}
                    placeholder="your@email.com"
                    className="input-glow w-full"
                    type="email"
                    variants={inputFocusVariants}
                    initial="unfocused"
                    whileFocus="focused"
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <motion.input
                  {...register("subject", { required: true })}
                  placeholder="What's this about?"
                  className="input-glow w-full"
                  type="text"
                  variants={inputFocusVariants}
                  initial="unfocused"
                  whileFocus="focused"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <motion.textarea
                  {...register("message", { required: true })}
                  placeholder="Your message..."
                  className="textarea-glow w-full h-32 resize-none"
                  variants={inputFocusVariants}
                  initial="unfocused"
                  whileFocus="focused"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-aqua-500 text-white font-semibold rounded-lg hover:shadow-glow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSuccess ? (
                    <>
                      <CheckCircleIcon className="h-5 w-5" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.div>
            </form>

            {/* Success Message */}
            <motion.div
              className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-sm text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={
                isSuccess
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -10 }
              }
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              ✓ Thank you! Your message has been sent successfully.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
