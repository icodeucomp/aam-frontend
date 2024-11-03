"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import { request } from "@/utils";

export const usePostContact = () => {
  const [loading, setLoading] = useState<boolean>();

  const execute = async (body: any) => {
    setLoading(true);
    await request({ path: "/contact-us", method: "POST", body })
      .then((response) => toast.success(response?.data.message))
      .catch((error) => toast.error(error.response?.data.message || "There was an error"))
      .finally(() => setLoading(false));
  };

  return { loading, execute };
};
