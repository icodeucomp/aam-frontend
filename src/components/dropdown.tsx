"use client";

import { useToggleState } from "@/hooks";

import { Button } from "./button";

import { PiCaretDownBold } from "react-icons/pi";

import { DropdownProps } from "@/types";

export const Dropdown = ({ parentClassName, className, data, setFiltered, defaultValue }: DropdownProps) => {
  const [ref, popover, togglePopover] = useToggleState(false);

  return (
    <span ref={ref} className={`dropdown ${parentClassName ?? ""} ${popover ? "border-primary" : "border-gray"}`} onClick={togglePopover}>
      {defaultValue}
      <PiCaretDownBold size={20} className={`duration-300 absolute right-2 fill-dark ${popover && "rotate-180"}`} />
      {popover && (
        <div className={`popover ${className ?? ""}`}>
          {data?.map((item, index) => (
            <Button onClick={() => setFiltered(item.slug)} key={index} className="w-full whitespace-nowrap btn-primary">
              {item.title}
            </Button>
          ))}
        </div>
      )}
    </span>
  );
};
