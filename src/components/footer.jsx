import Links from "@src/components/links";
import Link from "next/link";
import Image from "next/image";
import twitter from "../assets/img/twitter.png";
import git from "../assets/img/github.png";
import links from "../assets/img/links.png";
import AOS from 'aos';
import "aos/dist/aos.css";

let styles = {};

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 grid-rows-2">
      <div className="flex justify-center">
        <div className="w-16">
          <Image src={twitter} alt="tweet" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-16">
          <Image src={git} alt="git" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-16">
          <Image src={links} alt="link" />
        </div>
      </div>
      <div className="flex justify-center col-span-3 text-white">
        <h1>@Copyright@2022</h1>
      </div>
    </footer>
  );
};

export default Footer;
