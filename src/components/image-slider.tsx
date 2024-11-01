"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Img } from "./image";

import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";

interface SliderProps {
  images: string[];
}

export const ImageSlider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      {/* Previous Button */}
      <button
        className={`absolute left-4 border border-secondary z-10 transform -translate-y-1/2 top-1/2 size-10 sm:size-12 flex items-center justify-center rounded-lg bg-light duration-300 group hover:bg-secondary`}
        type="button"
        onClick={prevSlide}
      >
        <PiCaretLeftThin size={26} className={`duration-300 fill-secondary group-hover:fill-light`} />
      </button>

      {/* Image Slide */}
      <div className="relative flex">
        <AnimatePresence initial={false} mode="wait">
          <motion.div key={currentIndex} className="w-full h-full" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
            <Img src={images[currentIndex] || "/temp-article.webp"} alt="image slider" className={`rounded-lg w-full mx-auto h-64 md:h-96`} cover />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        className={`absolute right-4 border border-secondary z-10 transform -translate-y-1/2 top-1/2 size-10 sm:size-12 flex items-center justify-center rounded-lg bg-light duration-300 group hover:bg-secondary`}
        type="button"
        onClick={nextSlide}
      >
        <PiCaretRightThin size={26} className={`duration-300 fill-secondary group-hover:fill-light`} />
      </button>
    </div>
  );
};
