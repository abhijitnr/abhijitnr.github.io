import { Box, Image } from "@chakra-ui/react";
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

{
  /* <img
  src="https://github-readme-streak-stats.herokuapp.com/?user=abhijitnr&theme=dark"
  alt="Github Contributions"
/>; */
}

{
  /* <img
  src="https://github-readme-stats.vercel.app/api?username=abhijitnr&theme=dark&show_icons=true&count_private=true"
  alt="Github Stats"
/>; */
}

const GitStats = () => {
  return (
    <>
      <Desktop>
        <Box
          width="70%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingTop="50px"
        >
          <Box>
            <Image
              src="https://github-readme-streak-stats.herokuapp.com/?user=abhijitnr&theme=dark"
              alt="Github Contributions"
            />
          </Box>
          <Box>
            <Image
              src="https://github-readme-stats.vercel.app/api?username=abhijitnr&theme=dark&show_icons=true&count_private=true"
              alt="Github Stats"
            />
          </Box>
        </Box>
      </Desktop>

      <Tablet>
        <Box
          width="70%"
          margin="auto"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Image
              src="https://github-readme-streak-stats.herokuapp.com/?user=abhijitnr&theme=dark"
              alt="Github Contributions"
            />
          </Box>
          <Box marginTop="20px" marginBottom="50px">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=abhijitnr&theme=dark&show_icons=true&count_private=true"
              alt="Github Stats"
            />
          </Box>
        </Box>
      </Tablet>

      <Mobile>
        <Box
          width="70%"
          margin="auto"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Image
              src="https://github-readme-streak-stats.herokuapp.com/?user=abhijitnr&theme=dark"
              alt="Github Contributions"
            />
          </Box>
          <Box marginTop="20px" marginBottom="50px">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=abhijitnr&theme=dark&show_icons=true&count_private=true"
              alt="Github Stats"
            />
          </Box>
        </Box>
      </Mobile>
    </>
  );
};

export default GitStats;
