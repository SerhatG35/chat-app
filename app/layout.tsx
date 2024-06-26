import theme from "./theme";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { JotaiProvider } from "./components/providers";
import { Box, Container, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <JotaiProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Container
                sx={{ paddingTop: 3, paddingBottom: 3, height: "100vh" }}
                component="main"
                maxWidth="lg"
              >
                <Box height="100%" justifyContent="center" alignItems="center">
                  {children}
                </Box>
              </Container>
            </ThemeProvider>
          </JotaiProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
