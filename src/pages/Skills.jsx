import html from "../assets/tech_stacks/html.png";
import css from "../assets/tech_stacks/css.png";
import javascript from "../assets/tech_stacks/javascript.png";
import react from "../assets/tech_stacks/react.png";
import redux from "../assets/tech_stacks/redux.png";
import sass from "../assets/tech_stacks/sass.svg";
import bootstrap from "../assets/tech_stacks/bootstrap.png";
import mui from "../assets/tech_stacks/mui.png";
import chakra from "../assets/tech_stacks/chakra.jpg";
import mongodb from "../assets/tech_stacks/mongodb.png";
import nodejs from "../assets/tech_stacks/node.webp";
import express from "../assets/tech_stacks/express.webp";

import collaborative from "../assets/soft_skills/collabrative.png";
import communication from "../assets/soft_skills/communication.png";
import creative_thinking from "../assets/soft_skills/creative_thinking.png";
import problem_solving from "../assets/soft_skills/problem_solving.png";
import time_management from "../assets/soft_skills/time_management.png";

import vscode from "../assets/tools/vscode.png";
import github from "../assets/tools/github.png";
import postman from "../assets/tools/postman.png";
import code_sandbox from "../assets/tools/code_sandbox.png";
import netlify from "../assets/tools/netlify.png";
import photoshop from "../assets/tools/photoshop.png";
import illustrator from "../assets/tools/illustrator.png";
import git from "../assets/tools/git.png";

const Skills = () => {
  return (
    <section id="skills">
      <h1>
        Skills <span>& Tools</span>
      </h1>

      {/* Technical Skills */}
      <div className="skills_headings">
        <span>Technical Skills</span>
      </div>

      <section>
        {/* HTML5 */}
        <div>
          <img src={html} alt="HTML5" />
          <span>HTML5</span>
        </div>
        {/* CSS3 */}
        <div>
          <img src={css} alt="CSS3" />
          <span>CSS3</span>
        </div>
        {/* JavaScript */}
        <div>
          <img src={javascript} alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        {/* ReactJS */}
        <div>
          <img src={react} alt="React" />
          <span>React</span>
        </div>
        {/* Redux */}
        <div>
          <img src={redux} alt="Redux" />
          <span>Redux</span>
        </div>
        {/* Scss */}
        <div>
          <img src={sass} alt="Sass" />
          <span>Sass</span>
        </div>
        {/* Bootstrap */}
        <div>
          <img src={bootstrap} alt="Bootstrap" />
          <span>Bootstrap</span>
        </div>
        {/* Material-UI */}
        <div>
          <img src={mui} alt="Material-UI" />
          <span>Material-UI</span>
        </div>
        {/* Chakra-UI */}
        <div>
          <img src={chakra} alt="Chakra-UI" />
          <span>Chakra-UI</span>
        </div>
        {/* MongoDB */}
        <div>
          <img src={mongodb} alt="MongoDB" />
          <span>MongoDB</span>
        </div>
        {/* NodeJS */}
        <div>
          <img src={nodejs} alt="Node.js" />
          <span>Node.js</span>
        </div>
        {/* ExpressJS */}
        <div>
          <img src={express} alt="Express.js" />
          <span>Express.js</span>
        </div>
      </section>

      {/* Soft Skills */}
      <div className="skills_headings">
        <span>Soft Skills</span>
      </div>

      <section>
        {/* Collaborative */}
        <div>
          <img src={collaborative} alt="Collaborative" />
          <span>Collaborative</span>
        </div>

        {/* Communication */}
        <div>
          <img src={communication} alt="Communication" />
          <span>Communication</span>
        </div>

        {/* Creative Thinking */}
        <div>
          <img src={creative_thinking} alt="Creative Thinking" />
          <span>Creative Thinking</span>
        </div>

        {/* Problem Solving */}
        <div>
          <img src={problem_solving} alt="Problem Solving" />
          <span>Problem Solving</span>
        </div>

        {/* Time Management */}
        <div>
          <img src={time_management} alt="Time Management" />
          <span>Time Management</span>
        </div>
      </section>

      {/* Tools */}
      <div className="skills_headings">
        <span>Tools</span>
      </div>

      <section>
        {/* VS Code */}
        <div>
          <img src={vscode} alt="VS Code" />
          <span>VS Code</span>
        </div>

        {/* GitHub */}
        <div>
          <img src={github} alt="GitHub" />
          <span>GitHub</span>
        </div>

        {/* Postman */}
        <div>
          <img src={postman} alt="Postman" />
          <span>Postman</span>
        </div>

        {/* CodeSandbox */}
        <div>
          <img src={code_sandbox} alt="CodeSandbox" />
          <span>CodeSandbox</span>
        </div>

        {/* Netlify */}
        <div>
          <img src={netlify} alt="Netlify" />
          <span>Netlify</span>
        </div>

        {/* Adobe Photoshop */}
        <div>
          <img src={photoshop} alt="Adobe Photoshop" />
          <span>Adobe Photoshop</span>
        </div>

        {/* Adobe Illustrator */}
        <div>
          <img src={illustrator} alt="Adobe Illustrator" />
          <span>Adobe Illustrator</span>
        </div>

        {/* Git */}
        <div>
          <img src={git} alt="Git" />
          <span>Git</span>
        </div>
      </section>
    </section>
  );
};

export default Skills;
