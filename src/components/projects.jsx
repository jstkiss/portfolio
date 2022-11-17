import Image from "next/image";
import photoshop from "@src/assets/img/photoshop.jpg";
import Html from "@src/assets/img/Html.png";
import Link from "next/link";
import Booki from "@src/assets/img/booki.png";
import git from "../assets/img/github.png";
import twitter from "../assets/img/twitter.png";
import { Twitter } from "@mui/icons-material";
import folder from "@src/assets/img/folder.png";
import { useEffect } from "react";
import Aos from "aos";

let styles = {};

const Projects = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="1000" data-aos-delay="50" className="pl-7 pr-4 pt-10 lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36">
      <div className="flex items-center mt-10">
      <h1 className="text-customgreen pl-7 text-xl pr-3">
            03.
            <span className="text-customsky font-bold text-xl lg:text-4xl pl-2">
              Mes projets
            </span>
          </h1>
          <hr className="text-customsky w-48 lg:w-96" />
      </div>
      <div className="grid grid-rows-2 lg:grid lg:grid-cols-3">
        <div data-aos="zoom-in-right" className="pl-8 pr-8 mt-10 xl:flex xl:justify-center">
          <div className="bg-booki lg:bg-no-repeat lg:bg-contain ">
            <div className="rounded-lg shadow-lg border backdrop-blur-sm border-customgreen max-w-sm hover:scale-110 transition duration-300 ease-in-out">
              <div className="p-6">
                <h1 className="text-customgreen text-1xl font-medium mb-2">
                  Premier Projet
                </h1>
                <h1 className="text-white text-2xl font-medium mb-2">
                  Projet Booki
                </h1>
                <p className="text-customsky text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <p className="text-white text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">Html/Css</span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image src={git} alt="git" />
                    </a>
                  </div>
                  <div className="w-10 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image src={folder} alt="git" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-right" className="pl-8 pr-8 mt-10 xl:flex xl:justify-center">
          <div className="lg:bg-no-repeat lg:bg-contain ">
            <div className="rounded-lg shadow-lg border backdrop-blur-sm border-customgreen max-w-sm hover:scale-110 transition duration-300 ease-in-out">
              <div className="p-6">
                <h1 className="text-customgreen text-1xl font-medium mb-2">
                  Curriculum vitae
                </h1>
                <h1 className="text-white text-2xl font-medium mb-2">
                  Projet CV en vanilla
                </h1>
                <p className="text-customsky text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <p className="text-white text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">Html/Css</span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image src={git} alt="git" />
                    </a>
                  </div>
                  <div className="w-10 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image src={folder} alt="git" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-left" className="p-8">
          <div className="bg-service lg:bg-no-repeat lg:bg-contain">
            <div className="rounded-lg shadow-lg border backdrop-blur-sm border-customgreen max-w-sm hover:scale-110 transition duration-300 ease-in-out">
              <div className="p-6">
                <h1 className="text-customgreen text-1xl font-medium mb-2">
                  Meta-Dev en groupe
                </h1>
                <h1 className="text-white text-2xl font-medium mb-2">
                  Projet Meta-Dev
                </h1>
                <p className="text-customsky text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <p className="text-white text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">
                    Js/Webpack/Tailwind/Suite Adobe/Figma
                  </span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image src={git} alt="git" />
                    </a>
                  </div>
                  <div className="w-10 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image src={folder} alt="git" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-right" className="p-8 xl:flex xl:justify-center">
          <div className="">
            <div className="rounded-lg shadow-lg border backdrop-blur-sm border-customgreen max-w-sm hover:scale-110 transition duration-300 ease-in-out">
              <div className="p-6">
                <h1 className="text-customgreen text-1xl font-medium mb-2">
                  Projet seul
                </h1>
                <h1 className="text-white text-2xl font-medium mb-2">
                  Projet Maze Bank
                </h1>
                <p className="text-customsky text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <p className="text-white text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">Js/Webpack/Tailwind</span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image src={git} alt="git" />
                    </a>
                  </div>
                  <div className="w-10 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image src={folder} alt="git" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-left" className="p-8">
          <div>
            <div className="rounded-lg shadow-lg border backdrop-blur-sm border-customgreen max-w-sm hover:scale-110 transition duration-300 ease-in-out">
              <div className="p-6">
                <h1 className="text-customgreen text-1xl font-medium mb-2">
                  Film
                </h1>
                <h1 className="text-white text-2xl font-medium mb-2">
                  Projet Banque de film
                </h1>
                <p className="text-customsky text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <p className="text-white text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">Html/Css</span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image src={git} alt="git" />
                    </a>
                  </div>
                  <div className="w-10 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image src={folder} alt="git" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
