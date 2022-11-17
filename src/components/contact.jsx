import Links from "@src/components/links";
import Link from "next/link";
import Image from "next/image";
import twitter from "../assets/img/twitter.png";
import git from "../assets/img/github.png";
import links from "../assets/img/links.png";
import AOS from "aos";
import React from "react";
import ReactDOM from "react-dom";
import { Input } from "postcss";

let styles = {};

const Contact = () => {
  return (
    <div id="contact"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-delay="50"
      className="pl-7 pr-4 pt-10 lg:pt-28 lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36"
    >
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
      <div class="flex flex-wrap pl-7 pr-4 pt-10 lg:pt-10 lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white">
              Name
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-customblue bg-opacity-50 rounded border border-customgreen focus:border-customgreen focus:bg-white focus:ring-2 focus:ring-customesky text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </label>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-white">
              Email
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-customblue bg-opacity-50 rounded border border-customgreen focus:border-customgreen focus:bg-white focus:ring-2 focus:ring-customesky text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </label>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-customblue bg-opacity-50 rounded border border-customgreen focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="pt-7 flex justify-center">
        <a
          href="/"
          target="_blank"
          rel="noreferrer noopener"
          className="border-customgreen uppercase border-2 pt-2 pb-2 pl-8 pr-8 text-white font-bold cursor-pointer rounded hover:scale-125 hover:ease-in hover:duration-300 hover:text-customgreen"
        >
          Envoyer
        </a>
      </div>
    </div>
  );
};

export default Contact;
