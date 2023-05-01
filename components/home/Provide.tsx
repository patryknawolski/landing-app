import type { NextPage } from "next";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";

import PlatformImg from "public/images/platform.gif";
import IbetaImg from "public/images/ibeta.svg";
import IbetaMbImg from "public/images/ibeta-mb.svg";

const Provide: NextPage = () => {
  return (
    <Box
      w="100%"
      padding={{ base: "60px 0px", md: "100px 60px", xl: "150px 138px" }}
      backgroundImage="url('/images/bg-provide.webp')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="top center"
    >
      <Box maxW="1440px" margin="0 auto">
        <Box padding={{ base: "0 20px", md: "0" }}>
          <Heading
            fontWeight="600"
            color="#fff"
            maxW="812px"
            margin="0 auto"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
            textAlign={{ base: "left", md: "center" }}
          >
            Onboard 58% more customers in seconds
          </Heading>

          <Text
            color="#fff"
            maxW="812px"
            margin={{ base: "15px auto 40px", md: "30px auto 80px" }}
            fontSize={{ base: "14px", md: "18px" }}
            lineHeight={{ base: "22px", md: "28px" }}
            textAlign={{ base: "left", md: "center" }}
          >
            Passive liveness technology lets your customers take a single photo
            of themselves without the need to blink, smile, or turn their heads.
          </Text>
        </Box>

        <Box
          position="relative"
          padding={{ base: "0", md: "0 0" }}
          maxW="1440px"
          margin="0 auto"
          textAlign="center"
        >
          {/* <Box
            w="100%"
            maxW="1350px"
            margin="0 auto"
            display="inline-flex"
            justifyContent="center"
            padding={{
              base: "0 25px",
              md: "0 47px",
              lg: "0 61px",
              xl: "0 78px",
            }}
            position="relative"
          >
            <Text
              fontSize={{ base: "9px", md: "16px", lg: "24px", xl: "30px" }}
              lineHeight={{ base: "14px", md: "46px" }}
              color="#fff"
              textAlign="center"
              ml={{ base: '-5px', xs: '2px', sm: "14px", md: 0 }}
            >
              Active Liveness
            </Text>
            <Text
              fontSize={{ base: "9px", md: "16px", lg: "24px", xl: "30px" }}
              lineHeight={{ base: "12px", md: "37px" }}
              color="#fff"
              textAlign="center"
              margin="0 auto 0"
              position="relative"
              bottom={{ base: "-20px", md: "-71px" }}
            >
              Completion Rate
            </Text>
            <Text
              fontSize={{ base: "9px", md: "16px", lg: "24px", xl: "30px" }}
              lineHeight={{ base: "14px", md: "46px" }}
              color="#fff"
              textAlign="center"
              mr={{ base: "-5px", xs: '3px', sm: '11px', md: "0" }}
            >
              Passive Liveness
            </Text>
          </Box> */}

          <Box w="100%" mt={{ base: "15px", md: "57px" }}>
            {/* <Image alt="" src={PlatformImg} priority layout="responsive" /> */}
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
              <source src="/videos/NewLiveness.webm" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </Box>

          {/* <Box
            w={{ base: 'calc(100% - 10px)', xs: 'calc(100% - 20px)', sm: "calc(100% - 25px)", md: "100%" }}
            display="flex"
            justifyContent="flex-end"
            mt={{ base: "10px", md: "38px" }}
            pr={{ base: "0", md: "28px", xxl: "80px" }}
          >
            <Box
              display={{ base: "none", md: "block" }}
              maxW={{ base: "90px", md: "160px", lg: "240px", xl: "320px" }}
            >
              <Image alt="" src={IbetaImg} priority />
            </Box>
            <Box
              display={{ base: "block", md: "none" }}
              maxW={{ base: "90px", md: "320px" }}
            >
              <Image alt="" src={IbetaMbImg} priority />
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Provide;
