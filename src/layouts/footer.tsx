import { Link } from "@/i18n/routing";

import { Container, Img } from "@/components";

import { FooterLists } from "@/static";

import { MdCall, MdEmail } from "react-icons/md";

export const Footer = () => {
  const footerLists = FooterLists();
  return (
    <footer className="mt-auto bg-primary">
      <Container className="flex justify-between gap-8 py-8 text-light">
        <div className="flex-1 space-y-4">
          <Link href="/" className="space-y-1">
            <Img className="h-14 min-w-28 max-w-28" src="/logo-company.png" alt="logo PT Amanah Aulia Mandiri" />
          </Link>
          <p className="text-sm">Jl. Bhayangkara No.136B, Kota Serang-Banten 42118</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <span className="p-2 rounded-full bg-light">
                <MdCall className="fill-primary" />
              </span>
              <span>0254 - 7932385</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <span className="p-2 rounded-full bg-light">
                <MdEmail className="fill-primary" />
              </span>
              <span>amanahsrg@gmail.com</span>
            </div>
          </div>
          <h5 className="text-sm">© Copyright PT Trijaya Berkah Mandiri</h5>
        </div>
        <div className="flex-1 hidden grid-cols-1 gap-8 mt-4 sm:grid lg:grid-cols-2 xl:grid-cols-3">
          {footerLists.map((footer, i) => (
            <div key={i} className="space-y-2">
              <Link href={footer.pathUrl} className="block">
                <h5 className="font-semibold">{footer.title}</h5>
              </Link>
              <menu className="space-y-2">
                {footer.content.map((field, j) => (
                  <Link key={j} className="block" href={footer.pathUrl + field.pathUrl}>
                    <p className="text-sm">{field.title}</p>
                  </Link>
                ))}
              </menu>
            </div>
          ))}
        </div>
      </Container>
      <div className="py-2 text-sm italic text-center bg-secondary text-light">
        <span>© Copyright 2024 All Rights Reserved by PT Amanah Aulia Mandiri</span>
      </div>
    </footer>
  );
};
