import { CertificationLegalities } from "@/layouts/profile";

import { Hero } from "@/components";

export default function Certification() {
  return (
    <section className="overflow-x-hidden">
      <Hero
        title="Profile"
        description="Discover Who We Are: Our Story, Vision, and Mission. Explore Our Organizational Structure, Legal Foundations, and Industry Certifications That Drive Our Commitment to Excellence."
        pathImg="/home-header.webp"
      />
      <CertificationLegalities />
    </section>
  );
}
