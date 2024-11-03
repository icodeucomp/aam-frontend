import { TemplateTypes } from "@/types";
import { useTranslations } from "next-intl";

interface CareerTypes extends TemplateTypes {
  buttonText: string;
}

export const CareerLists = () => {
  const t = useTranslations("career");
  return [
    {
      pathImg: "/icons/permanent-job.svg",
      title: `${t("one.title")}`,
      description: `${t("one.description")}`,
      buttonText: `${t("one.button-text")}`,
    },
    {
      pathImg: "/icons/new-job.svg",
      title: `${t("two.title")}`,
      description: `${t("two.description")}`,
      buttonText: `${t("two.button-text")}`,
    },
  ] as CareerTypes[];
};
