"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Introduction = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=""
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="pl-7 pr-4 pt-10 lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36"
      >
        <div className="">
          <h3 className="text-customgreen text-1xl lg:text-2xl">
            Bonjour,<span className="pl-3">mon nom est</span>
          </h3>
        </div>
        <div>
          <h1 className="text-customsky font-bold text-4xl lg:text-7xl pt-5">
            Cesa Mehdi
          </h1>
        </div>
        <div>
          <h1 className="text-customsky font-bold text-4xl lg:text-6xl pt-5">
            Je suis un développeur web
          </h1>
        </div>
        <div>
          <p className="text-white pt-5 pb-3 text-sm lg:text-1xl lg:text-start xl:text-start">
            Je suis passionné par les métiers de l&apos;informatique,
            l&apos;entreprenariat et l&apos;investissement, j&apos;ai choisi le
            développement web car ce domaine réunit tout ce qui me passionne. Je
            suis curieux, créatif et j&apos;aime apprendre. Ce qui me
            différencie, c&apos;est mon sens critique qui me permet d&apos;être
            force de proposition.
          </p>
        </div>
        <div className="pt-7 flex justify-center">
          <a
            href="/cv.cesa.mehdi.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="border-customgreen uppercase border-2 pt-2 pb-2 pl-8 pr-8 text-white font-bold cursor-pointer rounded hover:scale-125 hover:ease-in hover:duration-300 hover:text-customgreen"
          >
            Mon cv !
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Introduction;
