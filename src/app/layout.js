import ClientProvider from "@/components/client-provider";
import ThemeRegistry from "@/components/theme-registery";

export const metadata = {
  title: "EREngineers",
  description: "EREngineers official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <ThemeRegistry>
          <ClientProvider>{children}</ClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
