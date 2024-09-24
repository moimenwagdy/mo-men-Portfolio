"use client";
import React from "react";
import Nav_cv from "./Nav-cv";
import StyleMood from "./light-dark-Mood/StyleMood";
import NavStyle from "./NavStyle";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={{ basic: { y: 0 }, move: { y: 0 } }}
      initial="basic"
      animate={"move"}
      className="relative h-20 px-4  mx-auto z-0">
      <NavStyle />
      <section className="container mx-auto h-full flex items-center justify-between">
        <h1 className="text-3xl text-white font-extrabold">Portfolio</h1>
        <Nav_cv />
      </section>
      <section className="container mx-auto mt-6 z-10">
        <StyleMood />
      </section>
    </motion.nav>
  );
};

export default Navbar;
