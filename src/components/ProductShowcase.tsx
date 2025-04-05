"use client";
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-24  ">
      <div className="container">
        <h2 className="text-center font-bold tracking-tighter text-5xl sm:text-6xl">
          Intutive Interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with our app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div>
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "900px",
            }}
          >
            <Image
              src={appScreen}
              alt=""
              className="mt-14 mx-auto"
              ref={appImage}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
