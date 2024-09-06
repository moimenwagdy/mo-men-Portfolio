const Footer = () => {
  return (
    <div className=" bg-white dark:bg-black">
      <div className="text-center">
        <p className="text-sm">
          Developed & designed by{" "}
          <a href="" className="underline">
            Moimen wagdy
          </a>
        </p>
      </div>
      <div className="text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Moimen portfolio. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
