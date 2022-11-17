import Links from "@src/components/links";
import Link from "next/link";
import Image from "next/image";
import twitter from "../assets/img/twitter.png";
import git from "../assets/img/github.png";
import links from "../assets/img/links.png";
import AOS from "aos";
import React from "react";
import ReactDOM from "react-dom";

let styles = {};

const Contact = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="50" className="pl-7 pr-4 pt-10 lg:pt-28 lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36">
      <div className="text-customgreen justify-center flex">
        <h1>04. Et après ?</h1>
      </div>
      <div className="text-customsky text-4xl justify-center flex pt-5">
        <h1>Entrer en contact</h1>
      </div>
      <div className="text-customsky justify-center flex pt-5">
        <p className="text-center">
          Bien que je ne sois pas actuellement à la recherche de nouvelles
          opportunités, ma boîte de réception est toujours ouverte. Que vous
          ayez une question ou que vous souhaitiez simplement dire bonjour, je
          ferai de mon mieux pour vous répondre !
        </p>
      </div>
      <div className="flex justify-center pt-5">
        <button className="border-customgreen hover:scale-110 transition duration-300 ease-in-out border-2 pt-2 pb-2 pl-8 pr-8 text-white font-bold cursor-pointer rounded">
          Envoyer un mail !
        </button>
      </div>
    </div>
  );
};

export default Contact;
