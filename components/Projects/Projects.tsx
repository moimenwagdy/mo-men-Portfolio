import SectionHeader from "../SectionHeader/sectionHeader";
import Project from "./ProjectItem/Project";
import projects from "./projectsData/projectsData";

const Projects = () => {
  return (
    <section id="projects" className=" space-y-10 lg:w-[90%] mx-auto pt-10">
      <SectionHeader adress="Projects" />
      <ul className="space-y-12">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <Project {...project} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
