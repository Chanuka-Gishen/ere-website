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
    longDescription:
      "We specialize in all types of AC installations including split systems, cassette units, ceiling mounted, portable ACs, window units, and ducted systems. Our process begins with a free site inspection where we assess your space, discuss your cooling needs, and recommend the most suitable AC type and capacity. We consider factors like room size, insulation, sun exposure, number of occupants, and budget to ensure optimal performance and energy efficiency.",
    types: [
      "Split AC",
      "Cassette AC",
      "Ceiling AC",
      "Portable AC",
      "Window AC",
      "Ducted AC",
    ],
    brands: [
      "LG",
      "Daikin",
      "Panasonic",
      "Hitachi",
      "Samsung",
      "Mitsubishi",
      "Carrier",
      "Blue Star",
      "Voltas",
      "O General",
    ],
    process: [
      "Free site inspection and consultation",
      "Recommend best AC type and size",
      "Professional installation by certified technicians",
      "Testing and performance check",
      "Customer demonstration and handover",
    ],
    benefits: [
      "Energy efficient installation for lower electricity bills",
      "1-year warranty on installation work",
      "Competitive pricing with best value",
      "Same-day service available for urgent needs",
      "Quality mounting hardware included",
      "Proper drainage and electrical connection",
    ],
    faqs: [
      {
        question: "How long does AC installation take?",
        answer:
          "Standard AC installation typically takes 2-4 hours depending on the complexity and type of AC unit. Split ACs usually take 2-3 hours while cassette or ducted systems may take 4-6 hours.",
      },
      {
        question: "Do you provide warranty on installation?",
        answer:
          "Yes, we provide a 1-year warranty on all installation work. Manufacturer warranty on the AC unit also applies as per brand policy.",
      },
      {
        question: "Do I need to prepare anything before installation?",
        answer:
          "Please ensure the installation area is accessible and clear of obstacles. If it's a replacement, please remove any items near the existing AC unit.",
      },
      {
        question: "Do you offer free consultation?",
        answer:
          "Yes, we offer a free site inspection and consultation to assess your needs and provide an accurate quote before starting any work.",
      },
    ],
    price: "Starting from LKR 5,000",
    duration: "2-4 hours",
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
    longDescription:
      "We handle all types of AC repairs from minor issues like remote control problems to major repairs like compressor replacement. Our diagnostic approach ensures we identify the root cause of the problem, not just the symptoms. We use genuine spare parts and provide warranty on all repairs.",
    types: [
      "Split AC Repair",
      "Cassette AC Repair",
      "Window AC Repair",
      "Central AC Repair",
    ],
    brands: [
      "LG",
      "Daikin",
      "Panasonic",
      "Hitachi",
      "Samsung",
      "Mitsubishi",
      "Carrier",
      "Blue Star",
      "Voltas",
      "O General",
      "Gree",
      "Midea",
    ],
    process: [
      "Call us or book online",
      "Technician arrives at your location",
      "Complete diagnosis of the issue",
      "Provide repair estimate",
      "Fix the problem with quality parts",
    ],
    benefits: [
      "Same-day service for urgent repairs",
      "Genuine spare parts with manufacturer warranty",
      "Affordable rates with no hidden charges",
      "3-month warranty on all repairs",
      "Free diagnosis with repair service",
      "Emergency service available 24/7",
    ],
    faqs: [
      {
        question: "How quickly can you repair my AC?",
        answer:
          "We offer same-day service for most repairs. Our technician will diagnose and fix the issue within 1-3 hours depending on the problem complexity.",
      },
      {
        question: "Do you provide warranty on repairs?",
        answer:
          "Yes, we provide a 3-month warranty on all repair services. If the same issue recurs within warranty period, we'll fix it free of charge.",
      },
      {
        question: "What brands do you service?",
        answer:
          "We service all major AC brands including LG, Daikin, Panasonic, Hitachi, Samsung, Mitsubishi, Carrier, Blue Star, Voltas, and many more.",
      },
      {
        question: "Do you offer emergency repair service?",
        answer:
          "Yes, we offer 24/7 emergency repair service for urgent situations. Additional charges may apply for after-hours service.",
      },
    ],
    price: "Starting from LKR 2,500",
    duration: "1-3 hours",
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
    longDescription:
      "Our comprehensive maintenance service includes thorough cleaning of filters, coils, and blowers, checking refrigerant levels, inspecting electrical connections, and testing overall performance. Regular maintenance can improve cooling efficiency by up to 30% and extend your AC's life by several years.",
    brands: ["All Brands"],
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
    benefits: [
      "Lower electricity bills by up to 30%",
      "Prevent unexpected breakdowns",
      "Better indoor air quality",
      "Extended AC lifespan by 3-5 years",
      "Priority service for AMC customers",
      "Discounted rates on repairs",
    ],
    faqs: [
      {
        question: "How often should I service my AC?",
        answer:
          "We recommend servicing your AC every 3-6 months depending on usage. Heavy users (daily 8+ hours) should service quarterly, while moderate users can service bi-annually.",
      },
      {
        question: "What is included in AC maintenance?",
        answer:
          "Maintenance includes cleaning filters, coils, and blowers, checking refrigerant, inspecting electrical connections, testing performance, and lubrication of moving parts.",
      },
      {
        question: "Do you offer annual maintenance contracts?",
        answer:
          "Yes, we offer Annual Maintenance Contracts (AMC) that include quarterly services, priority support, and discounted repair rates.",
      },
      {
        question: "Can maintenance reduce electricity bills?",
        answer:
          "Yes, regular maintenance can reduce electricity consumption by 20-30% as a clean AC runs more efficiently.",
      },
    ],
    price: "Starting from LKR 3,000",
    duration: "1-2 hours",
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
    longDescription:
      "Moving your AC to a new location requires expertise to ensure no damage occurs during dismantling, transport, or reinstallation. Our team handles everything from safely recovering refrigerant to securely packing the unit and reinstalling it with proper drainage and electrical connections at the new site.",

    types: [
      "Home Relocation",
      "Office Relocation",
      "Single Unit Move",
      "Multiple Units Move",
    ],
    brands: ["All Brands"],
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
    benefits: [
      "Safe handling with no damage guarantee",
      "Professional packing for transport",
      "Quick turnaround within 24 hours",
      "Affordable pricing with no hidden fees",
      "Includes gas top-up if needed",
      "Reinstallation with new mounting hardware",
    ],
    faqs: [
      {
        question: "How long does AC relocation take?",
        answer:
          "Standard relocation takes 3-5 hours including dismantling, transport, and reinstallation. Complex moves may take longer depending on distance.",
      },
      {
        question: "Do you provide transportation?",
        answer:
          "Yes, we provide transportation for the AC unit as part of our relocation service. We use proper packing to prevent damage during transit.",
      },
      {
        question: "Will my AC work after relocation?",
        answer:
          "Yes, we ensure proper reinstallation and testing. We also check gas levels and top up if needed for optimal performance.",
      },
      {
        question: "What if my AC gets damaged during relocation?",
        answer:
          "We take utmost care during relocation. However, if any damage occurs due to our handling, we will repair it free of charge.",
      },
    ],
    price: "Starting from LKR 6,000",
    duration: "3-5 hours",
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
    longDescription:
      "Perfect for weddings, corporate events, temporary offices, emergency cooling, or testing before purchase. Our rental ACs are well-maintained, cleaned, and tested before each rental. We handle delivery, installation, maintenance, and pickup.",

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
    brands: ["All Brands"],
    benefits: [
      "No upfront investment",
      "Maintenance included",
      "Flexible terms",
      "Delivery & setup free",
    ],
    benefits: [
      "No upfront investment or purchase cost",
      "Maintenance and service included",
      "Flexible rental terms from 1 day to 12 months",
      "Free delivery and installation",
      "Emergency replacement if unit fails",
    ],
    faqs: [
      {
        question: "What is the minimum rental period?",
        answer:
          "Minimum rental period is 1 day for portable units and 3 days for event ACs. Long-term rentals start from 1 month.",
      },
      {
        question: "Do you provide installation for rental ACs?",
        answer:
          "Yes, we provide free delivery and professional installation for all rental ACs. We also handle pickup after rental ends.",
      },
      {
        question: "What if the rented AC stops working?",
        answer:
          "We provide 24/7 support for rental units. If the AC fails, we will repair or replace it immediately at no extra cost.",
      },
      {
        question: "Can I rent an AC for a wedding?",
        answer:
          "Absolutely! We specialize in outdoor event AC rentals for weddings, parties, and corporate events. We provide setup and support throughout the event.",
      },
    ],
    price: "Starting from LKR 5000/day",
    duration: "Flexible (Daily/Weekly/Monthly)",
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
