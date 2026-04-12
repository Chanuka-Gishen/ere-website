"use client";

import { Fab, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";
import useWhatsApp from "@/hooks/use-whatsapp";
import { contactInfo } from "@/constants/common-constants";

export default function WhatsAppFloat() {
  const { sendWhatsApp } = useWhatsApp(contactInfo.whatsapp);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}
    >
      <Tooltip title="Chat on WhatsApp" placement="left">
        <Fab
          onClick={() => sendWhatsApp("Hello! I need AC service assistance.")}
          sx={{
            bgcolor: "#25D366",
            width: 60,
            height: 60,
            "&:hover": { bgcolor: "#128C7E" },
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)" },
              "70%": { boxShadow: "0 0 0 15px rgba(37, 211, 102, 0)" },
              "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </Fab>
      </Tooltip>
    </motion.div>
  );
}
