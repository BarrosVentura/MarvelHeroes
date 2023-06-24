import { Header } from "@/components/Header";
import { MarvelHeroProvider } from "@/context/marvelHero";
import { QueryProvider } from "@/lib/queryClient";
import StyledComponentsRegistry from "@/lib/registry";
import { Varela_Round } from "next/font/google";

const varelaRound = Varela_Round({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Marvel Heroes",
  description: "Site para desafio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={varelaRound.className}>
        <QueryProvider>
          <MarvelHeroProvider>
            <StyledComponentsRegistry>
              <Header />
              {children}
            </StyledComponentsRegistry>
          </MarvelHeroProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
