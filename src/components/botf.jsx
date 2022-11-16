import Links from "@src/components/links";
import Image from "next/image";
import Link from "next/link";
import Iframe from "react-iframe";
import Moi from "../assets/img/moi.png";

let styles = {};

const Botf = () => {
  return (
    <div className="flex justify-center p-8">
        <Iframe className="w-96 h-96" src="https://rive.app/community/2719-5586-hero-bot/embed" allowfullscreen />
    </div>
  );
};

export default Botf;