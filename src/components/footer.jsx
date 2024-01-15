import Image from "next/image";
import twitter from "../assets/img/twitter.png";
import git from "../assets/img/github.png";
import links from "../assets/img/links.png";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

let styles = {};

const Footer = () => {
  return (
    <footer className="pt-28">
      <div className="flex lg:hidden justify-center">
        <div className="flex justify-center">
          <div className="w-16">
            <a
              href="https://twitter.com/ItsJSTKISS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
        <div className="flex justify-center pl-5">
          <div className="w-16">
            <a
              href="https://github.com/jstkiss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={git} alt="git" />
            </a>
          </div>
        </div>
        <div className="flex justify-center pl-5">
          <div className="w-16">
            <a
              href="https://www.linkedin.com/in/mehdi-c-4a00aa139/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={links} alt="links" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center col-span-3 text-white">
        <h1>@Copyright@2022</h1>
      </div>
    </footer>
  );
};

export default Footer;
