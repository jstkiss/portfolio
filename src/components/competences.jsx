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
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

let styles = {};

const Competences = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-once="false"
      data-aos-duration="1000"
      data-aos-delay="50"
      className="pl-7 pr-4 pt-10 lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36 lg:pt-28"
    >
      <div className="flex items-center mt-10">
        <h1 className="text-customgreen pl-7 text-xl pr-3">
          02.
          <span className="text-customsky font-bold text-xl lg:text-4xl pl-2">
            Mes compétence
          </span>
        </h1>
        <hr className="text-customsky w-32 lg:w-80" />
      </div>
      <section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="1000" data-aos-delay="50" className="lg:flex lg:justify-center">
              <div className="block rounded-xl border border-customgreen p-8 shadow-xl transition hover:scale-125 hover:ease-in hover:duration-300 hover:border-customgreen hover:shadow-customgreen xl:w-72">
                <div className="mt-1 text-sm text-white grid grid-cols-3 grid-rows-2 items-center">
                  <div className="w-20 lg:w-12">
                    <Image src={Html} alt="html" />
                  </div>
                  <div className="w-20 lg:w-14">
                    <Image src={Javascript} alt="js" />
                  </div>
                  <div className="w-20 lg:w-14">
                    <Image src={Reactjs} alt="react" />
                  </div>
                  <div className="w-20 lg:w-14">
                    <Image src={Nextjs} alt="next" />
                  </div>
                  <div className="w-20 lg:w-14">
                    <Image src={Webpack} alt="web" />
                  </div>
                  <div className="w-20 lg:w-14">
                    <Image src={Tailwind} alt="tail" />
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="1000" data-aos-delay="50" className="lg:flex lg:justify-center">
              <div className="block rounded-xl border border-customgreen p-8 shadow-xl transition hover:scale-125 hover:ease-in hover:duration-300 hover:border-customgreen hover:shadow-customgreen xl:w-72">
                <div className="mt-1 text-sm text-white grid grid-cols-3 grid-rows-2 items-center">
                  <div className="w-20 lg:w-14">
                    <Image src={Php} alt="html" />
                  </div>
                  <div className="w-20 lg:w-14">
                    <Image src={Sql} alt="js" />
                  </div>
                  <div className="w-20 lg:w-14">
                    <Image src={Nodejs} alt="node" />
                  </div>
                  <div className="w-20 lg:w-14">
                    <Image src={Wordpress} alt="next" />
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="1000" data-aos-delay="50" className="lg:flex lg:justify-center">
              <div className="block rounded-xl border border-customgreen p-8 shadow-xl transition hover:scale-125 hover:ease-in hover:duration-300 hover:border-customgreen hover:shadow-customgreen xl:w-72">
                <div className="mt-1 text-sm text-white grid grid-cols-3 items-center">
                  <div className="w-20 lg:w-12">
                    <Image src={photoshop} alt="html" />
                  </div>
                  <div className="w-20 lg:w-12">
                    <Image src={premiere} alt="js" />
                  </div>
                  <div className="w-20 lg:w-12">
                    <Image src={Illustrator} alt="react" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competences;
