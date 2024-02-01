import Image from "next/image";
import Moi from "../assets/img/moi.png";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Informations = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=""
    >
      <motion.div
        id="home"
        className="pl-7 pr-4 pt-10 lg:pr-36 lg:pl-36 lg:mr-36 lg:pt-28"
        variants={fadeIn('right', 'tween', 0.2, 1)}
      >
        <div className="lg:ml-36 lg:grid lg:grid-cols-2">
          <div className="flex items-center col-span-2">
            <h1 className="text-customgreen pl-7 text-xl pr-3">
              01.
              <span className="text-customsky font-bold text-xl lg:text-4xl pl-2">
                Qui suis je ?
              </span>
            </h1>
            <hr className="text-customsky w-48 lg:w-80" />
          </div>
          <div className="pl-7 pr-4 pt-10 lg:col-start-1 lg:flex lg:flex-col lg:justify-center">
            <p className="text-customsky">
              Je m&rsquo;appelle Cesa Mehdi, j&rsquo;ai 24 ans et je suis
              actuellement à la recherche d&apos;un CDI
              <span className="text-customgreen"> développeur web</span>. Avant
              ça, j&rsquo;ai fait un BAC pro systèmes numériques option RISQ
              puis j&rsquo;ai suivi un pré-apprentissage de
              <span className="text-customgreen"> développeur web </span>chez
              OpenClassrooms. J&rsquo;ai par la suite, intégré la formation de
              l&rsquo;ACS en mai 2022.
            </p>
            <br />
            <p className="text-customsky">
              En parallèle, j&rsquo;ai été joueur professionnel sur{" "}
              <span className="text-customgreen">Rocket League</span> pendant 5
              ans. Je suis actuellement Ambassadeur pour{" "}
              <span className="text-customgreen">@Monaco Esport </span>.
            </p>
            <br />
            <p className="text-customsky">
              En dehors du code, j&rsquo;aime le sport extrême comme le saut en
              parachute, le wingsuit, l&rsquo;alpinisme et la plongée.
            </p>
          </div>
          <div className="justify-center flex lg:col-start-2">
            <Card className="w-96 bg-customblue">
              <CardHeader floated={false} className="h-80 bg-customblue">
                <Image src={Moi} alt="profile-picture" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 text-customgreen"
                >
                  @jstkiss
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium text-customsky"
                  textGradient
                >
                  Streamer / Pro Player / Trader / Développeur
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                  <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                  >
                    <i className="fab fa-facebook" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                  >
                    <i className="fab fa-twitter" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                  >
                    <i className="fab fa-instagram" />
                  </Typography>
                </Tooltip>
              </CardFooter>
            </Card>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Informations;
