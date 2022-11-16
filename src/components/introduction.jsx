import Image from "next/image";
import AOS from 'aos';
import "aos/dist/aos.css";

let styles = {};

const Introduction = () => {
  return (
    <div className="pl-7 pr-4 pt-10">
      <div>
        <h3 className="text-customgreen text-1xl">
          Bonjour,<span className="pl-3">je m&apos;appel</span>
        </h3>
      </div>
      <div>
        <h1 className="text-customsky font-bold text-4xl pt-5">CESA Mehdi</h1>
      </div>
      <div>
        <p className="text-white pt-5 pb-3 text-sm">
          Je suis passionné par les métiers de l’informatique,
          l&apos;entreprenariat et l&apos;investissement, j&apos;ai choisi le
          développement web car ce domaine réunit tout ce qui me passionne. Je
          suis curieux, créatif et j&apos;aime apprendre. Ce qui me différencie,
          c&apos;est mon sens critique qui me permet d&apos;être force de
          proposition
        </p>
      </div>
      <div className="pt-7 flex justify-center">
        <button className="border-customgreen border-2 pt-2 pb-2 pl-8 pr-8 text-white font-bold cursor-pointer rounded">
          Mon CV !
        </button>
      </div>
    </div>
  );
};

export default Introduction;
