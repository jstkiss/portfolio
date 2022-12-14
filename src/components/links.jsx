import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import git from "../assets/img/github.png";
import twitter from "../assets/img/twitter.png";
import links from "../assets/img/links.png";
import bar from "../assets/img/bar.png";
import { motion } from "framer-motion";

let styles = {};

const Links = () => {
  return (
    <div className="lg:flex hidden">
      <aside className="lg:bottom-0 lg:fixed lg:pl-5">
        <div className="xl:w-12">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
            }}
            transition={{ ease: "linear", duration: 4, repeat: Infinity, repeatDelay: 8, }}
            className="lg:w-16 cursor-pointer hover:scale-125 hover:ease-in hover:duration-300"
          >
            <a
              href="https://github.com/jstkiss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={git} alt="git" />
            </a>
          </motion.div>
          <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
          }}
          transition={{ ease: "linear", duration: 4, repeat: Infinity, repeatDelay: 8, delay: 4, }}
           className="lg:w-16 cursor-pointer hover:scale-125 hover:ease-in hover:duration-300">
            <a
              href="https://twitter.com/ItsJSTKISS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitter} alt="twitter" />
            </a>
          </motion.div>
          <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
          }}
          transition={{ ease: "linear", duration: 4, repeat: Infinity, repeatDelay: 8, delay: 8, }}
           className="lg:w-16 cursor-pointer hover:scale-125 hover:ease-in hover:duration-300">
            <a
              href="https://www.linkedin.com/in/mehdi-c-4a00aa139/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={links} alt="links" />
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
