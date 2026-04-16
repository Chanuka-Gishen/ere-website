"use client";

import { useState, useEffect, Fragment } from "react";
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
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import {
  CheckCircle,
  ArrowForward,
  Security,
  Speed,
  AttachMoney,
  SupportAgent,
  Home,
  NavigateNext,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  fadeInUp,
  staggerContainer,
  zoomIn,
  fadeInLeft,
  fadeInRight,
} from "@/utils/animations";
import { services } from "@/constants/common-constants";
import CTASection from "@/components/cta-section";

// Structured Data (JSON-LD) for Services Page
const generateJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AC Services Sri Lanka",
    description:
      "Professional AC installation, repair, maintenance, gas refilling, relocation and rental services",
    provider: {
      "@type": "LocalBusiness",
      name: "EREngineers",
      image: "https://www.erengineers.lk/images/ere-logo.jpg",
      logo: "https://www.erengineers.lk/images/ere-logo.jpg",
      url: "https://erengineers.com",
      telephone: "+94771234567",
      email: "info@erengineers.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Main Street",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        postalCode: "00500",
        addressCountry: "LK",
      },
      openingHours: "Mo-Sa 08:00-18:00",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "09:00",
          closes: "12:00",
        },
      ],
      paymentAccepted: "Cash, Bank Transfer",
      priceRange: "$$",
      areaServed: {
        "@type": "City",
        name: ["Colombo", "Panadura", "Kalutara", "Galle"],
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AC Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Installation",
            description:
              "Professional split, cassette, ceiling & portable AC installation",
            url: "https://www.erengineers.lk/services/installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Repair",
            description: "Fast diagnosis and repair for all AC brands",
            url: "https://www.erengineers.lk/services/repair",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Maintenance",
            description:
              "Regular preventive maintenance for optimal performance",
            url: "https://www.erengineers.lk/services/maintenance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Relocation",
            description: "Safe dismantling, transport and reinstallation",
            url: "https://www.erengineers.lk/services/relocation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Rental",
            description: "Flexible rental solutions for events and offices",
            url: "https://www.erengineers.lk/services/rental",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1250",
      bestRating: "5",
      worstRating: "3",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Rajesh Perera",
      },
    },
  };
};

// FAQ data
const faqs = [
  {
    question: "How long does AC installation take?",
    answer:
      "Standard AC installation typically takes 2-4 hours depending on the complexity and type of AC unit.",
  },
  {
    question: "Do you provide warranty on your services?",
    answer:
      "Yes, we provide a 3-month warranty on all repair services and 1-year warranty on new installations.",
  },
  {
    question: "How often should I service my AC?",
    answer:
      "We recommend servicing your AC every 3-6 months for optimal performance and energy efficiency.",
  },
  {
    question: "Do you service all AC brands?",
    answer:
      "Yes, our technicians are trained to service all major AC brands including LG, Daikin, Panasonic, Hitachi, Samsung, and more.",
  },
];

const ServicesPage = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
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
            <Box
              component={motion.div}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <Breadcrumbs
                separator={
                  <NavigateNext fontSize="small" sx={{ color: "#94A3B8" }} />
                }
                sx={{ mb: 2 }}
              >
                <MuiLink
                  component={Link}
                  href="/"
                  sx={{ color: "#94A3B8", textDecoration: "none" }}
                >
                  <Home sx={{ fontSize: 16, mr: 0.5 }} />
                  Home
                </MuiLink>
                <Typography color="#60A5FA">Services</Typography>
              </Breadcrumbs>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Our AC Services
              </Typography>
              <Typography variant="h6" sx={{ color: "#94A3B8", maxWidth: 600 }}>
                Comprehensive air conditioning solutions tailored to your needs
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* All Services Grid */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Box
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid
                  size={{ xs: 12, md: 6, lg: 4 }}
                  key={service.id}
                  sx={{ display: "flex" }}
                >
                  <Box
                    component={motion.div}
                    variants={zoomIn}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: 6,
                        },
                        display: "flex",
                        flexDirection: "column",
                      }}
                      onClick={() =>
                        setSelectedService(
                          selectedService === service.id ? null : service.id,
                        )
                      }
                    >
                      <CardContent
                        sx={{
                          p: 3,
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Avatar
                            sx={{
                              width: 60,
                              height: 60,
                              bgcolor: service.bgLight,
                              color: service.color,
                            }}
                          >
                            {service.icon}
                          </Avatar>
                          <Box>
                            <Typography variant="h5" fontWeight={700}>
                              {service.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {service.description}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 2, flex: 1 }}
                        >
                          {service.fullDescription}
                        </Typography>

                        <Button
                          component={Link}
                          href={`/services/${service.id}`}
                          endIcon={<ArrowForward />}
                          sx={{ color: service.color }}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        {/* Featured Service Details - Installation (Example) */}
        <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 10 } }}>
          <Container>
            <Grid container spacing={6} sx={{ alignItems: "center" }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component={motion.div}
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Chip
                    label="Professional Installation"
                    sx={{ bgcolor: "#E3F2FD", color: "#1976D2", mb: 2 }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    Expert AC Installation Services
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    Get your AC installed professionally by our certified
                    technicians. We ensure optimal placement and performance for
                    maximum cooling efficiency.
                  </Typography>

                  <List>
                    {[
                      "Free site inspection and quote",
                      "Certified and experienced technicians",
                      "Quality mounting and drainage work",
                      "Complete testing and demonstration",
                    ].map((item) => (
                      <ListItem key={item} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <CheckCircle sx={{ color: "#10B981" }} />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant="contained"
                    href="/quote"
                    sx={{ mt: 2, bgcolor: "#1976D2" }}
                  >
                    Get Free Quote
                  </Button>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component={motion.div}
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  sx={{
                    position: "relative",
                    height: { xs: 300, md: 400 },
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: 3,
                  }}
                >
                  <Image
                    src="/images/ac-installation.webp"
                    alt="AC Installation Service"
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Why Choose Us Section */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ textAlign: "center", mb: 6 }}
          >
            <Chip
              label="Why Choose Us"
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
              Why Customers Trust Our Services
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
            >
              We deliver quality service with professionalism and expertise
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <Security />,
                title: "Certified Technicians",
                desc: "All technicians are trained and certified",
                color: "#1976D2",
              },
              {
                icon: <Speed />,
                title: "Same-Day Service",
                desc: "Quick response and fast service",
                color: "#FF9800",
              },
              {
                icon: <AttachMoney />,
                title: "Best Pricing",
                desc: "Competitive rates with no hidden fees",
                color: "#10B981",
              },
              {
                icon: <SupportAgent />,
                title: "24/7 Support",
                desc: "Emergency service available anytime",
                color: "#8B5CF6",
              },
            ].map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
                <Box
                  component={motion.div}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  sx={{ textAlign: "center" }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: `${item.color}15`,
                      color: item.color,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 10 } }}>
          <Container>
            <Box
              component={motion.div}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{ textAlign: "center", mb: 6 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                We Serve All Major Areas
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Providing quality AC services across Sri Lanka
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
              ].map((area, index) => (
                <Grid size="auto" key={area}>
                  <Box
                    component={motion.div}
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Chip
                      label={area}
                      sx={{
                        px: 2,
                        py: 2,
                        fontSize: "0.9rem",
                        bgcolor: "white",
                        "&:hover": {
                          bgcolor: "#1976D2",
                          color: "white",
                        },
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ textAlign: "center", mb: 6 }}
          >
            <Chip
              label="FAQs"
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
              Frequently Asked Questions
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {faqs.map((faq, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Box
                  component={motion.div}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": { boxShadow: 6 },
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {faq.question}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* CTA Section */}
        <CTASection />
      </Box>
    </Fragment>
  );
};

export default ServicesPage;
