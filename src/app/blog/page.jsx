import BlogPage from "./blog-page";

// Metadata for SEO
export const metadata = {
  title: "AC Tips & Blog | Expert Advice on Air Conditioning | EREngineers",
  description:
    "Read our blog for expert tips on AC installation, repair, maintenance, energy saving, and troubleshooting. Stay updated with latest AC trends in Sri Lanka.",
  keywords:
    "AC blog, air conditioning tips, AC maintenance guide, energy saving tips, AC troubleshooting, HVAC blog Sri Lanka",
  openGraph: {
    title: "AC Tips & Blog | EREngineers",
    description:
      "Expert advice on air conditioning maintenance, repair, and energy efficiency",
    url: "https://erengineers.com/blog",
    type: "website",
    images: [
      {
        url: "https://erengineers.com/images/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "AC Tips Blog",
      },
    ],
  },
  alternates: {
    canonical: "https://erengineers.com/blog",
  },
};

export default BlogPage;
