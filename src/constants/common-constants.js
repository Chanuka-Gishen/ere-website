import {
  AcUnit,
  Build,
  Handyman,
  DirectionsCar,
  Warehouse,
} from "@mui/icons-material";

export const services = [
  {
    id: "installation",
    name: "AC Installation",
    icon: <AcUnit sx={{ fontSize: 40 }} />,
    description:
      "Professional installation of split, cassette, ceiling & portable ACs",
    color: "#1976D2",
    bgLight: "#E3F2FD",
    href: "/services/installation",
    fullDescription:
      "Our expert technicians provide complete AC installation services for residential and commercial properties. We ensure proper sizing, placement, and setup for maximum efficiency.",
    types: [
      "Split AC",
      "Cassette AC",
      "Ceiling AC",
      "Portable AC",
      "Window AC",
      "Ducted AC",
    ],
    process: [
      "Free site inspection and consultation",
      "Recommend best AC type and size",
      "Professional installation by certified technicians",
      "Testing and performance check",
      "Customer demonstration and handover",
    ],
    benefits: [
      "Energy efficient setup",
      "Warranty on installation",
      "Competitive pricing",
      "Same-day service available",
    ],
  },
  {
    id: "repair",
    name: "AC Repair",
    icon: <Build sx={{ fontSize: 40 }} />,
    description: "Fast diagnosis and repair for all AC brands and models",
    color: "#FF9800",
    bgLight: "#FFF3E0",
    href: "/services/repair",
    fullDescription:
      "Quick and reliable AC repair services for all brands and models. Our technicians diagnose issues accurately and fix them efficiently.",
    types: [
      "Split AC Repair",
      "Cassette AC Repair",
      "Window AC Repair",
      "Central AC Repair",
    ],
    process: [
      "Call us or book online",
      "Technician arrives at your location",
      "Complete diagnosis of the issue",
      "Provide repair estimate",
      "Fix the problem with quality parts",
    ],
    benefits: [
      "Same-day service",
      "Genuine spare parts",
      "Affordable rates",
      "3-month warranty on repairs",
    ],
  },
  {
    id: "maintenance",
    name: "AC Maintenance",
    icon: <Handyman sx={{ fontSize: 40 }} />,
    description: "Regular maintenance for optimal performance & longevity",
    color: "#10B981",
    bgLight: "#E0F2F1",
    href: "/services/maintenance",
    fullDescription:
      "Preventive maintenance services to keep your AC running efficiently and extend its lifespan.",
    types: [
      "Monthly Maintenance",
      "Quarterly Service",
      "Bi-annual Checkup",
      "Annual Maintenance Contract",
    ],
    process: [
      "Schedule maintenance appointment",
      "Complete cleaning of filters and coils",
      "Check refrigerant levels",
      "Inspect electrical connections",
      "Performance testing and optimization",
    ],
    benefits: [
      "Lower electricity bills",
      "Prevent breakdowns",
      "Better air quality",
      "Extended AC life",
    ],
  },
  {
    id: "relocation",
    name: "AC Relocation",
    icon: <DirectionsCar sx={{ fontSize: 40 }} />,
    description: "Safe dismantling, transport & reinstallation",
    color: "#EC4899",
    bgLight: "#FCE4EC",
    href: "/services/relocation",
    fullDescription:
      "Expert AC relocation service including safe removal, transport, and reinstallation at your new location.",
    types: [
      "Home Relocation",
      "Office Relocation",
      "Single Unit Move",
      "Multiple Units Move",
    ],
    process: [
      "Inspect current installation",
      "Safely remove AC unit",
      "Recover refrigerant properly",
      "Transport to new location",
      "Reinstall and test thoroughly",
    ],
    benefits: [
      "Safe handling",
      "No damage guarantee",
      "Quick turnaround",
      "Affordable pricing",
    ],
  },
  {
    id: "rental",
    name: "AC Rental",
    icon: <Warehouse sx={{ fontSize: 40 }} />,
    description: "Flexible rental for events, offices & temporary cooling",
    color: "#06B6D4",
    bgLight: "#E0F7FA",
    href: "/rental",
    fullDescription:
      "Short-term and long-term AC rental solutions for events, offices, and temporary cooling needs.",
    types: [
      "Portable AC Rental",
      "Event AC Rental",
      "Office AC Rental",
      "Long-term Rental",
    ],
    process: [
      "Choose your AC type",
      "Select rental duration",
      "Delivery and installation",
      "Enjoy cooling comfort",
      "We handle pickup and maintenance",
    ],
    benefits: [
      "No upfront investment",
      "Maintenance included",
      "Flexible terms",
      "Delivery & setup free",
    ],
  },
];

export const contactInfo = {
  phone: "+94 77 123 4567",
  phoneDisplay: "077 123 4567",
  email: "info@accoolcare.com",
  whatsapp: "+94 77 123 4567",
  address: "Colombo 05, Sri Lanka",
  hours: "Mon-Sat: 8:00 AM - 8:00 PM",
  emergency: "24/7 Emergency Service Available",
};

export const serviceAreas = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Galle",
  "Negombo",
  "Mount Lavinia",
  "Dehiwala",
];

export const rentalOptions = {
  portable: { daily: 1500, weekly: 9000, monthly: 30000 },
  outdoor: { daily: 2500, weekly: 15000, monthly: 50000 },
  industrial: { daily: 5000, weekly: 30000, monthly: 100000 },
};
