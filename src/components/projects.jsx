import Image from "next/image";
import photoshop from "@src/assets/img/photoshop.jpg";
import Html from "@src/assets/img/Html.png";
import Link from "next/link";
import Booki from "@src/assets/img/booki.png"

let styles = {};

const Projects = () => {
  return (
    <div>
      <div className="flex items-center mt-10">
        <h1 className="text-customgreen pl-7 text-2xl pr-3">
          03.
          <span className="text-customsky font-bold pl-2">Mes Projects</span>
        </h1>
        <hr className="text-customsky w-48" />
      </div>
      <div class="flex justify-center ">
        <div class="rounded-lg shadow-lg bg-customblue border border-customgreen max-w-sm">
          <Link href="#">
            <a className="rounded-t-lg">
              <Image className="rounded-t-lg" src={Booki} alt=""/>
            </a>
          </Link>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
