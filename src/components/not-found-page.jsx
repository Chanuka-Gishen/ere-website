"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import {
  Home,
  Phone,
  WhatsApp,
  Search,
  AcUnit,
  Build,
  Handyman,
  HelpOutlined,
} from "@mui/icons-material";
import Link from "next/link";

// Quick links for navigation
const quickLinks = [
  {
    title: "AC Installation",
    href: "/services/installation",
    icon: <AcUnit />,
  },
  { title: "AC Repair", href: "/services/repair", icon: <Build /> },
  {
    title: "AC Maintenance",
    href: "/services/maintenance",
    icon: <Handyman />,
  },
  { title: "Get a Quote", href: "/quote", icon: <HelpOutlined /> },
];

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 4, md: 10 },
        px: { xs: 2, sm: 3, md: 0 },
        background: "linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)",
      }}
    >
      <Container maxWidth="lg" disableGutters={{ xs: true, md: false }}>
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{ alignItems: "center" }}
        >
          {/* Left Column - Error Message */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              {/* Error Code */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #1976D2, #0D47A1)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  mb: 2,
                }}
              >
                404
              </Typography>

              {/* Error Message */}
              <Chip
                label="Page Not Found"
                sx={{
                  bgcolor: "#FF980015",
                  color: "#FF9800",
                  fontWeight: 600,
                  mb: 2,
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem" },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Oops! Page Not Found
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 4,
                  lineHeight: 1.6,
                  px: { xs: 2, sm: 0 },
                }}
              >
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable. Please check the
                URL or navigate back to our home page.
              </Typography>

              {/* Action Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  justifyContent: { xs: "center", md: "flex-start" },
                  alignItems: "center",
                }}
              >
                <Button
                  component={Link}
                  href="/"
                  variant="contained"
                  size="large"
                  startIcon={<Home />}
                  sx={{
                    bgcolor: "#1976D2",
                    px: 4,
                    py: 1.5,
                    width: { xs: "100%", sm: "auto" },
                    "&:hover": { bgcolor: "#1565C0" },
                  }}
                >
                  Back to Home
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  size="large"
                  startIcon={<Phone />}
                  sx={{
                    borderColor: "#1976D2",
                    color: "#1976D2",
                    px: 4,
                    py: 1.5,
                    width: { xs: "100%", sm: "auto" },
                    "&:hover": {
                      borderColor: "#1565C0",
                      bgcolor: "rgba(25, 118, 210, 0.04)",
                    },
                  }}
                >
                  Contact Support
                </Button>
              </Stack>

              {/* Quick Contact */}
              <Paper
                sx={{
                  p: 2,
                  mt: 4,
                  bgcolor: "white",
                  borderRadius: 2,
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="body2" color="text.secondary">
                      Need immediate help?
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Button
                      href="tel:+94771234567"
                      startIcon={<Phone />}
                      size="small"
                      sx={{ color: "#1976D2" }}
                    >
                      Call Us
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Button
                      href="https://wa.me/94771234567"
                      startIcon={<WhatsApp />}
                      size="small"
                      sx={{ color: "#25D366" }}
                    >
                      WhatsApp
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>

          {/* Right Column - Illustration */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: { xs: "auto", md: 350 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: { xs: 2, md: 0 },
              }}
            >
              {/* Illustration Box */}
              <Box
                sx={{
                  textAlign: "center",
                  p: { xs: 2, sm: 3, md: 4 },
                  bgcolor: "white",
                  borderRadius: 4,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 80, sm: 100, md: 120 },
                    height: { xs: 80, sm: 100, md: 120 },
                    borderRadius: "50%",
                    bgcolor: "#E3F2FD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <Search
                    sx={{
                      fontSize: { xs: 40, sm: 50, md: 60 },
                      color: "#1976D2",
                    }}
                  />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Can't find what you're looking for?
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Try one of these popular pages:
                </Typography>
                <Stack
                  spacing={1}
                  sx={{
                    width: "100%",
                  }}
                >
                  {quickLinks.map((link) => (
                    <Button
                      key={link.title}
                      component={Link}
                      href={link.href}
                      startIcon={link.icon}
                      fullWidth
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "none",
                        color: "text.primary",
                        "&:hover": { bgcolor: "#F8FAFC" },
                      }}
                    >
                      {link.title}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Helpful Links Section */}
        <Box sx={{ mt: { xs: 4, md: 8 }, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Popular pages you might be looking for:
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            sx={{
              gap: 1,
              justifyContent: "center",
              flexWrap: "wrap",
              px: { xs: 2, sm: 0 },
            }}
          >
            <Button component={Link} href="/services" size="small">
              Our Services
            </Button>
            <Button component={Link} href="/rental" size="small">
              AC Rental
            </Button>
            <Button component={Link} href="/about" size="small">
              About Us
            </Button>
            <Button component={Link} href="/blog" size="small">
              Blog
            </Button>
            <Button component={Link} href="/contact" size="small">
              Contact Us
            </Button>
            <Button component={Link} href="/quote" size="small">
              Get a Quote
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
