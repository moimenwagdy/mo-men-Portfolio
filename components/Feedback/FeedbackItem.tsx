"use client";
import { motion } from "framer-motion";
const FeedbackItem: React.FC<{
  name: string;
  message: string;
  date: Date;
}> = ({ date, message, name }) => {
  const updateDate = new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour12: false,
  }); 
  return (
    <motion.li
      variants={{ basic: { opacity: 0 }, play: { opacity: 1 } }}
      initial="basic"
      animate="play"
      className="bg-white/50 my-2 w-full min-h-fit px-2 py-2 rounded-md  ">
      <p className="font-bold text-sm">{name}</p>
      <p className="break-words text-darkBlack text-sm">{message}</p>
      <p className="text-xs text-black/70 text-end">{updateDate}</p>
    </motion.li>
  );
};

export default FeedbackItem;
