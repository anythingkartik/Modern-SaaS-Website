"use client";
import { use } from "react";
import EcoSystemIcon from "../assets/icons/ecosystem.svg";
import { useEffect } from "react";

export const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {};
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <div>
      <div
        key={title}
        className="border border-white/30 px-5 py-10 text-center rounded-xl mt-4 relative "
      >
        <div
          className="absolute inset-0 border-2 border-purple-400 rounded-xl"
          style={{
            WebkitMaskImage:
              "radial-gradient(100px at 0px 0px, black, transparent",
            maskImage: "radial-gradient(100px at 0px 0px, black, transparent",
          }}
        ></div>
        <div className="inline-flex items-center text-black bg-white rounded-lg h-14 w-14 justify-center">
          <EcoSystemIcon />
        </div>
        <h3 className="mt-6 font-bold">{title}</h3>
        <p className="mt-2 text-white/70">{description}</p>
      </div>
    </div>
  );
};
