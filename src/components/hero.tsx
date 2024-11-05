"use client";

import * as React from "react";

import { Background } from "./background";
import { Motion } from "./motion";

import { TemplateTypes } from "@/types";

export const Hero = ({ title, description }: Partial<TemplateTypes>) => {
  const images: string[] = ["/images/header-photo-1.webp", "/images/header-photo-2.webp", "/images/header-photo-3.webp", "/images/header-photo-4.webp"];
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background src={images[currentSlide]} className="items-center max-w-screen-xl px-4 mx-auto sm:px-8 min-h-500" parentClassName="bg-black/50">
      <div className="max-w-xl space-y-4 text-light z-10 px-10 md:px-14 2xl:px-0">
        <Motion tag="h1" initialX={-50} animateX={0} duration={0.4} className="text-3xl font-semibold md:text-4xl">
          {title}
        </Motion>
        <Motion tag="p" initialX={-50} animateX={0} duration={0.8} delay={0.4} className="text-base sm:text-lg">
          {description}
        </Motion>
      </div>
      <div className="absolute bg-primary top-10 -left-28 sm:-left-24 md:-left-20 -rotate-30 w-28 h-60"></div>
      <div className="absolute bg-secondary -right-8 md:left-1/2 -bottom-24 xl:-bottom-20 2xl:-bottom-12 w-28 h-60 -rotate-30"></div>
    </Background>
  );
};
