import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RingLoader from "react-spinners/RingLoader";

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
import "./styles/loader.scss";

const App = () => {
  const [loading, setLoading] = useState(true);

  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading && loading ? (
        <div className="preloader">
          <motion.h1 {...options}>Welcome to my portfolio</motion.h1>
          <RingLoader
            size="150px"
            color="rgb(35, 176, 192)"
            speedMultiplier="2"
          />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default App;
