"use client";
import { faSun, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const StyleMood = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState<IconDefinition>(faSun);
  const moodToggle = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "dark") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setIcon(faSun);
    }
    if (theme === "light") {
      setIcon(faMoon);
    }
  }, [theme]);
  if (theme === "system" || theme === null) {
    setTheme("dark");
  }

  const notUndefined = icon !== undefined;
  return (
    <span
      className={`group p-2 block text-center ${
        notUndefined && "bg-darkBlue/50 dark:bg-lightBlue/20 cursor-pointer"
      } w-10 h-10 rounded-full`}
      onClick={moodToggle}>
      <FontAwesomeIcon
        icon={icon!}
        className="text-white  group-hover:scale-110 "
      />
    </span>
  );
};

export default StyleMood;
