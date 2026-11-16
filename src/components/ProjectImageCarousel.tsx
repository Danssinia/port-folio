"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectImageCarousel({
  images,
  title,
}: {
  images: StaticImageData[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  const goTo = (offset: number) => {
    setActiveIndex((current) => (current + offset + images.length) % images.length);
  };

  return (
    <div className="relative aspect-[1.35] w-full overflow-hidden rounded-[22px] bg-black/[0.12]">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeImage.src}-${activeIndex}`}
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.985 }}
          transition={{ duration: 0.22 }}
          className="absolute inset-0"
        >
          <Image
            src={activeImage}
            alt={`${title} project screenshot ${activeIndex + 1}`}
            fill
            priority={activeIndex === 0}
            sizes="(min-width: 1280px) 55vw, 90vw"
            className="object-contain p-3 sm:p-5"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-10 sm:px-5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Previous project screenshot"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white transition hover:bg-white hover:text-black"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Next project screenshot"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white transition hover:bg-white hover:text-black"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="absolute left-1/2 top-4 flex -translate-x-1/2 gap-1.5" aria-label="Choose screenshot">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show screenshot ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all ${activeIndex === index ? "w-6 bg-blue-400" : "w-1.5 bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
}
