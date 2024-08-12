import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from "../SectionHeader/sectionHeader";

const Contact = () => {
  return (
    <>
      <main className=" gap-x-4 flex flex-col gap-y-10 ">
        <SectionHeader adress="Contact" />
        <span className="bg-lightestBlue dark:bg-darkestBlue/50 py-6 flex flex-col justify-center items-center gap-y-6 sm:gap-y-0 sm:flex-row sm:items-end gap-x-10">
          <div className="group flex justify-center items-center gap-x-1">
            <FontAwesomeIcon
              className="dark:text-lightGray dark:hover:text-white text-2xl  group-hover:text-white"
              icon={faEnvelope}
            />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=moimenwy@gmail.com"
              target="_blank"
              className="text-center dark:text-lightGray dark:hover:text-white group-hover:text-white">
              moimenwy@gmail.com
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/moimen-wagdy-420997115"
            className="group flex flex-col justify-between items-center">
            <FontAwesomeIcon
              className="text-4xl dark:text-lightGray dark:hover:text-white group-hover:text-white"
              icon={faLinkedin}
            />
            <div className="dark:text-lightGray group-hover:text-white">
              <p> Linked In</p>
            </div>
          </a>
          <a
            href="https://github.com/moimenwagdy"
            className="group cursor-pointer flex flex-col justify-between items-center">
            <FontAwesomeIcon
              className="text-4xl dark:text-lightGray dark:hover:text-white group-hover:text-white"
              icon={faGithub}
            />
            <div className="dark:text-lightGray  group-hover:text-white">
              <p>GitHub</p>
            </div>
          </a>
        </span>
      </main>
    </>
  );
};

export default Contact;
