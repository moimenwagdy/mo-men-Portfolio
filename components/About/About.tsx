import SectionHeader from "../SectionHeader/sectionHeader";
import SkillsSection from "./SkillsSection";

const Skills = () => {
  return (
    <section id="about" className="flex flex-col gap-y-14 w-full pt-10">
      <SectionHeader adress="About" />
      <aside className="mx-auto bg-darkBlack/40 dark:bg-darkestBlack rounded-md py-4 w-full  sm:w-3/4 px-4 h-full space-y-10">
        <div className="space-y-4">
          <h2 className="text-white text-lg">
            I&#39;m Frontend React, Next developer
          </h2>
          <p className="text-white/70 dark:text-white/50  ">
            I have experience in web development, working on projects from small
            websites to larger applications. My journey started with learning
            the basics, and over time, I&#39;ve gained skills in various
            technologies. I&#39;m always committed to write clean, maintainable
            code and believe in continuous learning and improvement.
          </p>
        </div>
        <SkillsSection />
      </aside>
    </section>
  );
};

export default Skills;
