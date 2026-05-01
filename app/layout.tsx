import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });


export const metadata: Metadata = {
  title: "Lays Giovanna | Gestão de Tráfego ",
  description: "Escale os resultados da sua empresa com anúncios profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "h-full",
        "antialiased",
        "scroll-smooth",
        inter.className

      )}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        <main >{children}</main>
        <Footer />
      </body>

    </html>
  );
}
