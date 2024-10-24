import { TemplateTypes } from "@/types";

interface CareerTypes extends TemplateTypes {
  buttonText: string;
}

export const CareerLists = () => {
  return [
    {
      pathImg: "/icons/permanent-job.svg",
      title: `Professional Staff`,
      description: `We are seeking talented individuals to contribute to innovative projects. If you're passionate and eager to grow in a dynamic environment, we want to hear from you!`,
      buttonText: `See Vacancy`,
    },
    {
      pathImg: "/icons/new-job.svg",
      title: `Internship Program`,
      description: `Join our internship program to gain practical skills and industry insights. Work alongside experts and expand your professional network!`,
      buttonText: `Apply`,
    },
  ] as CareerTypes[];
};
