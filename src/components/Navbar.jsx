import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiFillHome,
  AiFillGithub,
  AiFillProject,
  AiFillStar,
  AiFillPhone,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div>
        <a href="#home">
          <p>
            A<span>BHIJIT</span>
          </p>
          <p>
            B<span>ISWAS</span>
          </p>
        </a>
      </div>

      {/* ALL ROUTES */}
      <div id="nav" className={clicked ? "#nav active" : "#nav"}>
        {/* Home */}
        <a className="active" href="#home">
          <AiFillHome />
          HOME
        </a>

        {/* About Me */}
        <a href="#about-me">
          <MdAccountCircle />
          ABOUT ME
        </a>

        {/* Github Stats */}

        <a href="#github-stats">
          <AiFillGithub />
          GITHUB STATS
        </a>

        {/* Tech Stacks */}

        <a href="#skills">
          <AiFillStar />
          SKILLS
        </a>

        {/* Projects */}

        <a href="#projects">
          <AiFillProject />
          PROJECTS
        </a>

        {/* Contact */}

        <a href="#contact">
          <AiFillPhone />
          CONTACT
        </a>

        {/* Resume */}

        <a
          href="https://drive.google.com/file/d/1jaQwBlpCLWsLddLHTDVFZWS8PvZEeAZG/view"
          target="_blank"
          rel="noreferrer"
        >
          <HiDocumentText />
          RESUME
        </a>
      </div>

      {/* For Mobile Screen */}
      <div>
        <span onClick={handleClicked}>
          {clicked ? <FaTimes /> : <FaBars />}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
