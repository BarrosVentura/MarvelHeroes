export const metadata = {
  title: "Current Hero",
  description: "Site para desafio de entrevista",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
