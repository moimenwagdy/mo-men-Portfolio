"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SkillsSection = () => {
  const [inViewForTheFirstTime, setInViewForTheFirstTime] =
    useState<boolean>(true);

  const updateAnimationState = () => {
    const animationTime = setTimeout(() => {
      setInViewForTheFirstTime(false);
    }, 1500);
  };
  const skills = [
    "Type Script",
    "Next.JS",
    "React.JS",
    "React-Router",
    "Redux-toolkit",
    "React-Query",
    "React-Context",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "HTML/HTML5",
    "CSS/CSS3",
    "Sass",
    "Git & Github",
  ];
  return (
    <motion.div
      variants={{ basic: { y: 1 }, move: { y: 0 } }}
      initial="basic"
      animate="move"
      className="space-y-4">
      <h2 className="text-white  text-lg">Technical SKills</h2>
      <motion.ul
        variants={{
          move: { transition: { staggerChildren: 0.1, repeat: 0 } },
        }}
        whileInView={inViewForTheFirstTime ? "move" : ""}
        onViewportEnter={updateAnimationState}
        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {skills.map((skill, index) => {
          return (
            <motion.li
              variants={{ move: { opacity: 1 } }}
              initial={{ opacity: !inViewForTheFirstTime ? 1 : 0 }}
              className="px-2 py-2 w-auto text-center text-darkBlack rounded-md bg-white/70 hover:bg-darkGray hover:text-white  transition-all duration-200 dark:bg-darkBlue dark:text-white dark:hover:bg-darkestBlue"
              key={index}>
              <p>{skill} </p>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default SkillsSection;
