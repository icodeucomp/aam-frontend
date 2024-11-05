"use client";

import * as React from "react";

import { useTranslations } from "next-intl";

import { AnimatePresence } from "framer-motion";
import { Container, CustomMotion, Img, Motion } from "@/components";

export const Messages = () => {
  const t = useTranslations("profile.message");

  const images: string[] = ["/images/profile-photo-1.webp", "/images/profile-photo-2.webp", "/images/profile-photo-3.webp", "/images/profile-photo-4.webp"];
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container id="about-us" className="flex flex-col-reverse justify-between items-center gap-8 lg:gap-20 lg:flex-row">
      <div className="w-full space-y-4 font-semibold flex-1 py-10">
        <Motion tag="h2" initialX={-40} animateX={0} duration={0.3} className="heading">
          PT Amanah Aulia Mandiri
        </Motion>
        <Motion tag="h4" initialX={-40} animateX={0} duration={0.6} delay={0.3} className="text-base font-semibold text-justify sm:text-lg md:text-xl lg:text-2xl text-primary lg:text-start">
          {t("subtitle")}
        </Motion>
        <Motion tag="p" initialX={-40} animateX={0} duration={0.9} delay={0.6} className="text-sm font-normal text-justify sm:text-base text-dark-blue">
          {t("description-one")}
        </Motion>
        <Motion tag="p" initialX={-40} animateX={0} duration={0.9} delay={0.6} className="text-sm font-normal text-justify sm:text-base text-dark-blue">
          {t("description-two")}
        </Motion>
      </div>
      <Motion tag="div" initialX={40} animateX={0} duration={0.6} delay={0.3} className="relative w-full flex justify-center flex-1">
        <div className="overflow-hidden w-max h-max">
          <AnimatePresence mode="wait">
            <CustomMotion key={currentSlide} className={`w-full h-full`}>
              <Img src={images[currentSlide]} alt="PT Amanah Aulia Mandiri company building picture" className="w-[300px] sm:w-[400px] md:w-[500px] aspect-square mx-auto rounded-lg" cover />
            </CustomMotion>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span key={index} className={`size-3 rounded-full ${index === currentSlide ? "bg-light" : "bg-gray/70"}`}></span>
          ))}
        </div>
      </Motion>
    </Container>
  );
};
