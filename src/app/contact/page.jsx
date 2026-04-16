import ContactPage from "./contact-page";

export const metadata = {
  title: "Contact Us | Get in Touch with EREngineers AC Services",
  description:
    "Contact EREngineers for professional AC installation, repair, maintenance & rental services in Sri Lanka. Call 077 123 4567, WhatsApp, or email us for free quotes.",
  keywords: [
    "contact EREngineers",
    "AC service contact Sri Lanka",
    "AC repair contact number",
    "AC installation Colombo phone",
    "air conditioning service near me contact",
    "EREngineers phone number",
    "AC service email",
    "AC technician contact",
    "emergency AC repair contact",
    "Colombo AC service center",
    "AC maintenance contact",
    "AC rental contact Sri Lanka",
    "best AC service provider contact",
  ].join(", "),
  openGraph: {
    title: "Contact EREngineers | Professional AC Services Sri Lanka",
    description:
      "Reach out for AC installation, repair, maintenance & rental services. Free quotes, fast response.",
    url: "https://www.erengineers.lk/contact",
    type: "website",
    siteName: "EREngineers",
    locale: "en_LK",
    images: [
      {
        url: "https://www.erengineers.lk/images/ere-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Contact EREngineers AC Services",
      },
    ],
    emails: "info@www.erengineers.lk",
    phoneNumbers: "+94771234567",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact EREngineers | AC Services Sri Lanka",
    description:
      "Get in touch for professional AC services. Call, WhatsApp, or email us today!",
    images: ["https://www.erengineers.lk/images/contact-twitter.jpg"],
    site: "@erengineers",
    creator: "@erengineers",
  },
  alternates: {
    canonical: "https://www.erengineers.lk/contact",
    languages: {
      "en-US": "https://www.erengineers.lk/contact",
      "si-LK": "https://www.erengineers.lk/si/contact",
      "ta-LK": "https://www.erengineers.lk/ta/contact",
    },
  },
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
};

export default ContactPage;
