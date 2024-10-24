import Image from "next/image";

import { shimmer, toBase64 } from "@/utils";

import { BackgroundProps } from "@/types";

export const Background = ({ src, className, children, parentClassName, isHover }: BackgroundProps) => {
  return (
    <figure className={`relative text-light overflow-hidden group ${parentClassName ?? ""}`}>
      <Image
        src={src}
        alt="background image"
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        priority
        objectFit="cover"
        objectPosition="center"
        className={`-z-10 ${isHover ? "duration-300 group-hover:scale-110" : ""}`}
      />
      <div className={`z-1 flex w-full mx-auto ${className ?? ""}`}>{children}</div>
    </figure>
  );
};
