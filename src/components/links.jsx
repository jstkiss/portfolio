import Image from "next/image";
import git from "../assets/img/github.png";
import twitter from "../assets/img/twitter.png";
import links from "../assets/img/links.png";
import bar from "../assets/img/bar.png";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

let styles = {};

const Links = () => {
  return (
    <div className="lg:flex hidden">
      <aside className="lg:bottom-0 lg:fixed lg:pl-5">
        <div className="xl:w-12">
          <motion.div
            className="lg:w-16 cursor-pointer hover:scale-125 hover:ease-in hover:duration-300 pl-4"
          >
            <a
              href="https://github.com/jstkiss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-customnormal"
            >
              <FaGithub />
            </a>
          </motion.div>
          <motion.div
           className="lg:w-16 cursor-pointer hover:scale-125 hover:ease-in hover:duration-300 pl-4 pt-3">
            <a
              href="https://twitter.com/ItsJSTKISS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-customnormal"
            >
              <FaXTwitter />
            </a>
          </motion.div>
          <motion.div
           className="lg:w-16 cursor-pointer hover:scale-125 hover:ease-in hover:duration-300 pl-4 pt-3 pb-3">
            <a
              href="https://www.linkedin.com/in/mehdi-c-4a00aa139/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-customnormal"
            >
              <FaLinkedin />
            </a>
          </motion.div>
          <div className="lg:w-16">
            <Image src={bar} alt="bar" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Links;
