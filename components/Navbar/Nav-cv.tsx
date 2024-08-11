"use client";
import { useEffect, useRef, useState } from "react";
import Nav_cvIcon from "./Nav_cvIcon";
import { motion } from "framer-motion";

const Nav_cv = () => {
  const [playAnim, setPlayAnim] = useState<boolean>(false);
  const cvRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(event.target as Node)) {
        setPlayAnim(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const scrollEndsAnim = () => {
    setPlayAnim(false);
  };
  const cvListHandler = () => {
    setPlayAnim((prv) => !prv);
  };
  return (
    <div
      ref={cvRef}
      className="flex flex-col justify-center items-center gap-y-7 -mb-24">
      <span
        onClick={cvListHandler}
        className={`${
          playAnim ? "xr" : ""
        } cursor-pointer flex justify-center items-center gap-x-2 mb-auto`}>
        <Nav_cvIcon />
        <p className="text-xl">C.V</p>
      </span>
      <motion.ul
        onViewportLeave={scrollEndsAnim}
        variants={{
          basic: { x: 10, opacity: 0, zIndex: -100 },
          play: { x: 0, opacity: 1, zIndex: 10 },
        }}
        initial="basic"
        animate={playAnim ? "play" : ""}
        className="gap-y-1 rounded-xl  w-32 flex flex-col justify-center items-center">
        <li className="bg-slate-200 hover:bg-darkGray hover:text-white transition duration-300 px-2 rounded-sm">
          <a href="/mo'men-resume.pdf" download>
            Download
          </a>
        </li>
        <li className="bg-slate-200 hover:bg-darkGray hover:text-white transition duration-300 px-2 rounded-sm">
          <a
            href="https://drive.google.com/file/d/1qvCEeJU69Husfve5MGuk4l9ldDE3_Msu/view?usp=drive_link"
            target="_blank">
            Preview
          </a>
        </li>
      </motion.ul>
    </div>
  );
};

export default Nav_cv;
