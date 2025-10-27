"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

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
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:Ruhailrizwan@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
  };

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center">
      <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
        <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl text-center">
          Contact
        </h3>
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-darkGreen/50 underline">Lets talk.</span>
        </h4>

        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center space-x-3 md:space-x-5 justify-center">
            <PhoneIcon className="text-darkGreen h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">+92 312 5556326</p>
          </div>
          <div className="flex items-center space-x-3 md:space-x-5 justify-center">
            <EnvelopeIcon className="text-darkGreen h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">Ruhailrizwan@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3 md:space-x-5 justify-center">
            <MapPinIcon className="text-darkGreen h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">Islamabad, Pakistan</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full sm:w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-lightGreen py-3 md:py-5 px-10 rounded-md text-white font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
