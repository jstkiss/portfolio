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
    <div>
      <div className="flex items-center mt-10">
        <h1 className="text-customgreen pl-7 text-2xl pr-3">
          03.
          <span className="text-customsky font-bold pl-2">Mes Projets</span>
        </h1>
        <hr className="text-customsky w-52" />
      </div>
      <div className="grid grid-rows-3">
        <div className="pl-8 pr-8 mt-10">
          <div className="bg-booki">
            <div className="rounded-lg shadow-lg border backdrop-blur-sm border-customgreen max-w-sm">
              <div className="p-6 ">
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
                <Link href="/">
                  <div className="flex items-center">
                    <div className="w-12">
                      <Image href="#" src={git} alt="git" />
                    </div>
                    <div className="w-10">
                      <Image href="#" src={folder} alt="git" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="bg-service">
            <div className="rounded-lg shadow-lg border backdrop-blur-sm border-customgreen max-w-sm">
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
                <Link href="/">
                  <div className="flex items-center">
                    <div className="w-12">
                      <Image href="#" src={git} alt="git" />
                    </div>
                    <div className="w-10">
                      <Image href="#" src={folder} alt="git" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="">
            <div className="rounded-lg shadow-lg border backdrop-blur-sm border-customgreen max-w-sm">
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
                  <span className="text-customgreen">
                    Js/Webpack/Tailwind
                  </span>
                </p>
                <Link href="/">
                  <div className="flex items-center">
                    <div className="w-12">
                      <Image href="#" src={git} alt="git" />
                    </div>
                    <div className="w-10">
                      <Image href="#" src={folder} alt="git" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div>
            <div className="rounded-lg shadow-lg border backdrop-blur-sm border-customgreen max-w-sm">
              <div className="p-6">
                <h1 className="text-customgreen text-1xl font-medium mb-2">
                  Jeux vidéo
                </h1>
                <h1 className="text-white text-2xl font-medium mb-2">
                  CultureMax
                </h1>
                <p className="text-customsky text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <p className="text-white text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">Suit Adobe/Html/Css</span>
                </p>
                <Link href="/">
                  <div className="flex items-center">
                    <div className="w-10">
                      <Image href="#" src={folder} alt="git" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div>
            <div className="rounded-lg shadow-lg border backdrop-blur-sm border-customgreen max-w-sm">
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
                <Link href="/">
                  <div className="flex items-center">
                    <div className="w-12">
                      <Image href="#" src={git} alt="git" />
                    </div>
                    <div className="w-10">
                      <Image href="#" src={folder} alt="git" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
