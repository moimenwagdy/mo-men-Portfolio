const Footer = () => {
  return (
    <div className=" bg-white dark:bg-black">
      <div className="text-center">
        <p className="text-sm">
          Developed & designed by{" "}
          <a href="" className="underline">
            mo&#39;men wagdy
          </a>
        </p>
      </div>
      <div className="text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} mo&#39;men portfolio. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
