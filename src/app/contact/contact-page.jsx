"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  Chip,
  Breadcrumbs,
  Link as MuiLink,
  Alert,
  Snackbar,
  CircularProgress,
  Divider,
  Paper,
} from "@mui/material";
import {
  Home,
  NavigateNext,
  Phone,
  WhatsApp,
  Email,
  LocationOn,
  AccessTime,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { contactInfo } from "@/constants/common-constants";

// Validation schema
const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  subject: Yup.string()
    .required("Subject is required")
    .min(5, "Subject must be at least 5 characters"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

// Contact methods data
const contactMethods = [
  {
    icon: <Phone />,
    title: "Call Us",
    details: [contactInfo.phoneDisplay],
    action: `tel:${contactInfo.phone}`,
    color: "#1976D2",
    bgLight: "#E3F2FD",
  },
  {
    icon: <WhatsApp />,
    title: "WhatsApp",
    details: [contactInfo.phoneDisplay],
    action: `https://wa.me/${contactInfo.whatsapp}`,
    color: "#25D366",
    bgLight: "#E0F2F1",
  },
  {
    icon: <Email />,
    title: "Email Us",
    details: [contactInfo.email],
    action: `mailto:${contactInfo.email}`,
    color: "#FF9800",
    bgLight: "#FFF3E0",
  },
  {
    icon: <LocationOn />,
    title: "Visit Us",
    details: [contactInfo.address],
    action: "https://maps.google.com",
    color: "#8B5CF6",
    bgLight: "#EDE7F6",
  },
];

// Business hours
const businessHours = [
  { day: "Monday - Saturday", hours: "8:00 AM - 8:00 PM" },
  { day: "Sunday", hours: "9:00 AM - 12:00 PM" },
  { day: "Emergency Service", hours: "24/7 Available" },
];

// Social media links
const socialLinks = [
  {
    icon: <Facebook />,
    href: "https://facebook.com",
    color: "#1877F2",
    name: "Facebook",
  },
  {
    icon: <Twitter />,
    href: "https://twitter.com",
    color: "#1DA1F2",
    name: "Twitter",
  },
  {
    icon: <Instagram />,
    href: "https://instagram.com",
    color: "#E4405F",
    name: "Instagram",
  },
  {
    icon: <LinkedIn />,
    href: "https://linkedin.com",
    color: "#0077B5",
    name: "LinkedIn",
  },
];

// JSON-LD Structured Data for Contact Page
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact EREngineers",
  description: "Contact page for EREngineers AC services",
  url: "https://erengineers.com/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "EREngineers",
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
    openingHours: ["Mo-Sa 08:00-20:00", "Su 09:00-12:00"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+94771234567",
        contactType: "customer service",
        availableLanguage: ["English", "Sinhala", "Tamil"],
        contactOption: "TollFree",
        areaServed: "LK",
      },
      {
        "@type": "ContactPoint",
        telephone: "+94771234567",
        contactType: "emergency",
        contactOption: "EmergencyService",
        availableLanguage: ["English", "Sinhala", "Tamil"],
      },
      {
        "@type": "ContactPoint",
        contactType: "whatsapp",
        telephone: "+94771234567",
        url: "https://wa.me/94771234567",
      },
    ],
    sameAs: [
      "https://facebook.com/erengineers",
      "https://twitter.com/erengineers",
      "https://instagram.com/erengineers",
      "https://linkedin.com/company/erengineers",
    ],
  },
};

const ContactPage = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);

      // Simulate API call - Replace with your actual form submission endpoint
      try {
        // Example: Send to your API route
        // const response = await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(values),
        // });

        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setSnackbar({
          open: true,
          message: "Thank you! We'll get back to you within 24 hours.",
          severity: "success",
        });
        resetForm();
      } catch (error) {
        setSnackbar({
          open: true,
          message: "Something went wrong. Please try again later.",
          severity: "error",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
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
              <Typography color="#60A5FA">Contact Us</Typography>
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
                  Get In Touch
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#94A3B8", mb: 3, lineHeight: 1.6 }}
                >
                  Have a question? Need support? We're here to help. Reach out
                  to us through any of the channels below.
                </Typography>
                <Chip
                  icon={<AccessTime />}
                  label="Response within 24 hours"
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
                  <Box
                    component="img"
                    src="/images/contact-us-hero.webp"
                    alt="Contact Us"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Card sx={{ p: { xs: 2, md: 3 } }}>
                <CardContent>
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    Send Us a Message
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                  >
                    Fill out the form below and we'll get back to you as soon as
                    possible
                  </Typography>

                  <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="fullName"
                          value={formik.values.fullName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.fullName &&
                            Boolean(formik.errors.fullName)
                          }
                          helperText={
                            formik.touched.fullName && formik.errors.fullName
                          }
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.phone && Boolean(formik.errors.phone)
                          }
                          helperText={
                            formik.touched.phone && formik.errors.phone
                          }
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formik.values.subject}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.subject &&
                            Boolean(formik.errors.subject)
                          }
                          helperText={
                            formik.touched.subject && formik.errors.subject
                          }
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={5}
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.message &&
                            Boolean(formik.errors.message)
                          }
                          helperText={
                            formik.touched.message && formik.errors.message
                          }
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          size="large"
                          disabled={isSubmitting}
                          startIcon={
                            isSubmitting ? (
                              <CircularProgress size={20} />
                            ) : (
                              <Send />
                            )
                          }
                          sx={{
                            bgcolor: "#1976D2",
                            py: 1.5,
                            "&:hover": { bgcolor: "#1565C0" },
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>

            {/* Contact Information */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                {/* Contact Methods */}
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      Contact Information
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                    <Stack spacing={2}>
                      {contactMethods.map((method) => (
                        <Button
                          key={method.title}
                          component="a"
                          href={method.action}
                          target={
                            method.title === "Visit Us" ? "_blank" : "_self"
                          }
                          sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            p: 2,
                            borderRadius: 2,
                            bgcolor: method.bgLight,
                            "&:hover": {
                              bgcolor: method.bgLight,
                              opacity: 0.8,
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: "50%",
                              bgcolor: `${method.color}15`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: 2,
                              color: method.color,
                            }}
                          >
                            {method.icon}
                          </Box>
                          <Box sx={{ textAlign: "left" }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                              {method.title}
                            </Typography>
                            {method.details.map((detail) => (
                              <Typography
                                key={detail}
                                variant="body2"
                                color="text.secondary"
                              >
                                {detail}
                              </Typography>
                            ))}
                          </Box>
                        </Button>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      Business Hours
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Stack spacing={1.5}>
                      {businessHours.map((item) => (
                        <Box
                          key={item.day}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="body2" fontWeight={500}>
                            {item.day}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.hours}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      Follow Us
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ justifyContent: "center" }}
                    >
                      {socialLinks.map((social) => (
                        <Button
                          key={social.name}
                          component="a"
                          href={social.href}
                          target="_blank"
                          sx={{
                            minWidth: "auto",
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            bgcolor: `${social.color}15`,
                            color: social.color,
                            "&:hover": {
                              bgcolor: social.color,
                              color: "white",
                            },
                          }}
                        >
                          {social.icon}
                        </Button>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>

                {/* Need a Quote? */}
                <Paper
                  sx={{
                    p: 3,
                    textAlign: "center",
                    bgcolor: "#F8FAFC",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Need a Price Estimate?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Get a free quote for AC installation, repair, or rental
                  </Typography>
                  <Button
                    component={Link}
                    href="/quote"
                    variant="contained"
                    sx={{ bgcolor: "#FF9800" }}
                  >
                    Get a Quote
                  </Button>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          icon={<CheckCircle fontSize="inherit" />}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactPage;
