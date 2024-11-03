import { useTranslations } from "next-intl";
import Image from "next/image";

export const Overview = () => {
  const t = useTranslations("career.head");

  return (
    <div className="space-y-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary max-w-md">{t("title")}</h2>
      <p className="text-lg sm:text-xl text-dark-blue max-w-md">{t("description")}</p>
      <Image src="/images/house-frame-dark.webp" alt="house frame" className="absolute md:bottom-0 left-0" objectPosition="top" objectFit="cover" width={550} height={550} />
    </div>
  );
};
