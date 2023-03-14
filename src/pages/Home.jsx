import abhijit_biswas from "../assets/abhijit_biswas.png";
import Typewriter from "typewriter-effect";
import { FiDownload } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  return (
    <section id="home">
      {/* Info */}
      <div>
        <span>Hey, I am</span>
        <span>Abhijit Biswas</span>
        <Typewriter
          options={{
            strings: [
              "Full Stack Web Developer.",
              "Front-End Developer.",
              "React Developer.",
              "MERN Stack Developer.",
              "A Tech Enthusiastic.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        {/* Social Media & Resume Download Button */}
        <div>
          {/* Resume Download Button */}
          <a href="Abhijit_Biswas_Resume.pdf" download>
            <button>
              Resume <FiDownload />
            </button>
          </a>

          {/* Mail */}
          <a
            href="mailto:abhijitbiswas8859@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <IoMdMail />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abhijit-biswas-3b6586162/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>

          {/* Github */}
          <a
            href="https://github.com/abhijitnr"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
      </div>

      {/* Photo */}
      <div>
        <img src={abhijit_biswas} alt="Abhijit Biswas" />
      </div>
    </section>
  );
};

export default Home;
