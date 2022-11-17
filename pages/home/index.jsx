import Header from "@src/components/header";
import Introduction from "@src/components/introduction";
import Informations from "@src/components/informations";
import Competences from "@src/components/competences";
import Projects from "@src/components/projects"
import Works from "@src/components/works";
import Footer from "@src/components/footer";
import AOS from 'aos';
import Iframe from "react-iframe";
import Contact from "@src/components/contact";
import Links from "@src/components/links";

// import { styles } from "./styles";

const HomePage = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Informations />
      <Links />
      <Competences />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
