"use client";

import * as React from "react";

import { Container, Motion } from "@/components";
import { useTranslations } from "next-intl";
import { LuVolume2, LuVolumeX } from "react-icons/lu";

export const Messages = () => {
  const t = useTranslations("home.message");
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = React.useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <Container className="flex flex-col-reverse items-center gap-8 py-10 lg:gap-24 sm:py-16 md:py-20 lg:flex-row">
      <Motion tag="div" initialX={-50} animateX={0} duration={0.4} className="flex-1 space-y-4 font-semibold sm:space-y-2">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl text-dark-blue">{t("welcome")}</h2>
          <h2 className="text-2xl sm:text-3xl text-dark-blue">PT. Amanah Aulia Mandiri</h2>
        </div>
        <p className="text-sm font-normal leading-relaxed text-justify sm:text-base md:text-lg text-dark-gray">{t("description")}</p>
        <div className="space-y-1">
          <h4 className="text-base sm:text-lg text-secondary">Wildan Aulia Octaviani</h4>
          <p className="text-sm text-secondary">{t("job-title")}</p>
        </div>
      </Motion>
      <Motion tag="div" initialX={0} animateX={0} duration={0.8} delay={0.4} className="relative flex-1 h-full gap-4">
        <div className="relative w-full h-auto">
          <video ref={videoRef} src="https://amanah-aulia-mandiri-storage.s3.ap-southeast-1.amazonaws.com/Launching+Website.mp4" className="w-full h-auto rounded-lg shadow-lg" autoPlay muted loop />
          <button onClick={toggleMute} className="absolute px-2 py-2 rounded-lg text-light bg-dark-blue top-2 right-2">
            {isMuted ? <LuVolumeX size={20} /> : <LuVolume2 size={20} />}
          </button>
        </div>
      </Motion>
    </Container>
  );
};
