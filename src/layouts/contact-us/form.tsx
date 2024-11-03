"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { useTranslations } from "next-intl";

import { usePostContact } from "@/hooks";

import { Button, Motion } from "@/components";

import { ContactUsTypes } from "@/types";

export const Form = () => {
  const t = useTranslations("contact-us.right-side");

  const initValues = { firstName: "", email: "", lastName: "", phoneNumber: "", message: "" };
  const [input, setInput] = useState<ContactUsTypes>(initValues);
  const [error, setError] = useState<boolean>(false);

  const { execute, loading } = usePostContact();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, firstName, lastName, message, phoneNumber } = input;

    if (!email || !firstName || !lastName || !message || !phoneNumber) {
      setError(true);
      return;
    }

    execute(input);

    setInput(initValues);
  };

  return (
    <Motion tag="div" initialX={40} animateX={0} duration={0.6} delay={0.3} className="flex-1 px-4 py-8 space-y-8 card-shadow md:px-8 rounded-2xl bg-light text-dark-blue">
      <div className="space-y-2 text-center">
        <h4 className="text-xl font-semibold sm:text-2xl">{t("title")}</h4>
        <p className="text-sm">{t("description")}</p>
      </div>
      <form className="space-y-5" onSubmit={submitForm} autoComplete="off">
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full">
            <input type="text" placeholder={t("first-name")} name="firstName" onChange={handleChange} value={input.firstName} className={`form-contact-input`} />
            {error && !input.firstName && <small className="text-red-500">Enter your first name</small>}
          </div>

          <div className="w-full">
            <input type="text" placeholder={t("last-name")} name="lastName" onChange={handleChange} value={input.lastName} className={`form-contact-input`} />
            {error && !input.lastName && <small className="text-red-500">Enter your last name</small>}
          </div>

          <div className="w-full col-span-2">
            <input type="email" placeholder={t("email")} name="email" onChange={handleChange} value={input.email} className={`form-contact-input`} />
            {error && !input.email && <small className="text-red-500">Enter your email</small>}
          </div>

          <div className="w-full col-span-2">
            <input type="tel" placeholder={t("phone")} name="phoneNumber" onChange={handleChange} value={input.phoneNumber} className={`form-contact-input`} />
            {error && !input.phoneNumber && <small className="text-red-500">Enter your number phone</small>}
          </div>
          <div className="w-full col-span-2">
            <textarea rows={5} placeholder={t("message")} onChange={handleChange} value={input.message} name="message" className="form-contact-input" />
            {error && !input.message && <small className="text-red-500">Enter your messages</small>}
          </div>
        </div>
        <Button type="submit" className={`btn-secondary w-full ${loading && "animate-pulse"}`}>
          {t("button-text")}
        </Button>
      </form>
    </Motion>
  );
};
