"use client";

import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import { CustomMotion } from "./motion";
import { Img } from "./image";

import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";

interface SliderProps {
  images: string[];
  imgClassName: string;
}

export const ImageSlider: React.FC<SliderProps> = ({ images, imgClassName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative mx-auto w-72 aspect-square sm:w-80 lg:w-96 overflow-hidden">
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
          <CustomMotion key={currentIndex} className="w-full h-full">
            <Img src={images[currentIndex] || "/temp-article.webp"} alt="image slider" className={`rounded-lg ${imgClassName ?? ""}`} cover />
          </CustomMotion>
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
