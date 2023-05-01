import type { NextPage } from "next";
import { useState } from "react";
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
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

import Img1 from "public/images/tab1.png";
import Img2 from "public/images/tab2.png";
import Img3 from "public/images/tab3.png";

const Integrate: NextPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box
      id="developers"
      w="100%"
      padding={{ base: "0 20px", md: "0 0 0" }}
      margin="150px auto 0"
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
            padding={{ base: "60px 25px", md: "80px 0" }}
            display="flex"
            alignItems="center"
            justifyContent={{ base: "center", md: "flex-start" }}
            w="100%"
          >
            <Box
              ml={{ base: "0", md: "126px" }}
              maxW={{ base: "332px", md: "641px" }}
              textAlign="center"
            >
              <Tabs variant="unstyled" onChange={(index) => setTabIndex(index)}>
                <TabList
                  bg="#fff"
                  borderRadius={"10px"}
                  boxShadow="0px 0px 10px #EDF0F5"
                  p="10px"
                  boxSizing="border-box"
                  display="inline-flex"
                >
                  <Tab
                    color="#110F24"
                    fontWeight={400}
                    fontSize="14px"
                    lineHeight="21px"
                    p="12px 20px"
                    border="1px solid #DDDFE7"
                    borderRadius="5px"
                    _selected={{
                      bg: "#EAF5FF",
                      borderColor: "#99A7F3",
                      color: "#4959E7",

                      outline: "none !important",
                    }}
                    _hover={{
                      color: "#4959E7",

                      cursor: "pointer",
                      outline: "none !important",
                    }}
                    _focus={{
                      outline: "none !important",
                    }}
                    _active={{
                      outline: "none !important",
                    }}
                  >
                    Hosted flow
                  </Tab>
                  <Tab
                    color="#110F24"
                    fontWeight={400}
                    fontSize="14px"
                    lineHeight="21px"
                    p="12px 20px"
                    border="1px solid #DDDFE7"
                    borderRadius="5px"
                    mx="10px"
                    _selected={{
                      bg: "#EAF5FF",
                      borderColor: "#99A7F3",
                      color: "#4959E7",

                      outline: "none !important",
                    }}
                    _hover={{
                      color: "#4959E7",

                      cursor: "pointer",
                      outline: "none !important",
                    }}
                    _focus={{
                      outline: "none !important",
                    }}
                    _active={{
                      outline: "none !important",
                    }}
                  >
                    Embedded flow
                  </Tab>
                  <Tab
                    color="#110F24"
                    fontWeight={400}
                    fontSize="14px"
                    lineHeight="21px"
                    p="12px 20px"
                    border="1px solid #DDDFE7"
                    borderRadius="5px"
                    _selected={{
                      bg: "#EAF5FF",
                      borderColor: "#99A7F3",
                      color: "#4959E7",

                      outline: "none !important",
                    }}
                    _hover={{
                      color: "#4959E7",

                      cursor: "pointer",
                      outline: "none !important",
                    }}
                    _focus={{
                      outline: "none !important",
                    }}
                    _active={{
                      outline: "none !important",
                    }}
                  >
                    Mobile SDKs
                  </Tab>
                </TabList>
                <TabPanels mt="30px">
                  <TabPanel>
                    <Image alt="" src={Img1} priority />
                  </TabPanel>
                  <TabPanel>
                    <Image alt="" src={Img2} priority />
                  </TabPanel>
                  <TabPanel>
                    <Image alt="" src={Img3} priority />
                  </TabPanel>
                </TabPanels>
              </Tabs>

              <Box display="inline-flex">
                <a
                  style={{
                    width: "8px",
                    height: "8px",
                    display: "inline-flex",
                    borderRadius: "50%",
                    background: tabIndex === 0 ? "#4959E7" : "#E9E9F2",
                    margin: "0 12px",
                  }}
                ></a>
                <a
                  style={{
                    width: "8px",
                    height: "8px",
                    display: "inline-flex",
                    borderRadius: "50%",
                    background: tabIndex === 1 ? "#4959E7" : "#E9E9F2",
                    margin: "0 12px",
                  }}
                ></a>
                <a
                  style={{
                    width: "8px",
                    height: "8px",
                    display: "inline-flex",
                    borderRadius: "50%",
                    background: tabIndex === 2 ? "#4959E7" : "#E9E9F2",
                    margin: "0 12px",
                  }}
                ></a>
              </Box>
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
                maxW="416px"
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
                  Go live in minutes,{" "}
                </Heading>
                with or without devs{" "}
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "18px" }}
                lineHeight={{ base: "22px", md: "28px" }}
                maxW={{ base: "100%", md: "416px" }}
                color="#6C6B74"
                marginBottom={{ base: "15px", md: "25px" }}
              >
                Create and send verification links to your customers in minutes,
                embed CoreKYC to keep customers on your website, or integrate
                with our iOS, Android, and React Native SDKs.
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
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  View API & SDK Documentation{" "}
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

        {/* <GridItem
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
        </GridItem> */}
      </Grid>
    </Box>
  );
};

export default Integrate;
