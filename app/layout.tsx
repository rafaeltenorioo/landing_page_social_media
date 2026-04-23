import type { Metadata } from "next";
import "./globals.css";
import { Lora, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "./componentes/Header";
import { Footer } from "./componentes/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
});
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
        lora.className,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {/* O grow permite que o main se expanda mesmo quando o conteudo é pequeno. Isso faz com que o footer fique sempre no final da página. */}
        <main className="grow">{children}</main>
        <Footer />
      </body>

    </html>
  );
}
