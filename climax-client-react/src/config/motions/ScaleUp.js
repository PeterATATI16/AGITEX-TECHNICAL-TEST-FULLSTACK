import React from "react";
import { motion } from "framer-motion";

const ScaleUp = ({ children }) => (
  <motion.div
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0.8 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default ScaleUp;
