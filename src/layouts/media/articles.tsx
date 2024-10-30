"use client";

import * as React from "react";

import { useGet, useMediaQuery } from "@/hooks";

import { useDebounce } from "use-debounce";

import { Pagination, Motion, Container, ArticleCard } from "@/components";
import { ResponseArticlesTypes } from "@/types";

export const Articles = () => {
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(6);
  const [totalPage, setTotalPage] = React.useState<number>(0);

  const isLargeDesktop = useMediaQuery("(min-width: 1280px)");
  const isDesktop = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(min-width: 0px) and (max-width: 639px)");

  const [debouncedIsLargeDesktop] = useDebounce(isLargeDesktop, 200);
  const [debouncedIsDesktop] = useDebounce(isDesktop, 200);
  const [debouncedIsTablet] = useDebounce(isTablet, 200);
  const [debouncedIsMobile] = useDebounce(isMobile, 200);
  const [debouncedPage] = useDebounce(page, 500);

  const { response: articles, loading } = useGet<ResponseArticlesTypes>({
    path: "/blogs",
    page: debouncedPage.toString(),
    limit: limit.toString(),
  });

  React.useEffect(() => {
    if (articles?.total && articles?.total > 1) {
      setTotalPage(Math.ceil(articles.total / limit));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles]);

  // Update limit based on screen size (debounced values)
  React.useEffect(() => {
    if (debouncedIsLargeDesktop) {
      setLimit(6);
    } else if (debouncedIsDesktop) {
      setLimit(3);
    } else if (debouncedIsTablet) {
      setLimit(2);
    } else if (debouncedIsMobile) {
      setLimit(1);
    }
  }, [debouncedIsDesktop, debouncedIsTablet, debouncedIsMobile, debouncedIsLargeDesktop]);

  return (
    <Container className="w-full py-20 space-y-8">
      <div className="flex items-center justify-between">
        <Motion tag="h3" initialX={-50} animateX={0} duration={0.4} className="heading">
          Articles Gallery
        </Motion>
        <Motion tag="div" initialX={50} animateX={0} duration={0.8} delay={0.4} className="relative flex items-center gap-4">
          <Pagination page={page} totalPage={totalPage} setPage={setPage} color="secondary" />
        </Motion>
      </div>

      {loading ? (
        <div className="flex justify-center w-full py-16">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles?.data.map((item, index) => (
            <ArticleCard date={item.updatedAt} pathImg={item.header} pathUrl={item.slug} title={item.title} key={index} />
          ))}
        </div>
      )}
    </Container>
  );
};
