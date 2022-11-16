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
import photoshop from "@src/assets/img/photoshop.jpg";
import premiere from "@src/assets/img/PremierePro.png";
import Illustrator from "@src/assets/img/Illustrator.png";
import { Button, Grid } from "@nextui-org/react";

let styles = {};

const Competences = () => {
  return (
    <div>
      <div className="flex items-center mt-10">
        <h1 className="text-customgreen pl-7 text-2xl pr-3">
          02.
          <span className="text-customsky font-bold pl-2">Mes Compétences</span>
        </h1>
        <hr className="text-customsky w-32" />
      </div>
      <section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="block rounded-xl border border-customgreen p-8 shadow-xl transition hover:border-customgreen hover:shadow-customgreen">
              <div className="mt-1 text-sm text-white grid grid-cols-3 grid-rows-2 items-center">
                <div className="w-20">
                  <Image src={Html} alt="html" />
                </div>
                <div className="w-20">
                  <Image src={Javascript} alt="js" />
                </div>
                <div className="w-20">
                  <Image src={Reactjs} alt="react" />
                </div>
                <div className="w-32">
                  <Image src={Nextjs} alt="next" />
                </div>
                <div className="w-20">
                  <Image src={Webpack} alt="web" />
                </div>
                <div className="w-20">
                  <Image src={Tailwind} alt="tail" />
                </div>
              </div>
            </div>
            <div className="block rounded-xl border border-customgreen p-8 shadow-xl transition hover:border-customgreen hover:shadow-customgreen">
              <div className="mt-1 text-sm text-white grid grid-cols-3 grid-rows-2 items-center">
                <div className="w-20">
                  <Image src={Php} alt="html" />
                </div>
                <div className="w-20">
                  <Image src={Sql} alt="js" />
                </div>
                <div className="w-20">
                  <Image src={Nodejs} alt="node" />
                </div>
                <div className="w-32">
                  <Image src={Nextjs} alt="next" />
                </div>
                <div className="w-20">
                  <Image src={Webpack} alt="web" />
                </div>
                <div className="w-20">
                  <Image src={Tailwind} alt="tail" />
                </div>
              </div>
            </div>
            <div className="block rounded-xl border border-customgreen p-8 shadow-xl transition hover:border-customgreen hover:shadow-customgreen">
              <div className="mt-1 text-sm text-white grid grid-cols-3 selection:items-center">
                <div className="w-20">
                  <Image src={photoshop} alt="html" />
                </div>
                <div className="w-20">
                  <Image src={premiere} alt="js" />
                </div>
                <div className="w-20">
                  <Image src={Illustrator} alt="react" />
                </div>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Competences;
