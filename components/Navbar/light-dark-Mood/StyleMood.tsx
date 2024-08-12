"use client";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

const StyleMood = () => {
  const { theme, setTheme } = useTheme();
  const moodToggle = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };
  return (
    <button
      className="group bg-darkBlue/50 dark:bg-lightBlue/20 w-10 h-10 rounded-full "
      type="button"
      onClick={moodToggle}>
      <FontAwesomeIcon
        icon={theme === "dark" ? faSun : faMoon}
        className="text-white  group-hover:scale-110"
      />
    </button>
  );
};

export default StyleMood;
