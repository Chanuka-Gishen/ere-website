"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import { Home, ArrowBack } from "@mui/icons-material";
import Link from "next/link";

const BlogPostPage = ({ params }) => {
  const { slug } = params;

  return (
    <Box>
      <Container sx={{ py: 6 }}>
        <Breadcrumbs sx={{ mb: 3 }}>
          <MuiLink
            component={Link}
            href="/"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Home sx={{ mr: 0.5 }} fontSize="small" />
            Home
          </MuiLink>
          <MuiLink component={Link} href="/blog">
            Blog
          </MuiLink>
          <Typography color="text.primary">Post</Typography>
        </Breadcrumbs>

        <Button
          component={Link}
          href="/blog"
          startIcon={<ArrowBack />}
          sx={{ mb: 4 }}
        >
          Back to Blog
        </Button>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          Blog post content will appear here when published.
        </Typography>
      </Container>
    </Box>
  );
};

export default BlogPostPage;
