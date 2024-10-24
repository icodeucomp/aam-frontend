import { SingleArticle } from "@/layouts/media";

export default function Article({ params }: { params: { slug: string } }) {
  return (
    <section className="overflow-x-hidden">
      <SingleArticle slug={params.slug} />
    </section>
  );
}
