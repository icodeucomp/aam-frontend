import { useTranslations } from "next-intl";

import { Hero } from "@/components";
import { Businesses } from "@/layouts/business";

export default function Business() {
  const t = useTranslations("business.hero");
  return (
    <section className="overflow-x-hidden">
      <Hero title={`${t("title")}`} description={`${t("description")}`} pathImg="/home-header.webp" />
      <Businesses />
    </section>
  );
}
