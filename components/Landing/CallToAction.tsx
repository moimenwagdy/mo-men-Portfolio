"use client";
import { motion } from "framer-motion";
import CallButton from "./CallButton";

const CallToAction: React.FC<{ target: string; title: string }> = ({
  target,
  title,
}) => {
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 5.5 }}
      className="">
      <CallButton target={target} title={title} />
    </motion.aside>
  );
};

export default CallToAction;
