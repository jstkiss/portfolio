import Image from "next/image";
import git from "../assets/img/github.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

let styles = {};

const Projects = () => {
  return (
    <div
      id="projects"
      data-aos="zoom-in-up"
      data-aos-once="false"
      data-aos-duration="1000"
      data-aos-delay="50"
      className="lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36"
    >
      <div className="flex items-center mt-10">
        <h1 className="text-customgreen pl-7 text-xl pr-3">
          03.
          <span className="text-customsky font-bold text-xl lg:text-4xl pl-2">
            Mes projets
          </span>
        </h1>
        <hr className="text-customsky w-48 lg:w-96" />
      </div>
      <div className="grid grid-rows-2 lg:grid lg:grid-cols-2">
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          data-aos-duration="1000"
          data-aos-delay="50"
          className="pl-8 pr-8 mt-10 xl:flex xl:justify-center"
        >
          <div className="lg:bg-no-repeat lg:bg-contain ">
            <div className="rounded-lg shadow-lg border border-customgreen max-w-sm hover:scale-110 transition duration-300 ease-in-out">
              <div className="p-6">
                {/* <h1 className="text-customsky text-1xl font-medium mb-2">
                  Premier Projet
                </h1> */}
                <h1 className="text-customgreen text-2xl font-medium mb-2 uppercase">
                  Booki
                </h1>
                <p className="text-customsky text-base mb-4">
                  Projet final de mon pré-apprentissage chez
                  <span className="text-customgreen"> OpenClassrooms</span>.
                </p>
                <p className="text-customsky text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">
                    Html/Css/Webpack/Js/Tailwind/Photoshop
                  </span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 hover:scale-125 hover:ease-in hover:duration-300">
                    <a
                      href="https://github.com/mrp-171/agenceweb171"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="text-customsky h-7"
                        icon={faGithub}
                      />
                    </a>
                  </div>
                  <div className="w-10 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          data-aos-duration="1000"
          data-aos-delay="50"
          className="pl-8 pr-8 mt-10 xl:flex xl:justify-center"
        >
          <div className="lg:bg-no-repeat lg:bg-contain ">
            <div className="rounded-lg shadow-lg border border-customgreen max-w-sm hover:scale-110 transition duration-300 ease-in-out">
              <div className="p-6">
                {/* <h1 className="text-customsky text-1xl font-medium mb-2">
                  Projet
                </h1> */}
                <h1 className="text-customgreen text-2xl font-medium mb-2">
                  Meta-Dev
                </h1>
                <p className="text-customsky text-base mb-4">
                  Premier projet de groupe chez l&rsquo;
                  <span className="text-customgreen"> Acces Code School</span>.
                </p>
                <p className="text-customsky text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">
                    Html/Css/Webpack/Js/Tailwind/Photoshop
                  </span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 hover:scale-125 hover:ease-in hover:duration-300">
                    <a
                      href="https://github.com/mrp-171/agenceweb171"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="text-customsky h-7"
                        icon={faGithub}
                      />
                    </a>
                  </div>
                  <div className="w-10 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          data-aos-duration="1000"
          data-aos-delay="50"
          className="pl-8 pr-8 mt-10 xl:flex xl:justify-center"
        >
          <div className="lg:bg-no-repeat lg:bg-contain ">
            <div className="rounded-lg shadow-lg border border-customgreen max-w-sm hover:scale-110 transition duration-300 ease-in-out">
              <div className="p-6">
                {/* <h1 className="text-customsky text-1xl font-medium mb-2">
                  Projet
                </h1> */}
                <h1 className="text-customgreen text-2xl font-medium mb-2">
                  Maze Bank
                </h1>
                <p className="text-customsky text-base mb-4">
                  Création d&apos;une application bancaire fictive afin de réaliser des dêpots et des retraits d&apos;argent.
                </p>
                <p className="text-customsky text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">Html/Css/Js/Tailwind</span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 hover:scale-125 hover:ease-in hover:duration-300">
                    <a
                      href="https://github.com/jstkiss/mazebank"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="text-customsky h-7"
                        icon={faGithub}
                      />
                    </a>
                  </div>
                  <div className="w-10 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          data-aos-duration="1000"
          data-aos-delay="50"
          className="pl-8 pr-8 mt-10 xl:flex xl:justify-center"
        >
          <div className="lg:bg-no-repeat lg:bg-contain ">
            <div className="rounded-lg shadow-lg border border-customgreen max-w-sm hover:scale-110 transition duration-300 ease-in-out">
              <div className="p-6">
                {/* <h1 className="text-customsky text-1xl font-medium mb-2">
                  Projet
                </h1> */}
                <h1 className="text-customgreen text-2xl font-medium mb-2">
                  Curriculum vitae
                </h1>
                <p className="text-customsky text-base mb-4">
                  Réalisation de mon CV en format web et développé en vanilla.
                </p>
                <p className="text-customsky text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">Html/Css</span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 hover:scale-125 hover:ease-in hover:duration-300">
                    <a
                      href="https://github.com/jstkiss/cv-mehdi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="text-customsky h-7"
                        icon={faGithub}
                      />
                    </a>
                  </div>
                  <div className="w-10 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          data-aos-duration="1000"
          data-aos-delay="50"
          className="pl-8 pr-8 mt-10 xl:flex xl:justify-center"
        >
          <div className="lg:bg-no-repeat lg:bg-contain ">
            <div className="rounded-lg shadow-lg border border-customgreen max-w-sm hover:scale-110 transition duration-300 ease-in-out">
              <div className="p-6">
                {/* <h1 className="text-customsky text-1xl font-medium mb-2">
                  Projet en cours
                </h1> */}
                <h1 className="text-customgreen text-2xl font-medium mb-2">
                  Jeux vidéo
                </h1>
                <p className="text-customsky text-base mb-4">
                  Réalisation en cours d&apos;un jeux vidéo basé sur la culture G.
                </p>
                <p className="text-customsky text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">
                    Blender/Unreal/Suit Adobe
                  </span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        className="text-customsky h-7"
                        icon={faGithub}
                      />
                    </a>
                  </div>
                  <div className="w-10 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          data-aos-duration="1000"
          data-aos-delay="50"
          className="pl-8 pr-8 mt-10 xl:flex xl:justify-center"
        >
          <div className="lg:bg-no-repeat lg:bg-contain ">
            <div className="rounded-lg shadow-lg border border-customgreen max-w-sm hover:scale-110 transition duration-300 ease-in-out">
              <div className="p-6">
                {/* <h1 className="text-customsky text-1xl font-medium mb-2">
                  Projet en cours
                </h1> */}
                <h1 className="text-customgreen text-2xl font-medium mb-2">
                  Banque de film
                </h1>
                <p className="text-customsky text-base mb-4">
                  Création d&apos;un site proposant et affichant plusieurs genres de films.
                </p>
                <p className="text-customsky text-base mb-4">
                  Techno utilisé : <br />
                  <span className="text-customgreen">Html/Css</span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        className="text-customsky h-7"
                        icon={faGithub}
                      />
                    </a>
                  </div>
                  <div className="w-10 hover:scale-125 hover:ease-in hover:duration-300">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
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
