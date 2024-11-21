import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { GoogleAnalytics } from "@next/third-parties/google";

import { Poppins } from "next/font/google";

import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";
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
  icons: {
    icon: "/logo-company.png",
  },
};

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <Toaster position="bottom-center" />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-G22M9YR05N" />
    </html>
  );
}
