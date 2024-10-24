import { Form, Information } from "@/layouts/contact-us";

import { Container, Hero } from "@/components";

export default function ContactUs() {
  return (
    <section className="overflow-x-hidden">
      <Hero
        title="Contact Us"
        description="We're Here to Help: Reach Out for Any Support, Business Inquiries, or Collaboration Opportunities. Let's Work Together to Build Strong Connections."
        pathImg="/home-header.webp"
      />
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
