"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import { navigation } from "../constants/navigation-constants";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Fix hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box sx={{ width: 280, p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "primary.main" }}
        >
          EREngineers
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigation.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            href={item.path}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": { bgcolor: "action.hover" },
            }}
          >
            {/* Fixed: Removed primaryTypographyProps from ListItemText */}
            <ListItemText
              primary={item.name}
              slotProps={{
                primary: { style: { fontWeight: 500 } },
              }}
            />
          </ListItem>
        ))}
      </List>
      <Button
        fullWidth
        variant="contained"
        href="/quote"
        sx={{ mt: 3, borderRadius: 40 }}
      >
        Get Quote
      </Button>
    </Box>
  );

  // Prevent hydration mismatch by not rendering motion components on server
  if (!mounted) {
    return (
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <Box
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 28, sm: 32 },
                  height: { xs: 28, sm: 32 },
                  mr: 1,
                }}
              >
                <Image
                  src="/images/main-logo.jpg"
                  alt="EREngineers Logo"
                  fill
                  sizes="(max-width: 600px) 28px, 32px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                  background: "linear-gradient(135deg, #1976D2, #0D47A1)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                EREngineers
              </Typography>
            </Box>
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1 }}>
                {navigation.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    href={item.path}
                    sx={{
                      color: "text.primary",
                      fontWeight: 500,
                      "&:hover": {
                        color: "primary.main",
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
                <Button variant="contained" href="/quote" sx={{ ml: 2 }}>
                  Get Quote
                </Button>
              </Box>
            )}
            {isMobile && (
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </AppBar>
    );
  }

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 28, sm: 32 },
                  height: { xs: 28, sm: 32 },
                  mr: 1,
                }}
              >
                <Image
                  src="/images/main-logo.jpg"
                  alt="EREngineers Logo"
                  fill
                  sizes="(max-width: 600px) 28px, 32px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                  background: "linear-gradient(135deg, #1976D2, #0D47A1)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                EREngineers
              </Typography>
            </Box>
          </motion.div>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navigation.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Button
                    component={Link}
                    href={item.path}
                    sx={{
                      color: "text.primary",
                      fontWeight: 500,
                      "&:hover": {
                        color: "primary.main",
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
              <Button variant="contained" href="/quote" sx={{ ml: 2 }}>
                Get Quote
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}
