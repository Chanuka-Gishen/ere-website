"use client";

import { useParams, notFound } from "next/navigation";
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
  Breadcrumbs,
  Link as MuiLink,
  Paper,
  Divider,
} from "@mui/material";
import {
  CheckCircle,
  ArrowBack,
  Schedule,
  PriceCheck,
  Home,
  NavigateNext,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { services } from "@/constants/common-constants";

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.id;
  const service = services.filter((service) => service.id === serviceId)[0];

  if (!service) {
    notFound();
  }

  return (
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
              <Typography variant="body1" color="text.secondary" paragraph>
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
  );
}
