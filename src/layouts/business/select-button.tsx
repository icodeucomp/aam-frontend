"use client";

import { useState, useEffect } from "react";

import { useGet } from "@/hooks";

import { Button, Container } from "@/components";

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

  return (
    <Container className="z-1">
      <div className={`flex px-8 py-2 -mt-8 rounded-lg card-shadow bg-light ${loading ? "justify-center" : "justify-between"}`}>
        {loading ? (
          <div className="flex justify-center min-w-96">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {businessName.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleFilterBusiness(item.slug)}
                className={`hover:text-light hover:bg-primary ${item.slug === businessSlug ? "bg-primary text-light" : "bg-light text-dark-blue"}`}
              >
                {item.title}
              </Button>
            ))}
          </>
        )}
      </div>
    </Container>
  );
};
