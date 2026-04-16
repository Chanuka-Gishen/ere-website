import { Box, Button, Container, Stack, Typography } from "@mui/material";

const CTASection = () => (
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
          }}
        >
          Need Professional AC Service?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, color: "white" }}>
          Get expert help from our certified technicians
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
);

export default CTASection;
