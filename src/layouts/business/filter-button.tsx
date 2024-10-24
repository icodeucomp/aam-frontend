"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks";

import { AnimatePresence } from "framer-motion";

import { Background, Button, Container, ImageSlider, Modal, Motion, Pagination } from "@/components";

import { BusinessesTypes, BusinessSectorTypes } from "@/types";

export const FilterButton = ({ business }: { business: BusinessesTypes | undefined }) => {
  const [openModalIndex, setOpenModalIndex] = React.useState<string | null>(null);

  const [typeBusiness, setTypeBusiness] = React.useState<string>("Products");
  const [sectorBusiness, setSectorBusiness] = React.useState<BusinessSectorTypes[]>();

  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(4);
  const [totalPage, setTotalPage] = React.useState<number>(0);

  const isLargeDesktop = useMediaQuery("(min-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isMobile = useMediaQuery("(min-width: 0px) and (max-width: 639px)");

  const filterBusiness = sectorBusiness?.find((item) => item.slug === openModalIndex);

  React.useEffect(() => {
    const startIndex = (page - 1) * limit;
    if (business) {
      if (typeBusiness === "Products" && business?.Product.length > 0) {
        const paginatedProducts = business?.Product.slice(startIndex, startIndex + limit);
        setSectorBusiness(paginatedProducts);
      }
      if (typeBusiness === "Projects" && business?.Project.length > 0) {
        const paginatedProjects = business?.Project.slice(startIndex, startIndex + limit);
        setSectorBusiness(paginatedProjects);
      }
      if (typeBusiness === "Services" && business?.Service.length > 0) {
        const paginatedServices = business?.Service.slice(startIndex, startIndex + limit);
        setSectorBusiness(paginatedServices);
      }
    }
  }, [business, typeBusiness, limit, page]);

  React.useEffect(() => {
    if (business && business?.Product.length > 0) {
      setTotalPage(Math.ceil(business?.Product?.length / limit));
    }
    if (business && business?.Project.length > 0) {
      setTotalPage(Math.ceil(business?.Project?.length / limit));
    }
    if (business && business?.Service.length > 0) {
      setTotalPage(Math.ceil(business?.Service?.length / limit));
    }
  }, [business, limit]);

  React.useEffect(() => {
    if (isLargeDesktop) {
      setLimit(4);
    } else if (isDesktop) {
      setLimit(3);
    } else if (isTablet) {
      setLimit(2);
    } else if (isMobile) {
      setLimit(1);
    }
  }, [isLargeDesktop, isDesktop, isTablet, isMobile]);

  return (
    <div className="space-y-4">
      <div className="relative py-10 mx-auto text-center max-w-screen-2xl">
        <h3 className="heading">Type of Business</h3>
        <p className="mt-2 subheading">Explore our various types of business solutions that suit your company&apos;s needs</p>
        <div className="flex justify-center w-full max-w-xl gap-4 px-8 py-4 mx-auto mt-2">
          <div className="flex gap-4 px-8 py-2 rounded-lg card-shadow bg-light">
            <Button
              onClick={() => setTypeBusiness("Products")}
              className={`hover:text-light hover:bg-secondary ${typeBusiness === "Products" ? "text-light bg-secondary" : "text-secondary bg-light"}`}
            >
              Products
            </Button>
            <Button
              onClick={() => setTypeBusiness("Projects")}
              className={`hover:text-light hover:bg-secondary ${typeBusiness === "Projects" ? "text-light bg-secondary" : "text-secondary bg-light"}`}
            >
              Projects
            </Button>
            <Button
              onClick={() => setTypeBusiness("Services")}
              className={`hover:text-light hover:bg-secondary ${typeBusiness === "Services" ? "text-light bg-secondary" : "text-secondary bg-light"}`}
            >
              Services
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-24 h-full bg-primary"></div>
        <div className="absolute top-0 w-24 h-40 left-16 bg-secondary"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-secondary"></div>
        <div className="absolute bottom-0 w-24 h-40 right-16 bg-primary"></div>
      </div>
      <Container className="w-full py-8">
        <div className="flex items-center justify-between">
          <Motion tag="h3" initialX={-50} animateX={0} duration={0.4} className="heading">
            {typeBusiness}
          </Motion>
          <Motion tag="div" initialX={50} animateX={0} duration={0.8} delay={0.4} className="relative flex items-center gap-4">
            <Pagination page={page} totalPage={totalPage} setPage={setPage} color="secondary" />
          </Motion>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sectorBusiness?.map((item, index) => (
            <div key={index} className="cursor-pointer" onClick={() => setOpenModalIndex(item.slug)}>
              <Motion tag="div" initialY={30} animateY={0} duration={1} delay={index * 0.1}>
                <Background
                  src={"/temp-business.webp"}
                  className="flex-col justify-end px-4 py-2 h-72 sm:h-80 filter-image sm:px-8"
                  parentClassName="rounded-lg"
                  isHover
                >
                  <div className="text-light">
                    <h5 className="text-base sm:text-lg line-clamp-1">{item.title}</h5>
                    <h6 className="text-lg font-semibold sm:text-xl">{typeBusiness}</h6>
                  </div>
                </Background>
              </Motion>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {openModalIndex !== null && (
            <Modal isVisible={openModalIndex !== null} onClose={() => setOpenModalIndex(null)}>
              {filterBusiness && filterBusiness?.media.length > 0 ? (
                <ImageSlider images={filterBusiness?.media?.map((item) => item.url)} />
              ) : (
                <ImageSlider images={["/temp-business.webp"]} />
              )}
              <div className="relative w-full space-y-4 md:space-y-8">
                <h3 className="text-xl font-medium sm:text-2xl md:text-3xl text-primary">{typeBusiness}</h3>
                <div className="space-y-2 md:space-y-4">
                  <h4 className="text-xl font-semibold sm:text-2xl md:text-3xl text-primary">{filterBusiness?.title}</h4>
                  <p className="h-40 overflow-y-auto text-sm leading-tight text-justify md:h-60 sm:text-base xl:text-lg scrollbar">
                    {filterBusiness?.description}
                  </p>
                </div>
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};
