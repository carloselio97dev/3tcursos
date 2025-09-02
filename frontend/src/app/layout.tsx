import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata: Metadata = {
  title: "3T Cursos de TI – Capacitación B2B",
  description:
    "Cursos corporativos en Azure, Data y Ciberseguridad con licencias por volumen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col pt-12 md:pt-20">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}