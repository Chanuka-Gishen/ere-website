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
  Breadcrumbs,
  Link as MuiLink,
  Paper,
} from "@mui/material";
import {
  Home,
  NavigateNext,
  Work,
  TrendingUp,
  People,
  LocationOn,
  Email,
  WhatsApp,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/cta-section";

// Benefits data
const benefits = [
  {
    title: "Competitive Salary",
    description: "Attractive compensation packages",
    icon: <Work />,
    color: "#1976D2",
  },
  {
    title: "Career Growth",
    description: "Professional development opportunities",
    icon: <TrendingUp />,
    color: "#10B981",
  },
  {
    title: "Great Team Culture",
    description: "Supportive & collaborative environment",
    icon: <People />,
    color: "#8B5CF6",
  },
];

// Values data
const values = [
  "Customer First",
  "Quality Service",
  "Integrity",
  "Teamwork",
  "Innovation",
  "Safety First",
];

// JSON-LD Structured Data
const careersJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Careers at EREngineers",
  description: "Join our team of professional AC service technicians",
  mainEntity: {
    "@type": "Organization",
    name: "EREngineers",
    hiring: {
      "@type": "QuantitativeValue",
      value: "0",
    },
  },
};

const CareersPage = () => {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersJsonLd) }}
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
                sx={{ color: "#94A3B8", textDecoration: "none" }}
              >
                <Home sx={{ fontSize: 16, mr: 0.5 }} />
                Home
              </MuiLink>
              <Typography color="#60A5FA">Careers</Typography>
            </Breadcrumbs>

            <Grid container spacing={4} sx={{ alignItems: "center" }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontWeight: 800,
                    mb: 2,
                  }}
                >
                  Join Our Team
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#94A3B8", mb: 3, lineHeight: 1.6 }}
                >
                  Be part of Sri Lanka's most trusted AC service provider. We're
                  always looking for talented individuals who share our passion
                  for quality service.
                </Typography>
                <Chip
                  icon={<LocationOn />}
                  label="Locations: Colombo, Gampaha, Kalutara"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 200, md: 280 },
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/careers-hero.jpg"
                    alt="Join Our Team"
                    fill
                    sizes="(max-width: 600px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    loading="eager"
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container sx={{ py: { xs: 6, md: 10 } }}>
          {/* No Openings Message */}
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: "center",
              bgcolor: "#F8FAFC",
              mb: 6,
              borderRadius: 4,
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "#E3F2FD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
              }}
            >
              <Work sx={{ fontSize: 40, color: "#1976D2" }} />
            </Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              No Current Openings
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 500, mx: "auto", mb: 3 }}
            >
              We don't have any open positions at the moment, but we're always
              interested in hearing from talented individuals.
            </Typography>
            <Button
              variant="contained"
              href="mailto:erengineersere@gmail.com?subject=CV Submission - Career Application"
              startIcon={<Email />}
              sx={{ bgcolor: "#1976D2" }}
            >
              Submit Your CV
            </Button>
          </Paper>

          {/* Why Join Us Section */}
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              fontWeight: 700,
              textAlign: "center",
              mb: 2,
            }}
          >
            Why Join EREngineers?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", maxWidth: 600, mx: "auto", mb: 6 }}
          >
            We offer a rewarding work environment where you can grow
            professionally
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {benefits.map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={benefit.title}>
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      bgcolor: `${benefit.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {benefit.icon}
                  </Box>
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

          {/* Our Values Section */}
          <Box
            sx={{
              bgcolor: "#F8FAFC",
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              mb: 6,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.8rem", md: "2rem" },
                fontWeight: 700,
                textAlign: "center",
                mb: 2,
              }}
            >
              Our Values
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: "center", maxWidth: 500, mx: "auto", mb: 4 }}
            >
              What we believe in and how we work
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
              }}
            >
              {values.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{
                    py: 2,
                    px: 1,
                    fontSize: "1rem",
                    bgcolor: "white",
                    "&:hover": { bgcolor: "#1976D2", color: "white" },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* How to Apply Section */}
          <Card>
            <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: "center" }}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Interested in Joining?
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Even when there are no open positions, we welcome your
                application
              </Typography>

              <Grid container spacing={3} sx={{ maxWidth: 600, mx: "auto" }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Email />}
                    href="mailto:careers@erengineers.com?subject=CV Submission - Career Application"
                    sx={{ py: 1.5 }}
                  >
                    Submit Your CV
                  </Button>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<WhatsApp />}
                    href="https://wa.me/94771234567"
                    sx={{ py: 1.5 }}
                  >
                    WhatsApp Us
                  </Button>
                </Grid>
              </Grid>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 3 }}
              >
                We'll keep your CV on file and contact you when relevant
                positions open
              </Typography>
            </CardContent>
          </Card>
        </Container>

        {/* CTA Section */}
        <CTASection />
      </Box>
    </>
  );
};

export default CareersPage;
