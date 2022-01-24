import React, { useState, useRef } from "react";
import Image from "next/image";
import LinkNext from "next/link";
import styles from "styles/face-match/HowItWork.module.scss";

import {
  Box,
  SimpleGrid,
  Heading,
  OrderedList,
  ListItem,
  Icon,
  Link,
} from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

import Poster from "public/images/poster.svg";
import Play from "public/images/play.svg";

const HowDoesItWork: React.FC = () => {
  const videoRef = useRef<any>(null);
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    console.log(videoRef);
    videoRef && videoRef.current && videoRef.current.play();
    setPlay(true);
  };

  return (
    <Box w="100%" overflow="hidden" backgroundColor="#f8faff">
      <Box
        maxW="1440px"
        margin="0 auto"
        overflow="hidden"
        padding={{ base: "40px 25px", xl: "150px 125px" }}
      >
        <SimpleGrid columns={{ lg: 2 }} spacing="30px">
          <Box
            w="100%"
            backgroundColor="#fff"
            boxSizing="border-box"
            padding="42px 20px 46px"
            alignItems="center"
            display={{ base: "none", md: "flex" }}
          >
            <Box className={styles.viewBackground}>
              <Box className={styles.viewVideo}>
                {!play && (
                  <Box
                    position="absolute"
                    zIndex="3"
                    top={{ base: 0, sm: "15px" }}
                    left="0px"
                    right="0px"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    bottom={{ base: 0, sm: "30px" }}
                  >
                    <a onClick={handlePlay}>
                      <Image alt="" src={Play} priority />
                    </a>
                  </Box>
                )}

                {!play && (
                  <Box className={styles.viewPoster}>
                    <Image alt="" src={Poster} priority />
                  </Box>
                )}

                <video width="100%" controls ref={videoRef}>
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support HTML video.
                </video>
              </Box>
            </Box>
          </Box>

          <Box paddingLeft={{ base: "0", md: "30px", lg: "60px", xl: "110px" }}>
            <Heading
              as="h3"
              fontStyle="normal"
              fontWeight="600"
              fontSize={{ base: "28px", md: "40px" }}
              lineHeight={{ base: "35px", md: "50px" }}
              color="#4959e7"
            >
              How{" "}
              <Heading as="span" color="#110f24">
                does it work?
              </Heading>
            </Heading>

            <OrderedList
              padding={{ base: "15px 0", md: "25px 0" }}
              margin="0"
              marginLeft={{ base: "20px" }}
            >
              <ListItem
                fontSize={{ base: "14px", md: "18px" }}
                fontStyle="normal"
                fontWeight="normal"
                lineHeight={{ base: "22px", md: "28px" }}
                marginBottom="10px"
                color="#6C6B74"
              >
                Send an SMS to your customer
              </ListItem>
              <ListItem
                fontSize={{ base: "14px", md: "18px" }}
                fontStyle="normal"
                fontWeight="normal"
                lineHeight={{ base: "22px", md: "28px" }}
                marginBottom="10px"
                color="#6C6B74"
              >
                Your customer takes a photo of their identity document
              </ListItem>
              <ListItem
                fontSize={{ base: "14px", md: "18px" }}
                fontStyle="normal"
                fontWeight="normal"
                lineHeight={{ base: "22px", md: "28px" }}
                marginBottom="10px"
                color="#6C6B74"
              >
                Your customer takes pictures of their face
              </ListItem>
              <ListItem
                fontSize={{ base: "14px", md: "18px" }}
                fontStyle="normal"
                fontWeight="normal"
                lineHeight={{ base: "22px", md: "28px" }}
                marginBottom="10px"
                color="#6C6B74"
              >
                FaceMatch runs OCR, liveness, and facial recognition tests
              </ListItem>
              <ListItem
                fontSize={{ base: "14px", md: "18px" }}
                fontStyle="normal"
                fontWeight="normal"
                lineHeight={{ base: "22px", md: "28px" }}
                color="#6C6B74"
              >
                Within seconds you’re provided with a comprehensive PDF report
              </ListItem>
            </OrderedList>

            <LinkNext href="/">
              <Link
                alignItems="center"
                display={{ base: "none", md: "inline-flex" }}
                fontStyle="normal"
                fontWeight="600"
                fontSize="20px"
                lineHeight="32px"
                cursor="pointer"
                textDecoration="none"
                color="#4959e7"
              >
                Try for free{" "}
                <Icon
                  w="25px"
                  h="25px"
                  fontSize="20px"
                  as={BsArrowRightShort}
                />
              </Link>
            </LinkNext>
          </Box>

          <Box
            display={{ base: "block", md: "none" }}
            w="100%"
            boxSizing="border-box"
            alignItems="center"
            padding="23px 10px 23px"
            backgroundColor="#f8faff"
          >
            <Box className={styles.viewBackground}>
              <Box className={styles.viewVideo}>
                {!play && (
                  <Box
                    position="absolute"
                    zIndex="3"
                    top={{ base: 0, sm: "15px" }}
                    left="0px"
                    right="0px"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    bottom={{ base: 0, sm: "30px" }}
                  >
                    <a onClick={handlePlay}>
                      <Image alt="" src={Play} priority />
                    </a>
                  </Box>
                )}

                {!play && (
                  <Box className={styles.viewPoster}>
                    <Image alt="" src={Poster} />
                  </Box>
                )}

                <video width="100%" controls ref={videoRef}>
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                  />
                  {/* <source src={VideoOgg} type="video/ogg" /> */}
                  Your browser does not support HTML video.
                </video>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HowDoesItWork;
