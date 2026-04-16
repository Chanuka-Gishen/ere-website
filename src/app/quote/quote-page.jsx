"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

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
  Breadcrumbs,
  Link as MuiLink,
  Alert,
  Snackbar,
  CircularProgress,
  Divider,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import {
  Home,
  NavigateNext,
  Send,
  CheckCircle,
  AcUnit,
  Build,
  Handyman,
  DirectionsCar,
  Warehouse,
  Phone,
  WhatsApp,
  Email,
} from "@mui/icons-material";

import { contactInfo } from "@/constants/common-constants";

// Service options
const serviceTypes = [
  { value: "installation", label: "AC Installation", icon: <AcUnit /> },
  { value: "repair", label: "AC Repair", icon: <Build /> },
  { value: "maintenance", label: "AC Maintenance", icon: <Handyman /> },
  { value: "relocation", label: "AC Relocation", icon: <DirectionsCar /> },
  { value: "rental", label: "AC Rental", icon: <Warehouse /> },
];

// AC types for installation
const acTypes = [
  "Split AC",
  "Cassette AC",
  "Ceiling AC",
  "Portable AC",
  "Window AC",
  "Ducted AC",
];

// AC brands
const acBrands = [
  "LG",
  "Daikin",
  "Panasonic",
  "Hitachi",
  "Samsung",
  "Mitsubishi",
  "Carrier",
  "Blue Star",
  "Voltas",
  "Other",
];

// Locations
const locations = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Galle",
  "Negombo",
  "Mount Lavinia",
  "Dehiwala",
  "Other",
];

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
  serviceType: Yup.string().required("Please select a service type"),
  acType: Yup.string().when("serviceType", {
    is: (val) => val === "installation" || val === "rental",
    then: (schema) => schema.required("Please select AC type"),
    otherwise: (schema) => schema.notRequired(),
  }),
  acBrand: Yup.string(),
  location: Yup.string().required("Please select your location"),
  preferredDate: Yup.string().required("Please select preferred date"),
  preferredTime: Yup.string(),
  description: Yup.string()
    .required("Please describe your requirement")
    .min(10, "Please provide at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
  budget: Yup.string(),
  heardFrom: Yup.string(),
});

// Time slots
const timeSlots = [
  "Morning (8AM - 12PM)",
  "Afternoon (12PM - 4PM)",
  "Evening (4PM - 8PM)",
  "Flexible",
];

// Budget ranges
const budgetRanges = [
  "Below LKR 5,000",
  "LKR 5,000 - 10,000",
  "LKR 10,000 - 20,000",
  "LKR 20,000 - 30,000",
  "Above LKR 30,000",
  "Not sure / Flexible",
];

// How they heard
const heardFromOptions = [
  "Google Search",
  "Facebook",
  "Instagram",
  "Friend/Family",
  "Newspaper",
  "Billboard",
  "Other",
];

const QuotePage = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Service Details", "Contact Information", "Review & Submit"];

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceType: "",
      acType: "",
      acBrand: "",
      location: "",
      preferredDate: "",
      preferredTime: "",
      description: "",
      budget: "",
      heardFrom: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);

      try {
        // Simulate API call - Replace with your actual endpoint
        // const response = await fetch('/api/quote', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(values),
        // });

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setSnackbar({
          open: true,
          message:
            "Thank you! We'll contact you within 24 hours with your quote.",
          severity: "success",
        });
        resetForm();
        setActiveStep(0);
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

  const handleNext = () => {
    // Validate current step before proceeding
    if (activeStep === 0) {
      const errors = formik.errors;
      const touched = formik.touched;

      // Check required fields for step 1
      if (
        !formik.values.serviceType ||
        !formik.values.location ||
        !formik.values.description
      ) {
        setSnackbar({
          open: true,
          message: "Please fill all required fields before proceeding",
          severity: "warning",
        });
        return;
      }
    }

    if (activeStep === 1) {
      if (
        !formik.values.fullName ||
        !formik.values.email ||
        !formik.values.phone
      ) {
        setSnackbar({
          open: true,
          message: "Please fill all contact details before proceeding",
          severity: "warning",
        });
        return;
      }
    }

    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={3}>
            <FormControl fullWidth required>
              <InputLabel>Service Type</InputLabel>
              <Select
                name="serviceType"
                value={formik.values.serviceType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.serviceType &&
                  Boolean(formik.errors.serviceType)
                }
                label="Service Type"
              >
                {serviceTypes.map((service) => (
                  <MenuItem key={service.value} value={service.value}>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: "center" }}
                    >
                      {service.icon}
                      <span>{service.label}</span>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.serviceType && formik.errors.serviceType && (
                <Typography variant="caption" color="error">
                  {formik.errors.serviceType}
                </Typography>
              )}
            </FormControl>

            {(formik.values.serviceType === "installation" ||
              formik.values.serviceType === "rental") && (
              <FormControl fullWidth required>
                <InputLabel>AC Type</InputLabel>
                <Select
                  name="acType"
                  value={formik.values.acType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.acType && Boolean(formik.errors.acType)}
                  label="AC Type"
                >
                  {acTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            <FormControl fullWidth>
              <InputLabel>AC Brand (Optional)</InputLabel>
              <Select
                name="acBrand"
                value={formik.values.acBrand}
                onChange={formik.handleChange}
                label="AC Brand (Optional)"
              >
                {acBrands.map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    {brand}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth required>
              <InputLabel>Location</InputLabel>
              <Select
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.location && Boolean(formik.errors.location)
                }
                label="Location"
              >
                {locations.map((loc) => (
                  <MenuItem key={loc} value={loc}>
                    {loc}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              type="date"
              name="preferredDate"
              label="Preferred Date"
              value={formik.values.preferredDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.preferredDate &&
                Boolean(formik.errors.preferredDate)
              }
              helperText={
                formik.touched.preferredDate && formik.errors.preferredDate
              }
              required
            />

            <FormControl fullWidth>
              <InputLabel>Preferred Time (Optional)</InputLabel>
              <Select
                name="preferredTime"
                value={formik.values.preferredTime}
                onChange={formik.handleChange}
                label="Preferred Time (Optional)"
              >
                {timeSlots.map((slot) => (
                  <MenuItem key={slot} value={slot}>
                    {slot}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              multiline
              rows={4}
              name="description"
              label="Describe Your Requirement"
              placeholder="Please provide details about your AC issue or requirement..."
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              required
            />

            <FormControl fullWidth>
              <InputLabel>Budget Range (Optional)</InputLabel>
              <Select
                name="budget"
                value={formik.values.budget}
                onChange={formik.handleChange}
                label="Budget Range (Optional)"
              >
                {budgetRanges.map((range) => (
                  <MenuItem key={range} value={range}>
                    {range}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        );

      case 1:
        return (
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              required
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              required
            />

            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              placeholder="0771234567"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              required
            />

            <FormControl fullWidth>
              <InputLabel>How did you hear about us? (Optional)</InputLabel>
              <Select
                name="heardFrom"
                value={formik.values.heardFrom}
                onChange={formik.handleChange}
                label="How did you hear about us? (Optional)"
              >
                {heardFromOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        );

      case 2:
        const selectedService = serviceTypes.find(
          (s) => s.value === formik.values.serviceType,
        );
        return (
          <Stack spacing={3}>
            <Paper sx={{ p: 3, bgcolor: "#F8FAFC" }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Review Your Request
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" color="text.secondary">
                    Service Type
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {selectedService?.label || formik.values.serviceType}
                  </Typography>
                </Grid>

                {formik.values.acType && (
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="caption" color="text.secondary">
                      AC Type
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {formik.values.acType}
                    </Typography>
                  </Grid>
                )}

                {formik.values.acBrand && (
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="caption" color="text.secondary">
                      AC Brand
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {formik.values.acBrand}
                    </Typography>
                  </Grid>
                )}

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" color="text.secondary">
                    Location
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {formik.values.location}
                  </Typography>
                </Grid>

                {formik.values.preferredDate && (
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="caption" color="text.secondary">
                      Preferred Date
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {formik.values.preferredDate}
                    </Typography>
                  </Grid>
                )}

                <Grid size={{ xs: 12 }}>
                  <Typography variant="caption" color="text.secondary">
                    Description
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {formik.values.description}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" color="text.secondary">
                    Full Name
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {formik.values.fullName}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" color="text.secondary">
                    Phone
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {formik.values.phone}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {formik.values.email}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            <Alert severity="info">
              <Typography variant="body2">
                By submitting this request, you agree to our terms of service.
                We'll contact you within 24 hours with your free quote.
              </Typography>
            </Alert>
          </Stack>
        );

      default:
        return "Unknown step";
    }
  };

  return (
    <>
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
              <Typography color="#60A5FA">Get a Quote</Typography>
            </Breadcrumbs>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 800,
                mb: 2,
              }}
            >
              Get a Free Quote
            </Typography>
            <Typography variant="h6" sx={{ color: "#94A3B8", maxWidth: 600 }}>
              Tell us about your AC needs and we'll provide you with a
              competitive quote within 24 hours
            </Typography>
          </Container>
        </Box>

        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={4}>
            {/* Quote Form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Card>
                <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                  <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>

                  <form onSubmit={formik.handleSubmit}>
                    {getStepContent(activeStep)}

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 4,
                      }}
                    >
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="outlined"
                      >
                        Back
                      </Button>

                      {activeStep === steps.length - 1 ? (
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={isSubmitting}
                          startIcon={
                            isSubmitting ? (
                              <CircularProgress size={20} />
                            ) : (
                              <Send />
                            )
                          }
                          sx={{ bgcolor: "#1976D2" }}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Request"}
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ bgcolor: "#1976D2" }}
                        >
                          Next
                        </Button>
                      )}
                    </Box>
                  </form>
                </CardContent>
              </Card>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      Why Get a Quote From Us?
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Stack spacing={2}>
                      <Stack
                        direction="row"
                        spacing={1.5}
                        sx={{ alignItems: "center" }}
                      >
                        <CheckCircle sx={{ color: "#10B981", fontSize: 20 }} />
                        <Typography variant="body2">
                          Free, no-obligation quotes
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={1.5}
                        sx={{ alignItems: "center" }}
                      >
                        <CheckCircle sx={{ color: "#10B981", fontSize: 20 }} />
                        <Typography variant="body2">
                          Response within 24 hours
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={1.5}
                        sx={{ alignItems: "center" }}
                      >
                        <CheckCircle sx={{ color: "#10B981", fontSize: 20 }} />
                        <Typography variant="body2">
                          Competitive pricing
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={1.5}
                        sx={{ alignItems: "center" }}
                      >
                        <CheckCircle sx={{ color: "#10B981", fontSize: 20 }} />
                        <Typography variant="body2">
                          Certified technicians
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      Need Help?
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Stack spacing={2}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<Phone />}
                        href={`tel:${contactInfo.phone}`}
                        sx={{ justifyContent: "flex-start" }}
                      >
                        Call Us: {contactInfo.phoneDisplay}
                      </Button>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<WhatsApp />}
                        href={`https://wa.me/${contactInfo.whatsapp}`}
                        sx={{ justifyContent: "flex-start" }}
                      >
                        WhatsApp Us
                      </Button>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<Email />}
                        href={`mailto:${contactInfo.email}`}
                        sx={{ justifyContent: "flex-start" }}
                      >
                        Email Us
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>

                <Paper sx={{ p: 3, textAlign: "center", bgcolor: "#F8FAFC" }}>
                  <Typography variant="body2" color="text.secondary">
                    <strong>100% Satisfaction Guaranteed</strong>
                    <br />
                    We stand behind our service quality
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Snackbar for notifications */}
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

export default QuotePage;
