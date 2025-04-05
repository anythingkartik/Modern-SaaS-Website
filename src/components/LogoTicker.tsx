"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <>
      <div className="bg-black text-white py-[72px] sm:py-24">
        <div className="container">
          <h2 className="text-xl text-center text-white/70">
            Trusted by the world&apos;s most innovative teams
          </h2>
          <div
            className="
              overflow-hidden mt-9 relative
              before:content-[''] before:z-10 after:content-['']
              before:absolute after:absolute
              before:h-full after:h-full
              before:w-20 after:w-20
              before:left-0 after:right-0
              before:top-0 after:top-0
              before:bg-gradient-to-r before:from-black before:to-transparent
              after:bg-gradient-to-l after:from-black after:to-transparent"
          >
            <div className="flex gap-16 items-center justify-center ">
              <motion.div
                transition={{
                  duration: 15,
                  ease: "linear",
                  repeat: Infinity,
                }}
                initial={{ translateX: 0 }}
                animate={{ translateX: "-15%" }}
                className="flex gap-16 flex-none pr-15"
              >
                {images.map(({ src, alt }) => (
                  <Image
                    key={alt}
                    src={src}
                    alt={alt}
                    className="flex-none h-8 w-auto"
                  />
                ))}
                {images.map(({ src, alt }) => (
                  <Image
                    key={alt}
                    src={src}
                    alt={alt}
                    className="flex-none h-8 w-auto"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
