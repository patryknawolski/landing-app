import type { NextPage } from "next";
import { useRef, useState } from "react";
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
  Container,
} from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";
import Slider from "react-slick";

import Img1 from "public/images/tab1.png";
import Img2 from "public/images/tab2.png";
import Img3 from "public/images/tab3.png";
import { Settings } from "react-slick";

const slides = [
  {
    title: "Hosted flow",
    img: Img1,
    width: 627,
    height: 520,
  },
  {
    title: "Embedded flow",
    img: Img2,
    width: 638,
    height: 521,
  },
  {
    title: "Mobile SDKs",
    img: Img3,
    width: 557,
    height: 554,
  },
];

const Integrate: NextPage = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderSettings: Settings = {
    dots: true,
    afterChange: (index: number) => {
      setActiveSlideIndex(index);
    },
  };

  const handleTabClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <Container
      id="developers"
      padding={{ md: 0 }}
      paddingTop={{ base: "60px", md: 0 }}
      paddingBottom={{ base: "60px", md: 0 }}
      margin={{ md: "150px auto" }}
    >
      <Grid
        gap={{ base: "40px", md: "60px", lg: "114px" }}
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
              // pl={{ base: "0", md: "126px" }}
              maxW={{ base: "332px", md: "100%" }}
              textAlign="center"
            >
              <Box
                bg="#fff"
                borderRadius={"10px"}
                boxShadow="0px 0px 10px #edf0f5"
                mb="30px"
                p="10px"
                boxSizing="border-box"
                display="inline-flex"
              >
                {slides.map(({ title }, index) => (
                  <Box
                    key={title}
                    fontWeight={400}
                    fontSize="14px"
                    lineHeight="21px"
                    p="12px 20px"
                    border="1px solid #DDDFE7"
                    borderRadius="5px"
                    style={{
                      backgroundColor:
                        activeSlideIndex === index ? "#EAF5FF" : undefined,
                      borderColor:
                        activeSlideIndex === index ? "#99A7F3" : undefined,
                      color: activeSlideIndex === index ? "#4959E7" : "#110F24",
                      marginLeft: index !== 0 ? "10px" : undefined,
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
                    onClick={() => handleTabClick(index)}
                  >
                    {title}
                  </Box>
                ))}
              </Box>
              <Slider {...sliderSettings} ref={sliderRef}>
                {slides.map(({ img, width, height }, index) => (
                  <Box
                    key={img.toString()}
                    display="flex"
                    justifyContent="flex-end"
                    pl={{ base: "16px", md: "64px", lg: "116px" }}
                  >
                    <Image
                      key={index}
                      alt=""
                      src={img}
                      priority
                      height={height}
                      width={width}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          colSpan={{ base: 5, md: 2 }}
          pr={{ base: "16px", md: "32px", xl: "64px" }}
        >
          <Box
            w="100%"
            h="100%"
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            <Box w="100%">
              <Heading
                as="h2"
                fontSize={{ base: "28px", md: "40px" }}
                lineHeight={{ base: "35px", md: "50px" }}
                color="#110F24"
                fontWeight="600"
                marginBottom={{ base: "15px", md: "25px" }}
              >
                <Box as="span" color="#4959E7">
                  Go live in minutes,{" "}
                </Box>
                with or without devs{" "}
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "18px" }}
                lineHeight={{ base: "22px", md: "28px" }}
                color="#6C6B74"
                marginBottom={{ base: "15px", md: "25px" }}
              >
                Create and send verification links to your customers in minutes,
                embed CoreKYC to keep customers on your website, or integrate
                with our iOS, Android, and React Native SDKs.
              </Text>

              <Link
                target="_blank"
                href="https://corekyc.stoplight.io/docs/corekyc-api/oxwvy00so15bb-basic-real-aml-workflow"
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
    </Container>
  );
};

export default Integrate;
