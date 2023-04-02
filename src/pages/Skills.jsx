import { motion } from "framer-motion";

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
  const technicalSkills = [
    { tech: html, name: "HTML5" },
    { tech: css, name: "CSS3" },
    { tech: javascript, name: "JavaScript" },
    { tech: react, name: "React" },
    { tech: redux, name: "Redux" },
    { tech: sass, name: "Sass" },
    { tech: bootstrap, name: "Bootstrap" },
    { tech: mui, name: "Material-UI" },
    { tech: chakra, name: "Chakra-UI" },
    { tech: mongodb, name: "MongoDB" },
    { tech: nodejs, name: "Node.js" },
    { tech: express, name: "Express.js" },
  ];

  const softSkills = [
    { soft: collaborative, name: "Collaborative" },
    { soft: communication, name: "Communication" },
    { soft: creative_thinking, name: "Creative Thinking" },
    { soft: problem_solving, name: "Problem Solving" },
    { soft: time_management, name: "Time Management" },
  ];

  const tools = [
    { tool: vscode, name: "VS Code" },
    { tool: github, name: "GitHub" },
    { tool: postman, name: "Postman" },
    { tool: code_sandbox, name: "CodeSandbox" },
    { tool: netlify, name: "Netlify" },
    { tool: photoshop, name: "Adobe Photoshop" },
    { tool: illustrator, name: "Adobe Illustrator" },
    { tool: git, name: "Git" },
  ];

  return (
    <section id="skills">
      <h1>
        Skills <span>& Tools</span>
      </h1>

      {/* Technical Skills */}
      <div className="skills_headings">
        <motion.span
          whileHover={{ scale: [null, 1.3, 1.2] }}
          transition={{ duration: 0.3 }}
        >
          Technical Skills
        </motion.span>
      </div>

      <section>
        {technicalSkills.map((item) => (
          <motion.div
            whileHover={{ scale: [null, 0.8, 0.9] }}
            transition={{ duration: 0.3 }}
          >
            <img src={item.tech} alt={item.name} />
            <span>{item.name}</span>
          </motion.div>
        ))}
      </section>

      {/* Soft Skills */}
      <div className="skills_headings">
        <motion.span
          whileHover={{ scale: [null, 1.3, 1.2] }}
          transition={{ duration: 0.3 }}
        >
          Soft Skills
        </motion.span>
      </div>

      <section>
        {softSkills.map((item) => (
          <motion.div
            whileHover={{ scale: [null, 0.8, 0.9] }}
            transition={{ duration: 0.3 }}
          >
            <img src={item.soft} alt={item.name} />
            <span>{item.name}</span>
          </motion.div>
        ))}
      </section>

      {/* Tools */}
      <div className="skills_headings">
        <motion.span
          whileHover={{ scale: [null, 1.3, 1.2] }}
          transition={{ duration: 0.3 }}
        >
          Tools
        </motion.span>
      </div>

      <section>
        {tools.map((item) => (
          <motion.div
            whileHover={{ scale: [null, 0.8, 0.9] }}
            transition={{ duration: 0.3 }}
          >
            <img src={item.tool} alt={item.name} />
            <span>{item.name}</span>
          </motion.div>
        ))}
      </section>
    </section>
  );
};

export default Skills;
