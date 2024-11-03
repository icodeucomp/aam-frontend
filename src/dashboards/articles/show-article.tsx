"use client";

import { useGet } from "@/hooks";

import { convertDate } from "@/utils";

import { ResponseArticleTypes } from "@/types";

export const ShowArticle = ({ slug }: { slug: string }) => {
  // fetch api to show data article / blog by slug
  const { response: article, loading } = useGet<ResponseArticleTypes>({ path: `/blogs/${slug}` });

  if (loading) {
    <div className="flex justify-center w-full py-16">
      <span className="loader"></span>
    </div>;
  }

  return (
    <div className="max-w-screen-md px-4 mx-auto leading-loose text-dark-blue">
      <div className="pb-2 mb-4 space-y-6 tracking-wide border-b-4 border-secondary">
        <menu className="flex items-center">
          <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl">{article?.data.title}</h1>
        </menu>
        <menu className="flex flex-col justify-between sm:flex-row">
          <h1 className="text-base font-medium sm:text-lg">PT Amanah Aulia Mandiri</h1>
          <p className="text-xs font-medium tracking-normal text-gray-500 sm:text-base">Published at : {convertDate(article?.data.updatedAt as string)}</p>
        </menu>
      </div>
      <div className="dangerous_html" dangerouslySetInnerHTML={{ __html: article?.data.content as TrustedHTML }} />
    </div>
  );
};
