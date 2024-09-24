import SectionHeader from "../SectionHeader/sectionHeader";
import SkillsSection from "./SkillsSection";
import AboutStyle from "./AboutStyle";
import AboutContainer from "./AboutContainer";

const Skills = () => {
  return (
    <section id="about" className="flex flex-col gap-y-14 w-full pt-10">
      <SectionHeader adress="About" />
      <AboutContainer>
        <AboutStyle />
        <div className="space-y-4">
          <h2 className="text-white text-lg">
            I&#39;m Frontend developer
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
      </AboutContainer>
    </section>
  );
};

export default Skills;
