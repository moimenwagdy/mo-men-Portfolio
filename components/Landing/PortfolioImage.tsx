import Image from "next/image";
import portfolio from "@/assets/portfolio.jpg";

const PortfolioImage = () => {
  return (
    <Image
      className="rounded-lg self-center md:self-start"
      src={portfolio}
      alt="mo'men personal image"
      priority
      width="250"
      height="100"
    />
  );
};

export default PortfolioImage;
