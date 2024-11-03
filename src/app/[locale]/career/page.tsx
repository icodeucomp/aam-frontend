import { useTranslations } from "next-intl";

import { Container, Hero } from "@/components";
import { Overview, Program } from "@/layouts/career";

export default function Career() {
  const t = useTranslations("career.hero");
  return (
    <section className="overflow-x-hidden">
      <Hero title={`${t("title")}`} description={`${t("description")}`} pathImg="/home-header.webp" />
      <Container id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-10 sm:py-16 md:py-20">
        <Overview />
        <Program />
      </Container>
    </section>
  );
}
