import React, { useEffect } from "react";
import { useRef } from "react";
import Image from "next/image";

import {
  Box,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

import Comp2 from "public/images/cp2.svg";
import Comp3 from "public/images/cp3.svg";
import CoinstashLogo from "public/images/coinstash.svg";
import TMNZLogo from "public/images/tmnz.svg";
import TompkinsWakeLogo from "public/images/TompkinsWake.svg";
import PhoneMb from "public/images/phone.svg";

interface Props {
  bannerRef: any;
}

const logos = [
  {
    img: CoinstashLogo,
    mdWidth: "121px",
  },
  {
    img: Comp2,
    mdWidth: "115px",
  },
  {
    img: Comp3,
    mdWidth: "105px",
  },
  {
    img: TMNZLogo,
    mdWidth: "90px",
  },
  {
    img: TompkinsWakeLogo,
    mdWidth: "176px",
  },
];

const Banner: React.FC<Props> = ({ bannerRef }) => {
  const videoRef = useRef<any>(null);
  const tryForFreeInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    tryForFreeInput.current?.focus();
  }, []);

  return (
    <div ref={bannerRef}>
      <Box
        w="100%"
        padding={{ base: "113px 25px 60px", md: "203px 25px 100px" }}
        background={{
          base: "url('/images/bg-banner-mb.svg') no-repeat bottom center",
          md: "url('/images/bg-banner.svg') no-repeat bottom center",
        }}
        backgroundSize="cover !important"
      >
        <Box w="100%" maxW="1440px" margin="0 auto">
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box
              w="100%"
              pl={{ base: 0, md: "30px", xl: "146px" }}
              mb={{ base: "60px", md: "0" }}
            >
              <Heading
                as="h3"
                fontWeight="700"
                pt={{ base: 0, md: "52px" }}
                mb={{ base: "15px", md: "20px" }}
                fontSize={{ base: "33px", md: "60px" }}
                lineHeight={{ base: "41px", md: "75px" }}
                color="#fff"
              >
                Onboard Globally. <br />
                Comply Locally.{" "}
              </Heading>
              <Text
                maxW="460px"
                fontWeight="normal"
                mb={{ base: "15px", md: "25px" }}
                color="#D9DBF9"
                fontSize={{ base: "16px", md: "20px" }}
                lineHeight={{ base: "25px", md: "32px" }}
              >
                Say hello to more customers and wave goodbye to fraudsters.
              </Text>

              <InputGroup height="62px" maxW={{ base: "100%", lg: "511px" }}>
                <Input
                  pr="150px"
                  placeholder="Your work email"
                  height={{ base: "55px", md: "62px" }}
                  borderRadius="10px"
                  fontSize={{ base: "14px", md: "16px" }}
                  color="#D9DBF9"
                  border="1px solid rgba(255, 255, 255, 0.35)"
                  _placeholder={{ color: "#D9DBF9" }}
                  autoFocus
                  _focus={{
                    outline: "1px solid white",
                    outlineOffset: 0,
                  }}
                  ref={tryForFreeInput}
                />
                <InputRightElement
                  width={{ base: "122px", md: "150px" }}
                  top={{ base: "7px", md: "11px" }}
                  right={{ base: "4px", md: "6px" }}
                >
                  <Button
                    h={{ base: "45px", md: "50px" }}
                    width={{ base: "122px", md: "150px" }}
                    fontSize={{ base: "14px", md: "16px" }}
                    color="#4959E7"
                    bg="#fff"
                    borderRadius="10px"
                    _active={{
                      outline: "none",
                      border: "none",
                    }}
                    _focus={{
                      outline: "none",
                      border: "none",
                    }}
                  >
                    Get a demo
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>

            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent={{ base: "center", md: "flex-end" }}
            >
              <Box
                maxW={{ base: "185px", md: "313px" }}
                mr={{ base: "0", md: "60px", xl: "185px" }}
                minHeight={{ base: "auto", md: "600px" }}
                display={{ base: "none", md: "inline-flex" }}
              >
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="yes"
                  ref={videoRef}
                >
                  <source src="/videos/main_phone.webm" type="video/webm" />
                  Your browser does not support HTML video.
                </video>
              </Box>
              <Box
                maxW={{ base: "185px", md: "313px" }}
                mr={{ base: "0", md: "60px", xl: "185px" }}
                minHeight={{ base: "auto", md: "600px" }}
                display={{ base: "inline-flex", md: "none" }}
              >
                <Image alt="" src={PhoneMb} />
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        <Box
          // maxW="843px"
          mt={{ base: "36px", md: "60px" }}
          textAlign="center"
        >
          <Heading
            as="h5"
            fontSize={{ base: "18px", md: "20px" }}
            lineHeight={{ base: "22px", md: "25px" }}
            mb={{ base: "30px", md: "55px" }}
            color="#fff"
            fontWeight="600"
          >
            We work with companies like
          </Heading>

          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(2, minmax(0, auto))",
              md: "repeat(5, minmax(0, auto))",
            }}
            gridGap={{ base: "15px", md: "48px" }}
            justifyContent="center"
          >
            {logos.map(({ img, mdWidth }) => (
              <Box
                key={img}
                maxW={{ base: "100px", md: mdWidth }}
                width="100%"
                display="flex"
                alignItems="center"
              >
                <Image alt="" src={img} priority />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
