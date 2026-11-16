"use client";

import { motion } from "framer-motion";
import Pop from "./Pop";

const phrase = (
  <>
    FOR ALL YOUR FREELANCE NEEDS <span className="text-white">I AM AVAILABLE . </span>
  </>
);

/** Scrolling "available for freelance" ticker at the top of the home grid. */
export default function Marquee() {
  return (
    <Pop
      instant
      className="absolute ml-6 h-12 w-[565px] overflow-hidden rounded-3xl border-[0.25px] border-[#313131] bg-[#1A1A1A] max-xl:ml-0 max-xl:mt-6 max-xl:w-[90%] max-sm:mt-6 max-sm:w-full"
    >
      <motion.p
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 8, repeat: Infinity }}
        className="ml-6 mt-3 whitespace-nowrap text-sm text-[gray]"
      >
        {phrase}
        {phrase}
        {phrase}
        {phrase}
      </motion.p>
    </Pop>
  );
}
