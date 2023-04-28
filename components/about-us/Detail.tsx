import type { NextPage } from "next";

import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";

const Detail: NextPage = () => {
  return (
    <Box
      w="100%"
      padding={{ base: "90px 25px", md: "60px 24px", xl: "150px 114px" }}
      maxW="1440px"
      margin="0 auto"
    >
      <Box>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="40px">
          <Box w="100%">
            <Text
              maxW={{ base: "100%", md: "410px" }}
              marginLeft={{ base: 0, lg: "30px" }}
              color="#110F24"
              fontSize={{ base: "22px", md: "30px" }}
              lineHeight={{ base: "34px", md: "46px" }}
              fontWeight="700"
            >
              The{" "}
              <Heading
                as="span"
                fontSize={{ base: "22px", md: "30px" }}
                lineHeight={{ base: "34px", md: "46px" }}
                fontWeight="700"
                color="#4959E7"
              >
                world’s most trusted
              </Heading>{" "}
              and accurate customer onboarding technology.
            </Text>
          </Box>

          <Box>
            <Text
              color="#6C6B74"
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "22px", md: "28px" }}
              marginBottom="15px"
            >
              In 2018, it became clear that the scores of global biometric
              providers were not performing their job - detecting fraudulent
              customer onboarding.
            </Text>
            <Text
              color="#6C6B74"
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "22px", md: "28px" }}
              marginBottom="15px"
            >
              {`So, over the past four years, CoreKYC built a new category of know your customer (KYC) that combines best-in-class biometrics with anti-fraud tools that work. We're the first and only certified NZ-coded customer onboarding technology.`}
            </Text>
            <Text
              color="#6C6B74"
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "22px", md: "28px" }}
              marginBottom="15px"
            >
              Through our global, omni-channel platform, businesses can access a
              wide range of tools from hosted, embedded, and mobile verification
              flows. Affordably verify new customers with ease while preventing
              fraud and enhancing compliance.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Detail;
