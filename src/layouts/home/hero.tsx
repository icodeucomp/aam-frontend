"use client";

import * as React from "react";

import { useTranslations } from "next-intl";

import { Background, Button, Img, Motion } from "@/components";

import { Link } from "@/i18n/routing";

export const Hero = () => {
  const t = useTranslations("home.hero");

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
    <Background src={images[currentSlide]} className="items-center max-w-screen-xl px-4 sm:px-8 min-h-500 lg:min-h-custom-header-home" parentClassName="bg-black/50">
      <div className="max-w-screen-lg space-y-4">
        <Motion tag="h1" initialX={-50} animateX={0} duration={0.3} className="text-3xl font-semibold leading-snug md:text-4xl lg:text-5xl">
          {t("title")}
        </Motion>
        <Motion tag="h1" initialX={-50} animateX={0} duration={0.5} delay={0.3} className="text-base sm:text-lg md:text-xl">
          {t("description")}
        </Motion>
        <Motion tag="h1" initialX={-50} animateX={0} duration={0.8} delay={0.5} className="flex items-center gap-4">
          <Link href="/profile" className="block h-full">
            <Button className="h-full border border-light hover:bg-light hover:text-primary">{t("button-learn-more")}</Button>
          </Link>
          <Link href="/business" className="block h-full">
            <Button className="flex items-center btn-primary">
              {t("button-our-business")}
              <Img src="/icons/arrow-up-light.svg" alt="arrow up light" className="size-5 sm:size-6 lg:size-7" />
            </Button>
          </Link>
        </Motion>
      </div>
    </Background>
  );
};
