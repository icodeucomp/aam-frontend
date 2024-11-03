"use client";

import { useState, useEffect } from "react";

import { useGet } from "@/hooks";

import { Button, Container, Dropdown } from "@/components";

import { formatTitleCase } from "@/utils";

import { ResponseBusinessesTypes } from "@/types";

interface BusinessesTypes {
  title: string;
  slug: string;
}

export const SelectButton = ({ handleFilterBusiness, businessSlug }: { handleFilterBusiness: (slug: string) => void; businessSlug: string }) => {
  const [businessName, setBusinessName] = useState<BusinessesTypes[]>([]);

  const { response: business, loading } = useGet<ResponseBusinessesTypes>({
    path: "business",
    limit: "10000",
  });

  useEffect(() => {
    if (business && business.data.length > 0) {
      setBusinessName(
        business.data.map((item) => {
          return { title: item.title, slug: item.slug };
        })
      );
    }
  }, [business]);

  if (loading) {
    return;
  }

  return (
    <Container className="z-1">
      <div className={`hidden px-8 py-2 lg:-mt-10 2xl:-mt-8 rounded-lg card-shadow overflow-x-auto scrollbar lg:flex bg-light ${loading ? "justify-center" : "justify-between"}`}>
        {businessName.map((item, index) => (
          <Button
            key={index}
            onClick={() => handleFilterBusiness(item.slug)}
            className={`hover:text-light hover:bg-primary whitespace-nowrap ${item.slug === businessSlug ? "bg-primary text-light" : "bg-light text-dark-blue"}`}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className="mt-8 block lg:hidden">
        <Dropdown defaultValue={formatTitleCase(businessSlug)} className="top-12" parentClassName="w-full h-14" data={businessName} setFiltered={handleFilterBusiness} />
      </div>
    </Container>
  );
};
