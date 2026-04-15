import ServiceDetailsPage from "./service-details-page";
import { services } from "@/constants/common-constants";

// Generate metadata dynamically
export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    return {
      title: "Service Not Found | EREngineers",
      description: "The requested service page could not be found.",
    };
  }

  const serviceName = service.name;
  const serviceDescription = service.fullDescription.substring(0, 160);

  return {
    title: `${serviceName} Services | Professional Air Conditioner ${serviceName} | EREngineers`,
    description: serviceDescription,
    keywords: [
      `${serviceName.toLowerCase()} Sri Lanka`,
      `${serviceName.toLowerCase()} Colombo`,
      `air conditioner ${serviceName.toLowerCase()}`,
      `AC ${serviceName.toLowerCase()} service`,
      `professional ${serviceName.toLowerCase()}`,
      service.types.slice(0, 3).map((t) => t.toLowerCase()),
      service.brands
        .slice(0, 3)
        .map((b) => `${b} ${serviceName.toLowerCase()}`),
      `${serviceName.toLowerCase()} near me`,
      `best ${serviceName.toLowerCase()} service`,
      `affordable ${serviceName.toLowerCase()}`,
      `certified ${serviceName.toLowerCase()} technicians`,
      `same day ${serviceName.toLowerCase()}`,
      `${serviceName.toLowerCase()} warranty`,
      `free ${serviceName.toLowerCase()} quote`,
    ]
      .flat()
      .join(", "),
    openGraph: {
      title: `${serviceName} Services in Sri Lanka | Professional & Affordable | EREngineers`,
      description: serviceDescription,
      url: `https://www.erengineers.lk/services/${service.slug}`,
      type: "website",
      siteName: "EREngineers",
      locale: "en_LK",
      images: [
        {
          url: `https://www.erengineers.lk/images/ere-logo.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} Service by EREngineers`,
        },
      ],
      emails: "info@www.erengineers.lk",
      phoneNumbers: "+94771234567",
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceName} Services | EREngineers Sri Lanka`,
      description: serviceDescription.substring(0, 200),
      images: [`https://www.erengineers.lk/images/ere-logo.jpg`],
      site: "@erengineers",
      creator: "@erengineers",
    },
    alternates: {
      canonical: `https://www.erengineers.lk/services/${service.slug}`,
      languages: {
        "en-US": `https://www.erengineers.lk/services/${service.slug}`,
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
};

const ServicePage = async ({ params }) => {
  const resolved = await params;
  const { id } = resolved;
  const service = services.filter((service) => service.id === id)[0];

  return <ServiceDetailsPage service={service} />;
};

export default ServicePage;
