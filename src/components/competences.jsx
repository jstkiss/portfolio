import Image from "next/image";
import Html from "@src/assets/img/Html.png";
import Css from "@src/assets/img/Css.png";
import Javascript from "@src/assets/img/Javascript.png";
import Webpack from "@src/assets/img/Webpack.png";
import Tailwind from "@src/assets/img/Tailwind.png";
import Reactjs from "@src/assets/img/Reactjs.png";
import Nextjs from "@src/assets/img/Nextjs.png";
import Php from "@src/assets/img/Php.png";
import Sql from "@src/assets/img/Sql.png";
import Nodejs from "@src/assets/img/Nodejs.png";
import photoshop from "@src/assets/img/photoshop.jpg";
import Gitlabs from "@src/assets/img/gitlabs.png";
import Indesign from "@src/assets/img/InDesign.png";
import after from "@src/assets/img/After.png";
import animate from "@src/assets/img/Animate.png";
import Syf from "@src/assets/img/syf.png";
import premiere from "@src/assets/img/PremierePro.png";
import Illustrator from "@src/assets/img/Illustrator.png";

// ..
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "../../utils/motion";

const Competences = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className=""
    >
      <motion.div
        id="competence"
        className="pl-7 pr-4 pt-10 lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36 lg:pt-28"
        variants={zoomIn(0.4, 1)}
      >
        <div className="flex items-center mt-10">
          <h1 className="text-customgreen pl-7 text-xl pr-3">
            02.
            <span className="text-customsky font-bold text-xl lg:text-4xl pl-2">
              Mes compétences
            </span>
          </h1>
          <hr className="text-customsky w-32 lg:w-80" />
        </div>
        <section className="text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 ">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="lg:flex lg:justify-center">
                <div className="block rounded-xl border border-customgreen p-8 shadow-xl transition xl:w-72">
                  <div className="mt-1 text-sm text-white grid-cols-3 grid-rows-2 grid">
                    <div className="w-20 lg:w-14 items-center justify-center flex">
                      <Image src={Html} alt="html" />
                    </div>
                    <div className="w-20 lg:w-14 items-center justify-center flex">
                      <Image src={Javascript} alt="js" />
                    </div>
                    <div className="w-20 lg:w-14 items-center justify-center flex">
                      <Image src={Css} alt="css" />
                    </div>
                    <div className="w-20 lg:w-14 items-center justify-center flex">
                      <Image src={Reactjs} alt="react" />
                    </div>
                    <div className="w-20 lg:w-14 items-center justify-center flex">
                      <Image src={Webpack} alt="web" />
                    </div>
                    <div className="w-20 lg:w-14 items-center justify-center flex">
                      <Image src={Tailwind} alt="tail" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:justify-center">
                <div className="block rounded-xl border border-customgreen p-8 shadow-xl transition xl:w-72">
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
                    <div className="w-16 lg:w-12">
                      <Image src={Nextjs} alt="next" />
                    </div>
                    <div className="w-16 lg:w-12">
                      <Image src={Gitlabs} alt="gitlabs" />
                    </div>
                    <div className="w-16 lg:w-12">
                      <Image src={Syf} alt="syf" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:justify-center">
                <div className="block rounded-xl border border-customgreen p-8 shadow-xl transition xl:w-72">
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
                    <div className="w-20 pt-2 lg:w-12">
                      <Image src={Indesign} alt="ind" />
                    </div>
                    <div className="w-20 pt-2 lg:w-12">
                      <Image src={after} alt="aft" />
                    </div>
                    <div className="w-20 pt-2 lg:w-12">
                      <Image src={animate} alt="animat" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Competences;
