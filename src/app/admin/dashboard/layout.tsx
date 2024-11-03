import { Layout } from "@/dashboards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboards",
  description: "Dashboards Page for PT Amanah Aulia Mandiri",
};

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
