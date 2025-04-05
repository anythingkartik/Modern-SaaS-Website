import InstaIcon from "../assets/icons/insta.svg";
import XIcon from "../assets/icons/x-social.svg";
import TikTokIcon from "../assets/icons/tiktok.svg";
import YouTubeIcon from "../assets/icons/youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-white/20">
      <div className="container bg-black/70 text-white w-auto">
        <div className="flex flex-col text-center">
          <div> © 2025 Kartik Co. All rights reserved.</div>
          <ul className="flex justify-center gap-3  mt-5">
            <li>
              <InstaIcon />
            </li>
            <li>
              <XIcon />
            </li>
            <li>
              <TikTokIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
