import type { NextPage } from "next";
import Image from "next/image";

import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import User1 from "public/images/CEO.png";
import User2 from "public/images/CTO.png";

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
          Our Co-founders
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: "40px", md: "72px" }}
        >
          <Box w="100%">
            <Box
              w="100%"
              h="420px"
              display="grid"
              borderRadius={"10px"}
              overflow="hidden"
            >
              <Image alt="" src={User1} priority layout="responsive" />
            </Box>
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
              The passion Jordan has for solving unsolved problems shines
              through in everything he does. Following a successful career in
              the financial markets, he ventured into the world of tech
              start-ups. Jordan now leads a team of skilled developers and AML
              analysts focused on becoming the category king in customer
              onboarding.
            </Text>
          </Box>

          <Box w="100%">
            <Box
              w="100%"
              h="420px"
              display="grid"
              borderRadius={"10px"}
              overflow="hidden"
            >
              <Image
                alt=""
                src={User2}
                priority
                layout="responsive"
                objectFit="cover"
              />
            </Box>
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
              {`Gowtham is an exceptional full-stack developer and part-time drone pilot. Gowtham leads our international team of software engineers, architects, and security analysts from Christchurch, New Zealand. He's your behind-the-scenes hero (without a cape) building world-first anti-fraud features to keep your firm compliant.`}
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Founders;
