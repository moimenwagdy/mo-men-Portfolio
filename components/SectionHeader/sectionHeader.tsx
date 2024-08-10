const SectionHeader: React.FC<{ adress: string }> = ({ adress }) => {
  return (
    <h1 className="text-4xl font-bold bg-lightestBlue py-2 w-fit mx-auto px-6 rounded-md">
      {adress}
    </h1>
  );
};

export default SectionHeader;
