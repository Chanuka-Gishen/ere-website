"use client";

import { Box, styled } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import Navbar from "./header";

const MainWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  minHeight: "100vh",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
}));

const PageWrapper = styled(Box)(() => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
  width: "100%",
}));

// Page transition animations
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1],
};

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <MainWrapper>
      <Navbar />
      <PageWrapper>
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </PageWrapper>
      <Footer />
    </MainWrapper>
  );
};

export default MainLayout;
