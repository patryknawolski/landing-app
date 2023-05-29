import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  text: string;
}

const Banner: React.FC<Props> = ({ title, text }) => {
  return (
    <Box
      display="flex"
      padding={{ base: "120px 24px 90px", lg: "168px 65px 108px" }}
      w="100%"
      position="relative"
      overflow="hidden"
      background="linear-gradient(160deg, #4776E6 0%, #8E54E9 100%)"
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
          margin="0 auto 20px"
          color="#fff"
        >
          <span dangerouslySetInnerHTML={{ __html: title }}></span>
        </Heading>
        <Text
          maxW="460px"
          marginTop="20px"
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
