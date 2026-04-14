"use client";

import { useState, useEffect } from "react";
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
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Breadcrumbs,
  Link as MuiLink,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  CheckCircle,
  ArrowForward,
  Schedule,
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

export default function ServicesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
      <Box
        sx={{
          background: "linear-gradient(135deg, #1976D2 0%, #0D47A1 100%)",
          py: { xs: 6, md: 8 },
          color: "white",
        }}
      >
        <Container>
          <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ textAlign: "center" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 2,
                color: "white",
              }}
            >
              Need AC Service Today?
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, opacity: 0.9, color: "white" }}
            >
              Get a free quote from our experts
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button
                variant="contained"
                size="large"
                href="/quote"
                sx={{
                  bgcolor: "white",
                  color: "#1976D2",
                  "&:hover": { bgcolor: "#E3F2FD" },
                  px: 4,
                  py: 1.5,
                }}
              >
                Request a Quote
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/contact"
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
