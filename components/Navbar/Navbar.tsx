"use client"
import React from "react";
import Nav_cv from "./Nav-cv";
import StyleMood from "./light-dark-Mood/StyleMood";
import NavStyle from "./NavStyle";
import NavContainer from "./NavContainer";

const Navbar = () => {
  return (
    <NavContainer>
      <NavStyle />
      <section className="container mx-auto h-full flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl text-white font-extrabold">Moimen Portfolio</h1>
        <Nav_cv />
      </section>
      <section className="container mx-auto mt-6 z-10">
        <StyleMood />
      </section>
    </NavContainer>
  );
};

export default Navbar;
