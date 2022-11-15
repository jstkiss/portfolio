import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import git from "../assets/img/github.png";
import twitter from "../assets/img/twitter.png";
import links from "../assets/img/links.png";
import bar from "../assets/img/bar.png";

let styles = {
    
};

const Links = () => {
  return (
    <div>
      <aside className="xl:bottom-0 xl:h-52 xl:w-full xl:fixed">
        <div className="xl:w-12 ">
          <div>
            <Image src={git} alt="git"/>
          </div>
          <div>
            <Image src={twitter} alt="twitter"/>
          </div>
          <div>
            <Image src={links} alt="links"/>
          </div>
          <div>
            <Image src={bar} alt="bar"/>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Links;
