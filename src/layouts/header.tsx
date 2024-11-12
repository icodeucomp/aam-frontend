"use client";

import { useEffect, useState } from "react";

import { Link } from "@/i18n/routing";

import { useTranslations } from "next-intl";

import { useToggleState } from "@/hooks";

import { Button, Img, LanguageSwitcher, Navbar } from "@/components";

export const Header = () => {
  const t = useTranslations("");

  const [ref, navbar, toggleNavbar] = useToggleState(false);

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 200 && currentScrollY > lastScrollY) {
          setIsVisible(false);
        }
        if (currentScrollY < 200 && currentScrollY < lastScrollY) {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      });
    }
  }, [lastScrollY]);

  return (
    <header ref={ref} className="w-full z-1000">
      <div className="hidden bg-primary lg:block">
        <div className="flex justify-end max-w-screen-xl px-4 py-2 mx-auto sm:py-3 sm:px-8">
          <LanguageSwitcher />
        </div>
      </div>
      <div className={`bg-light top-0 w-full transition-all duration-300 ease-in-out shadow ${isVisible ? "relative" : "fixed"}`}>
        <div className="flex items-center justify-between w-full h-20 max-w-screen-xl px-4 mx-auto sm:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Img className="h-14 min-w-28 max-w-28" src="/logo-company.png" alt="logo PT Amanah Aulia Mandiri" />
          </Link>

          <Navbar navbar={navbar} toggleNavbar={toggleNavbar} />

          <div className="hidden lg:block">
            <a href="/aulia-amanah-mandiri-company-profile.pdf" download="Aulia Amanah Mandiri Company Profile">
              <Button className="shadow-lg btn-secondary">{t("btn-profile")}</Button>
            </a>
          </div>

          <div className="block lg:hidden">
            <button onClick={toggleNavbar} className={`relative flex flex-col justify-center overflow-hidden items-center p-2 ${navbar ? "space-y-1" : "space-y-1.5"}`}>
              <span className={`block h-1 w-10 rounded-full bg-primary transition-transform ease-in-out ${navbar ? "translate-y-2 rotate-45" : ""}`}></span>
              <span className={`block h-1 w-8 rounded-full bg-primary duration-200 ${navbar && "translate-x-16"}`}></span>
              <span className={`block h-1 w-10 rounded-full bg-primary transition-transform ease-in-out ${navbar ? "-translate-y-2 -rotate-45" : ""}`}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
