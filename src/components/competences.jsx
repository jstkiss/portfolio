import Image from "next/image";
import Html from "@src/assets/img/Html.png";
import Css from "@src/assets/img/Css.png";
import Javascript from "@src/assets/img/Javascript.png";
import Webpack from "@src/assets/img/Webpack.png";
import Bootstrap from "@src/assets/img/Bootstrap.png";
import Tailwind from "@src/assets/img/Tailwind.png";
import Wordpress from "@src/assets/img/Wordpress.png";
import Reactjs from "@src/assets/img/Reactjs.png";
import Nextjs from "@src/assets/img/Nextjs.png";
import Php from "@src/assets/img/Php.png";
import Sql from "@src/assets/img/Sql.png";
import Nodejs from "@src/assets/img/Nodejs.png";
import Git from "@src/assets/img/Git.png";
import Npm from "@src/assets/img/Npm.png";

let styles = {};

const Competences = () => {
  return (
    <div>
      <div className="flex items-center mt-10">
        <h1 className="text-customgreen pl-7 text-1xl pr-3">
          02.
          <span className="text-customsky font-bold pl-2">Mes Compétences</span>
        </h1>
        <hr className="text-customsky w-44" />
      </div>
      <section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-customgreen hover:shadow-customgreen">
              <h2 className="mt-4 text-xl flex j font-bold text-customsky">
                Front-End
              </h2>
              <div className="mt-1 text-sm text-white grid grid-cols-3 grid-rows-2">
                <div className="w-20">
                <Image src={Html} alt=""/>
                </div>
                <div className="w-20">
                <Image src={Javascript} alt=""/>
                </div>
                <div className="w-20">
                <Image src={Reactjs} alt=""/>
                </div>
                <div className="w-32">
                <Image src={Nextjs} alt=""/>
                </div>
                <div className="w-20">
                <Image src={Webpack} alt=""/>
                </div>
                <div className="w-20">
                <Image src={Tailwind} alt=""/>
                </div>
              </div>
            </div>
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-customgreen hover:shadow-customgreen">
              <h2 className="mt-4 text-xl font-bold text-customsky">
                Back-End
              </h2>
              <div className="mt-1 text-sm text-white grid grid-cols-2 grid-rows-2">
                <div>
                  <p>COUCOU</p>
                </div>
                <div>
                  <p>COUCOU</p>
                </div>
                <div>
                  <p>COUCOU</p>
                </div>
                <div>
                  <p>COUCOU</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="#"
              class="mt-8 inline-flex items-center rounded border border-customgreen px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
            >
              <span class="text-sm font-medium">Voir plus</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competences;
