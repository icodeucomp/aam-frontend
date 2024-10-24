"use client";

import * as React from "react";

import { Container, Motion } from "@/components";

import { FaPlay } from "react-icons/fa6";

export const Messages = () => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Container className="flex flex-col-reverse gap-8 py-10 sm:py-16 md:py-20 lg:flex-row">
      <Motion tag="div" initialX={-50} animateX={0} duration={0.4} className="flex-1 space-y-4 font-semibold sm:space-y-2">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl text-dark-blue">Welcome</h2>
          <h2 className="text-2xl sm:text-3xl text-dark-blue">Amanah Aulia Mandiri</h2>
        </div>
        <p className="text-sm font-normal leading-relaxed text-justify sm:text-base md:text-lg text-dark-gray">
          Atas nama Direksi dan manajemen PT Amanah Aulia Mandiri (PT AAM), kami menyampaikan optimisme baru dalam menghadapi tantangan global
          industri konstruksi. PT.AAM berkomitmen untuk melakukan transformasi berkelanjutan dalam teknologi, produk, dan proses, dengan tujuan
          meningkatkan kualitas hidup dan perekonomian. Melalui sinergi tim yang solid, PT.AAM terus berfokus pada kolaborasi antara manusia, usaha,
          dan strategi, serta siap bersaing secara global dengan kualitas kelas dunia demi masa depan yang lebih baik.
        </p>
        <div className="space-y-1">
          <h4 className="text-base sm:text-lg text-secondary">Wildan Aulia Octaviani</h4>
          <p className="text-sm text-secondary">Director</p>
        </div>
      </Motion>
      <Motion tag="div" initialX={0} animateX={0} duration={0.8} delay={0.4} className="relative flex-1 h-full gap-4">
        <video
          ref={videoRef}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          className="w-full h-auto rounded-lg shadow-lg"
          onClick={handlePlayPause}
        />
        {!isPlaying && (
          <button className="btn-play" onClick={handlePlayPause}>
            <FaPlay size={28} className="fill-light" />
          </button>
        )}
      </Motion>
    </Container>
  );
};
