import type { NextPage } from "next";

import {
  Box,
  Button,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";

const GetStarted: NextPage = () => {
  return (
    <Box
      w="100%"
      padding={{
        base: "60px 25px 40px",
        lg: "60px 30px",
        xl: "100px 65px 150px 211px",
      }}
      boxSizing="border-box"
      background={{
        base: "linear-gradient(144.51deg, #4776E6 0%, #8E54E9 100%)",
        md: `url("/images/getStart.webp") no-repeat bottom center`,
      }}
      backgroundSize="cover !important"
    >
      <Box
        maxW="1440px"
        margin="0 auto"
        color="#fff"
        position="relative"
        overflow="hidden"
      >
        <Box display="inline-block" w="100%" position="relative">
          <Heading
            as="h2"
            marginBottom="25px"
            fontWeight="600"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
          >
            Ready to get started?{" "}
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "20px" }}
            lineHeight={{ base: "25px", md: "32px" }}
            color="#d9dbf9"
            maxW="511px"
            fontWeight="normal"
          >
            With real-time ID scanning, lightning-fast OCR, data verification,
            and passive liveness checks, you can remotely onboard customers in
            less than 30 seconds.
          </Text>

          <InputGroup
            height="62px"
            mt="25px"
            maxW={{ base: "100%", lg: "511px" }}
          >
            <Input
              pr="150px"
              placeholder="Your work email"
              height={{ base: "55px", md: "62px" }}
              borderRadius="10px"
              fontSize={{ base: "14px", md: "16px" }}
              color="#D9DBF9"
              border="1px solid rgba(255, 255, 255, 0.35)"
              outline="none"
              _placeholder={{ color: "#D9DBF9" }}
              _focus={{
                outline: "none",
              }}
            />
            <InputRightElement
              width={{ base: "122px", md: "150px" }}
              top={{ base: "7px", md: "11px" }}
              right={{ base: "4px", md: "6px" }}
            >
              <Button
                h={{ base: "45px", md: "50px" }}
                width={{ base: "122px", md: "150px" }}
                fontSize={{ base: "14px", md: "16px" }}
                color="#4959E7"
                bg="#fff"
                borderRadius="10px"
                _active={{
                  outline: "none",
                  border: "none",
                }}
                _focus={{
                  outline: "none",
                  border: "none",
                }}
              >
                Get a demo
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default GetStarted;
