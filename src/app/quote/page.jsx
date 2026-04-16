import QuotePage from "./quote-page";

// SEO Metadata
export const metadata = {
  title: "Get a Free Quote | AC Installation, Repair & Rental | EREngineers",
  description:
    "Request a free, no-obligation quote for professional AC services in Sri Lanka. Get competitive pricing for installation, repair, maintenance & rental within 24 hours.",
  keywords:
    "free AC quote, AC installation price, AC repair cost, get AC service quote, AC maintenance price, AC rental cost, best AC service price",
  openGraph: {
    title: "Free AC Service Quote | EREngineers Sri Lanka",
    description:
      "Get a competitive, no-obligation quote for AC services. Response within 24 hours.",
    url: "https://www.erengineers.lk/quote",
    type: "website",
    siteName: "EREngineers",
    locale: "en_LK",
    images: [
      {
        url: "https://www.erengineers.lk/images/quote-og.jpg",
        width: 1200,
        height: 630,
        alt: "Get Free AC Service Quote",
      },
    ],
    emails: "info@www.erengineers.lk",
    phoneNumbers: "+94771234567",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AC Service Quote | EREngineers",
    description:
      "Request a free quote for professional AC services. Fast response, competitive pricing.",
    images: ["https://www.erengineers.lk/images/quote-twitter.jpg"],
    site: "@erengineers",
    creator: "@erengineers",
  },
  alternates: {
    canonical: "https://www.erengineers.lk/quote",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default QuotePage;
