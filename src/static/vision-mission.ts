import { useTranslations } from "next-intl";

export const VisionMissionLists = () => {
  const t = useTranslations("profile.vision-mission");
  return {
    vision: {
      title: `${t("vision.title")}`,
      description: `${t("vision.description")}`,
    },
    mission: {
      title: `${t("mission.title")}`,
      description: [`${t("mission.description-one")}`, `${t("mission.description-two")}`, `${t("mission.description-three")}`, `${t("mission.description-four")}`, `${t("mission.description-five")}`],
    },
  };
};
