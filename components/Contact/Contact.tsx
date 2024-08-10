import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faEnvelope,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <main className=" flex justify-center gap-x-4">
      <div className="flex justify-center items-center gap-x-1">
        <FontAwesomeIcon
          className="text-2xl dark:text-white"
          icon={faEnvelope}
        />
        <p className="text-center dark:text-white">moimenwy@gmail.com</p>
      </div>
      <a
        href="https://www.linkedin.com/in/moimen-wagdy-420997115"
        className="group flex flex-col justify-between items-center">
        <FontAwesomeIcon
          className="text-4xl dark:text-white"
          icon={faLinkedin}
        />
        <div className="dark:text-lightGray group-hover:text-white">
          <p> Linked In</p>
        </div>
      </a>
      <a
        href="https://github.com/moimenwagdy"
        className="group cursor-pointer flex flex-col justify-between items-center">
        <FontAwesomeIcon className="text-4xl dark:text-white" icon={faGithub} />
        <div className="dark:text-lightGray  group-hover:text-white">
          <p>GitHub</p>
        </div>
      </a>
    </main>
  );
};

export default Contact;
