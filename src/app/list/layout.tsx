export const metadata = {
  title: "Marvel Heroes List",
  description: "Site para desafio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
