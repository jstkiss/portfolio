import Links from "@src/components/links";
import Image from "next/image";
import Link from "next/link";
import Iframe from "react-iframe";
import Moi from "../assets/img/moi.png";

let styles = {};

const Informations = () => {
  return (
    <div className="pl-7 pr-4 pt-10 lg:pr-36 lg:pl-36 lg:mr-36 lg:pt-28">
      <div className="lg:ml-36 lg:grid lg:grid-cols-2">
        <div className="flex items-center col-span-2">
          <h1 className="text-customgreen pl-7 text-xl pr-3">
            01.
            <span className="text-customsky font-bold lg:text-4xl pl-2">
              Qui suis je ?
            </span>
          </h1>
          <hr className="text-customsky w-56" />
        </div>
        <div className="pl-7 pr-4 mt-14 lg:col-start-1">
          <p className="text-customsky">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            optio officiis eaque error at temporibus a, reiciendis ad expedita
            hic, distinctio quidem nulla provident iste repudiandae, esse
            voluptatum laboriosam reprehenderit.
          </p>
          <br />
          <p className="text-customsky">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            iusto enim perferendis molestias blanditiis dolor inventore odio
            consequuntur a asperiores natus minus unde magni, aperiam
            accusantium alias culpa dolorum assumenda.
          </p>
          <br />
          <p className="text-customsky">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            iusto enim perferendis molestias blanditiis dolor inventore odio
            consequuntur a asperiores natus minus unde magni, aperiam
            accusantium alias culpa dolorum assumenda.
          </p>
        </div>
        <div className="justify-center flex pt-8 hover:scale-110 transition duration-300 ease-in-out lg:col-start-2 ">
          <div className="w-full max-w-xs overflow-hidden bg-customgreen rounded-lg shadow-lg">
            <Image
              className="object-cover w-full h-52 bg-customsky"
              src={Moi}
              alt="avatar"
            />
            <div className="py-5 text-center">
              <p>@JSTKiss</p>
              <span className="text-sm text-black">
                Streamer / Trader / Semin-pro / Développeur
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;
