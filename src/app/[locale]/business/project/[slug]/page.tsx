import { ProjectDetail } from "@/layouts/business/project-detail";

export default function ProjectBusiness({ params }: { params: { slug: string } }) {
  return (
    <section className="overflow-x-hidden">
      <ProjectDetail slug={params.slug} />
    </section>
  );
}
