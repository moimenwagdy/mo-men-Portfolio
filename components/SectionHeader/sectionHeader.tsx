const SectionHeader: React.FC<{ adress: string; newStyle?: String }> = ({
  adress,
  newStyle,
}) => {
  return (
    <h1
      className={`text-4xl font-bold  py-2 w-fit mx-auto px-6 rounded-md dark:bg-darkBlack ${
        newStyle ? newStyle : "bg-lightestBlue text-white"
      }`}>
      {adress}
    </h1>
  );
};

export default SectionHeader;
