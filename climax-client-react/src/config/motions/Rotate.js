import React from "react";
import { motion } from "framer-motion";

const Rotate = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, rotate: 90 }}
    animate={{ opacity: 1, rotate: 0 }}
    exit={{ opacity: 0, rotate: -90 }}
    transition={{ duration: 0.9, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default Rotate;
