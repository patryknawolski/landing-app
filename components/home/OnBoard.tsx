import React from "react";
import Image from "next/image";
import LinkNext from "next/link";

import { BsArrowRightShort } from "react-icons/bs";
import {
  Box,
  SimpleGrid,
  ListItem,
  Icon,
  Heading,
  Text,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

import PhoneGif from "public/images/onboard.svg";
// import PhoneGif from "public/images/phone.gif";

interface TextType {
  value: string;
}

const Item: React.FC<TextType> = ({ value }) => (
  <ListItem
    color="#4959E7"
    fontSize={{ base: "14px", md: "18px" }}
    lineHeight={{ base: "22px", md: "28px" }}
    mb="10px"
    fontWeight="500"
  >
    {value}
  </ListItem>
);

const OnBoard = () => {
  return (
    <Box w="100%" padding={{ base: "0 25px 100px", md: "150px 0" }}>
      <Box maxW="1440px" margin="0 auto">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: "40px", md: "0" }}
        >
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            pl={{ base: "0", md: "40px", xl: "125px" }}
          >
            <Box w="100%">
              <Heading
                as="h2"
                fontSize={{ base: "28px", md: "40px" }}
                lineHeight={{ base: "35px", md: "50px" }}
                color="#110F24"
                fontWeight="600"
                maxW="545px"
                marginBottom={{ base: "15px", md: "25px" }}
              >
                Onboard remote customers{" "}
                <Heading
                  as="span"
                  fontSize={{ base: "28px", md: "40px" }}
                  lineHeight={{ base: "35px", md: "50px" }}
                  color="#4959E7"
                  fontWeight="600"
                  maxW="545px"
                  marginBottom={{ base: "15px", md: "25px" }}
                  display={{ base: "inline", md: "block" }}
                >
                  in less than 60 seconds.{" "}
                </Heading>
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "18px" }}
                lineHeight={{ base: "22px", md: "28px" }}
                maxW={{ base: "100%", md: "486px" }}
                color="#6C6B74"
                marginBottom={{ base: "15px", md: "25px" }}
              >
                From lightning-fast ID scanning to OCR to world-first passive
                liveness checks to real-time identity verification, Corekyc will
                speed up your onboarding process.
              </Text>

              <UnorderedList mb={{ base: "5px", md: "15px" }}>
                <Item value="Al-driven ID document scanning and OCR" />
                <Item value="Passive liveness checks in under 1 second" />
                <Item value="Real-time identity verification" />
              </UnorderedList>

              <LinkNext href="/">
                <Link
                  alignItems="center"
                  display="inline-flex"
                  fontStyle="normal"
                  fontWeight="600"
                  fontSize={{ base: "16px", md: "20px" }}
                  lineHeight={{ base: "26px", md: "32px" }}
                  cursor="pointer"
                  textDecoration="none"
                  color="#4959e7"
                >
                  Learn more{" "}
                  <Icon
                    w="26px"
                    h="26px"
                    fontSize="26px"
                    fontWeight="700"
                    as={BsArrowRightShort}
                  />
                </Link>
              </LinkNext>
            </Box>
          </Box>

          <Box
            background={{
              base: 'url("/images/circle.webp") no-repeat right center',
              md: 'url("/images/bg-onboard.webp") no-repeat right center',
            }}
            backgroundSize={{
              base: "contain !important",
              md: "494px !important",
            }}
            padding={{ base: 0, md: "54px 0" }}
            display="flex"
            alignItems="center"
            justifyContent={{ base: "center", md: "center" }}
          >
            <Box
              pr={{ base: "0", md: "100px" }}
              maxW={{ base: "185px", md: "100%" }}
              width={{ base: "400px" }}
              display={{ base: "none", md: "inline-block" }}
            >
              <video
                width="100%"
                height="auto"
                autoPlay
                loop
                muted
                playsInline
                preload="yes"
                // ref={videoRef}
              >
                <source src="/videos/banner.webm" type="video/webm" />
                Your browser does not support HTML video.
              </video>

              {/* <Image
                alt=""
                src={PhoneGif}
                // width='270px'
                // height='581px'
                layout="responsive"
                priority
              /> */}
            </Box>
            <Box
              ml={{ base: "25px", md: "0px" }}
              maxW={{ base: "220px", md: "100%" }}
              width={{ base: "400px" }}
              display={{ base: "inline-block", md: "none" }}
            >
              <Image
                alt=""
                src={PhoneGif}
                // width='270px'
                // height='581px'
                layout="responsive"
                priority
              />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default OnBoard;
