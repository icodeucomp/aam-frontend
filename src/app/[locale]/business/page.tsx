import { Hero } from "@/components";
import { Businesses } from "@/layouts/business";

export default function Business() {
  return (
    <section className="overflow-x-hidden">
      <Hero
        title="Business"
        description="Delivering comprehensive services across fabrication, machining, mechanical, electrical, civil engineering, and robotic, backed by reliable supply solutions for every industry."
        pathImg="/home-header.webp"
      />
      <Businesses />
    </section>
  );
}
