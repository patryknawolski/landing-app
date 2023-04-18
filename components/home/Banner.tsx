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

import Comp1 from "public/images/comp1.png";
import Comp2 from "public/images/comp2.png";
import Comp3 from "public/images/comp3.png";
import Comp4 from "public/images/comp4.png";
import Comp5 from "public/images/comp5.png";
import PhoneMb from "public/images/phone.svg";

interface Props {
  bannerRef: any;
}

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
        padding={{ base: "113px 25px 60px", md: "203px 0 100px" }}
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
                  outline="none"
                  _placeholder={{ color: "#D9DBF9" }}
                  autoFocus
                  _focus={{
                    outline: "none",
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
          maxW="843px"
          margin={{ base: "36px 36px 0", md: "60px auto 0" }}
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
            display={{ base: "flex" }}
            alignItems="center"
            justifyContent="center"
            w="100%"
            gap={{ base: "20px", sm: "40px", md: "80px" }}
          >
            <Box
              display="inline-flex"
              alignItems="center"
              // mx={{ base: "20px", md: "40px" }}
              // maxW={{ base: "103px", md: "152px" }}
            >
              <Image alt="" src={Comp1} priority width="180px" height="49px" />
            </Box>
            <Box
              display="inline-flex"
              alignItems="center"
              // mx={{ base: "20px", md: "40px" }}
              // maxW={{ base: "105px", md: "155px" }}
              mt={{ base: "6px", md: 0 }}
            >
              <Image alt="" src={Comp2} priority width="70px" height="70px" />
            </Box>
            <Box
              display="inline-flex"
              alignItems="center"
              // mx={{ base: "20px", md: "40px" }}
              // maxW={{ base: "95px", md: "141px" }}
            >
              <Image alt="" src={Comp3} priority width="171px" height="38px" />
            </Box>
            <Box
              display="inline-flex"
              alignItems="center"
              // mx={{ base: "20px", md: "40px" }}
              // maxW={{ base: "102px", md: "150px" }}
            >
              <Image alt="" src={Comp4} priority width="157px" height="63px" />
            </Box>
            <Box
              mx={{ base: "20px", md: "40px" }}
              maxW={{ base: "102px", md: "150px" }}
            >
              <Image alt="" src={Comp5} priority />
            </Box>
          </Box>

          {/* <SimpleGrid
            columns={{ base: 2, md: 4 }}
            gap={{ base: "15px", md: "0" }}
          >
            <Box
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box maxW={{ base: "103px", md: "152px" }}>
                <Image alt="" src={Comp1} priority />
              </Box>
            </Box>
            <Box
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                maxW={{ base: "105px", md: "155px" }}
                mt={{ base: "6px", md: 0 }}
              >
                <Image alt="" src={Comp2} priority />
              </Box>
            </Box>
            <Box
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box maxW={{ base: "95px", md: "141px" }}>
                <Image alt="" src={Comp3} priority />
              </Box>
            </Box>
            <Box
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box maxW={{ base: "102px", md: "150px" }}>
                <Image alt="" src={Comp4} priority />
              </Box>
            </Box>
            <Box
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box maxW={{ base: "102px", md: "150px" }}>
                <Image alt="" src={Comp5} priority />
              </Box>
            </Box>
          </SimpleGrid> */}
        </Box>

        {/* <Companies /> */}
      </Box>
    </div>
  );
};

export default Banner;
