"use client";

import { useState } from "react";

import { Background, Img } from "@/components";

import { ServiceLists } from "@/static";

export const Services = () => {
  const [imgHover, setImgHover] = useState<number | null>(null);

  const serviceLists = ServiceLists();

  return (
    <Background src="/images/construction-progress.webp" className="grid justify-center grid-cols-2 mx-auto md:grid-cols-3 lg:grid-cols-4 max-w-screen-2xl filter-image">
      {serviceLists.map((item, index) => {
        return (
          <div
            key={index}
            className="px-8 pt-24 text-center duration-300 border-2 md:pt-28 hover:pt-16 min-h-400 hover:bg-primary"
            onMouseEnter={() => setImgHover(index)}
            onMouseLeave={() => setImgHover(null)}
          >
            <Img
              src={imgHover === index ? item.pathImgHover : item.pathImg}
              alt={item.title}
              className={`mx-auto ${imgHover === index ? "size-12 sm:size-14 md:size-16" : "size-14 sm:size-16 md:size-20"}`}
            />
            <h3 className={`font-semibold mt-8 ${imgHover === index ? "text-lg sm:text-xl xl:text-2xl" : "text-xl sm:text-2xl xl:text-3xl"}`}>{item.title}</h3>

            <p className={`text-xs lg:text-sm transition-all duration-300 mt-4 ${imgHover === index ? "h-auto opacity-100" : "h-0 opacity-0 "}`}>{item.description}</p>
          </div>
        );
      })}
    </Background>
  );
};
