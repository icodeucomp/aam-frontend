import { Background } from "./background";
import { Motion } from "./motion";

import { TemplateTypes } from "@/types";

export const Hero = ({ title, description, pathImg }: TemplateTypes) => {
  return (
    <Background src={pathImg} className="items-center max-w-screen-xl px-4 mx-auto sm:px-8 min-h-500" parentClassName="filter">
      <div className="max-w-lg space-y-4 text-light">
        <Motion tag="h1" initialX={-50} animateX={0} duration={0.4} className="text-3xl font-semibold md:text-4xl">
          {title}
        </Motion>
        <Motion tag="p" initialX={-50} animateX={0} duration={0.8} delay={0.4} className="text-base sm:text-lg">
          {description}
        </Motion>
      </div>
      <div className="absolute bg-primary top-20 -left-20 -rotate-30 w-28 h-60"></div>
      <div className="absolute bg-secondary left-1/2 -bottom-12 w-28 h-60 -rotate-30"></div>
    </Background>
  );
};
