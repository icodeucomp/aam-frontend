export interface DropdownProps {
  parentClassName: string;
  className: string;
  defaultValue: string;
  data: {
    title: string;
    slug: string;
  }[];
  setFiltered: (slug: string) => void;
}
