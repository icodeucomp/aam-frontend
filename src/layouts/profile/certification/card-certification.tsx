"use client";

import { useGet } from "@/hooks";

import { DisplayThumbnail } from "@/components";

import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";

import { DocumentsTypes } from "@/types";

import { DEFAULT_FILE } from "@/static";

import { convertDate } from "@/utils";

interface CardCertificationProps extends DocumentsTypes {
  setSelected: (selected: string) => void;
  selected: string;
  lastIndex: boolean;
  firstIndex: boolean;
}

export const CardCertification = ({ selected, setSelected, slug, name, url, category, uploadedAt, lastIndex, firstIndex }: CardCertificationProps) => {
  const { response: resUrl, error } = useGet<string>({ path: `/download?url=${url}` });

  return (
    <div
      className={`card-certification group ${lastIndex ? "rounded-b-lg" : "rounded-none"} ${firstIndex ? "rounded-t-lg" : "rounded-none"} ${selected === slug && "bg-primary"}`}
      onClick={() => setSelected(slug)}
    >
      <div className="flex items-center gap-4">
        <div className="preview-thumbnail-small py-4">
          <DisplayThumbnail fileUrl={url || DEFAULT_FILE} />
        </div>
        <div className="space-y-2">
          <h5 className={`text-sm sm:text-base md:text-lg font-semibold line-clamp-2 ${selected === slug ? "text-light" : "text-primary"}`}>{name}</h5>
          <p className={`text-xs sm:text-sm line-clamp-3 ${selected === slug ? "text-light" : "text-gray"}`}>
            {category}, {convertDate(uploadedAt)}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href={url} target="_blank" rel="noopener">
          <AiOutlineEye className={`size-6 sm:size-7 ${selected === slug ? "fill-light" : "fill-primary"}`} />
        </a>
        {!error && (
          <a href={resUrl || "/profile/certification"} download={name}>
            <AiOutlineDownload className={`size-6 sm:size-7 ${selected === slug ? "fill-light" : "fill-primary"}`} />
          </a>
        )}
      </div>
      <div className={`triangle hidden xl:block ${selected === slug ? "border-l-primary " : "border-l-transparent"}`}></div>
    </div>
  );
};
