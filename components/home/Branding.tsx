import type { NextPage } from "next";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box, Heading, Text, Grid, GridItem, Button } from "@chakra-ui/react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import BrandingImg from "public/images/new-branding1.png";
import Branding1Img from "public/images/branding1.svg";
import Branding2Img from "public/images/new-branding3.png";

const Branding: NextPage = () => {
  const sliderRef = useRef<any>(null);
  const [active, setActive] = useState(0);
  const [settings, setSettings] = useState({
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  });

  const handleChange = (index: number) => {
    setActive(index);
    setTimeout(() => {
      if (sliderRef && sliderRef.current && index === 2) {
        setActive(0);
        sliderRef.current.slickGoTo(0, false);
        setSettings({ ...settings, autoplay: false });
      }
    }, 3000);
  };

  const handleActive = (index: number) => {
    setActive(index);
    sliderRef.current.slickGoTo(index, false);
  };

  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   verticalSwiping: true,
  //   // afterChange: function (currentSlide: number) {
  //   //   setActive(currentSlide);
  //   // },
  // };

  // const scroll = (e: any) => {
  //   if (sliderRef === null) {
  //     return 0;
  //   } else {
  //     if (e.wheelDelta > 0) {
  //       sliderRef.current.slickPrev();
  //     } else {
  //       sliderRef.current.slickNext();
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("wheel", scroll, true);

  //   return () => {
  //     window.removeEventListener("wheel", scroll, true);
  //   };
  // }, []);

  return (
    <Box w="100%" padding={{ base: "90px 0", md: "150px 0" }} margin="0 auto">
      <Box
        mb={{ base: "40px", md: "60px" }}
        padding={{ base: "0 20px", md: "0" }}
      >
        <Heading
          as="h3"
          color="##110F24"
          fontSize={{ base: "28px", md: "40px" }}
          lineHeight={{ base: "35px", md: "50px" }}
          textAlign={{ base: "left", md: "center" }}
          maxW="620px"
          margin={{ base: "0 auto 15px", md: "0 auto 30px" }}
        >
          Avoid customer pushback with{" "}
          <Heading
            as="span"
            color="#4959E7"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
          >
            {`your firm’s unique branding`}
          </Heading>
        </Heading>

        <Text
          maxW="842px"
          margin="0 auto"
          color="#6C6B74"
          textAlign={{ base: "left", md: "center" }}
          fontSize={{ base: "14px", md: "20px" }}
          lineHeight={{ base: "22px", md: "32px" }}
        >
          {`Increase completed verifications, customer loyalty, and retention, gain a competitive edge, maintain brand consistency, and stand out from the competition.`}
        </Text>
      </Box>

      <Box w="100%" position="relative">
        <Grid
          gap="40px"
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
        >
          <GridItem colSpan={{ base: 5, md: 3 }}>
            <Slider {...settings} ref={sliderRef} afterChange={handleChange}>
              <Box
                background={{
                  base: 'url("/images/circle.webp") no-repeat center center',
                  md: `url("/images/bg-branding1.png") no-repeat left center`,
                }}
                backgroundSize={{
                  base: "cover !important",
                  md: "contain !important",
                }}
                padding={{ base: "35px 25px", md: "102px 0" }}
                display="flex"
                alignItems="center"
                justifyContent={{ base: "center", md: "flex-start" }}
                w="100%"
              >
                <Box
                  ml={{ base: "0", md: "106px" }}
                  maxW={{ base: "332px", md: "653px", xxl: "100%" }}
                >
                  <Image alt="" src={BrandingImg} priority />
                </Box>
              </Box>
              <Box
                background={{
                  base: 'url("/images/circle.webp") no-repeat center center',
                  md: `url("/images/bg-branding1.webp") no-repeat left center`,
                }}
                backgroundSize={{
                  base: "cover !important",
                  md: "contain !important",
                }}
                padding={{ base: "35px 20px", md: "102px 0" }}
                display="flex"
                alignItems="center"
                justifyContent={{ base: "center", md: "flex-start" }}
                w="100%"
              >
                <Box
                  ml={{ base: "0", md: "106px" }}
                  maxW={{ base: "332px", md: "653px", xxl: "100%" }}
                >
                  <Image alt="" src={Branding1Img} priority />
                </Box>
              </Box>
              <Box
                background={{
                  base: 'url("/images/circle.webp") no-repeat center center',
                  md: `url("/images/bg-branding3.png") no-repeat left center`,
                }}
                backgroundSize={{
                  base: "cover !important",
                  md: "contain !important",
                }}
                padding={{ base: "35px 25px", md: "102px 0" }}
                display="flex"
                alignItems="center"
                justifyContent={{ base: "center", md: "flex-start" }}
                w="100%"
              >
                <Box
                  ml={{ base: "0", md: "106px" }}
                  maxW={{ base: "332px", md: "653px", xxl: "100%" }}
                >
                  <Image alt="" src={Branding2Img} priority />
                </Box>
              </Box>
            </Slider>
          </GridItem>

          <GridItem colSpan={{ base: 5, md: 2 }}>
            <Box
              w="100%"
              h="100%"
              alignItems="center"
              display="flex"
              justifyContent={{ base: "flex-end" }}
              padding={{ base: "0 20px", md: 0 }}
            >
              <Box
                maxW={{ base: "467px", xxl: "80%" }}
                mr={{ base: "0", md: "40px", xl: "80px" }}
              >
                <Box
                  padding={{ base: "20px 25px", md: "25px 40px" }}
                  borderRadius="10px"
                  border={active === 0 ? "1px solid #E9E9F3" : ""}
                  boxShadow={{
                    base:
                      active === 0
                        ? "10px 10px 5px 0px rgba(53,53,61,0.05)"
                        : "",
                    md:
                      active === 0
                        ? "10px 10px 5px 0px rgba(53,53,61,0.05)"
                        : "",
                  }}
                  _hover={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleActive(0)}
                >
                  <Heading
                    as="h3"
                    mb={{ base: "10px", md: "12px" }}
                    fontWeight="600"
                    fontSize={{ base: "20px", md: "33px" }}
                    lineHeight={{ base: "25px", md: "38px" }}
                    color={active === 0 ? "#4959E7" : "#110F24"}
                  >
                    Dye & Durham
                  </Heading>
                  <Text
                    fontWeight="normal"
                    fontSize={{ base: "14px", md: "18px" }}
                    lineHeight={{ base: "22px", md: "28px" }}
                    color={active === 0 ? "#4959E7" : "#6C6B74"}
                    maxW="387px"
                  >
                    Provides regulatory information, workflow technology,
                    property settlement services and legal support solutions.
                  </Text>
                </Box>

                <Box
                  padding={{ base: "20px 25px", md: "25px 40px" }}
                  borderRadius="10px"
                  border={active === 1 ? "1px solid #E9E9F3" : ""}
                  boxShadow={{
                    base:
                      active === 1
                        ? "10px 10px 5px 0px rgba(53,53,61,0.05)"
                        : "",
                    md:
                      active === 1
                        ? "10px 10px 5px 0px rgba(53,53,61,0.05)"
                        : "",
                  }}
                  _hover={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleActive(1)}
                >
                  <Heading
                    as="h3"
                    mb={{ base: "10px", md: "12px" }}
                    fontWeight="600"
                    fontSize={{ base: "20px", md: "33px" }}
                    lineHeight={{ base: "25px", md: "38px" }}
                    color={active === 1 ? "#4959E7" : "#110F24"}
                  >
                    Kubota Australia Finance
                  </Heading>
                  <Text
                    fontWeight="normal"
                    fontSize={{ base: "14px", md: "18px" }}
                    lineHeight={{ base: "22px", md: "28px" }}
                    color={active === 1 ? "#4959E7" : "#6C6B74"}
                  >
                    Offers secured equipment finance to businesses looking to
                    purchase new, demo and used Kubota equipment.
                  </Text>
                </Box>

                <Box
                  padding={{ base: "20px 25px", md: "25px 40px" }}
                  borderRadius="10px"
                  border={active === 2 ? "1px solid #E9E9F3" : ""}
                  boxShadow={{
                    base:
                      active === 2
                        ? "10px 10px 5px 0px rgba(53,53,61,0.05)"
                        : "",
                    md:
                      active === 2
                        ? "10px 10px 5px 0px rgba(53,53,61,0.05)"
                        : "",
                  }}
                  _hover={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleActive(2)}
                >
                  <Heading
                    as="h3"
                    mb={{ base: "10px", md: "12px" }}
                    fontWeight="600"
                    fontSize={{ base: "20px", md: "33px" }}
                    lineHeight={{ base: "25px", md: "38px" }}
                    color={active === 2 ? "#4959E7" : "#110F24"}
                  >
                    SquareOne
                  </Heading>
                  <Text
                    fontWeight="normal"
                    fontSize={{ base: "14px", md: "18px" }}
                    lineHeight={{ base: "22px", md: "28px" }}
                    color={active === 2 ? "#4959E7" : "#6C6B74"}
                  >
                    Financial well-being for the next generation by providing
                    the tools parents need to help their kids to be great with
                    money.
                  </Text>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Branding;
