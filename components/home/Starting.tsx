import React from "react";
import Image from "next/image";

import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import Start1 from "public/images/start1.svg";
import Start2 from "public/images/start2.svg";
import Start3 from "public/images/start3.svg";
import Start4 from "public/images/start4.svg";

interface Props {
  priceRef: any;
}

const Starting: React.FC<Props> = ({ priceRef }) => {
  return (
    <Box
      w="100%"
      id="price"
      ref={priceRef}
      backgroundColor="#F8FAFF"
      padding={{ base: "60px 25px", md: "150px 127px" }}
    >
      <Box maxW="1440px" margin="0 auto">
        <Box mb={{ base: "40px", md: "80px" }}>
          <Heading
            as="h3"
            color="#110F24"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
            textAlign={{ base: "center", md: "center" }}
            maxW={{ base: "220px", md: "760px" }}
            margin={{ base: "0 auto 15px", md: "0 auto 30px" }}
          >
            Checks starting from{" "}
            <Heading
              as="span"
              color="#4959E7"
              fontSize={{ base: "28px", md: "40px" }}
              lineHeight={{ base: "35px", md: "50px" }}
            >
              $0.30
            </Heading>
          </Heading>

          <Text
            maxW={{ base: "325px", md: "560px" }}
            margin="0 auto"
            color="#6C6B74"
            textAlign={{ base: "center", md: "center" }}
            fontSize={{ base: "14px", md: "20px" }}
            lineHeight={{ base: "22px", md: "32px" }}
          >
            Nam et sed at interdum dui consequat viverra aliquet. Risus quis id
            ultrices mattis turpis sit justo.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="40px">
          <Box w="100%" textAlign="center">
            <Box
              w={{ base: "70px", md: "90px" }}
              mb={{ base: "20px", md: "40px" }}
              margin="0 auto"
            >
              <Image alt="" src={Start1} />
            </Box>
            <Heading
              as="h5"
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight={{ base: "24px", md: "27px" }}
              fontWeight="500"
              color="#110F24"
            >
              No Licence fees
            </Heading>
          </Box>
          <Box w="100%" textAlign="center">
            <Box
              w={{ base: "70px", md: "90px" }}
              mb={{ base: "20px", md: "40px" }}
              margin="0 auto"
            >
              <Image alt="" src={Start2} />
            </Box>
            <Heading
              as="h5"
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight={{ base: "24px", md: "27px" }}
              fontWeight="500"
              color="#110F24"
            >
              No Implementation fees
            </Heading>
          </Box>
          <Box w="100%" textAlign="center">
            <Box
              w={{ base: "70px", md: "90px" }}
              mb={{ base: "20px", md: "40px" }}
              margin="0 auto"
            >
              <Image alt="" src={Start3} />
            </Box>
            <Heading
              as="h5"
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight={{ base: "24px", md: "27px" }}
              fontWeight="500"
              color="#110F24"
            >
              No Minimum spend
            </Heading>
          </Box>
          <Box w="100%" textAlign="center">
            <Box
              w={{ base: "70px", md: "90px" }}
              mb={{ base: "20px", md: "40px" }}
              margin="0 auto"
            >
              <Image alt="" src={Start4} />
            </Box>
            <Heading
              as="h5"
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight={{ base: "24px", md: "27px" }}
              fontWeight="500"
              color="#110F24"
            >
              No Hosting fees
            </Heading>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Starting;
