import { pushRotate as Menu } from "react-burger-menu";
import Moi from "../assets/img/moi.png";
import Image from "next/image";
import Iframe from "react-iframe";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

// let styles = {
//   //  navcolor:"text-red-500 text-2xl bg-blue-500",
//   //  flex:"flex-center flex"
// };

const Navbar = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:h-40">
      <div className="lg:hidden">
        {/* NAV MOBILE */}
        <Menu>
          <div className="grid grid-rows-5">
            <div>
              <Image src={Moi} alt="moi" />
            </div>
            <div>
              <AnchorLink href="#home">Introduction</AnchorLink>
            </div>
            <div>
              <AnchorLink href="#skills">Mes compétences</AnchorLink>
            </div>
            <div>
              <AnchorLink href="#projects">Mes projets</AnchorLink>
            </div>
            <div>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </div>
          </div>
        </Menu>
      </div>
      {/* NAV */}
      <div className="lg:col-start-2 lg:flex hidden lg:items-center lg:justify-center">
        <nav className="text-customsky">
          <ul className="lg:flex">
            <li>
              <AnchorLink href="#home" className="hover:scale-125 hover:ease-in hover:duration-300 hover:text-customgreen">
                  <span className="text-customgreen">01.</span> Introduction
              </AnchorLink>
            </li>
            <li className="lg:pl-5">
              <AnchorLink href="#skills" className="hover:scale-125 hover:ease-in hover:duration-300 hover:text-customgreen">
                  <span className="text-customgreen">02.</span> Mes compétences
              </AnchorLink>
            </li>
            <li className="lg:pl-5">
              <AnchorLink
                href="#projects"
                className="hover:scale-125 hover:ease-in hover:duration-300 hover:text-customgreen"
              >
                <span className="text-customgreen">03.</span> Mes projets
              </AnchorLink>
            </li>
            <li className="lg:pl-5">
              <AnchorLink
                href="#contact"
                className="hover:scale-125 hover:ease-in hover:duration-300 hover:text-customgreen"
              >
                <span className="text-customgreen">04.</span> Contact
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// {`${styles.navcolor} ${styles.flex}`}

export default Navbar;
