import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";
import Image from "next/image";
import Discord from "../assets/img/discord.png";
import HappyDev from "../assets/img/happydev.png";
import Mid from "../assets/img/mid.png";
import Projet from "../assets/img/projet.png";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Projects = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=""
    >
      <motion.div id="projet" className="lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36" variants={fadeIn('right', 'tween', 0.2, 1)}>
        <div className="flex items-center mt-10">
          <h1 className="text-customgreen pl-7 text-xl pr-3">
            03.
            <span className="text-customsky font-bold text-xl lg:text-4xl pl-2">
              Mes projets
            </span>
          </h1>
          <hr className="text-customsky w-48 lg:w-96" />
        </div>
        <div className="p-8 mt-12 flex">
          <section>
            <h3 className="text-customgreen">Projet en cours</h3>
            <h1 className="pt-1 text-3xl text-customsky">
              Documentation Midjourney
            </h1>
            <p className=" mt-4 text-customnormal p-3">
              Site pour ce documenter sur l&apos;ia Midjourney ici tout les mots
              clés et exemples pour mieux utiliser cette IA.
            </p>
            <p className="pt-4 text-customnormal">
              Next.js, React, Tailwind, Framer-Motion
            </p>
            <div className="flex pt-4 text-customnormal">
              <a className="text-2xl" href="https://github.com/jstkiss/mid-doc" target="_blank">
                <FaGithub />
              </a>
              <a className="pl-4 text-1xl" href="https://mid-doc.netlify.app" target="_blank"><p>Voir plus</p></a>
            </div>
          </section>
          <div className="hidden lg:flex">
            <Image src={Mid} className="max-w-lg" alt="mid" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 p-8 mt-12">
          <div className="hidden lg:flex">
            <Image src={Discord} className="max-w-lg " alt="didi" />
          </div>
          <section className="">
            <h3 className="text-customgreen">Projet en cours</h3>
            <h1 className="pt-1 text-3xl text-customsky">Discord Clone</h1>
            <p className="mt-4 text-customnormal p-3">
              Site web qui est un clone du discord complet, appel vidéo, tchat
              en directe et personalisation de son serveur.
            </p>
            <p className="pt-4 text-customnormal">
              Next.js, React, Socket.io, Prisma, Tailwind, MySQL
            </p>
            <div className="flex pt-4 text-customnormal">
              <a className="text-2xl" href="https://github.com/jstkiss/mid-doc" target="_blank">
                <FaGithub />
              </a>
              <a className="pl-4 text-1xl" href="https://mid-doc.netlify.app" target="_blank"><p>En cours</p></a>
            </div>
          </section>
        </div>
        <div className="grid lg:grid lg:grid-cols-2 p-8 mt-12">
          <section>
            <h3 className="text-customgreen">Projet en fini</h3>
            <h1 className="pt-1 text-3xl text-customsky">MetaDev</h1>
            <p className=" mt-4 text-customnormal p-3">
              Site d&apos;entrainement avec la bibliothèque Framer-Motion pour
              les animations et le dynamisme de la page.
            </p>
            <p className="pt-4 text-customnormal">
              Next.js, React, Tailwind, Framer-Motion
            </p>
            <div className="flex pt-4 text-customnormal">
              <a className="text-2xl" href="https://github.com/jstkiss/mid-doc" target="_blank">
                <FaGithub />
              </a>
              <a className="pl-4 text-1xl" href="https://mid-doc.netlify.app" target="_blank"><p>Voir plus</p></a>
            </div>
          </section>
          <div className="hidden lg:flex">
            <Image src={Projet} className="max-w-lg" alt="projet" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 p-8 mt-12">
          <div className="hidden lg:flex">
            <Image src={HappyDev} className="max-w-lg " alt="didi" />
          </div>
          <section className="">
            <h3 className="text-customgreen">Projet en cours</h3>
            <h1 className="pt-1 text-3xl text-customsky">HappyDev</h1>
            <p className="mt-4 text-customnormal p-3">
              Future réseaux social pour développeur. L&apos;utilisateur pourra se créer un profil
              customisé, il pourra ajouter une description, sa région, son travail, ses liens, ajouter ses skill et pourra discuter avec toute la communauté ou avec un autre développeur
            </p>
            <p className="pt-4 text-customnormal">
              Html, css, php, mysql, tailwindcss
            </p>
            <div className="flex pt-4 text-customnormal">
              {/* <a className="text-2xl" href="#" target="_blank">
                <FaGithub />
              </a> */}
              <a className="pl-4 text-1xl" href="" target="_blank"><p>En cours</p></a>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
