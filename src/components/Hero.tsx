"use client";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import Image from "next/image";

import { motion } from "framer-motion";
import { use } from "react";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#200D42] via-34% via-[#4F21A1] via-65% to-[#A46EDB] to-82% text-white py-[72px] sm:py[80px] relative overflow-clip  py-40">
      <div className="absolute h-[375px] w-[750px] sm:w-[3000px] sm:h-[600px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] py-[72px] sm:py-24 top-[calc(100%-100px)] "></div>

      <div className="container text-white flex flex-col items-center justify-center space-y-4 ">
        <a
          href="#"
          className="border py-1 px-2 rounded-lg border-white/30 inline-flex gap-2"
        >
          <span>Version 2.0 is here </span>

          <span className="inline-flex items-center">
            <span>Read More </span>
            <ArrowIcon />
          </span>
        </a>
        <div className="inline-flex relative">
          <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex">
            One Task <br /> at a Time
          </h1>
          <motion.div
            className="absolute right-[476px] top-[108px] hidden sm:inline "
            drag
            dragSnapToOrigin
          >
            <Image
              src={cursorImage}
              height="200"
              width="200"
              alt=""
              className="max-w-none"
              draggable="false"
            />
          </motion.div>
          <motion.div
            className="absolute left-[498px] top-[56px] hidden sm:inline"
            drag
            dragSnapToOrigin
          >
            <Image
              src={messageImage}
              height="200"
              width="200"
              alt=""
              className="max-w-none"
              draggable="false"
            />
          </motion.div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your success.
          </p>
        </div>

        <div className="flex justify-center mt-8 relative z-10">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for Free
          </button>
        </div>
      </div>
    </div>
  );
};
