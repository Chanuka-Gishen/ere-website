"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Divider,
  Rating,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import {
  AcUnit,
  Celebration,
  CheckCircle,
  LocationOn,
  SupportAgent,
  LocalShipping,
  Build,
  AttachMoney,
  Home,
  NavigateNext,
  ThumbUpAlt,
  RequestQuote,
  CalendarToday,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/cta-section";

// Rental options data
const rentalOptions = [
  {
    id: "portable",
    name: "Portable AC",
    icon: <AcUnit />,
    color: "#06B6D4",
    bgLight: "#E0F7FA",
    price: "1,500",
    priceLabel: "Starting from LKR 1,500/day",
    description:
      "Perfect for small rooms, offices, and temporary cooling needs. Easy to move and install.",
    features: [
      "Ideal for small to medium rooms",
      "Easy to move with castor wheels",
      "No permanent installation needed",
      "Energy efficient operation",
      "Remote control included",
      "Quick setup in minutes",
    ],
    specifications: [
      "Cooling capacity: 10,000 BTU",
      "Coverage: Up to 150 sq ft",
      "Power: 220-240V",
      "Noise level: 52 dB",
    ],
    bestFor: ["Bedrooms", "Home offices", "Small shops", "Temporary cooling"],
    duration: "Daily, Weekly, Monthly",
  },
  {
    id: "event",
    name: "Outdoor Event AC",
    icon: <Celebration />,
    color: "#FF9800",
    bgLight: "#FFF3E0",
    price: "2,500",
    priceLabel: "Starting from LKR 2,500/day",
    description:
      "Powerful cooling for weddings, parties, and outdoor events. Professional setup and support.",
    features: [
      "Perfect for outdoor events & weddings",
      "Cools large areas effectively",
      "Professional setup included",
      "Weather-resistant design",
      "Event-day support team",
      "Quick response for emergencies",
    ],
    specifications: [
      "Cooling capacity: 24,000 BTU",
      "Coverage: Up to 500 sq ft",
      "Power: 220-240V",
      "Industrial grade cooling",
    ],
    bestFor: [
      "Weddings",
      "Corporate events",
      "Parties",
      "Exhibitions",
      "Tents",
    ],
    duration: "Daily, Weekly",
  },
  //   {
  //     id: "industrial",
  //     name: "Industrial AC",
  //     icon: <Warehouse />,
  //     color: "#10B981",
  //     bgLight: "#E0F2F1",
  //     price: "5,000",
  //     priceLabel: "Starting from LKR 5,000/day",
  //     description:
  //       "Heavy-duty cooling for warehouses, factories, and large commercial spaces.",
  //     features: [
  //       "Heavy-duty industrial cooling",
  //       "24/7 continuous operation",
  //       "Energy efficient design",
  //       "Remote monitoring available",
  //       "Maintenance included",
  //       "Emergency backup ready",
  //     ],
  //     specifications: [
  //       "Cooling capacity: 60,000 BTU",
  //       "Coverage: Up to 1500 sq ft",
  //       "Power: 380-415V (3 Phase)",
  //       "Commercial grade system",
  //     ],
  //     bestFor: [
  //       "Warehouses",
  //       "Factories",
  //       "Data centers",
  //       "Large offices",
  //       "Gyms",
  //     ],
  //     duration: "Weekly, Monthly, Long-term",
  //   },
];

// Benefits of renting
const benefits = [
  {
    icon: <AttachMoney />,
    title: "Cost Effective",
    description:
      "No upfront investment. Pay only for the time you need cooling.",
    color: "#10B981",
  },
  {
    icon: <LocalShipping />,
    title: "Free Delivery",
    description:
      "Free delivery, installation, and pickup within service areas.",
    color: "#1976D2",
  },
  {
    icon: <Build />,
    title: "Maintenance Included",
    description:
      "All maintenance and support costs are covered in rental price.",
    color: "#FF9800",
  },
  {
    icon: <SupportAgent />,
    title: "24/7 Support",
    description: "Round-the-clock support for any issues during rental period.",
    color: "#8B5CF6",
  },
];

const steps = [
  {
    step: "01",
    title: "Request Quote",
    desc: "Tell us your cooling requirements",
    icon: <RequestQuote />,
  },
  {
    step: "02",
    title: "Select Duration",
    desc: "Pick daily, weekly or monthly plan",
    icon: <CalendarToday />,
  },
  {
    step: "03",
    title: "Free Delivery",
    desc: "We deliver & install at your location",
    icon: <LocalShipping />,
  },
  {
    step: "04",
    title: "Enjoy Cooling",
    desc: "Stay cool with our 24/7 support",
    icon: <ThumbUpAlt />,
  },
];

// FAQ data
const faqs = [
  {
    question: "What is the minimum rental period?",
    answer:
      "Minimum rental period is 1 day for portable units and 3 days for event ACs. Long-term rentals start from 1 month with special discounts.",
  },
  {
    question: "Do you provide installation for rental ACs?",
    answer:
      "Yes, we provide free delivery, professional installation, and pickup for all rental ACs within our service areas. Our technicians ensure proper setup before your event or use.",
  },
  {
    question: "What if the rented AC stops working?",
    answer:
      "We provide 24/7 support for all rental units. If any issue occurs, we will repair or replace the unit immediately at no extra cost to ensure uninterrupted cooling.",
  },
  {
    question: "Can I rent an AC for a wedding or event?",
    answer:
      "Absolutely! We specialize in outdoor event AC rentals for weddings, parties, corporate events, and exhibitions. We provide professional setup and on-site support throughout your event.",
  },
  {
    question: "Do you offer long-term rental discounts?",
    answer:
      "Yes, we offer special discounts for weekly, monthly, and long-term rentals. Contact us for a customized quote based on your duration needs.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We currently serve Colombo, Gampaha, Kalutara, and surrounding areas. For other locations, please contact us to check availability.",
  },
];

// JSON-LD Structured Data
const rentalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Rental Services",
  description:
    "Flexible AC rental solutions for events, offices, and temporary cooling needs",
  provider: {
    "@type": "LocalBusiness",
    name: "EREngineers",
    url: "https://erengineers.com",
    telephone: "+94771234567",
  },
  areaServed: {
    "@type": "City",
    name: ["Colombo", "Gampaha", "Kalutara"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rental AC Options",
    itemListElement: rentalOptions.map((option, index) => ({
      "@type": "Offer",
      name: option.name,
      price: option.price,
      priceCurrency: "LKR",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().split("T")[0],
      description: option.description,
      itemOffered: {
        "@type": "Product",
        name: option.name,
        description: option.description,
      },
      position: index + 1,
    })),
  },
};

const RentalPage = () => {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rentalJsonLd) }}
      />

      <Box>
        {/* Hero Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            color: "white",
            py: { xs: 6, md: 8 },
          }}
        >
          <Container maxWidth="lg">
            <Breadcrumbs
              separator={
                <NavigateNext fontSize="small" sx={{ color: "#94A3B8" }} />
              }
              sx={{ mb: 2 }}
            >
              <MuiLink
                component={Link}
                href="/"
                sx={{
                  color: "#94A3B8",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Home sx={{ fontSize: 20, mr: 0.5 }} />
                Home
              </MuiLink>
              <Typography color="#60A5FA">AC Rental</Typography>
            </Breadcrumbs>

            <Grid container spacing={4} sx={{ alignItems: "center" }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontWeight: 800,
                    mb: 2,
                  }}
                >
                  Rent AC for Any
                  <br />
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #06B6D4, #3B82F6)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Occasion
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#94A3B8", mb: 4, lineHeight: 1.6 }}
                >
                  Flexible AC rental solutions for events, offices, and
                  temporary cooling needs. Free delivery, installation &
                  support. Pay only for the time you need.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    href="/quote"
                    sx={{
                      bgcolor: "#06B6D4",
                      px: 4,
                      py: 1.5,
                      "&:hover": { bgcolor: "#0891B2" },
                    }}
                  >
                    Rent Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/contact"
                    sx={{
                      borderColor: "#06B6D4",
                      color: "#06B6D4",
                      px: 4,
                      py: 1.5,
                      "&:hover": {
                        borderColor: "#0891B2",
                        bgcolor: "rgba(6, 182, 212, 0.1)",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Stack>

                {/* Trust badges */}
                <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ color: "#06B6D4", fontWeight: 700 }}
                    >
                      500+
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                      Events Served
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ color: "#06B6D4", fontWeight: 700 }}
                    >
                      1000+
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                      Rental Units
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ color: "#06B6D4", fontWeight: 700 }}
                    >
                      99%
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                      Customer Satisfaction
                    </Typography>
                  </Box>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 300, md: 400 },
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                  }}
                >
                  <Image
                    src="/images/rental-hero.jpg"
                    alt="AC Rental Services"
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 50vw"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Rental Options Section */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="Rental Options"
              sx={{ bgcolor: "#E0F7FA", color: "#06B6D4", mb: 2 }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Choose Your Perfect Cooling Solution
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
            >
              Flexible rental plans for every need. Daily, weekly, and monthly
              options available.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {rentalOptions.map((option, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={option.id}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  {index === 1 && (
                    <Chip
                      label="Most Popular"
                      color="warning"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        zIndex: 1,
                      }}
                    />
                  )}
                  <CardContent
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        bgcolor: option.bgLight,
                        color: option.color,
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      {option.icon}
                    </Avatar>

                    <Typography
                      variant="h5"
                      fontWeight={700}
                      gutterBottom
                      sx={{ textAlign: "center" }}
                    >
                      {option.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, textAlign: "center", flexGrow: 1 }}
                    >
                      {option.description}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      gutterBottom
                    >
                      Key Features:
                    </Typography>
                    <List dense disablePadding>
                      {option.features.slice(0, 4).map((feature) => (
                        <ListItem key={feature} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <CheckCircle
                              sx={{ fontSize: 16, color: "#10B981" }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      gutterBottom
                    >
                      Best For:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.5,
                        mb: 2,
                      }}
                    >
                      {option.bestFor.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>

                    <Button
                      fullWidth
                      variant="contained"
                      href="/quote"
                      sx={{
                        mt: 2,
                        bgcolor: option.color,
                        "&:hover": { bgcolor: option.color, opacity: 0.9 },
                      }}
                    >
                      Rent Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Benefits Section */}
        <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 10 } }}>
          <Container>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Chip
                label="Why Rent From Us"
                sx={{ bgcolor: "#E3F2FD", color: "#1976D2", mb: 2 }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Benefits of Renting with EREngineers
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {benefits.map((benefit, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={benefit.title}>
                  <Box sx={{ textAlign: "center" }}>
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        bgcolor: `${benefit.color}15`,
                        color: benefit.color,
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      {benefit.icon}
                    </Avatar>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* How It Works */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="Simple Process"
              sx={{ bgcolor: "#FCE4EC", color: "#EC4899", mb: 2 }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              How AC Rental Works
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.step}>
                <Box sx={{ textAlign: "center" }}>
                  <Avatar
                    sx={{
                      width: 70,
                      height: 70,
                      bgcolor: "#06B6D415",
                      color: "#06B6D4",
                      mx: "auto",
                      mb: 2,
                      fontSize: "1.5rem",
                    }}
                  >
                    {step.icon}
                  </Avatar>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Service Areas */}
        <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 10 } }}>
          <Container>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                We Deliver Across Sri Lanka
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Free delivery and installation within our service areas
              </Typography>
            </Box>

            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {[
                "Colombo",
                "Gampaha",
                "Kalutara",
                "Kandy",
                "Galle",
                "Negombo",
                "Mount Lavinia",
                "Dehiwala",
              ].map((area) => (
                <Grid size="auto" key={area}>
                  <Chip
                    icon={<LocationOn />}
                    label={area}
                    sx={{
                      px: 2,
                      py: 2,
                      fontSize: "0.9rem",
                      bgcolor: "white",
                      "&:hover": {
                        bgcolor: "#06B6D4",
                        color: "white",
                        "& .MuiChip-icon": { color: "white" },
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="FAQs"
              sx={{ bgcolor: "#FFF3E0", color: "#FF9800", mb: 2 }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Frequently Asked Questions
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {faqs.map((faq, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Paper sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {faq.question}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* CTA Section */}
        <CTASection />
      </Box>
    </>
  );
};

export default RentalPage;
