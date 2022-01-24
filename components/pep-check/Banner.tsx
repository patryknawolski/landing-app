import React from "react";
import Image from "next/image";
import { COLORS } from "constants/colors";

import { Box, SimpleGrid, Text, Heading, Button } from "@chakra-ui/react";

interface Props {
  image: string | StaticImageData;
  title: string;
  text: string;
  isPep: boolean | null;
}

const Banner: React.FC<Props> = ({ image, title, text, isPep }) => {
  return (
    <Box
      display="inline-flex"
      w="100%"
      position="relative"
      overflow="hidden"
      background={`url('/images/bg-pep-check.svg') no-repeat bottom center`}
      backgroundSize="cover"
      minHeight={{ base: "auto", xl: "100vh" }}
    >
      <Box
        // padding={{ base: "0 25px", lg: "0 30px", xl: "0 58px" }}
        maxW="1440px"
        margin="0 auto"
        w="100%"
        paddingTop="203px"
        paddingBottom="152px"
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          h="100%"
          overflow="unset"
        >
          <Box
            h="100%"
            display={{ base: "inline-block", md: "inline-flex" }}
            alignItems="center"
            color="#fff"
            w="100%"
            paddingLeft={{ base: "0", lg: "30px", xl: "146px" }}
            margin="0 auto"
          >
            <Box
              textAlign={{ base: "center", md: "left" }}
              marginBottom={{ base: "40px", md: "0" }}
            >
              <Heading
                as="h3"
                fontSize={{ base: "33px", md: "60px" }}
                lineHeight={{ base: "42px", md: "75px" }}
              >
                {title}
              </Heading>
              <Text
                maxW="501px"
                marginTop="20px"
                // paddingBottom="25px"
                fontStyle="normal"
                fontWeight="normal"
                color="#D9DBF9"
                fontSize={{ base: "16px", md: "20px" }}
                lineHeight={{ base: "26px", md: "32px" }}
                margin={{ base: "20px auto 29px", md: "20px 0 25px" }}
              >
                {text}
              </Text>
              <Button color={COLORS.primary} variant="solid">
                Run now
              </Button>
            </Box>
          </Box>

          <Box
            w="100%"
            h="100%"
            display="inline-flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            {isPep ? (
              <Box
                display="inline-flex"
                alignItems="center"
                justifyContent="flex-end"
                // position={{ base: "relative", xl: "absolute" }}
                // right={{ base: "auto", md: "-30px", lg: "-74px", xl: "0" }}
                right="0"
                marginRight={{ base: "0", md: "-30px", xl: 0 }}
              >
                <Image alt="" src={image} priority />
              </Box>
            ) : (
              <Image alt="" src={image} priority />
            )}
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Banner;
