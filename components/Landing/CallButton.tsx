import Link from "next/link";

const CallButton: React.FC<{ title: string; target: string }> = ({
  title,
  target,
}) => {
  return (
    <Link
      href={target}
      className=" bg-lightestBlue hover:bg-darkBlue text-center transition-colors min-w-[160px] inline-block px-4 py-2 text-darkestBlack hover-bg-slide hover:text-white duration-300 font-bold">
      {title}
    </Link>
  );
};

export default CallButton;
