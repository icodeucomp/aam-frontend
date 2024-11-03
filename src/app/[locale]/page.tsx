import Image from "next/image";

import { LatestArticles, Clients, Hero, Messages, Services, Projects } from "@/layouts/home";

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <Hero />
      <Messages />
      <Services />
      <div className="relative overflow-hidden">
        <Image src="/images/house-frame-dark.webp" alt="house frame" className="absolute top-16 right-16 opacity-40" objectPosition="top" objectFit="cover" width={1000} height={1000} />
        <Projects />
        <LatestArticles />
        <Clients />
      </div>
    </section>
  );
}
