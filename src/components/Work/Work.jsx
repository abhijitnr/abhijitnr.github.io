import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import styles from "./work.module.css";
import { GrGithub } from "react-icons/gr";
import { GoLinkExternal } from "react-icons/go";
import SsenseClone from "../../Assets/projectImg/ssense-clone.PNG";
import TogglTrack from "../../Assets/projectImg/toggl-clone.PNG";
import KindMealClone from "../../Assets/projectImg/kindmeal-clone.PNG";
import MiniYoutube from "../../Assets/projectImg/mini-youtube.PNG";
import WheatherApp from "../../Assets/projectImg/wheather-app.PNG";
import todoApp from "../../Assets/projectImg/todo-app.png";
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

export const Work = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Desktop>
        <Box
          fontFamily="poppins"
          mt="-250px"
          pt={10}
          pb={20}
          bg={colorMode === "light" ? "#d0bae6" : "#0f1624"}
          textAlign="center"
        >
          <Heading
            data-aos="fade-up"
            className={styles.Heading}
            size="2xl"
            fontFamily="poppins"
          >
            Some <span style={{ color: "#d60916" }}>projects</span> I've Built
          </Heading>
          <Center>
            <SimpleGrid
              data-aos="fade-up"
              w="75%"
              ml={20}
              mt={20}
              mr={10}
              columns={[1, 2, 3]}
              spacing="60px"
            >
              <Box
                className={styles.boxes}
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={SsenseClone}
                ></Image>
                <Heading mt={3} size="md">
                  Ssense.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    SSENSE is a multi-brand retailer based in Montreal, Canada
                    specialising in the sale of designer fashion and high end
                    streetwear. It was founded as an e-commerce platform in 2003
                    by three brothers: Rami, Bassel and Firas Atallah.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collabrative project, built in 5 days by a team of 3
                    members. Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={9} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/SSENCE-Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://ssense-clones.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={KindMealClone}
                ></Image>
                <Heading mt={3} size="md">
                  KindMeals.my Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Malaysia's No.1 meat-free lifestyle platform. Grab free
                    coupons for exciting meal deals, discover delicious food and
                    share delightful moments with foods and others delicious
                    recipes.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | React Js | Chakra UI | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Individual project, built in 5 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={7} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/KindMeals.my-Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://rct-101-construct-week-project.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={WheatherApp}
                ></Image>
                <Heading mt={3} size="md">
                  Weather App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    You can see your current Weather or you can weather search
                    by your city.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript | weather API
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project, build in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="70px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/wheather-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://weather-app-by-abhijit.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>{" "}
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={TogglTrack}
                ></Image>
                <Heading mt={3} size="md">
                  TogglTrack Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Toggl Track is a time tracking software operated by Toggl
                    OÜ, headquartered in Tallinn, Estonia, that offers online
                    time tracking and reporting services through their website
                    along with mobile and desktop applications. Toggl Track
                    tracks time blocks, optionally labeled with a task, a
                    project, and tags.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collabrative project, built in 5 days by a team of 5
                    members. Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/Toggl.com-Track-Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://toggl-track-by-gas-face-3608.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={MiniYoutube}
                ></Image>
                <Heading mt={3} size="md">
                  Mini Youtube App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    This is mini youtube app. In this app you can Search and see
                    the search result and also you can play the video as per
                    your search results
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project, build in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/mini-youtube-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://mini-youtube-by-abhijit.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={todoApp}
                ></Image>
                <Heading mt={3} size="md">
                  ToDo App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    This is a fullstack ToDo App. In this ToDo App you can
                    easily add a new ToDo, update the ToDo and also able to
                    delete the ToDo.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    MongoDB | ExpressJS | React | NodeJS
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project, build in 1 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/MERN-STACK-TODO-APP"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://abhijit-fullstack-todo-app.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
            </SimpleGrid>
          </Center>
        </Box>
      </Desktop>
      <Tablet>
        <Box
          fontFamily="poppins"
          pt={5}
          pb={20}
          bg={colorMode === "light" ? "#d0bae6" : "#0f1624"}
          textAlign="center"
        >
          <Heading
            data-aos="fade-up"
            className={styles.TabHeading}
            size="xl"
            fontFamily="poppins"
          >
            Some <span style={{ color: "#d60916" }}>projects</span> I've Built
          </Heading>
          <Center>
            <SimpleGrid
              data-aos="fade-up"
              w="75%"
              mt={20}
              columns={2}
              spacing="60px"
            >
              <Box
                className={styles.boxes}
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={SsenseClone}
                ></Image>
                <Heading mt={3} size="md">
                  Ssense.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    SSENSE is a multi-brand retailer based in Montreal, Canada
                    specialising in the sale of designer fashion and high end
                    streetwear. It was founded as an e-commerce platform in 2003
                    by three brothers: Rami, Bassel and Firas Atallah.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collabrative project, built in 5 days by a team of 3
                    members.Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={9} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/SSENCE-Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://ssense-clones.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={KindMealClone}
                ></Image>
                <Heading mt={3} size="md">
                  KindMeals.my Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Malaysia's No.1 meat-free lifestyle platform. Grab free
                    coupons for exciting meal deals, discover delicious food and
                    share delightful moments with foods and others delicious
                    recipes.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | React Js | Chakra UI | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Individual project, built in 5 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/KindMeals.my-Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://rct-101-construct-week-project.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={WheatherApp}
                ></Image>
                <Heading mt={3} size="md">
                  Weather App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    You can see your current Weather or you can weather search
                    by your city.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript | weather API
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project, build in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="70px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/wheather-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://weather-app-by-abhijit.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>{" "}
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={TogglTrack}
                ></Image>
                <Heading mt={3} size="md">
                  TogglTrack Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Toggl Track is a time tracking software operated by Toggl
                    OÜ, headquartered in Tallinn, Estonia, that offers online
                    time tracking and reporting services through their website
                    along with mobile and desktop applications. Toggl Track
                    tracks time blocks, optionally labeled with a task, a
                    project, and tags.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collabrative project, built in 5 days by a team of 5
                    members. Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/Toggl.com-Track-Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://toggl-track-by-gas-face-3608.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={MiniYoutube}
                ></Image>
                <Heading mt={3} size="md">
                  Mini Youtube App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    This is mini youtube app. In this app you can Search and see
                    the search result and also you can play the video as per
                    your search results
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project, build in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/mini-youtube-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://mini-youtube-by-abhijit.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={todoApp}
                ></Image>
                <Heading mt={3} size="md">
                  ToDo App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    This is a fullstack ToDo App. In this ToDo App you can
                    easily add a new ToDo, update the ToDo and also able to
                    delete the ToDo.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    MongoDB | ExpressJS | React | NodeJS
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project, build in 1 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/MERN-STACK-TODO-APP"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://abhijit-fullstack-todo-app.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
            </SimpleGrid>
          </Center>
        </Box>
      </Tablet>
      <Mobile>
        <Box
          fontFamily="poppins"
          pt={5}
          pb={20}
          bg={colorMode === "light" ? "#d0bae6" : "#0f1624"}
          textAlign="center"
        >
          <Heading
            data-aos="fade-up"
            className={styles.MobHeading}
            size="xl"
            fontFamily="poppins"
          >
            Some <span style={{ color: "#d60916" }}>projects</span> I've Built
          </Heading>
          <Center>
            <SimpleGrid
              data-aos="fade-up"
              w="75%"
              mt={25}
              columns={1}
              spacing="60px"
            >
              <Box
                className={styles.boxes}
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={SsenseClone}
                ></Image>
                <Heading mt={3} size="md">
                  Ssense.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    SSENSE is a multi-brand retailer based in Montreal, Canada
                    specialising in the sale of designer fashion and high end
                    streetwear. It was founded as an e-commerce platform in 2003
                    by three brothers: Rami, Bassel and Firas Atallah.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collabrative project, built in 5 days by a team of 3
                    members.Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={9} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/SSENCE-Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://ssense-clones.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={KindMealClone}
                ></Image>
                <Heading mt={3} size="md">
                  KindMeals.my Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Malaysia's No.1 meat-free lifestyle platform. Grab free
                    coupons for exciting meal deals, discover delicious food and
                    share delightful moments with foods and others delicious
                    recipes.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | React Js | Chakra UI | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Individual project, built in 5 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={7} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/KindMeals.my-Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://rct-101-construct-week-project.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={WheatherApp}
                ></Image>
                <Heading mt={3} size="md">
                  Weather App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    You can see your current Weather or you can weather search
                    by your city.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript | weather API
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project, build in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="70px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/wheather-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://weather-app-by-abhijit.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>{" "}
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={TogglTrack}
                ></Image>
                <Heading mt={3} size="md">
                  TogglTrack Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Toggl Track is a time tracking software operated by Toggl
                    OÜ, headquartered in Tallinn, Estonia, that offers online
                    time tracking and reporting services through their website
                    along with mobile and desktop applications. Toggl Track
                    tracks time blocks, optionally labeled with a task, a
                    project, and tags.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collabrative project, built in 5 days by a team of 5
                    members. Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/Toggl.com-Track-Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://toggl-track-by-gas-face-3608.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={MiniYoutube}
                ></Image>
                <Heading mt={3} size="md">
                  Mini Youtube App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    This is mini youtube app. In this app you can Search and see
                    the search result and also you can play the video as per
                    your search results
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project, build in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/mini-youtube-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://mini-youtube-by-abhijit.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#052296" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={todoApp}
                ></Image>
                <Heading mt={3} size="md">
                  ToDo App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    This is a fullstack ToDo App. In this ToDo App you can
                    easily add a new ToDo, update the ToDo and also able to
                    delete the ToDo.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#d60916", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    MongoDB | ExpressJS | React | NodeJS
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project, build in 1 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/abhijitnr/MERN-STACK-TODO-APP"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://abhijit-fullstack-todo-app.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
            </SimpleGrid>
          </Center>
        </Box>
      </Mobile>
    </>
  );
};
