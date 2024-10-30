import { Button, Container, Img, Motion } from "@/components";

import { FaWhatsapp } from "react-icons/fa6";

import { BusinessesTypes } from "@/types";

export const Description = ({ business }: { business: BusinessesTypes | undefined }) => {
  const templateMessage: string = `Halo%2C%20saya%20tertarik%20dengan%20layanan%20${business?.title}%20PT.Trijaya%20Berkah%20Mandiri.%0ABisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%3F%20Terima%20kasih.`;

  return (
    <Container className="py-16 lg:py-20 space-y-8">
      <div className="flex flex-col-reverse gap-4 md:gap-8 md:flex-row">
        <Motion tag="div" initialX={-40} animateX={0} duration={0.6} delay={0.3} className="flex flex-col w-full max-w-screen-md gap-4 md:gap-2 lg:gap-4">
          <h3 className="heading">{business?.title}</h3>
          <p className="h-full overflow-y-auto text-sm leading-normal text-justify text-primary sm:text-base md:h-64 xl:h-auto scrollbar">{business?.description}</p>
          <a href={`https://wa.me/6281288385837?text=${templateMessage}`} rel="noreferrer" target="_blank" className="block mt-auto">
            <Button className="flex items-center justify-center w-full gap-2 btn-green">
              <FaWhatsapp className="size-4 sm:size-5 md:size-6" /> Contact us Through Whatsapp
            </Button>
          </a>
        </Motion>
        <Motion tag="div" initialX={40} animateX={0} duration={0.9} delay={0.6} className="w-full max-w-md mx-auto">
          <Img src={business?.header?.url || "/temp-business.webp"} alt={business?.slug || ""} className="w-full rounded-lg h-80 md:h-96" cover />
        </Motion>
      </div>
    </Container>
  );
};
