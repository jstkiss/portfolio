import Links from "@src/components/links";
import Image from "next/image";
import Link from "next/link";
import Moi from "../assets/img/moi.png";

let styles = {};

const Informations = () => {
  return (
    <div className="mt-96">
      <div className="flex items-center">
        <h1 className="text-customgreen pl-7 text-xl pr-3">
          01.
          <span className="text-customsky font-bold pl-2">Qui suis je ??</span>
        </h1>
        <hr className="text-customsky w-60" />
      </div>
      <div className="pl-7 pr-4 mt-14">
        <p className="text-customsky">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum optio
          officiis eaque error at temporibus a, reiciendis ad expedita hic,
          distinctio quidem nulla provident iste repudiandae, esse voluptatum
          laboriosam reprehenderit.
        </p>
        <br />
        <p className="text-customsky">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          iusto enim perferendis molestias blanditiis dolor inventore odio
          consequuntur a asperiores natus minus unde magni, aperiam accusantium
          alias culpa dolorum assumenda.
        </p>
      </div>
      <div className="justify-center flex pt-8">
        <div className="w-full max-w-xs overflow-hidden bg-customgreen rounded-lg shadow-lg">
          <Image
            className="object-cover w-full h-52 bg-customsky"
            src={Moi}
            alt="avatar"
          />

          <div className="py-5 text-center">
            <p>CESA Mehdi</p>
            <span className="text-sm text-white">
              Développeur web front-end
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;
