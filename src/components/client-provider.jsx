"use client";

import useScrollToTop from "@/hooks/use-scroll-to-top";
import MainLayout from "@/layout/main-layout";
import lightTheme from "@/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const ClientProvider = ({ children }) => {
  useScrollToTop();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
};

export default ClientProvider;
