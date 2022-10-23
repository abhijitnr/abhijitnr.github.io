import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./SideIcons.module.css";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1008 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1007 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return isMobile ? children : null;
};

function SideBarIcons() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Desktop>
        <Box className={styles.sideicon}>
          <a
            className={styles.SocialIcon}
            target="_blank"
            href="mailto:abhijitbiswas8859@gmail.com"
          >
            <FiMail size={30} />
          </a>
          <a
            className={styles.SocialIcon}
            target="_blank"
            href="https://github.com/abhijitnr"
          >
            <FiGithub size={30} />
          </a>
          <a
            className={styles.SocialIcon}
            target="_blank"
            href="https://www.linkedin.com/in/abhijit-biswas-3b6586162/"
          >
            <FiLinkedin size={30} />
          </a>
          <Box
            bgColor={colorMode === "light" ? "black" : "white"}
            className={styles.line}
          ></Box>
        </Box>
      </Desktop>
      <Tablet>
        <Box className={styles.sideicon}>
          <a
            className={styles.SocialIcon}
            target="_blank"
            href="mailto:abhijitbiswas8859@gmail.com"
          >
            <FiMail size={30} />
          </a>
          <a
            className={styles.SocialIcon}
            target="_blank"
            href="https://github.com/abhijitnr"
          >
            <FiGithub size={30} />
          </a>
          <a
            className={styles.SocialIcon}
            target="_blank"
            href="https://www.linkedin.com/in/abhijit-biswas-3b6586162/"
          >
            <FiLinkedin size={30} />
          </a>
          <Box
            bgColor={colorMode === "light" ? "black" : "white"}
            className={styles.line}
          ></Box>
        </Box>
      </Tablet>
      <Mobile>
        <Box className={styles.sideicon}>
          <a
            className={styles.SocialIcon}
            target="_blank"
            href="mailto:abhijitbiswas8859@gmail.com"
          >
            <FiMail size={20} />
          </a>
          <a
            className={styles.SocialIcon}
            target="_blank"
            href="https://github.com/abhijitnr"
          >
            <FiGithub size={20} />
          </a>
          <a
            className={styles.SocialIcon}
            target="_blank"
            href="https://www.linkedin.com/in/abhijit-biswas-3b6586162/"
          >
            <FiLinkedin size={20} />
          </a>
          <Box
            bgColor={colorMode === "light" ? "black" : "white"}
            className={styles.line}
          ></Box>
        </Box>
      </Mobile>
    </>
  );
}

export default SideBarIcons;
