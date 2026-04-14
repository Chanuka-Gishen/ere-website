import ClientProvider from "@/components/client-provider";
import ThemeRegistry from "@/components/theme-registery";

export const metadata = {
  title: {
    default: "EREngineers | Professional AC Services in Sri Lanka",
    template: "%s | EREngineers",
  },
  description:
    "Expert AC installation, repair, maintenance, gas refilling, relocation & rental services. Certified technicians, same-day service, best prices. Free quotes!",
  keywords:
    "AC installation, AC repair, AC maintenance, AC gas refilling, AC relocation, AC rental, air conditioning service, HVAC services, Sri Lanka",
  authors: [{ name: "EREngineers" }],
  creator: "EREngineers",
  publisher: "EREngineers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "EREngineers | Professional AC Services in Sri Lanka",
    description:
      "Expert AC installation, repair, maintenance & rental services",
    url: "https://erengineers.com",
    siteName: "EREngineers",
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EREngineers | Professional AC Services",
    description:
      "Expert AC installation, repair, maintenance & rental services",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://erengineers.com",
  },
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
