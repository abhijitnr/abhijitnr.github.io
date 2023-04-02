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

import { motion } from "framer-motion";

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
        <motion.a
          className="active"
          href="#home"
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <AiFillHome />
          HOME
        </motion.a>

        {/* About Me */}
        <motion.a
          href="#about-me"
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <MdAccountCircle />
          ABOUT ME
        </motion.a>

        {/* Github Stats */}

        <motion.a
          href="#github-stats"
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <AiFillGithub />
          GITHUB STATS
        </motion.a>

        {/* Tech Stacks */}

        <motion.a
          href="#skills"
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <AiFillStar />
          SKILLS
        </motion.a>

        {/* Projects */}

        <motion.a
          href="#projects"
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <AiFillProject />
          PROJECTS
        </motion.a>

        {/* Contact */}

        <motion.a
          href="#contact"
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <AiFillPhone />
          CONTACT
        </motion.a>

        {/* Resume */}

        <motion.a
          whileHover={{ scale: [null, 1.3, 1.2] }}
          transition={{ duration: 0.3 }}
          href="https://drive.google.com/file/d/1jaQwBlpCLWsLddLHTDVFZWS8PvZEeAZG/view"
          target="_blank"
          rel="noreferrer"
        >
          <HiDocumentText />
          RESUME
        </motion.a>
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
