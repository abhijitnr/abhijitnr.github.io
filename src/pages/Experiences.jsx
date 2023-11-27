import { motion } from "framer-motion";

import { MdWork } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { PiTimerFill } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";

const Experiences = () => {
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
    <section id="experiences">
      <motion.h1
        {...options}
        animate={{
          borderRadius: ["50%"],
        }}
        transition={{
          delay: 0.2,
        }}
      >
        Work <span>Experiences</span>
      </motion.h1>
      <div>
        <motion.h6
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <MdWork />
          Junior Developer
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
          <HiBuildingOffice2 /> Organization:
          <span>Atula Technologies Ltd.</span>
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
          <FaLocationDot /> Address:
          <span>High Wycombe HP11 1BG, United Kingdom</span>
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
          <PiTimerFill /> Duration: <span>11th July 2023 – Present</span>
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
            delay: 0.7,
          }}
        >
          <FaLaptopCode /> Place of Work: <span>Remote (Work from Home)</span>
        </motion.p>
      </div>

      <div>
        <motion.h6
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <MdWork />
          Trainee Developer
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
          <HiBuildingOffice2 /> Organization:
          <span>Atula Technologies Ltd.</span>
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
          <FaLocationDot /> Address:
          <span>High Wycombe HP11 1BG, United Kingdom</span>
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
          <PiTimerFill /> Duration:{" "}
          <span>10th April 2023 – 10th July 2023</span>
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
            delay: 0.7,
          }}
        >
          <FaLaptopCode /> Place of Work: <span>Remote (Work from Home)</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Experiences;
