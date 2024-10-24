"use client";

import { useState } from "react";

import { Background, Img } from "@/components";

import { ServiceLists } from "@/static";

export const Services = () => {
  const [imgHover, setImgHover] = useState<number | null>(null);

  const serviceLists = ServiceLists();

  return (
    <div>
      <Background src="/images/construction-progress.webp" className="grid justify-center grid-cols-4 mx-auto max-w-screen-2xl min-h-500">
        {serviceLists.map((item, index, row) => (
          <div
            key={index}
            className={`px-8 pt-40 hover:pt-20 space-y-8 text-center duration-300 hover:bg-primary ${
              index + 1 === row.length ? "border-none" : "border-r"
            }`}
            onMouseEnter={() => setImgHover(index)}
            onMouseLeave={() => setImgHover(null)}
          >
            <Img
              src={imgHover == index ? item.pathImgHover : item.pathImg}
              alt={item.title}
              className={`mx-auto ${imgHover === index ? "size-16" : "size-20"}`}
            />
            <h3 className={`font-semibold ${imgHover === index ? "text-2xl" : "text-3xl"}`}>{item.title}</h3>

            <p
              className={`text-sm transition-all duration-300 ${
                imgHover === index ? "h-auto translate-y-0 opacity-100" : "h-0 -translate-y-full opacity-0 "
              }`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </Background>
    </div>
  );
};
