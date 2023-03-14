import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { BsGithub, BsEyeFill } from "react-icons/bs";

import html from "../assets/tech_stacks/html.png";
import css from "../assets/tech_stacks/css.png";
import javascript from "../assets/tech_stacks/javascript.png";
import react from "../assets/tech_stacks/react.png";
import mui from "../assets/tech_stacks/mui.png";
import chakra from "../assets/tech_stacks/chakra.jpg";
import mongodb from "../assets/tech_stacks/mongodb.png";
import nodejs from "../assets/tech_stacks/node.webp";
import express from "../assets/tech_stacks/express.webp";

// Beauty Bebo Clone
import img1 from "../assets/projects/beauty_bebo/1.png";
import img2 from "../assets/projects/beauty_bebo/2.png";
import img3 from "../assets/projects/beauty_bebo/3.png";
import img4 from "../assets/projects/beauty_bebo/4.png";
import img5 from "../assets/projects/beauty_bebo/5.png";
import img6 from "../assets/projects/beauty_bebo/6.png";

// SSENSE Clone
import ss1 from "../assets/projects/ssense/1.png";
import ss2 from "../assets/projects/ssense/2.png";
import ss3 from "../assets/projects/ssense/3.png";
import ss4 from "../assets/projects/ssense/4.png";
import ss5 from "../assets/projects/ssense/5.png";
import ss6 from "../assets/projects/ssense/6.png";

// ToDo App
import t1 from "../assets/projects/todo_app/1.png";
import t2 from "../assets/projects/todo_app/2.png";
import t3 from "../assets/projects/todo_app/3.png";

// TogglTrack Clone
import tg1 from "../assets/projects/toggl_track/1.png";
import tg2 from "../assets/projects/toggl_track/2.png";
import tg3 from "../assets/projects/toggl_track/3.png";

const Projects = () => {
  const project_one = [img1, img2, img3, img4, img5, img6];
  const project_two = [ss1, ss2, ss3, ss4, ss5, ss6];
  const project_three = [t1, t2, t3, t1, t2, t3];
  const project_four = [tg1, tg2, tg3, tg1, tg2, tg3];

  return (
    <section id="projects">
      <h1>
        Some <span>Projects</span> I've Built
      </h1>

      <div>
        {/* Project 1 */}
        <div>
          {/* Images */}
          <div>
            <Carousel autoPlay infiniteLoop>
              {project_one.map((item, i) => (
                <img
                  className="slider_img"
                  key={i}
                  src={item}
                  alt="Beauty Bebo Clone"
                />
              ))}
            </Carousel>
          </div>
          {/* Content */}
          <div className="content">
            <h1>BEAUTYBEBO.COM CLONE</h1>

            <p>
              Beauty Bebo is India's fastest-growing online store for makeup,
              skincare, haircare, personal care, mom and baby care, fragrance,
              and Ayurvedic products.
            </p>

            <h2>Tech Stacks</h2>
            <div>
              <img src={react} alt="React" />
              <img src={nodejs} alt="Node.js" />
              <img src={mongodb} alt="MongoDB" />
              <img src={express} alt="Express.js" />
              <img src={chakra} alt="Chakra-UI" />
              <img src={mui} alt="Material-UI" />
            </div>

            <p>
              A collaborative project was built by a team of 4 and executed in 6
              days.
            </p>

            <div>
              <a
                href="https://github.com/abhijitnr/beautybebo.com-clone-MERN"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                GitHub
              </a>
              <a
                href="https://prettyinpink.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill />
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div>
          {/* Images */}
          <div>
            <Carousel autoPlay infiniteLoop>
              {project_two.map((item, i) => (
                <img
                  className="slider_img"
                  key={i}
                  src={item}
                  alt="SSENSE Clone"
                />
              ))}
            </Carousel>
          </div>
          {/* Content */}
          <div className="content">
            <h1>SSENSE.COM CLONE</h1>

            <p>
              SSENSE is a Montreal-based multi-brand retailer that specializes
              in designer fashion and high-end streetwear. Founded in 2003 by
              three brothers - Rami, Bassel, and Firas Atallah - as an
              e-commerce platform.
            </p>

            <h2>Tech Stacks</h2>
            <div>
              <img src={html} alt="HTML5" />
              <img src={css} alt="CSS3" />
              <img src={javascript} alt="JavaScript" />
            </div>

            <p>
              A collaborative project was built by a team of 3 and executed in 5
              days.
            </p>

            <div>
              <a
                href="https://github.com/abhijitnr/SSENCE-Clone"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                GitHub
              </a>
              <a
                href="https://ssense-clones.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill />
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Peoject 3 */}
        <div>
          {/* Images */}
          <div>
            <Carousel autoPlay infiniteLoop>
              {project_three.map((item, i) => (
                <img className="slider_img" key={i} src={item} alt="ToDo App" />
              ))}
            </Carousel>
          </div>
          {/* Content */}
          <div className="content">
            <h1>ToDo App</h1>

            <p>
              A todo app is a computer or mobile application designed to help
              users keep track of their daily tasks, goals, and schedules. This
              is a full-stack ToDo app that allows users to easily add, update
              and delete tasks.
            </p>

            <h2>Tech Stacks</h2>
            <div>
              <img src={react} alt="React" />
              <img src={nodejs} alt="Node.js" />
              <img src={mongodb} alt="MongoDB" />
              <img src={express} alt="Express.js" />
              <img src={css} alt="CSS3" />
            </div>

            <p>An individual project was completed in 2 days.</p>

            <div>
              <a
                href="https://github.com/abhijitnr/MERN-STACK-TODO-APP"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                GitHub
              </a>
              <a
                href="https://abhijit-fullstack-todo-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill />
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div>
          {/* Images */}
          <div>
            <Carousel autoPlay infiniteLoop>
              {project_four.map((item, i) => (
                <img
                  className="slider_img"
                  key={i}
                  src={item}
                  alt="TogglTrack Clone"
                />
              ))}
            </Carousel>
          </div>
          {/* Content */}
          <div className="content">
            <h1>TOGGL.COM CLONE</h1>

            <p>
              Toggl Track is an Estonian time tracking software that provides
              online time tracking and reporting services through their website,
              mobile, and desktop applications. It tracks time blocks that can
              be labeled with tasks, projects.
            </p>

            <h2>Tech Stacks</h2>
            <div>
              <img src={html} alt="HTML5" />
              <img src={css} alt="CSS3" />
              <img src={javascript} alt="JavaScript" />
            </div>

            <p>
              A team of 5 collaborated on a project which was completed in 5
              days.
            </p>

            <div>
              <a
                href="https://github.com/abhijitnr/Toggl.com-Track-Clone"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                GitHub
              </a>
              <a
                href="https://toggl-track-by-gas-face-3608.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill />
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
