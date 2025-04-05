"use client";
import Image1 from "../assets/images/helix2.png";
import Image2 from "../assets/images/emojistar.png";
import Image from "next/image";
import { use, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div
      className="bg-black text-white  py-[72px] py-24 text-center"
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={Image1}
            alt=""
            className="absolute -top-[120px] left-[calc(100%+24px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={Image2}
            alt=""
            className="absolute top-6 right-[calc(100%+36px)]"
          />
        </motion.div>

        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Get Instant Access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts
        </p>
        <form className="mt-10 flex flex-row gap-2.5 max-w-sm mx-auto sm:flex-col">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF]"
          />
          <button className="bg-white text-black rounded-lg h-12 px-5">
            Get Access
          </button>
        </form>
      </div>
    </div>
  );
};
