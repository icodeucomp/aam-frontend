"use client";

import { useGet } from "@/hooks";
import { Description } from "./description";
import { FilterButton } from "./filter-button";
import { SelectButton } from "./select-button";
import { useState } from "react";
import { ResponseBusinessTypes } from "@/types";
import { useDebounce } from "use-debounce";

export const Businesses = () => {
  const [businessSlug, setBusinessSlug] = useState<string>("civil-construction");

  const [debounceBusinessSlug] = useDebounce(businessSlug, 300);

  const { response: business, loading } = useGet<ResponseBusinessTypes>({
    path: `/business/${debounceBusinessSlug}`,
    limit: "10",
  });

  const handleFilterBusiness = (slug: string) => {
    setBusinessSlug(slug);
  };

  return (
    <>
      <SelectButton handleFilterBusiness={handleFilterBusiness} businessSlug={businessSlug} />
      {loading ? (
        <div className="flex justify-center py-32">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Description business={business?.data} />
          <FilterButton business={business?.data} />
        </>
      )}
    </>
  );
};
