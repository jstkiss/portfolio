import Link from "next/link";
import { pushRotate as Menu } from "react-burger-menu";
import Moi from "../assets/img/moi.png";
import Image from "next/image";
import Iframe from "react-iframe";

// let styles = {
//   //  navcolor:"text-red-500 text-2xl bg-blue-500",
//   //  flex:"flex-center flex"
// };

const Navbar = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:h-40">
      <div>
        <Menu>
          <div className="grid grid-rows-5">
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
      <div className="pt-3">
        <nav className="text-customsky">
          <ul className="lg:flex">
            <li>
              <Link href="/">
                <a className=""><span className="text-customgreen">01.</span>Moi</a>
              </Link>
            </li>
            <li className="lg:pl-5">
              <Link href="/">
                <a className=""><span className="text-customgreen">02.</span>Mes compétences</a>
              </Link>
            </li>
            <li className="lg:pl-5">
              <Link href="/">
                <a className=""><span className="text-customgreen">03.</span>Mes projets</a>
              </Link>
            </li>
            <li className="lg:pl-5">
              <Link href="/">
                <a className=""><span className="text-customgreen">04.</span>Activités complémentaires</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// {`${styles.navcolor} ${styles.flex}`}

export default Navbar;
