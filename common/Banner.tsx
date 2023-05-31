import React, { useCallback, useRef } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { Box, Heading, Text } from "@chakra-ui/react";
import { useElementSize } from "usehooks-ts";

interface Props {
  title: string;
  text: string;
}

const Banner: React.FC<Props> = ({ title, text }) => {
  const [bannerRef, { width, height }] = useElementSize();

  const onArrowClick = useCallback(() => {
    window.scrollTo({
      top: height,
    });
  }, [height]);

  return (
    <Box
      ref={bannerRef}
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
          maxW="748px"
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
        <Box display="flex" justifyContent={"center"}>
          <Box
            display="flex"
            mt="32px"
            p="8px"
            color="text_white"
            opacity="0.5"
            _hover={{
              opacity: 1,
            }}
            cursor="pointer"
            onClick={onArrowClick}
          >
            <Box display="flex" className="scroll-button-animation">
              <BsFillArrowDownCircleFill size="32px" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
