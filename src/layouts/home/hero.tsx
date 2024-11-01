import { Background, Button, Img, Motion } from "@/components";

import { Link } from "@/i18n/routing";

export const Hero = () => {
  return (
    <Background src="/home-header.webp" className="items-center max-w-screen-xl px-4 sm:px-8 min-h-500 lg:min-h-custom-header-home" parentClassName="filter">
      <div className="max-w-screen-lg space-y-4">
        <Motion tag="h1" initialX={-50} animateX={0} duration={0.3} className="text-3xl font-semibold leading-snug md:text-4xl lg:text-5xl">
          Trust Us to Elevate Your Experience with Unmatched Quality, Timely Deliveries, and Customer-Centric Solutions
        </Motion>
        <Motion tag="h1" initialX={-50} animateX={0} duration={0.5} delay={0.3} className="text-base sm:text-lg md:text-xl">
          We are General Supplier, Fabrication, Machining, Mechanical, Electrical, Robotic and Civil company.
        </Motion>
        <Motion tag="h1" initialX={-50} animateX={0} duration={0.8} delay={0.5} className="flex items-center gap-4">
          <Link href="/profile" className="block h-full">
            <Button className="h-full border border-light hover:bg-light hover:text-primary">Learn More</Button>
          </Link>
          <Link href="/business" className="block h-full">
            <Button className="flex items-center btn-primary">
              Our Business
              <Img src="/icons/arrow-up-light.svg" alt="arrow up light" className="size-5 sm:size-6 lg:size-7" />
            </Button>
          </Link>
        </Motion>
      </div>
    </Background>
  );
};
