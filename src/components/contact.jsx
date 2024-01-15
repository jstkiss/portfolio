import React from "react";


let styles = {};

const Contact = () => {
  return (
    <div id="contact"
      className="pl-7 pr-4 pt-10 lg:pt-28 lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36"
    >
      <div className="text-customgreen justify-center flex">
        <h1>04. Et après ?</h1>
      </div>
      <div className="text-customsky text-4xl justify-center flex pt-5">
        <h1>Entrons en contact !</h1>
      </div>
      <div className="text-customsky justify-center flex pt-5">
        <p className="text-center">
          Actuellement à la recherche de nouvelles opportunités, ma boîte de réception est toujours ouverte. Que vous
          ayez une question ou que vous souhaitiez simplement dire bonjour, je n&apos;hésiterai pas à vous répondre dans les plus brefs délais !
        </p>
      </div>
      <div className="pt-7 flex justify-center">
        <a
          href="mailto:mehdi.cesa@outlook.fr"
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
