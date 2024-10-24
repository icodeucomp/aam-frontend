export interface NavbarPropsAndTypes {
  title: string;
  pathUrl: string;
  content?: {
    title: string;
    pathUrl: string;
    description: string;
  }[];
}
