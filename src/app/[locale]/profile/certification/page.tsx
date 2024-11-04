import { useTranslations } from "next-intl";

import { CertificationLegalities } from "@/layouts/profile";

import { Hero } from "@/components";

export default function Certification() {
  const t = useTranslations("certification.hero");
  return (
    <section className="overflow-x-hidden">
      <Hero title={`${t("title")}`} description={`${t("description")}`} />
      <CertificationLegalities />
    </section>
  );
}
