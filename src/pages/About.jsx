import { motion } from "framer-motion";

const About = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="about-me">
      <motion.h1
        {...options}
        animate={{
          borderRadius: ["50%"],
        }}
        transition={{
          delay: 0.2,
        }}
      >
        About <span>Me</span>
      </motion.h1>
      <div>
        <motion.h5
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          Hi, I am <span>Abhijit Biswas</span>
        </motion.h5>
        <motion.p
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
          }}
        >
          As an aspiring <span>full stack web developer</span>, I am highly
          motivated and passionate about creating web applications using a wide
          range of tools in the MERN stack. I possess in-depth knowledge of both
          <span> frontend</span> and <span> backend</span> development, allowing
          me to write efficient and effective code. Having completed my training
          at <span> Masai School</span>, I am eager to secure a job in a
          <span> technology-driven organization</span> that values both my
          skills and my desire to learn and grow.
        </motion.p>

        <motion.p
          initial={{
            x: "100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          My experience and expertise in <span>MERN</span> stack development
          have equipped me with the necessary skills to tackle
          <span> complex</span> coding challenges and build
          <span> scalable</span> web applications. As a result, I am
          <span> confident</span> in my ability to contribute to any project and
          to learn <span>new technologies</span> quickly.
        </motion.p>

        <motion.p
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
          }}
        >
          In addition to my technical skills, I am also a
          <span> team player</span> who is able to collaborate effectively with
          others to achieve shared goals. I am committed to
          <span> continuous</span> learning and <span>improvement</span> and am
          eager to work in an environment that supports and
          <span> encourages professional</span> development.
        </motion.p>

        <motion.p
          initial={{
            x: "100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          Overall, I am <span>seeking</span> a <span>challenging</span> and
          rewarding role in a company that will allow me to leverage my skills
          and knowledge to build <span>innovative</span> web applications while
          also providing <span>opportunities</span> for personal and
          professional growth.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
