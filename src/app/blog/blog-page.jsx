"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Avatar,
  TextField,
  InputAdornment,
  Divider,
  Breadcrumbs,
  Link as MuiLink,
  Pagination,
} from "@mui/material";
import {
  Home,
  NavigateNext,
  Search,
  Person,
  DateRange,
  Label,
  ArrowForward,
  Facebook,
  Twitter,
  LinkedIn,
  WhatsApp,
  AcUnit,
  Build,
  Handyman,
  LocalGasStation,
  DirectionsCar,
  Warehouse,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/cta-section";

// Categories for filtering
const categories = [
  { name: "All", count: 0, icon: <Label /> },
  { name: "Installation Tips", count: 0, icon: <AcUnit /> },
  { name: "Repair Guides", count: 0, icon: <Build /> },
  { name: "Maintenance", count: 0, icon: <Handyman /> },
  { name: "Gas Refilling", count: 0, icon: <LocalGasStation /> },
  { name: "Relocation", count: 0, icon: <DirectionsCar /> },
  { name: "Rental Tips", count: 0, icon: <Warehouse /> },
  { name: "Energy Saving", count: 0, icon: <Label /> },
];

// Popular tags
const popularTags = [
  "AC Maintenance",
  "Energy Saving",
  "Troubleshooting",
  "Installation Guide",
  "Gas Refilling",
  "Cleaning Tips",
];

// JSON-LD Structured Data
const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "EREngineers AC Tips Blog",
  description:
    "Expert advice and tips on air conditioning installation, repair, maintenance, and energy efficiency",
  url: "https://erengineers.com/blog",
  publisher: {
    "@type": "Organization",
    name: "EREngineers",
    logo: {
      "@type": "ImageObject",
      url: "https://erengineers.com/images/logo.png",
    },
  },
};

const BlogPage = () => {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
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
              <Typography color="#60A5FA">Blog</Typography>
            </Breadcrumbs>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 800,
                mb: 2,
              }}
            >
              AC Tips & Insights
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#94A3B8", maxWidth: 600, mb: 4 }}
            >
              Expert advice, maintenance guides, and latest trends in air
              conditioning
            </Typography>

            {/* Search Bar */}
            <TextField
              placeholder="Search articles..."
              variant="outlined"
              size="large"
              sx={{
                maxWidth: 500,
                bgcolor: "white",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: "#94A3B8" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Container>
        </Box>

        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={4}>
            {/* Main Content - Blog Posts Grid */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Latest Articles
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Coming soon! We're currently preparing helpful content for you.
              </Typography>

              {/* Coming Soon Message */}
              <Box
                sx={{
                  textAlign: "center",
                  py: { xs: 8, md: 12 },
                  px: 3,
                  bgcolor: "#F8FAFC",
                  borderRadius: 4,
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    bgcolor: "#E3F2FD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <AcUnit sx={{ fontSize: 50, color: "#1976D2" }} />
                </Box>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Blog Posts Coming Soon!
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 500, mx: "auto", mb: 3 }}
                >
                  We're working on creating valuable content to help you with
                  all your AC needs. Stay tuned for expert tips, maintenance
                  guides, and troubleshooting advice.
                </Typography>
              </Box>

              {/* Placeholder for future blog posts - Uncomment when ready */}
              {/*
              <Grid container spacing={3}>
                {blogPosts.map((post, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={post.image}
                        alt={post.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Chip
                          label={post.category}
                          size="small"
                          sx={{ mb: 2, bgcolor: "#E3F2FD", color: "#1976D2" }}
                        />
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {post.excerpt}
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                          <Stack direction="row" spacing={0.5} alignItems="center">
                            <Person sx={{ fontSize: 14, color: "#94A3B8" }} />
                            <Typography variant="caption" color="text.secondary">
                              {post.author}
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={0.5} alignItems="center">
                            <DateRange sx={{ fontSize: 14, color: "#94A3B8" }} />
                            <Typography variant="caption" color="text.secondary">
                              {post.date}
                            </Typography>
                          </Stack>
                        </Stack>
                        <Button
                          component={Link}
                          href={`/blog/${post.slug}`}
                          endIcon={<ArrowForward />}
                          size="small"
                        >
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              */}

              {/* Pagination */}
              {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                <Pagination count={1} color="primary" />
              </Box> */}
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              {/* Categories */}
              <Card sx={{ mb: 4 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Categories
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Stack spacing={1}>
                    {categories.map((category) => (
                      <Button
                        key={category.name}
                        fullWidth
                        sx={{
                          justifyContent: "space-between",
                          textTransform: "none",
                          color: "text.primary",
                          "&:hover": { bgcolor: "#F8FAFC" },
                        }}
                      >
                        <Stack direction="row" spacing={1} alignItems="center">
                          {category.icon}
                          <Typography variant="body2">
                            {category.name}
                          </Typography>
                        </Stack>
                        <Typography variant="caption" color="text.secondary">
                          ({category.count})
                        </Typography>
                      </Button>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card sx={{ mb: 4 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Popular Tags
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {popularTags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        clickable
                        sx={{
                          "&:hover": { bgcolor: "#1976D2", color: "white" },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>

              {/* Follow Us */}
              <Card sx={{ mt: 4 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Follow Us
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button
                      variant="outlined"
                      sx={{ minWidth: "auto", p: 1, borderRadius: 2 }}
                      href="https://facebook.com"
                      target="_blank"
                    >
                      <Facebook sx={{ color: "#1877F2" }} />
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ minWidth: "auto", p: 1, borderRadius: 2 }}
                      href="https://twitter.com"
                      target="_blank"
                    >
                      <Twitter sx={{ color: "#1DA1F2" }} />
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ minWidth: "auto", p: 1, borderRadius: 2 }}
                      href="https://linkedin.com"
                      target="_blank"
                    >
                      <LinkedIn sx={{ color: "#0077B5" }} />
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ minWidth: "auto", p: 1, borderRadius: 2 }}
                      href="https://wa.me/94771234567"
                      target="_blank"
                    >
                      <WhatsApp sx={{ color: "#25D366" }} />
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* CTA Section */}
        <CTASection />
      </Box>
    </>
  );
};

export default BlogPage;
