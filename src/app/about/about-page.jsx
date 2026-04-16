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
  Paper,
  Divider,
  Breadcrumbs,
  Link as MuiLink,
  Rating,
} from "@mui/material";
import {
  Home,
  NavigateNext,
  Verified,
  Security,
  AttachMoney,
  ThumbUpAlt,
  Speed,
  People,
  Handshake,
  Shield,
  Build,
  CheckCircle,
  Star,
  Phone,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

// Why Choose Us data with Singer Authorized Dealer
const whyChooseUs = [
  {
    title: "Singer Authorized Dealer",
    description:
      "Official authorized dealer for Singer AC products and services",
    icon: <Verified />,
    color: "#E31E24",
    bgLight: "#FCE4E4",
  },
  {
    title: "Certified Technicians",
    description: "Fully trained and certified professionals",
    icon: <Security />,
    color: "#1976D2",
    bgLight: "#E3F2FD",
  },
  {
    title: "Best Price Assurance",
    description: "Competitive rates with no hidden charges",
    icon: <AttachMoney />,
    color: "#10B981",
    bgLight: "#E0F2F1",
  },
  {
    title: "Quality Guarantee",
    description: "100% satisfaction on all services",
    icon: <ThumbUpAlt />,
    color: "#FF9800",
    bgLight: "#FFF3E0",
  },
  {
    title: "Fast Response",
    description: "Quick service within scheduled time",
    icon: <Speed />,
    color: "#8B5CF6",
    bgLight: "#EDE7F6",
  },
  {
    title: "Experienced Team",
    description: "10+ years of industry expertise",
    icon: <People />,
    color: "#EC4899",
    bgLight: "#FCE4EC",
  },
];

// Values data
const values = [
  {
    title: "Integrity",
    description: "We operate with honesty and transparency in all our dealings",
    icon: <Handshake />,
    color: "#1976D2",
  },
  {
    title: "Quality",
    description: "We never compromise on service quality and use genuine parts",
    icon: <Build />,
    color: "#FF9800",
  },
  {
    title: "Safety",
    description: "We follow strict safety protocols for every job",
    icon: <Shield />,
    color: "#10B981",
  },
  {
    title: "Customer First",
    description: "Your satisfaction is our top priority",
    icon: <Star />,
    color: "#EC4899",
  },
];

// Process steps
const processSteps = [
  {
    step: "01",
    title: "Contact Us",
    description: "Call us or book online for service",
    icon: <Phone />,
  },
  {
    step: "02",
    title: "Site Visit",
    description: "Technician inspects and provides quote",
    icon: <People />,
  },
  {
    step: "03",
    title: "Service Delivery",
    description: "Professional service at your location",
    icon: <Build />,
  },
  {
    step: "04",
    title: "Quality Check",
    description: "Thorough testing and handover",
    icon: <CheckCircle />,
  },
];

// Partners data
const partners = [
  {
    name: "Singer Sri Lanka",
    logo: "/images/partners/singer-logo.png",
    description: "Authorized Dealer",
    color: "#E31E24",
  },
  {
    name: "Singhagiri",
    logo: "/images/partners/singhagiri-logo.png",
    description: "Premium Partner",
    color: "#A50034",
  },
  {
    name: "Browns Group Pvt Ltd",
    logo: "/images/partners/browns-logo.jpg",
    description: "Authorized Service Provider",
    color: "#0033A0",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Rajesh Perera",
    location: "Colombo",
    rating: 5,
    text: "Very professional team. They installed my Singer AC perfectly. Highly recommended!",
    date: "March 2025",
  },
  {
    name: "Priyanka Silva",
    location: "Gampaha",
    rating: 5,
    text: "Best AC service provider in Sri Lanka. Their technicians are knowledgeable and courteous.",
    date: "February 2025",
  },
  {
    name: "Nuwan Bandara",
    location: "Kalutara",
    rating: 4.5,
    text: "Excellent after-sales service. They truly care about customer satisfaction.",
    date: "January 2025",
  },
];

// JSON-LD Structured Data
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About EREngineers",
  description:
    "Professional AC service provider and Singer authorized dealer in Sri Lanka",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "EREngineers",
    description:
      "Singer authorized dealer for AC installation, repair, and maintenance services",
    foundingDate: "2015",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "25+",
    },
    knowsLanguage: ["English", "Sinhala", "Tamil"],
    areaServed: {
      "@type": "City",
      name: ["Colombo", "Gampaha", "Kalutara"],
    },
  },
};

const AboutPage = () => {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
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
              <Typography color="#60A5FA">About Us</Typography>
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
                  About EREngineers
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#94A3B8", mb: 3, lineHeight: 1.6 }}
                >
                  Your trusted partner for professional AC services in Sri Lanka
                </Typography>
                <Chip
                  label="Singer Authorized Dealer"
                  sx={{
                    bgcolor: "#E31E24",
                    color: "white",
                    fontWeight: 600,
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 250, md: 350 },
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                  }}
                >
                  <Image
                    src="/images/about-hero.jpg"
                    alt="EREngineers Team"
                    fill
                    sizes="(max-width: 600px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Our Story Section */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 300, md: 400 },
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/our-story.jpg"
                  alt="Our Story"
                  fill
                  sizes="(max-width: 600px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Chip
                label="Our Story"
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
                A Legacy of Cooling Excellence
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Founded in 2015, EREngineers has grown to become one of Sri
                Lanka's most trusted AC service providers. Our journey began
                with a simple mission: to provide reliable, high-quality air
                conditioning services at fair prices.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                As an authorized dealer for Singer Sri Lanka, we bring you
                genuine products and expert service backed by years of
                experience. Our team of certified technicians has successfully
                completed over 10,000 installations and repairs across the
                country.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Today, we're proud to serve thousands of satisfied customers,
                from homes to businesses, ensuring comfort and peace of mind
                with every service call.
              </Typography>

              <Box sx={{ display: "flex", gap: 3, mt: 4 }}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ color: "#1976D2", fontWeight: 700 }}
                  >
                    10+
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Years Experience
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ color: "#1976D2", fontWeight: 700 }}
                  >
                    10K+
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Happy Customers
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ color: "#1976D2", fontWeight: 700 }}
                  >
                    25+
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Expert Technicians
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Why Choose Us Section */}
        <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 10 } }}>
          <Container>
            <Box sx={{ textAlign: "center", mb: 6 }}>
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
                What Makes Us Different
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
              >
                We combine expertise, quality, and customer care to deliver the
                best service experience
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {whyChooseUs.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
                  <Paper
                    sx={{
                      p: 3,
                      height: "100%",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        bgcolor: item.bgLight,
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
                      {item.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Our Values Section */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="Our Values"
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
              Core Values That Guide Us
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={value.title}>
                <Box sx={{ textAlign: "center" }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: `${value.color}15`,
                      color: value.color,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {value.icon}
                  </Avatar>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Our Process Section */}
        <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 10 } }}>
          <Container>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Chip
                label="How We Work"
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
                Our Simple Process
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {processSteps.map((step, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.step}>
                  <Box sx={{ textAlign: "center" }}>
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        bgcolor: "#E3F2FD",
                        color: "#1976D2",
                        mx: "auto",
                        mb: 2,
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {step.step}
                    </Avatar>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Service Guarantee Section */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: "center",
              background: "linear-gradient(135deg, #1976D2 0%, #0D47A1 100%)",
              color: "white",
              borderRadius: 4,
            }}
          >
            <Shield sx={{ fontSize: 60, mb: 2, color: "#FF9800" }} />
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Our Service Guarantee
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                opacity: 0.9,
                maxWidth: 600,
                mx: "auto",
                color: "white",
              }}
            >
              We stand behind every service we provide with our quality
              commitment
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h6" fontWeight={600}>
                  Warranty Coverage
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.8, color: "white" }}
                >
                  3 months on repairs
                  <br />1 year on installations
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h6" fontWeight={600}>
                  Quality Commitment
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.8, color: "white" }}
                >
                  Genuine spare parts
                  <br />
                  Certified technicians
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h6" fontWeight={600}>
                  Customer Promise
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.8, color: "white" }}
                >
                  On-time service
                  <br />
                  Satisfaction guaranteed
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        {/* Our Partners Section */}
        <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 10 } }}>
          <Container>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Chip
                label="Our Partners"
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
                Trusted by Leading Brands
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
              >
                We're proud to be associated with industry leaders
              </Typography>
            </Box>

            <Grid
              container
              spacing={4}
              sx={{ justifyContent: "center", alignItems: "stretch" }}
            >
              {partners.map((partner) => (
                <Grid
                  size={{ xs: 6, sm: 3, md: 2.4 }}
                  key={partner.name}
                  sx={{ display: "flex" }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 80,
                        mb: 1,
                      }}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        sizes="(max-width: 600px) 50vw, 150px"
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    <Typography variant="body2" fontWeight={600}>
                      {partner.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {partner.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Singer Authorized Dealer Highlight */}
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Chip
                icon={<Verified />}
                label="Official Singer Authorized Dealer"
                sx={{
                  bgcolor: "#E31E24",
                  color: "white",
                  fontWeight: 600,
                  p: 2,
                  "& .MuiChip-icon": { color: "white" },
                }}
              />
            </Box>
          </Container>
        </Box>

        {/* Testimonials Section */}
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="Testimonials"
              sx={{ bgcolor: "#E0F2F1", color: "#10B981", mb: 2 }}
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
          </Box>

          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    <Rating
                      value={testimonial.rating}
                      precision={0.5}
                      readOnly
                      sx={{ mb: 2 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ mb: 2, fontStyle: "italic", flexGrow: 1 }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle2" fontWeight={600}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.location} • {testimonial.date}
                    </Typography>
                  </CardContent>
                </Card>
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
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  fontWeight: 700,
                  mb: 2,
                  color: "white",
                }}
              >
                Ready to Experience Quality Service?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
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
                  href="/contact"
                  sx={{
                    bgcolor: "white",
                    color: "#1976D2",
                    "&:hover": { bgcolor: "#E3F2FD" },
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Contact Us
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="/quote"
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
                  Get Free Quote
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
