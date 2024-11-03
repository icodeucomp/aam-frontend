import { useTranslations } from "next-intl";

import { Hero } from "@/components";
import { Albums, ArticlesGallery, ProjectsGallery } from "@/layouts/media";

export default function Media() {
  const t = useTranslations("media.hero");
  return (
    <section className="overflow-x-hidden">
      <Hero title={`${t("title")}`} description={`${t("description")}`} pathImg="/home-header.webp" />
      <ProjectsGallery />
      <Albums />
      <ArticlesGallery />
    </section>
  );
}
