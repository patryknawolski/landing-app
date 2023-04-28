import type { NextPage } from "next";
import Image from "next/image";
import LinkNext from "next/link";
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Link,
  Icon,
} from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

import ApiImg from "public/images/api.svg";

const TheOneApi: NextPage = () => {
  return (
    <Box
      id="developers"
      w="100%"
      padding={{ base: "0 0", md: "0 0 0" }}
      maxW="1440px"
      margin="0 auto"
    >
      <Grid
        gap="40px"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
      >
        <GridItem
          colSpan={{ base: 5, md: 3 }}
          display={{ base: "none", md: "flex" }}
        >
          <Box
            background={{
              base: 'url("/images/bg-branding.webp") no-repeat left center',
            }}
            backgroundSize={{
              base: "contain !important",
              md: "contain !important",
            }}
            padding={{ base: "60px 25px", md: "169px 0" }}
            display="flex"
            alignItems="center"
            justifyContent={{ base: "center", md: "flex-start" }}
            w="100%"
          >
            <Box
              ml={{ base: "0", md: "126px" }}
              maxW={{ base: "332px", md: "641px" }}
            >
              <Image alt="" src={ApiImg} priority />
            </Box>
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 5, md: 2 }}>
          <Box
            w="100%"
            h="100%"
            alignItems="center"
            display="flex"
            justifyContent="center"
            padding={{ base: "0 25px", md: 0 }}
          >
            <Box w="100%">
              <Heading
                as="h2"
                fontSize={{ base: "28px", md: "40px" }}
                lineHeight={{ base: "35px", md: "50px" }}
                color="#110F24"
                fontWeight="600"
                maxW="545px"
                marginBottom={{ base: "15px", md: "25px" }}
              >
                <Heading
                  as="span"
                  fontSize={{ base: "28px", md: "40px" }}
                  lineHeight={{ base: "35px", md: "50px" }}
                  color="#4959E7"
                  fontWeight="600"
                  maxW="545px"
                >
                  The one API{" "}
                </Heading>
                to rule them all{" "}
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "18px" }}
                lineHeight={{ base: "22px", md: "28px" }}
                maxW={{ base: "100%", md: "416px" }}
                color="#6C6B74"
                marginBottom={{ base: "15px", md: "25px" }}
              >
                Eget eget at pulvinar neque enim massa. Sit venenatis vitae
                accumsan purus eget magna sed pellentesque.
              </Text>

              <LinkNext href="/">
                <Link
                  alignItems="center"
                  display="inline-flex"
                  fontStyle="normal"
                  fontWeight="600"
                  fontSize={{ base: "16px", md: "20px" }}
                  lineHeight={{ base: "26px", md: "32px" }}
                  cursor="pointer"
                  textDecoration="none"
                  color="#4959e7"
                >
                  Learn more{" "}
                  <Icon
                    w="26px"
                    h="26px"
                    fontSize="26px"
                    fontWeight="700"
                    as={BsArrowRightShort}
                  />
                </Link>
              </LinkNext>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          colSpan={{ base: 5, md: 3 }}
          display={{ base: "flex", md: "none" }}
        >
          <Box
            background={{
              base: 'url("/images/bg-branding.webp") no-repeat left center',
            }}
            backgroundSize={{
              base: "contain !important",
              md: "contain !important",
            }}
            padding={{ base: "60px 25px", md: "169px 0" }}
            display="flex"
            alignItems="center"
            justifyContent={{ base: "center", md: "flex-start" }}
            w="100%"
          >
            <Box
              ml={{ base: "0", md: "126px" }}
              maxW={{ base: "332px", md: "641px" }}
            >
              <Image alt="" src={ApiImg} priority />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TheOneApi;
