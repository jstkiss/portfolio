import Header from "@src/components/header";
import Introduction from "@src/components/introduction";
import Informations from "@src/components/informations";
import Competences from "@src/components/competences";
import Projects from "@src/components/projects"
// import Links from "@src/components/links";

// import { styles } from "./styles";

const HomePage = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Informations />
      <Competences />
      <Projects />
    </>
  );
};

export default HomePage;
