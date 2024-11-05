"use client";

import * as React from "react";

import { Container } from "./container";
import { CustomMotion, Motion } from "./motion";
import { Pagination } from "./pagination";
import { AnimatePresence } from "framer-motion";

import { SliderProps } from "@/types";

export const Slider = ({ title, loading, children, totalPage, className, parentClassName, page, setPage }: SliderProps) => {
  return (
    <Container className={parentClassName ?? ""}>
      <div className="flex items-center justify-between">
        <Motion tag="h3" initialX={-50} animateX={0} duration={0.4} className="heading">
          {title}
        </Motion>
        <Motion tag="div" initialX={50} animateX={0} duration={0.8} delay={0.4}>
          <Pagination page={page} totalPage={totalPage} setPage={setPage} color="secondary" />
        </Motion>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <div className="loader"></div>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <CustomMotion key={page} className={className}>
            {children}
          </CustomMotion>
        </AnimatePresence>
      )}
    </Container>
  );
};
