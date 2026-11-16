"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type PopProps = HTMLMotionProps<"div"> & {
  /** Animation duration in seconds (original site used 0.8). */
  duration?: number;
  /** Play on page load instead of when scrolled into view. */
  instant?: boolean;
};

/** The "scale up" entrance used by every card in the original portfolio. */
export default function Pop({ duration = 0.8, instant = false, ...props }: PopProps) {
  if (instant) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration }}
        {...props}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration }}
      {...props}
    />
  );
}
