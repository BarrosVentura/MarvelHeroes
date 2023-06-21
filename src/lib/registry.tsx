"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "@/app/theme";
import { GlobalStyles } from "@/app/globalStyes";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
