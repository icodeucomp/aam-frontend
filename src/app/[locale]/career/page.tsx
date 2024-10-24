import { Container, Hero } from "@/components";
import { Overview, Program } from "@/layouts/career";

export default function Career() {
  return (
    <section className="overflow-x-hidden">
      <Hero
        title="Career"
        description="Join us at and unlock your potential, working with a passionate team and making a real difference in the world. We eagerly look forward to your arrival!"
        pathImg="/home-header.webp"
      />
      <Container id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-10 sm:py-16 md:py-20">
        <Overview />
        <Program />
      </Container>
    </section>
  );
}
