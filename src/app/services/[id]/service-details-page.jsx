"use client";

import { notFound } from "next/navigation";
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Breadcrumbs,
  Link as MuiLink,
  Paper,
  Divider,
} from "@mui/material";
import { CheckCircle, ArrowBack, Home } from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { Fragment } from "react";

// Generate JSON-LD structured data dynamically
const generateServiceJsonLd = (service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} Service`,
    description: service.fullDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "EREngineers",
      image: "https://www.erengineers.lk/images/ere-logo.jpg",
      url: "https://www.erengineers.lk",
      telephone: "+94771234567",
      email: "info@www.erengineers.lk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Main Street",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        postalCode: "00500",
        addressCountry: "LK",
      },
      priceRange: "$$",
      openingHours: "Mo-Sa 08:00-20:00",
      sameAs: [
        "https://facebook.com/erengineers",
        "https://twitter.com/erengineers",
        "https://instagram.com/erengineers",
      ],
    },
    areaServed: {
      "@type": "City",
      name: ["Colombo", "Gampaha", "Kalutara", "Kandy", "Galle", "Negombo"],
    },
    serviceType: service.name,
    offers: {
      "@type": "Offer",
      price: service.price
        .replace("Starting from LKR ", "")
        .replace("/day", ""),
      priceCurrency: "LKR",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().split("T")[0],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Types`,
      itemListElement: service.types.map((type, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: type,
          description: `${type} for ${service.name.toLowerCase()}`,
        },
        position: index + 1,
      })),
    },
    providerMobility: "dynamic",
    termsOfService: "https://www.erengineers.lk/terms",
    audience: {
      "@type": "Audience",
      audienceType: ["Residential", "Commercial", "Industrial"],
    },
  };
};

const generateFaqJsonLd = (service) => {
  if (!service.faqs || service.faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

const generateBreadcrumbJsonLd = (service) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.erengineers.lk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.erengineers.lk/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `https://www.erengineers.lk/services/${service.slug}`,
      },
    ],
  };
};

const ServiceDetailsPage = ({ service }) => {
  if (!service) {
    notFound();
  }

  const serviceJsonLd = generateServiceJsonLd(service);
  const faqJsonLd = generateFaqJsonLd(service);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(service);

  return (
    <Fragment>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Box>
        <Container sx={{ py: 6 }}>
          <Breadcrumbs sx={{ mb: 3 }}>
            <MuiLink
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Home sx={{ mr: 0.5 }} fontSize="small" />
              Home
            </MuiLink>
            <MuiLink
              component={Link}
              href="/services"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Services
            </MuiLink>
            <Typography color="text.primary">{service.name}</Typography>
          </Breadcrumbs>

          <Button
            component={Link}
            href="/services"
            startIcon={<ArrowBack />}
            sx={{ mb: 4 }}
          >
            Back to Services
          </Button>

          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                component={motion.div}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <Typography variant="h3" fontWeight={700} gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.fullDescription}
                </Typography>

                <Typography
                  variant="h5"
                  fontWeight={600}
                  gutterBottom
                  sx={{ mt: 4 }}
                >
                  Types We Service
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ gap: 1, mb: 4, flexWrap: "wrap" }}
                >
                  {service.types.map((type) => (
                    <Chip
                      key={type}
                      label={type}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Stack>

                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Our Process
                </Typography>
                <List>
                  {service.process.map((step, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle color="success" />
                      </ListItemIcon>
                      <ListItemText primary={step} />
                    </ListItem>
                  ))}
                </List>

                <Typography
                  variant="h5"
                  fontWeight={600}
                  gutterBottom
                  sx={{ mt: 2 }}
                >
                  Benefits
                </Typography>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {service.benefits.map((benefit) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={benefit}>
                      <Paper
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <CheckCircle sx={{ color: "#10B981" }} />
                        <Typography>{benefit}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ position: "sticky", top: 100 }}>
                <CardContent>
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    Get a Quote
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Stack spacing={1.5}>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      ✓ Free consultation & quote
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      ✓ Certified expert technicians
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      ✓ Quick response guaranteed
                    </Typography>
                  </Stack>
                  <Button
                    fullWidth
                    variant="contained"
                    href="/quote"
                    sx={{ mt: 3 }}
                  >
                    Request Quote
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    href="/contact"
                    sx={{ mt: 2 }}
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default ServiceDetailsPage;
