import type { NextPage } from "next";
import Image from "next/image";

import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import User1 from "public/images/Jordan.svg";
import User2 from "public/images/Gowtham.svg";

const Founders: NextPage = () => {
  return (
    <Box
      w="100%"
      padding={{
        base: "0 25px 60px",
        md: "0 25px 152px",
        xl: "0 25px 152px",
      }}
    >
      <Box maxW="900px" margin="0 auto">
        <Heading
          as="h3"
          fontSize={{ base: "28px", md: "40px" }}
          lineHeight={{ base: "35px", md: "50px" }}
          marginBottom={{ base: "38px", md: "66px" }}
          textAlign="center"
          color="#110F24"
          fontWeight="600"
        >
          Our co-founders
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: "40px", md: "72px" }}
        >
          <Box w="100%">
            <Image alt="" src={User1} priority layout="responsive" />
            <Heading
              as="h3"
              margin="15px 0 15px"
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight={{ base: "28px", md: "32px" }}
              color="#110F24"
              fontWeight="600"
            >
              Jordan McCown, CEO
            </Heading>
            <Text
              color="#6C6B74"
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "22px", md: "28px" }}
            >
              Nisi arcu senectus dignissim sed. Consectetur cras velit
              suspendisse risus nec et pharetra. Sollicitudin nec amet in
              volutpat blandit eleifend sagittis in.
            </Text>
          </Box>

          <Box w="100%">
            <Image alt="" src={User2} priority layout="responsive" />
            <Heading
              as="h3"
              margin="15px 0 15px"
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight={{ base: "28px", md: "32px" }}
              color="#110F24"
              fontWeight="600"
            >
              Gowtham Selvaraj, CTO
            </Heading>
            <Text
              color="#6C6B74"
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "22px", md: "28px" }}
            >
              Ac, id sapien rhoncus neque hendrerit est eget euismod sagittis.
              Lorem morbi felis, euismod tincidunt tincidunt in. Faucibus est
              tortor ut maecenas elit.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Founders;
