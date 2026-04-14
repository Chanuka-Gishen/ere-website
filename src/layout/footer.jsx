"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  WhatsApp,
  AcUnit,
  ChevronRight,
} from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  contactInfo,
  serviceAreas,
  services,
} from "../constants/common-constants";

const footerLinks = {
  services: services,
  rental: [
    { name: "Portable AC", href: "/rental/portable" },
    { name: "Outdoor Event AC", href: "/rental/outdoor-event" },
    { name: "Short-Term Rental", href: "/rental/short-term" },
    { name: "Long-Term Rental", href: "/rental/long-term" },
    { name: "Industrial Cooling", href: "/rental/industrial" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

const socialIcons = [
  {
    icon: Facebook,
    href: "https://facebook.com",
    color: "#1877F2",
    name: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    color: "#1DA1F2",
    name: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    color: "#E4405F",
    name: "Instagram",
  },
  {
    icon: LinkedIn,
    href: "https://linkedin.com",
    color: "#0077B5",
    name: "LinkedIn",
  },
  {
    icon: WhatsApp,
    href: `https://wa.me/${contactInfo.whatsapp}`,
    color: "#25D366",
    name: "WhatsApp",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0F172A",
        color: "#94A3B8",
        mt: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background:
            "linear-gradient(90deg, #1976D2, #FF9800, #10B981, #1976D2)",
          backgroundSize: "300% 100%",
          animation: "gradient 8s ease infinite",
          "@keyframes gradient": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
        <Grid container spacing={4}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{ mb: 2, alignItems: "center" }}
              >
                <AcUnit sx={{ fontSize: 36, color: "#1976D2" }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #60A5FA, #A78BFA)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  EREngineers
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
                Your trusted partner for professional AC installation, repair,
                maintenance, and rental services. We provide service with
                certified technicians.
              </Typography>

              {/* Trust Badges */}
              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#1976D2", fontWeight: 700 }}
                  >
                    5000+
                  </Typography>
                  <Typography variant="caption">Happy Clients</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#1976D2", fontWeight: 700 }}
                  >
                    10+
                  </Typography>
                  <Typography variant="caption">Years Experience</Typography>
                </Box>
              </Stack>

              {/* Social Icons */}
              <Stack direction="row" spacing={1}>
                {socialIcons.map((social, index) => (
                  <Box
                    key={social.name}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                  >
                    <IconButton
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.05)",
                        color: social.color,
                        "&:hover": {
                          bgcolor: social.color,
                          color: "white",
                          transform: "translateY(-3px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <social.icon />
                    </IconButton>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Services Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  mb: 2,
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 2,
                    bgcolor: "#1976D2",
                    borderRadius: 1,
                  },
                }}
              >
                Services
              </Typography>
              <Stack spacing={1.5}>
                {footerLinks.services.map((link) => (
                  <MuiLink
                    key={link.id}
                    component={Link}
                    href={link.href}
                    sx={{
                      color: "#94A3B8",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#60A5FA",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    <ChevronRight sx={{ fontSize: 16 }} />
                    {link.name}
                  </MuiLink>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Rental Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  mb: 2,
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 2,
                    bgcolor: "#1976D2",
                    borderRadius: 1,
                  },
                }}
              >
                Rental
              </Typography>
              <Stack spacing={1.5}>
                {footerLinks.rental.map((link) => (
                  <MuiLink
                    key={link.name}
                    component={Link}
                    href={link.href}
                    sx={{
                      color: "#94A3B8",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#60A5FA",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    <ChevronRight sx={{ fontSize: 16 }} />
                    {link.name}
                  </MuiLink>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Company Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  mb: 2,
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 2,
                    bgcolor: "#1976D2",
                    borderRadius: 1,
                  },
                }}
              >
                Company
              </Typography>
              <Stack spacing={1.5}>
                {footerLinks.company.map((link) => (
                  <MuiLink
                    key={link.name}
                    component={Link}
                    href={link.href}
                    sx={{
                      color: "#94A3B8",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#60A5FA",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    <ChevronRight sx={{ fontSize: 16 }} />
                    {link.name}
                  </MuiLink>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Contact & Newsletter */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  mb: 2,
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 2,
                    bgcolor: "#1976D2",
                    borderRadius: 1,
                  },
                }}
              >
                Contact
              </Typography>
              <Stack spacing={2}>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "flex-start" }}
                >
                  <LocationOn
                    sx={{ fontSize: 18, color: "#1976D2", mt: 0.5 }}
                  />
                  <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                    Colombo 05, Sri Lanka
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center" }}
                >
                  <Phone sx={{ fontSize: 18, color: "#1976D2" }} />
                  <MuiLink
                    href={`tel:${contactInfo.phone}`}
                    sx={{
                      color: "#94A3B8",
                      textDecoration: "none",
                      "&:hover": { color: "#60A5FA" },
                    }}
                  >
                    {contactInfo.phoneDisplay}
                  </MuiLink>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center" }}
                >
                  <Email sx={{ fontSize: 18, color: "#1976D2" }} />
                  <MuiLink
                    href={`mailto:${contactInfo.email}`}
                    sx={{
                      color: "#94A3B8",
                      textDecoration: "none",
                      "&:hover": { color: "#60A5FA" },
                    }}
                  >
                    {contactInfo.email}
                  </MuiLink>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center" }}
                >
                  <AccessTime sx={{ fontSize: 18, color: "#1976D2" }} />
                  <Typography variant="body2">{contactInfo.hours}</Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            © {currentYear} EREngineers. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            <MuiLink
              component={Link}
              href="/privacy"
              sx={{
                color: "#94A3B8",
                textDecoration: "none",
                fontSize: "0.75rem",
                "&:hover": { color: "#60A5FA" },
              }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={Link}
              href="/terms"
              sx={{
                color: "#94A3B8",
                textDecoration: "none",
                fontSize: "0.75rem",
                "&:hover": { color: "#60A5FA" },
              }}
            >
              Terms of Service
            </MuiLink>
            <MuiLink
              component={Link}
              href="/sitemap"
              sx={{
                color: "#94A3B8",
                textDecoration: "none",
                fontSize: "0.75rem",
                "&:hover": { color: "#60A5FA" },
              }}
            >
              Sitemap
            </MuiLink>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "center", flexWrap: "wrap" }}
          >
            {serviceAreas.slice(0, 4).map((area) => (
              <MuiLink
                key={area}
                component={Link}
                href={`/service-areas/${area.toLowerCase()}`}
                sx={{
                  color: "#94A3B8",
                  textDecoration: "none",
                  fontSize: "0.7rem",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 20,
                  bgcolor: "rgba(255,255,255,0.05)",
                  "&:hover": { bgcolor: "#1976D2", color: "white" },
                  transition: "all 0.3s ease",
                }}
              >
                {area}
              </MuiLink>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
