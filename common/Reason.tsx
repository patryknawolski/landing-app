import React from "react";
import Image from "next/image";

import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  icon: string | StaticImageData;
  title: string;
  text: string;
}

const Reason: React.FC<Props> = ({ icon, title, text }) => {
  return (
    <Box w="100%" overflow="hidden">
      <Box w={{ base: "50px", lg: "60px" }}>
        <Image alt="" src={icon} />
      </Box>

      <Heading
        mt="25px"
        mb="15px"
        as="h3"
        color="#4959e7"
        fontSize="20px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="135%"
      >
        {title}
      </Heading>
      <Text
        fontStyle="normal"
        fontWeight="normal"
        fontSize={{base: '14px', md: '16px'}}
        lineHeight={{base: '21px', md: '24px'}}
        marginBottom="0"
        color="#6c6b74"
      >
        {text}
      </Text>
    </Box>
  );
};

export default Reason;
