import CallToAction from "./CallToAction";
import LandingContent from "./LandingContent";
import PortfolioImage from "./PortfolioImage";

const Landing = () => {
  return (
    // <section className="overflow-hidden min-h-[50vh] bg-lightGray dark:bg-normalGray rounded-lg py-10 px-4 sm:px-10 flex flex-col md:flex-row gap-y-4 md:gap-y-0">
    <section className="overflow-hidden min-h-[50vh]  z-0 relative rounded-lg py-10 px-4 sm:px-10 flex flex-col md:flex-row gap-y-4 md:gap-y-0">
      <div className="bg-triBackground absolute inset-0 -z-10 bg-cover dark:brightness-150 dark:contrast-75"></div>
      <PortfolioImage />
      <span className="flex flex-col gap-y-4">
        <LandingContent />
        <span className="flex gap-x-2 self-center mt-auto">
          <CallToAction target="#about" title="More about me" />
          <CallToAction target="#projects" title="Explore Projects" />
        </span>
      </span>
    </section>
  );
};

export default Landing;
