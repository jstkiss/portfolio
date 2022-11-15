import Link from "next/link";
import { pushRotate as Menu } from "react-burger-menu";

// let styles = {
//   //  navcolor:"text-red-500 text-2xl bg-blue-500",
//   //  flex:"flex-center flex"
// };

const Navbar = () => {
  return (
    <div>
      <Menu>
        <Link href="/">
          <a id="home" className="">
            Moi
          </a>
        </Link>
        <Link href="/">
          <a id="about" className="">
            Experiences
          </a>
        </Link>
        <Link href="/">
          <a id="contact" className="">
            Graphisme
          </a>
        </Link>
        <Link className="" href="">
          Contact
        </Link>
      </Menu>
    </div>
  );
};

// {`${styles.navcolor} ${styles.flex}`}

export default Navbar;
