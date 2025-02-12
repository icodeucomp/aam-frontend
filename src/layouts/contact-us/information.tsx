import { Button, Img, Motion } from "@/components";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa6";

export const Information = () => {
  const t = useTranslations("contact-us");
  return (
    <Motion tag="div" initialX={-40} animateX={0} duration={0.3} className="flex-1">
      <h3 className="heading">{t("head.title")}</h3>
      <p className="text-base text-dark-blue sm:text-lg mt-2">{t("head.description")}</p>
      <h3 className="text-xl font-semibold sm:text-2xl mt-10">{t("left-side.title")}</h3>
      <menu className="space-y-2 mt-4">
        <li className="flex items-center gap-3 text-sm sm:text-base">
          <Img src="/icons/workspace.svg" alt="icon location" className="min-w-10 aspect-square" /> Jl.Bhayangkara No.136B, Kota Serang-Banten 42118
        </li>
        <li className="flex items-center gap-3 text-sm sm:text-base">
          <Img src="/icons/person.svg" alt="icon workshop" className="min-w-10 aspect-square" /> Jl. Raya Serang - Petir RT.012 / RW.001 Ds. Cimaung, Kec. Cikeusal, Kab. Serang -Banten
        </li>
        <li className="flex items-center gap-3 text-sm sm:text-base">
          <Img src="/icons/call.svg" alt="icon call" className="min-w-10 aspect-square" /> 0254 - 7932385
        </li>
        <li className="flex items-center gap-3 text-sm sm:text-base">
          <Img src="/icons/message.svg" alt="icon email" className="min-w-10 aspect-square" /> amanahsrg@gmail.com
        </li>
      </menu>
      <a href="https://wa.me/6281288385837" rel="noreferrer" target="_blank" className="block mt-6">
        <Button className="flex items-center justify-center w-full gap-2 btn-green">
          <FaWhatsapp className="size-4 sm:size-5 md:size-6" /> {t("left-side.button-text")}
        </Button>
      </a>
    </Motion>
  );
};
