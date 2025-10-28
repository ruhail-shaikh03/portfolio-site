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
      className="relative py-12 px-4 sm:px-6 lg:px-8 bg-navy-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Gradient background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mint-green/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl w-full mx-auto">
        {/* Centered Header */}
        <motion.div
          className="text-center mb-8 lg:mb-12 w-full"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xs md:text-sm uppercase tracking-[3px] text-mint-green font-semibold mb-2 md:mb-4">
            Get In Touch
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl lg:text-6xl font-bold text-ice-white leading-tight mb-2 md:mb-4">
            Let's work <span className="text-mint-green">together</span>
          </h2>
          <p className="text-xs md:text-base lg:text-lg text-text-medium max-w-2xl mx-auto px-2">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-3 lg:space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={idx}
                    className="glass rounded-lg p-3 md:p-4 flex items-start gap-3 md:gap-4 hover:shadow-glow-sm transition-all duration-300 bg-navy-light/40 border border-mint-green/20"
                    variants={fadeInUpVariants}
                    whileHover={{ y: -4, boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)" }}
                  >
                    <motion.div
                      className="flex-shrink-0 p-2 md:p-3 bg-mint-green/10 rounded-lg"
                      whileHover={{ rotate: 10 }}
                    >
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-mint-green" />
                    </motion.div>
                    <div>
                      <p className="text-xs md:text-sm text-ice-white uppercase tracking-wide font-semibold">
                        {info.label}
                      </p>
                      <p className="text-text-medium font-medium mt-0.5 md:mt-1 text-xs md:text-sm">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className="bg-navy-light/40 border border-mint-green/20 rounded-2xl p-4 md:p-8 md:p-10 space-y-4 md:space-y-6"
            variants={scaleInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-2xl font-bold text-ice-white">Send me a message</h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 md:space-y-4"
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label className="block text-xs font-semibold text-mint-green uppercase tracking-wider mb-1 md:mb-2">
                    Name
                  </label>
                  <motion.input
                    {...register("name", { required: true })}
                    placeholder="Your name"
                    className="input-glow w-full text-sm"
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
                  <label className="block text-xs font-semibold text-mint-green uppercase tracking-wider mb-2">
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
                <label className="block text-xs font-semibold text-mint-green uppercase tracking-wider mb-2">
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
                <label className="block text-xs font-semibold text-mint-green uppercase tracking-wider mb-2">
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
                  className="w-full py-3 px-6 bg-mint-green text-text-dark font-semibold rounded-lg hover:bg-mint-green/90 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
