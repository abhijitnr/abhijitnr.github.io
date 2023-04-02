import abhijit_biswas from "../assets/abhijit_biswas.png";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import { FiDownload } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  return (
    <section id="home">
      {/* Info */}
      <div>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Hey, I am
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Abhijit Biswas
        </motion.span>
        <Typewriter
          options={{
            strings: [
              "Full Stack Web Developer.",
              "Front-End Developer.",
              "React Enthusiastic.",
              "Team Player.",
              "Problem Solver.",
              "Fast Learner.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        {/* Social Media & Resume Download Button */}
        <div>
          {/* Resume Download Button */}
          <a href="Abhijit_Biswas_Resume.pdf" download>
            <motion.button
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              Resume <FiDownload />
            </motion.button>
          </a>

          {/* Mail */}
          <motion.a
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            href="mailto:abhijitbiswas8859@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <IoMdMail />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            href="https://www.linkedin.com/in/abhijit-biswas-3b6586162/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </motion.a>

          {/* Github */}
          <motion.a
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            href="https://github.com/abhijitnr"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </motion.a>
        </div>
      </div>

      {/* Photo */}
      <div>
        <motion.img
          animate={{
            scale: [1, 1.1, 1.1, 1, 1],
            rotate: [0, 90, 180, 90, 0],
            borderRadius: ["50%", "0%", "50%", "0%", "50%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 2,
          }}
          whileHover={{ scale: [null, 1.2, 1.1] }}
          src={abhijit_biswas}
          alt="Abhijit Biswas"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Home;
