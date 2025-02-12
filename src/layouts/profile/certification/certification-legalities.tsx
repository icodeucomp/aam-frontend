"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";

import { useGet } from "@/hooks";

import { useDebounce } from "use-debounce";

import { Container, DisplayThumbnail, Motion, Pagination } from "@/components";
import { SearchFilter } from "./search-filter";
import { CardCertification } from "./card-certification";

import { DateValueType } from "react-tailwindcss-datepicker";

import { convertDate, formatDate } from "@/utils";

import { DEFAULT_FILE } from "@/static";

import { ResponseDocumentsTypes } from "@/types";

export const CertificationLegalities = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  // filtered data state
  const [selectCard, setSelectCard] = useState<string>("");

  const [sort, setSort] = useState<string>("uploadedAt");
  const [order, setOrder] = useState<string>("desc");
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  const [date, setDate] = useState<DateValueType>({ startDate: null, endDate: null });
  const dateStart = formatDate(date?.startDate);
  const dateEnd = formatDate(date?.endDate);

  const [debouncedSearchTerm] = useDebounce(searchParams.get("documents_keywords"), 1000);

  const { response: documents, loading } = useGet<ResponseDocumentsTypes>({
    path: "/documents",
    searchQuery: debouncedSearchTerm || "",
    limit: "4",
    page: page.toString(),
    sort,
    order,
    dateEnd,
    dateStart,
  });

  const selectedCard = documents?.data.find((item) => item.slug === selectCard);

  const handleSetFiltered = (value: string) => {
    const [newSort, newOrder] = value.split("&").map((param) => param.split("=")[1]);
    setSort(newSort);
    setOrder(newOrder);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    push(`/profile/certification?documents_keywords=${e.target.value}#certification-legalities`);
  };

  useEffect(() => {
    if (documents?.data && documents.data.length > 0) {
      setTotalPage(Math.ceil(documents.total / 5));
      setSelectCard(documents.data[0].slug);
    }
  }, [documents]);

  return (
    <div className="relative overflow-hidden pt-10" id="certification-legalities">
      <div className="absolute top-0 left-0 hidden w-full h-full grid-cols-2 lg:grid">
        <div className="relative w-full"></div>
        <div className="relative w-full bg-light-gray"></div>
      </div>
      <Container className="py-10 space-y-8 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Motion tag="div" initialX={-40} animateX={0} duration={0.3} className="relative flex flex-col order-2 w-full lg:order-1 min-h-600">
            <SearchFilter setFiltered={handleSetFiltered} setSearchTerm={handleSearch} searchTerm={searchParams.get("documents_keywords") || ""} date={date} setDate={setDate} />
            {loading ? (
              <div className="flex items-center justify-center min-h-500">
                <div className="loader"></div>
              </div>
            ) : (
              <>
                {documents?.data && documents?.data.length < 1 ? (
                  <div className="flex items-center justify-center h-full">
                    <h3 className="w-full col-span-1 m-8 text-lg font-semibold text-center sm:text-2xl md:text-3xl sm:col-span-2 xl:col-span-3 text-gray/50">The document is not found</h3>
                  </div>
                ) : (
                  <div className="my-8 border divide-y rounded-lg card-shadow border-gray/30 divide-gray/30">
                    {documents?.data.map((item, index, row) => {
                      const lastIndex = index + 1 === row.length;
                      return (
                        <CardCertification
                          key={index}
                          firstIndex={index === 0}
                          category={item.category}
                          name={item.name}
                          slug={item.slug}
                          uploadedAt={item.uploadedAt}
                          url={item.url}
                          size={item.size}
                          selected={selectCard}
                          setSelected={setSelectCard}
                          lastIndex={lastIndex}
                        />
                      );
                    })}
                  </div>
                )}
              </>
            )}
            <div className="w-full mt-auto">
              <Pagination setPage={setPage} totalPage={totalPage} page={page} color="primary" isNumber />
            </div>
          </Motion>
          <Motion tag="div" initialX={40} animateX={0} duration={0.6} delay={0.3} className="order-1 w-full space-y-8 text-center lg:order-2">
            {documents?.data && documents?.data.length < 1 ? (
              <div className="flex items-center justify-center h-full mt-8">
                <h3 className="w-full m-8 text-lg font-semibold text-center sm:text-2xl md:text-3xl text-gray/50">The document is not found</h3>
              </div>
            ) : (
              <>
                {loading ? (
                  <div className="flex items-center justify-center mt-20 min-h-600">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-center w-full mt-4 lg:mt-20 preview-thumbnail-selected">
                      <DisplayThumbnail fileUrl={selectedCard?.url || DEFAULT_FILE} />
                    </div>
                    <div className="space-y-2 text-dark-blue">
                      <h5 className="text-lg font-semibold sm:text-xl md:text-3xl">{selectedCard?.name}</h5>
                      <p className="text-sm font-semibold sm:text-base md:text-lg">
                        {selectedCard?.category}, {convertDate(selectedCard?.uploadedAt || "")}
                      </p>
                    </div>
                  </>
                )}
              </>
            )}
          </Motion>
        </div>
      </Container>
    </div>
  );
};
