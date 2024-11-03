import { TemplateTypes } from "@/types";
import { useTranslations } from "next-intl";

interface ServiceTypes extends TemplateTypes {
  pathImgHover: string;
}

export const ServiceLists = () => {
  const t = useTranslations("home.services");

  return [
    {
      pathImg: "/icons/delivery-white.svg",
      pathImgHover: "/icons/delivery-orange.svg",
      title: `${t("one.title")}`,
      description: `${t("one.description")}`,
    },
    {
      pathImg: "/icons/factory-worker-white.svg",
      pathImgHover: "/icons/factory-worker-orange.svg",
      title: `${t("two.title")}`,
      description: `${t("two.description")}`,
    },
    {
      pathImg: "/icons/usage-settings-white.svg",
      pathImgHover: "/icons/usage-settings-orange.svg",
      title: `${t("three.title")}`,
      description: `${t("three.description")}`,
    },
    {
      pathImg: "/icons/robot-two-white.svg",
      pathImgHover: "/icons/robot-two-orange.svg",
      title: `${t("four.title")}`,
      description: `${t("four.description")}`,
    },
    {
      pathImg: "/icons/data-usage-white.svg",
      pathImgHover: "/icons/data-usage-orange.svg",
      title: `${t("five.title")}`,
      description: `${t("five.description")}`,
    },
    {
      pathImg: "/icons/auto-repair-white.svg",
      pathImgHover: "/icons/auto-repair-orange.svg",
      title: `${t("six.title")}`,
      description: `${t("six.description")}`,
    },
    {
      pathImg: "/icons/engineering-white.svg",
      pathImgHover: "/icons/engineering-orange.svg",
      title: `${t("seven.title")}`,
      description: `${t("seven.description")}`,
    },
    {
      pathImg: "/icons/electric-cord-white.svg",
      pathImgHover: "/icons/electric-cord-orange.svg",
      title: `${t("eight.title")}`,
      description: `${t("eight.description")}`,
    },
  ] as ServiceTypes[];
};
