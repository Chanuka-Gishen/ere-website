"use client";

import MotionBox from "./motion-box";
import { fadeInUp } from "@/utils/animations";

export default function AnimatedSection({ children, delay = 0 }) {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </MotionBox>
  );
}
