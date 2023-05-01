import type { NextPage } from "next";
import Image from "next/image";
import { Box, Heading, Text, Button, SimpleGrid } from "@chakra-ui/react";

import { FiChevronRight } from "react-icons/fi";

import Chart1Img from "public/images/whycore1.svg";
import Chart2Img from "public/images/chart2.svg";
import Chart3Img from "public/images/chart3.svg";

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
            <Box
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
                mb="20px"
                maxW={{base: '214px'}}
                textAlign="center"
                mx={{base: 'auto'}}
              >
                Reduce your KYC costs by 47%
              </Heading>
              <Box mx="auto" display="flex" justifyContent="center">
                <Image
                  alt=""
                  layout="intrinsic"
                  width="322px"
                  height="234px"
                  src={Chart1Img}
                  priority
                />
              </Box>

              <Button
                fontWeight={700}
                fontSize={{ base: "16px" }}
                lineHeight={{ base: "24px" }}
                letterSpacing="0.02em"
                color="#4959E7"
                p="13px"
                bg="#FFFFFF"
                w="100%"
                borderRadius="10px"
                mt={{base: '24px', md: '45px'}}
                rightIcon={<FiChevronRight />}
              >
                Learn more
              </Button>
            </Box>
            <Box
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
                mb="20px"
                maxW={{base: '214px'}}
                textAlign="center"
                mx={{base: 'auto'}}
              >
                Onboard 58% more customers in seconds
              </Heading>
              <Box mx="auto" display="flex" justifyContent="center">
                <Image
                  alt=""
                  layout="intrinsic"
                  width="322px"
                  height="234px"
                  src={Chart2Img}
                  priority
                />
              </Box>

              <Button
                fontWeight={700}
                fontSize={{ base: "16px" }}
                lineHeight={{ base: "24px" }}
                letterSpacing="0.02em"
                color="#4959E7"
                p="13px"
                bg="#FFFFFF"
                w="100%"
                borderRadius="10px"
                mt={{base: '24px', md: '45px'}}
                rightIcon={<FiChevronRight />}
              >
                Learn more
              </Button>
            </Box>
            <Box
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
                mb="20px"
                maxW={{base: '214px'}}
                textAlign="center"
                mx={{base: 'auto'}}
              >
                Reduce manual  reviews by 71%
              </Heading>
              <Box mx="auto" display="flex" justifyContent="center">
                <Image
                  alt=""
                  layout="intrinsic"
                  width="322px"
                  height="234px"
                  src={Chart3Img}
                  priority
                />
              </Box>

              <Button
                fontWeight={700}
                fontSize={{ base: "16px" }}
                lineHeight={{ base: "24px" }}
                letterSpacing="0.02em"
                color="#4959E7"
                p="13px"
                bg="#FFFFFF"
                w="100%"
                borderRadius="10px"
                mt={{base: '24px', md: '45px'}}
                rightIcon={<FiChevronRight />}
              >
                Learn more
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyCoreKYC;
