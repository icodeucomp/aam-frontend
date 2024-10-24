import { LatestArticles, Clients, Hero, Messages, Services } from "@/layouts/home";

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <Hero />
      <Messages />
      <Services />
      <LatestArticles />
      <Clients />
    </section>
  );
}
