import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  text: string;
}

const Banner: React.FC<Props> = ({ title, text }) => {
  return (
    <Box
      display="inline-flex"
      padding={{ base: "185px 24px 165px", lg: "218px 65px" }}
      w="100%"
      position="relative"
      overflow="hidden"
      background="linear-gradient(160deg, #4776E6 0%, #8E54E9 100%)"
      // background="url(/images/bg-about-us.webp) no-repeat bottom center"
      backgroundSize="cover"
    >
      <Box
        maxW="1440px"
        margin="0 auto"
        textAlign={{ base: "left", sm: "center" }}
      >
        <Heading
          as="h3"
          fontSize={{ base: "33px", md: "60px" }}
          lineHeight={{ base: "42px", md: "75px" }}
          maxW="720px"
          margin="0 auto 20px"
          color="#fff"
        >
          {title}
        </Heading>
        <Text
          maxW="460px"
          marginTop="20px"
          // paddingBottom="25px"
          fontStyle="normal"
          fontWeight="normal"
          fontSize={{ base: "16px", md: "20px" }}
          lineHeight={{ base: "26px", md: "32px" }}
          margin="0 auto"
          color="#fff"
        >
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default Banner;
