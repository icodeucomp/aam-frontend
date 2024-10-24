import { Hero } from "@/components";
import { Articles } from "@/layouts/media";

export default function Media() {
  return (
    <section className="overflow-x-hidden">
      <Hero
        title="Media"
        description="Stay Updated with the Latest Media Coverage, News Updates, and Press Announcements"
        pathImg="/home-header.webp"
      />
      <Articles />
    </section>
  );
}
