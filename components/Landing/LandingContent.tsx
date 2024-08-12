"use client";
import { motion } from "framer-motion";
import { ReactTyped, Typed } from "react-typed";

const LandingContent = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-[900] text-4xl text-center">
        Hello and welcome! i&#39;m mo&#39;men
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-black/80 w-full md:w-[90%] md:mx-auto text-md md:text-lg mt-4 whitespace-normal">
        On this portfolio, you&#39;ll see presentation of my work, highlighting
        projects that shows my experience in TypeScript, React, Next.js, Redux,
        Tailwind CSS, and more. Each project reflects my commitment to
        high-quality code, innovative design, and seamless user experiences.
      </motion.h3>
      <ReactTyped
        className="text-sm  text-white text-center mx-auto"
        strings={[
          `Whether you&#39;re here to explore my projects, learn more about my
        skills, or get in touch, I&#39;m thrilled to have you.`,
        ]}
        typeSpeed={30}
        backSpeed={50}
        startDelay={500}
        showCursor={false}
      />
    </>
  );
};

export default LandingContent;
