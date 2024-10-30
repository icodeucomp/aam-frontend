import { Button, Img, Motion } from "@/components";
import { Link } from "@/i18n/routing";
import { CareerLists } from "@/static";

export const Program = () => {
  const careers = CareerLists();
  return (
    <div className="space-y-8 pb-24">
      {careers.map((item, index) => (
        <Motion tag="div" initialX={40} animateX={0} duration={0.6} delay={index / 5 + 0.2} key={index} className="p-4 space-y-4 rounded-lg card-shadow bg-light">
          <div className="px-4 py-2 rounded-lg bg-light-gray w-max">
            <Img src={item.pathImg} alt={item.title} className="size-10 sm:size-12" />
          </div>
          <h5 className="text-xl font-semibold sm:text-2xl text-primary">{item.title}</h5>
          <p className="mb-8 text-sm sm:text-base">{item.description}</p>
          <Link href="/" className="flex justify-end">
            <Button className="flex items-center btn-secondary">
              {item.buttonText}
              <Img src="/icons/arrow-up-light.svg" alt="arrow-up-light" className="size-4 sm:size-6 md:size-8" />
            </Button>
          </Link>
        </Motion>
      ))}
    </div>
  );
};
