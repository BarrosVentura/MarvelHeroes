import { QueryProvider } from "@/lib/queryClient";
import StyledComponentsRegistry from "@/lib/registry";
import { Varela_Round } from "next/font/google";

const varelaRound = Varela_Round({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Marvel Comics",
  description: "Site para desafio de entrevista",
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
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}
