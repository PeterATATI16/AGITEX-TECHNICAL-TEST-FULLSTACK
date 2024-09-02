import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredFadeIn = ({ children }) => (
  <motion.div initial="hidden" animate="visible" variants={variants}>
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { variants: childVariants })
    )}
  </motion.div>
);

export default StaggeredFadeIn;
