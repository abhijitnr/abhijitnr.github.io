import { motion } from "framer-motion";

import { IoSchoolSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiTimerFill } from "react-icons/pi";

const Education = () => {
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
    <section id="education">
      <motion.h1
        {...options}
        animate={{
          borderRadius: ["50%"],
        }}
        transition={{
          delay: 0.2,
        }}
      >
        Education <span>Qualification</span>
      </motion.h1>
      <div>
        <motion.h6
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <IoSchoolSharp /> Full Stack Web Development (Remote)
        </motion.h6>
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
          <FaSchool /> Masai School
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
          <FaLocationDot /> Bengaluru, Karnataka
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
            delay: 0.5,
          }}
        >
          <PiTimerFill /> Apr 2022 – Jan 2023
        </motion.p>
      </div>

      <div>
        <motion.h6
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <IoSchoolSharp /> Higher Secondary Education (Science)
        </motion.h6>
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
          <FaSchool /> Deshabandhu Vidyapith HS School
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
          <FaLocationDot /> Hojai, Assam
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
            delay: 0.5,
          }}
        >
          <PiTimerFill /> May 2017 – Jun 2019
        </motion.p>
      </div>
    </section>
  );
};

export default Education;
