import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import GithubStats from "./pages/GithubStats";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./styles/navbar.scss";
import "./styles/home.scss";
import "./styles/about.scss";
import "./styles/githubstats.scss";
import "./styles/skills.scss";
import "./styles/projects.scss";
import "./styles/contact.scss";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <Home />
      <About />
      <GithubStats />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
