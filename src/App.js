import "aos/dist/aos.css";
import { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import SideBarIcons from "./components/sideIcons/SideIcons";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const work = useRef(null);
  const tech = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const scrollsection = (elementref) => {
    window.scrollTo({
      top: elementref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar
        props={{
          scrollsection,
          about,
          tech,
          work,
          contact,
          home,
          skills,
        }}
      />
      <AllRoutes
        props={{ scrollsection, about, tech, work, contact, home, skills }}
      />

      <ScrollToTop props={{ scrollsection, home }} />
      <SideBarIcons />
    </>
  );
}

export default App;
