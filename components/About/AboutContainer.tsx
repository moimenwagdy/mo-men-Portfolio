"use client"
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const AboutContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.aside
      variants={{ basic: { y: 0 }, move: { y: 0 } }}
      initial="basic"
      animate={"move"}
      className="relative mx-auto  rounded-md py-4 w-full  sm:w-3/4 px-4 h-full space-y-10 overflow-hidden">
      {children}
    </motion.aside>
  );
};

export default AboutContainer;
