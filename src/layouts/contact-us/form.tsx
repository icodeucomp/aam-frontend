"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { Button, Motion } from "@/components";

import { ContactUsTypes } from "@/types";
import { usePost } from "@/hooks";

export const Form = () => {
  const initValues = { firstName: "", email: "", lastName: "", phoneNumber: "", message: "" };
  const [input, setInput] = useState<ContactUsTypes>(initValues);
  const [error, setError] = useState<boolean>(false);
  const { loading, execute } = usePost("/contact-us", "POST");

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
    <Motion
      tag="div"
      initialX={40}
      animateX={0}
      duration={0.6}
      delay={0.3}
      className="flex-1 px-4 py-8 space-y-8 card-shadow md:px-8 rounded-2xl bg-light text-dark-blue"
    >
      <div className="space-y-2 text-center">
        <h4 className="text-xl font-semibold sm:text-2xl">Questions, comments, or suggestions? </h4>
        <p className="text-sm">Simply fill in the form and we`ll be in touch shortly</p>
      </div>
      <form className="space-y-5" onSubmit={submitForm} autoComplete="off">
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full">
            <input
              type="text"
              placeholder="First Name*"
              name="firstName"
              onChange={handleChange}
              value={input.firstName}
              className={`form-contact-input`}
            />
            {error && !input.firstName && <small className="text-secondary">Enter your first name</small>}
          </div>

          <div className="w-full">
            <input
              type="text"
              placeholder="Last Name*"
              name="lastName"
              onChange={handleChange}
              value={input.lastName}
              className={`form-contact-input`}
            />
            {error && !input.lastName && <small className="text-secondary">Enter your last name</small>}
          </div>

          <div className="w-full col-span-2">
            <input type="email" placeholder="Email*" name="email" onChange={handleChange} value={input.email} className={`form-contact-input`} />
            {error && !input.email && <small className="text-secondary">Enter your email</small>}
          </div>

          <div className="w-full col-span-2">
            <input
              type="tel"
              placeholder="Phone Number*"
              name="phoneNumber"
              onChange={handleChange}
              value={input.phoneNumber}
              className={`form-contact-input`}
            />
            {error && !input.phoneNumber && <small className="text-secondary">Enter your number phone</small>}
          </div>
          <div className="w-full col-span-2">
            <textarea
              rows={5}
              placeholder="Your Message"
              onChange={handleChange}
              value={input.message}
              name="message"
              className="form-contact-input"
            />
            {error && !input.message && <small className="text-secondary">Enter your messages</small>}
          </div>
        </div>
        <Button type="submit" className={`btn-secondary w-full ${loading && "animate-pulse"}`}>
          Send Message
        </Button>
      </form>
    </Motion>
  );
};
