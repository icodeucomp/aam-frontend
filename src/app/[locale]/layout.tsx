import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Poppins } from "next/font/google";

import type { Metadata } from "next";
import { Footer, Header } from "@/layouts";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amanah Aulia Mandiri",
  description: "This is official website from Amanah Aulia Mandiri",
};

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${poppins.className} flex flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
