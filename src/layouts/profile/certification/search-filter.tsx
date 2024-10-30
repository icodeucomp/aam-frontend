"use client";

import * as React from "react";

import { useToggleState } from "@/hooks";

import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import { Button } from "@/components";

import { CiSearch } from "react-icons/ci";
import { PiCaretDownBold } from "react-icons/pi";

interface SearchFilterProps {
  setFiltered: (value: string) => void;
  setSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  date: DateValueType;
  setDate: (date: DateValueType) => void;
  searchTerm: string;
}

export const SearchFilter = ({ setFiltered, setSearchTerm, date, setDate, searchTerm }: SearchFilterProps) => {
  const [ref, popover, togglePopover] = useToggleState(false);

  const [display, setDisplay] = React.useState<string>("");

  const rightData = [
    { display: "Newest", value: "sort=uploadedAt&order=desc" },
    { display: "Oldest", value: "sort=uploadedAt&order=asc" },
    { display: "A - Z", value: "sort=name&order=asc" },
    { display: "Z - A", value: "sort=name&order=desc" },
  ];

  const handleClickFiltered = (display: string, value: string) => {
    setDisplay(display);
    setFiltered(value);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="relative w-full">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <CiSearch size={20} />
        </div>
        <input
          type="search"
          className="block w-full py-2 pl-10 pr-4 text-sm duration-300 border rounded-lg outline-none lg:py-4 text-dark-blue border-gray focus:border-primary"
          onChange={setSearchTerm}
          value={searchTerm}
          placeholder="Search"
        />
      </div>
      <div className="grid w-full grid-cols-2 gap-4">
        <Datepicker
          inputClassName="w-full rounded-lg h-12 outline-none border border-gray text-sm pl-4 pr-10 focus:ring-0 font-medium bg-light placeholder:text-gray text-gray"
          popoverDirection="down"
          primaryColor={"indigo"}
          value={date}
          useRange={false}
          onChange={(newValue) => setDate(newValue)}
        />
        <span ref={ref} className={`dropdown w-full h-12} ${popover ? "border-primary" : "border-gray"}`} onClick={togglePopover}>
          {display}
          <PiCaretDownBold size={20} className={`duration-300 absolute right-2 fill-dark ${popover && "rotate-180"}`} />
          {popover && (
            <div className={`popover top-10 lg:top-16`}>
              {rightData.map((item, index) => (
                <Button onClick={() => handleClickFiltered(item.display, item.value)} key={index} className="w-full whitespace-nowrap btn-primary">
                  {item.display}
                </Button>
              ))}
            </div>
          )}
        </span>
      </div>
    </div>
  );
};
