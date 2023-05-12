import type { NextPage } from "next";
import Image from "next/image";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import Chart1Img from "public/images/whycore1.svg";
import Chart2Img from "public/images/whycore2.svg";
import Chart3Img from "public/images/whycore3.svg";

const WhyCoreKYCItems: Array<{ title: string; subtitle: string; img: string }> =
  [
    {
      title: "Onboard customers from 30+ countries",
      subtitle: "Verify your customers remotely from over 30 countries.",
      img: Chart1Img,
    },
    {
      title: "Verify your customers in seconds",
      subtitle:
        "Verify your customers on desktop or smartphone, anywhere, anytime.",
      img: Chart2Img,
    },
    {
      title: "Reduce your KYC costs by 60%",
      subtitle: "Our pay-per-use model will slash your monthly KYC spend.",
      img: Chart3Img,
    },
  ];

const WhyCoreKYC: NextPage = () => {
  return (
    <Box w="100%" id="whyCore">
      <Box
        w="100%"
        maxW="1440px"
        margin="0 auto"
        p={{ base: "80px 20px", lg: "150px 63px 0" }}
      >
        <Box padding={{ base: "0", md: "0 125px" }}>
          <Heading
            as="h3"
            color="##110F24"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
            textAlign={{ base: "center", md: "center" }}
            maxW="800px"
            margin={{ base: "0 auto 30px", md: "0 auto 80px" }}
          >
            Why{" "}
            <Heading
              as="span"
              color="#4959E7"
              fontSize={{ base: "28px", md: "40px" }}
              lineHeight={{ base: "35px", md: "50px" }}
            >
              CoreKYC?
            </Heading>
          </Heading>
        </Box>

        <Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="16px">
            {WhyCoreKYCItems.map((item) => (
              <Box
                key={item.title}
                borderRadius="5px"
                bg="#F8FAFF"
                p={{ base: "31px 30px" }}
                textAlign="center"
              >
                <Heading
                  fontWeight={700}
                  fontSize={{ base: "20px" }}
                  lineHeight={{ base: "27px" }}
                  color="#4959E7"
                  mb="40px"
                  maxW={{ base: "214px" }}
                  textAlign="center"
                  mx={{ base: "auto" }}
                >
                  {item.title}
                </Heading>
                <Box mx="auto" display="flex" justifyContent="center">
                  <Image
                    alt=""
                    layout="intrinsic"
                    width="322px"
                    height="234px"
                    src={item.img}
                    priority
                  />
                </Box>

                <Text
                  marginTop="32px"
                  fontWeight={400}
                  fontSize={{ base: "15px" }}
                  lineHeight={{ base: "24px" }}
                  color="#6C6B74"
                >
                  {item.subtitle}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyCoreKYC;
