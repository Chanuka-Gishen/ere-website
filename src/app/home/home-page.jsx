"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Rating,
  Badge,
  Avatar,
} from "@mui/material";
import {
  Phone,
  WhatsApp,
  CalendarToday,
  AcUnit,
  Build,
  Handyman,
  DirectionsCar,
  Warehouse,
  CheckCircle,
  Speed,
  Security,
  AttachMoney,
  ArrowForward,
  LocationOn,
  Emergency,
  Celebration,
  Factory,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  zoomIn,
} from "../../utils/animations";

// Service data
const services = [
  {
    id: "installation",
    title: "AC Installation",
    icon: <AcUnit sx={{ fontSize: 40 }} />,
    description:
      "Professional installation of split, cassette, ceiling & portable ACs",
    color: "#1976D2",
    link: "/services/installation",
  },
  {
    id: "repair",
    title: "AC Repair",
    icon: <Build sx={{ fontSize: 40 }} />,
    description: "Fast diagnosis and repair for all AC brands and models",
    color: "#FF9800",
    link: "/services/repair",
  },
  {
    id: "maintenance",
    title: "AC Maintenance",
    icon: <Handyman sx={{ fontSize: 40 }} />,
    description: "Regular maintenance for optimal performance & longevity",
    color: "#10B981",
    link: "/services/maintenance",
  },
  {
    id: "relocation",
    title: "AC Relocation",
    icon: <DirectionsCar sx={{ fontSize: 40 }} />,
    description: "Safe dismantling, transport & reinstallation",
    color: "#EC4899",
    link: "/services/relocation",
  },
  {
    id: "rental",
    title: "AC Rental",
    icon: <Warehouse sx={{ fontSize: 40 }} />,
    description: "Flexible rental for events, offices & temporary cooling",
    color: "#06B6D4",
    link: "/rental",
  },
];

// Why choose us data
const whyChooseUs = [
  {
    title: "Certified Technicians",
    description: "All our technicians are certified and experienced",
    icon: <Security sx={{ fontSize: 32 }} />,
    color: "#1976D2",
  },
  {
    title: "Same-Day Service",
    description: "Quick response and same-day service available",
    icon: <Speed sx={{ fontSize: 32 }} />,
    color: "#FF9800",
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates with no hidden charges",
    icon: <AttachMoney sx={{ fontSize: 32 }} />,
    color: "#10B981",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Rajesh Perera",
    location: "Colombo",
    rating: 5,
    text: "Excellent service! They installed my AC within 2 hours of booking. Very professional team.",
    image: "/images/testimonials/user1.jpg",
  },
  {
    name: "Priyanka Silva",
    location: "Gampaha",
    rating: 5,
    text: "Quick repair service. My AC was not cooling, they fixed it in no time. Highly recommended!",
    image: "/images/testimonials/user2.jpg",
  },
  {
    name: "Nuwan Bandara",
    location: "Kalutara",
    rating: 4,
    text: "Rented AC for our office event. Great service, on-time delivery and pickup.",
    image: "/images/testimonials/user3.jpg",
  },
];

// Rental options
const rentalOptions = [
  {
    type: "Portable AC",
    price: "1,500",
    unit: "day",
    features: [
      "Ideal for small rooms",
      "Easy to move",
      "No installation needed",
    ],
    icon: <AcUnit />,
    color: "#06B6D4",
  },
  {
    type: "Outdoor Event AC",
    price: "2,500",
    unit: "day",
    features: [
      "For weddings & parties",
      "Cools large areas",
      "Professional setup",
    ],
    icon: <Celebration />,
    color: "#FF9800",
  },
  {
    type: "Industrial AC",
    price: "5,000",
    unit: "day",
    features: ["For warehouses", "Heavy-duty cooling", "24/7 operation"],
    icon: <Factory />,
    color: "#10B981",
  },
];

// Service areas
const serviceAreas = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Galle",
  "Negombo",
];

const HomePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Box>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>Loading...</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "90vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        }}
      >
        {/* Animated Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: "url('/images/ac-pattern.svg')",
            backgroundRepeat: "repeat",
            animation: "slide 20s linear infinite",
            "@keyframes slide": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={motion.div}
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
              >
                <Chip
                  label="Your Comfort, Our Priority"
                  sx={{
                    bgcolor: "#FF9800",
                    color: "white",
                    mb: 2,
                    fontWeight: 600,
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                    fontWeight: 800,
                    color: "white",
                    mb: 2,
                  }}
                >
                  Fast & Reliable
                  <br />
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #60A5FA, #A78BFA)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    AC Services
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#94A3B8", mb: 4, lineHeight: 1.6 }}
                >
                  Professional installation, repair, maintenance & rental
                  services. Free quotes • Certified technicians • 100%
                  satisfaction
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Phone />}
                    href="tel:+94771234567"
                    sx={{
                      bgcolor: "#1976D2",
                      px: 4,
                      py: 1.5,
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    Call Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<WhatsApp />}
                    href="https://wa.me/94771234567"
                    sx={{
                      borderColor: "#25D366",
                      color: "#25D366",
                      "&:hover": {
                        borderColor: "#128C7E",
                        bgcolor: "rgba(37, 211, 102, 0.1)",
                      },
                    }}
                  >
                    WhatsApp
                  </Button>
                </Stack>

                {/* Trust Badges */}
                <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ color: "#60A5FA", fontWeight: 700 }}
                    >
                      5000+
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                      Happy Clients
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ color: "#60A5FA", fontWeight: 700 }}
                    >
                      10+
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                      Years Experience
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ color: "#60A5FA", fontWeight: 700 }}
                    >
                      100%
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                      Satisfaction
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={motion.div}
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 500,
                    height: { xs: 300, md: 400 },
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                  }}
                >
                  <Image
                    src="/images/hero-ac.jpg"
                    alt="AC Service Hero"
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 500px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </Box>
                {/* Floating badge */}
                <Box
                  component={motion.div}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    bgcolor: "white",
                    borderRadius: 3,
                    p: 2,
                    boxShadow: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Emergency sx={{ color: "#FF9800" }} />
                  <Typography variant="body2" fontWeight={600}>
                    Emergency Response
                    <br />
                    <Typography
                      component="span"
                      variant="caption"
                      color="primary"
                    >
                      Within 1 hour
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Overview Section */}
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
            label="Our Services"
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
            Comprehensive AC Solutions
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
          >
            We provide all types of air conditioning services for residential
            and commercial needs
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
              <Box
                component={motion.div}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                sx={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    width: "100%",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        bgcolor: `${service.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        color: service.color,
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom fontWeight={600}>
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {service.description}
                    </Typography>
                    <Button
                      component={Link}
                      href={service.link}
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
      </Container>

      {/* Why Choose Us Section */}
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
                  Why Customers Trust Us
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4 }}
                >
                  We pride ourselves on delivering exceptional service quality
                  and customer satisfaction
                </Typography>

                <Grid container spacing={3}>
                  {whyChooseUs.map((item, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
                      <Box
                        component={motion.div}
                        variants={fadeInUp}
                        custom={index}
                        sx={{ display: "flex", gap: 2 }}
                      >
                        <Box sx={{ color: item.color }}>{item.icon}</Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            gutterBottom
                          >
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
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
                }}
              >
                <Image
                  src="/images/technician.jpg"
                  alt="Certified Technician"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    bgcolor: "white",
                    borderRadius: 2,
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CheckCircle sx={{ color: "#10B981" }} />
                  <Typography variant="body2" fontWeight={600}>
                    100% Certified & Insured
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Rental Highlight Section */}
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
            label="AC Rental"
            sx={{ bgcolor: "#E0F2FE", color: "#06B6D4", mb: 2 }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Flexible Rental Solutions
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
          >
            Perfect for events, offices, and temporary cooling needs
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {rentalOptions.map((option, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={option.type}>
              <Box
                component={motion.div}
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    position: "relative",
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
                      }}
                    />
                  )}
                  <CardContent sx={{ p: 3 }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: `${option.color}15`,
                        color: option.color,
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      {option.icon}
                    </Avatar>
                    <Typography variant="h5" gutterBottom fontWeight={600}>
                      {option.type}
                    </Typography>
                    <Stack spacing={1} sx={{ mb: 3 }}>
                      {option.features.map((feature) => (
                        <Box
                          key={feature}
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <CheckCircle
                            sx={{ fontSize: 16, color: "#10B981" }}
                          />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Button
                      variant="outlined"
                      href="/rental"
                      fullWidth
                      sx={{ borderRadius: 40 }}
                    >
                      Rent Now
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box
        sx={{
          bgcolor: "linear-gradient(135deg, #1976D2 0%, #0D47A1 100%)",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container>
          <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ textAlign: "center", mb: 6 }}
          >
            <Chip label="Simple Process" sx={{ mb: 2 }} />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              How It Works
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto" }}>
              Three simple steps to get your AC service
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Book Service",
                desc: "Call us or book online",
                icon: <Phone />,
                color: "#FF9800",
              },
              {
                step: "02",
                title: "Technician Visit",
                desc: "We arrive at your location",
                icon: <Handyman />,
                color: "#10B981",
              },
              {
                step: "03",
                title: "Job Completion",
                desc: "Quality service delivered",
                icon: <CheckCircle />,
                color: "#60A5FA",
              },
            ].map((step, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={step.step}>
                <Box
                  component={motion.div}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  sx={{ textAlign: "center" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      mb: 2,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: `${step.color}20`,
                        color: step.color,
                      }}
                    >
                      {step.icon}
                    </Avatar>
                    <Badge
                      badgeContent={step.step}
                      color="primary"
                      sx={{
                        position: "absolute",
                        bottom: -5,
                        right: -5,
                        "& .MuiBadge-badge": {
                          bgcolor: step.color,
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "0.75rem",
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body2">{step.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
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
            label="Testimonials"
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
            What Our Customers Say
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
          >
            Don't just take our word for it - hear from our satisfied customers
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={testimonial.name}>
              <Box
                component={motion.div}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                sx={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                  }}
                >
                  <CardContent>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{ mb: 2 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ mb: 2, fontStyle: "italic" }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          bgcolor: "#E0E0E0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h6">👤</Typography>
                      </Box>

                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Service Areas Section */}
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
            <Chip
              label="Service Areas"
              sx={{ bgcolor: "#E8EAF6", color: "#3F51B5", mb: 2 }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              We Cover All Major Areas
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
            >
              Providing quality AC services across Sri Lanka
            </Typography>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {serviceAreas.map((area, index) => (
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
                    icon={<LocationOn />}
                    label={area}
                    sx={{
                      py: 2,
                      px: 1,
                      fontSize: "1rem",
                      bgcolor: "white",
                      "&:hover": {
                        bgcolor: "#1976D2",
                        color: "white",
                        cursor: "pointer",
                        "& .MuiChip-icon": {
                          color: "white",
                        },
                      },
                    }}
                    component={Link}
                    href={`/service-areas/${area.toLowerCase()}`}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section */}
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
                startIcon={<Phone />}
                href="tel:+94771234567"
                sx={{
                  bgcolor: "white",
                  color: "#1976D2",
                  "&:hover": { bgcolor: "#E3F2FD" },
                  px: 4,
                  py: 1.5,
                }}
              >
                Call Now: 077 123 4567
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<WhatsApp />}
                href="https://wa.me/94771234567"
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
                WhatsApp Us
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
