import React from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.9, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default FadeIn;
