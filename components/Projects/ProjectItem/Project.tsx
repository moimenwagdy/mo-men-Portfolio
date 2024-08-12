import Image, { StaticImageData } from "next/image";
import React from "react";
import ProjectButton from "./ProjectButton";
import ProjectItemBody from "./ProjectItemBody";
import ProjectHeader from "./ProjectHeader";

const Project: React.FC<{
  title: string;
  technologies: string[];
  usageGuide: string;
  imgSrc: StaticImageData;
  imgTitle: string;
  description: string;
  gitUrl: string;
  liveUrl: string;
}> = ({
  usageGuide,
  technologies,
  title,
  imgTitle,
  imgSrc,
  description,
  liveUrl,
  gitUrl,
}) => {
  return (
    <main className="flex flex-col items-start ">
      <ProjectHeader
        gitUrl={gitUrl}
        liveUrl={liveUrl}
        title={title}
        description={description}
      />
      <section className=" flex bg-white/10 dark:bg-darkestBlack/30 dark:text-white/80 rounded-md flex-col sm:flex-row sm:justify-evenly px-4 gap-y-4 items-center min-h-[275px]">
        <ProjectItemBody
          title={title}
          description={description}
          usageGuide={usageGuide}
          technologies={technologies}
          liveUrl={liveUrl}
          gitUrl={gitUrl}
        />
        <div className="flex flex-col justify-center items-center gap-y-1">
          <Image
            className="rounded-md"
            src={imgSrc}
            alt={imgTitle}
            width={350}
            height={200}
          />
          <section className="flex justify-evenly w-full gap-x-1 text-sm ">
            <ProjectButton title="Source Code" url={gitUrl} />
            <ProjectButton title="Live Demo" url={liveUrl} />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Project;
