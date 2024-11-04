import { Form, Information } from "@/layouts/contact-us";

import { Container, Hero } from "@/components";
import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations("contact-us.hero");

  return (
    <section className="overflow-x-hidden">
      <Hero title={`${t("title")}`} description={`${t("description")}`} />
      <div className="relative overflow-hidden py-10 sm:py-16 md:py-20">
        <div className="absolute top-0 left-0 w-full h-full grid-cols-2 hidden lg:grid">
          <div className="relative w-full"></div>
          <div className="relative w-full bg-light-gray"></div>
        </div>
        <Container id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <Information />
          <Form />
        </Container>
      </div>
    </section>
  );
}
