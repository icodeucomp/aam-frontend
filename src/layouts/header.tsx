"use client";

import { useEffect, useState } from "react";

import { Link } from "@/i18n/routing";

import { useToggleState } from "@/hooks";

import { Button, Img, LanguageSwitcher, Navbar } from "@/components";

import { IoMdClose, IoMdMenu } from "react-icons/io";

export const Header = () => {
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
      <div className="bg-primary">
        <div className="flex justify-end max-w-screen-xl px-4 py-2 mx-auto sm:py-3 sm:px-8">
          <LanguageSwitcher />
        </div>
      </div>
      <div className={`bg-light top-0 w-full transition-all duration-300 ease-in-out shadow ${isVisible ? "relative" : "fixed"}`}>
        <div className="flex items-center justify-between w-full h-20 max-w-screen-xl px-4 mx-auto sm:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Img className="h-14 min-w-28 max-w-28" src="/logo-company.png" alt="logo PT Amanah Aulia Mandiri" />
          </Link>

          <Navbar navbar={navbar} />

          <div className="hidden lg:block">
            <Button className="shadow-lg btn-secondary">Get Our Company Profile</Button>
          </div>

          <div className="block lg:hidden">
            <button onClick={toggleNavbar}>{navbar ? <IoMdClose size={32} className="fill-primary" /> : <IoMdMenu size={32} className="fill-primary" />}</button>
          </div>
        </div>
      </div>
    </header>
  );
};
