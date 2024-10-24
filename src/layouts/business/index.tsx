"use client";

import { useGet } from "@/hooks";
import { Description } from "./description";
import { FilterButton } from "./filter-button";
import { SelectButton } from "./select-button";
import { useState } from "react";
import { ResponseBusinessTypes } from "@/types";
import { useDebounce } from "use-debounce";

export const Businesses = () => {
  const [businessSlug, setBusinessSlug] = useState<string>("civil");

  const [debounceBusinessSlug] = useDebounce(businessSlug, 300);
  const { response: business, loading } = useGet<ResponseBusinessTypes>({
    path: `business/${debounceBusinessSlug}`,
    limit: "10",
  });

  const handleFilterBusiness = (slug: string) => {
    setBusinessSlug(slug);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-32">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <SelectButton handleFilterBusiness={handleFilterBusiness} businessSlug={businessSlug} />
      <Description business={business?.data} />
      <FilterButton business={business?.data} />
    </>
  );
};
