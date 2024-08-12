import React from "react";
import Nav_cv from "./Nav-cv";
import StyleMood from "./light-dark-Mood/StyleMood";

const Navbar = () => {
  return (
    <nav className="h-24 px-4 bg-lightestBlue dark:bg-darkestBlue/50 mx-auto rounded-br-lg rounded-bl-lg">
      <section className="container mx-auto h-full flex items-center justify-between">
        <h1 className="text-3xl text-darkestBlack dark:text-white font-bold">
          Portfolio
        </h1>
        <Nav_cv />
      </section>
      <section className="container mx-auto mt-6">
        <StyleMood />
      </section>
    </nav>
  );
};

export default Navbar;
