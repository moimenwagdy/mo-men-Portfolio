import SectionHeader from "../SectionHeader/sectionHeader";
import Project from "./ProjectItem/Project";
import violetLanding from "@/assets/violetLanding.png";
import mySpotify from "@/assets/mySpotify.png";
const Projects = () => {
  return (
    <section id="projects" className="space-y-6 lg:w-[90%] mx-auto pt-10">
      <SectionHeader adress="Projects" />
      <Project
        title="Violet Store"
        description="E-commerce website"
        imgSrc={violetLanding}
        imgTitle="violetShoe"
        technologies={[
          "Products API -",
          "TypeScript -",
          "React.js -",
          "ReduxToolkit -",
          "React-Query -",
          "React-Router -",
          "TailwindCSS -",
          "Framer-motion",
        ]}
        usageGuide="explore all products, or find your target by choosing a category or search products "
        gitUrl="https://github.com/moimenwagdy/violetShop"
        liveUrl="https://violetshop.netlify.app/"
      />
      <Project
        title="mySpotify"
        description="Music website"
        imgSrc={mySpotify}
        imgTitle="mySpotifyImg"
        technologies={[
          "Official spotify API -",
          "TypeScript -",
          "React.js -",
          "ReduxToolkit -",
          "React-Query -",
          "React-Router -",
          "TailwindCSS -",
          "Framer-motion",
        ]}
        usageGuide="Find your music by Browsing categories or search
        track, artist, album, or playlist, create your own playlist
        and manage adding or delete tracks. "
        gitUrl="https://github.com/moimenwagdy/mySpotify"
        liveUrl="https://main--myspotfy.netlify.app/"
      />
    </section>
  );
};

export default Projects;
