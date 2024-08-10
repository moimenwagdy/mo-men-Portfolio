import HiddenLinks from "./HiddenLinks";
const ProjectHeader: React.FC<{
  liveUrl: string;
  gitUrl: string;
  title: string;
  description: string;
}> = ({ description, title, gitUrl, liveUrl }) => {
  return (
    <header className="relative bg-darkBlue w-72 py-1 text-center mx-auto  rounded-md">
      <HiddenLinks gitUrl={gitUrl} liveUrl={liveUrl} />
      <h1 className=" text-2xl font-bold text-white ">
        {title}
        <br />
      </h1>
      <p className="text-white/50">{description}</p>
    </header>
  );
};

export default ProjectHeader;
