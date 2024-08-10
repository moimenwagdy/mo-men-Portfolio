import React from "react";
import ProjectHeader from "./ProjectHeader";

const ProjectItemBody: React.FC<{
  technologies: string[];
  usageGuide?: string;
  title: string;
  description: string;
  gitUrl: string;
  liveUrl: string;
}> = ({ usageGuide, technologies, description, title, gitUrl, liveUrl }) => {
  return (
    <div className="w-full sm:w-3/4 flex flex-col space-y-1 ">
      <ProjectHeader
        gitUrl={gitUrl}
        liveUrl={liveUrl}
        title={title}
        description={description}
      />
      <section className="self-start w-full">
        <h2 className=" mx-auto sm:mx-0 px-4 py-1  bg-gradient-to-r from-lightGray to-transparent dark:from-darkBlack dark:to-transparent w-fit">
          Used technologies
        </h2>
        <ul className=" pe-2 flex flex-wrap justify-center sm:justify-start gap-x-2">
          {technologies.map((tech, index) => {
            return (
              <li key={index}>
                <p>{tech}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="self-start w-full">
        <h3 className=" w-fit mx-auto sm:mx-0 px-4 py-1  bg-gradient-to-r from-lightGray to-transparent dark:from-darkBlack dark:to-transparent ">
          Usage guide
        </h3>
        <p className=" text-center sm:text-start pe-2">
          {usageGuide && usageGuide}
        </p>
      </section>
    </div>
  );
};

export default ProjectItemBody;
