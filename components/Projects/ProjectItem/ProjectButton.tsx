const ProjectButton: React.FC<{ title: string; url: string }> = ({
  title,
  url,
}) => {
  return (
    <a
      className="px-6 py-2 text-center w-1/2 bg-darkBlue hover:bg-darkestBlue text-white rounded-md"
      href={`${url}`}
      target="_blank">
      {title}
    </a>
  );
};

export default ProjectButton;
