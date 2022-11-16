import Link from "next/link";
import { pushRotate as Menu } from "react-burger-menu";
import Moi from "../assets/img/moi.png";
import Image from "next/image";

// let styles = {
//   //  navcolor:"text-red-500 text-2xl bg-blue-500",
//   //  flex:"flex-center flex"
// };

const Navbar = () => {
  return (
    <div>
      <Menu>
        <div className="grid grid-rows-5 ">
          <div>
            <Image src={Moi} alt="moi" />
          </div>
          <div>
            <Link href="/">
              <a id="home" className="">
                Moi
              </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a id="about" className="">
                Experiences
              </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a id="contact" className="">
                Graphisme
              </a>
            </Link>
          </div>
          <div>
            <Link className="" href="">
              Contact
            </Link>
          </div>
        </div>
      </Menu>
    </div>
  );
};

// {`${styles.navcolor} ${styles.flex}`}

export default Navbar;
