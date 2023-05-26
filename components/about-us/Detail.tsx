import type { NextPage } from "next";

import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const DetailText: FC<{ children: ReactNode }> = ({ children }) => (
  <Text
    color="#6C6B74"
    fontSize={{ base: "14px", md: "18px" }}
    lineHeight={{ base: "22px", md: "28px" }}
    marginBottom="15px"
  >
    {children}
  </Text>
);

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
            <DetailText>
              In 2018, it became evident that global biometric providers were
              failing to effectively detect fraudulent customer onboarding.
              Consequently, CoreKYC took the initiative to develop a
              revolutionary form of know your customer (KYC) technology. Our
              solution integrates state-of-the-art biometrics with powerful
              anti-fraud tools, setting a new standard in the industry. CoreKYC
              proudly stands as the sole provider of certified NZ-coded customer
              onboarding technology.
            </DetailText>
            <DetailText>
              Through our advanced and versatile platform, businesses can access
              a comprehensive suite of tools for verification across various
              channels, including hosted, embedded, and mobile verification
              flows. Our solution offers a cost-effective and effortless means
              to verify new customers while simultaneously preventing fraud and
              enhancing compliance.
            </DetailText>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Detail;
