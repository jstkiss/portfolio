import Links from "@src/components/links";
import Image from "next/image";
import Moi from "../assets/img/moi.png";

let styles = {};

const Informations = () => {
  return (
    <div className="mt-96">
      <div className="flex items-center">
        <h1 className="text-customgreen pl-7 text-2xl pr-3">
          01.<span className="text-customsky font-bold pl-2">Qui je suis</span>
        </h1>
        <hr className="text-customsky w-52" />
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
      <div>
        <Image src={Moi} alt="moi" />
      </div>
    </div>
  );
};

export default Informations;
