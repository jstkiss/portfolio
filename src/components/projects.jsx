import Image from "next/image";
import photoshop from "@src/assets/img/photoshop.jpg";
import Html from "@src/assets/img/Html.png";
import Link from "next/link";
import Booki from "@src/assets/img/booki.png";
import git from "../assets/img/github.png";
import twitter from "../assets/img/twitter.png";
import { Twitter } from "@mui/icons-material";
import folder from "@src/assets/img/folder.png";

let styles = {
  background:"../assets/img/booki.png",
};

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
      <div class="flex justify-center ">
        {/* <div class="rounded-lg shadow-lg bg-customblue border border-customgreen max-w-sm">
          <Link href="#">
            <a className="rounded-t-lg">
              <Image className="rounded-t-lg" src={Booki} alt="" />
            </a>
          </Link>
          <div class="pl-6 pr-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-customsky text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>
        </div> */}
      </div>
      <div className="p-8">
        <div className="rounded-lg shadow-lg bg-customblue border border-customgreen max-w-sm">
          <div className="p-6">
            <h1 className="text-customgreen text-1xl font-medium mb-2">
              Premier Projet
            </h1>
            <h1 className="text-white text-2xl font-medium mb-2">
              Projet Booki
            </h1>
            <p className="text-customsky text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <p className="text-customgreen text-base mb-4">
              Techno utilisé: HTML/CSS
            </p>
            <Link href="/">
              <div className="w-16 flex items-center">
                <Image href="#" src={git} alt="git" />
                <div className="w-16">
                  <Image href="#" src={folder} alt="git" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
