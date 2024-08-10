import React from "react";

const Navbar = () => {
  return (
    <nav className="h-24 px-4 bg-lightestBlue dark:bg-darkBlack mx-auto rounded-br-lg rounded-bl-lg">
      <section className="container mx-auto h-full flex items-center">
        <h1 className="text-3xl text-darkestBlack dark:text-white font-bold">
          Portfolio
        </h1>
      </section>
    </nav>
  );
};

export default Navbar;
