"use client";
import { motion } from "framer-motion";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HiddenLinks: React.FC<{ liveUrl: string; gitUrl: string }> = ({
  gitUrl,
  liveUrl,
}) => {
  return (
    <motion.div
      variants={{ animate: { opacity: 1, y: 0 } }}
      initial={{ opacity: 0, y: -10 }}
      whileHover="animate"
      className="rounded-md overflow-hidden absolute top-0 left-0 bg-darkBlack/70 w-full h-full flex justify-center items-center gap-x-8">
      <a href={liveUrl} target="_blank">
        <FontAwesomeIcon
          className="cursor-pointer text-xl text-white"
          icon={faEye}
        />
      </a>
      <a href={gitUrl} target="_blank">
        <FontAwesomeIcon
          className="cursor-pointer text-xl text-white"
          icon={faCode}
        />
      </a>
    </motion.div>
  );
};

export default HiddenLinks;