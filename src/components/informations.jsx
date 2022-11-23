import Image from "next/image";
import Moi from "../assets/img/moi.png";
import AOS from 'aos';
import "aos/dist/aos.css";

let styles = {};

const Informations = () => {
  return (
    <div id="home" data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="1000" data-aos-delay="50" className="pl-7 pr-4 pt-10 lg:pr-36 lg:pl-36 lg:mr-36 lg:pt-28">
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
            Je m&rsquo;appelle Cesa Mehdi, j&rsquo;ai 23 ans et je suis actuellement en formation chez l&apos;Acces Code School pour un titre
            professionnel de <span className="text-customgreen">développeur web et web mobile</span>.
            Avant ça, j&rsquo;ai fait un BAC pro systèmes numériques option RISQ puis j&rsquo;ai suivi un pré-apprentissage de
            <span className="text-customgreen"> développeur web </span>chez OpenClassrooms. J&rsquo;ai par la suite, intégré la formation de l&rsquo;ACS en mai 2022.
          </p>
          <br />
          <p className="text-customsky">
            En parallèle, je suis semi-pro sur Rocket League pour l&rsquo;équipe <span className="text-customgreen">@Infuria </span>
            et Ambassadeur pour l&rsquo;équipe <span className="text-customgreen">@Wavy</span> mais aussi <span className="text-customgreen">Créateur de contenu sur Youtube et Twitch </span>.
          </p>
          <br />
          <p className="text-customsky">
            En dehors du code, j&rsquo;aime le sport extrême comme le saut en parachute, le wingsuit, l&rsquo;alpinisme et la plongée.
          </p>
        </div>
        <div className="justify-center flex hover:scale-110 transition duration-300 ease-in-out lg:col-start-2">
          <div className="w-full max-w-xs overflow-hidden rounded-lg shadow-lg">
            <Image
              className="object-cover w-full h-52"
              src={Moi}
              alt="avatar"
            />
            <div className="py-5 text-center text-customgreen">
              <p>@JSTKiss</p>
              <span className="text-sm text-customsky">
                Streamer / Trader / Semi-pro / Développeur
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;
