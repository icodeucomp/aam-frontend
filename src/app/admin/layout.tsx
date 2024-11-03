import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import { Toaster } from "react-hot-toast";

import { CookiesProvider } from "next-client-cookies/server";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Login",
  description: "Login Page for PT Amanah Aulia Mandiri",
};

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning={true}>
        <CookiesProvider>
          <Toaster position="bottom-center" />
          {children}
        </CookiesProvider>
      </body>
    </html>
  );
}