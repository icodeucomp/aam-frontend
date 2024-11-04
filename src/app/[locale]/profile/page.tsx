import { useTranslations } from "next-intl";

import { Messages, Organizational, VisionMission } from "@/layouts/profile";

import { Hero } from "@/components";

export default function Profile() {
  const t = useTranslations("profile.hero");
  return (
    <section className="overflow-x-hidden">
      <Hero title={`${t("title")}`} description={`${t("description")}`} />
      <Messages />
      <VisionMission />
      <Organizational />
    </section>
  );
}
