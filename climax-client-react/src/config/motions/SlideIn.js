import React from "react";
import { motion } from "framer-motion";

const SlideIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.9, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default SlideIn;
