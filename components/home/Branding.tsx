import type { NextPage } from "next";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { Hide } from "@chakra-ui/react";

import coinstashMockup from "public/images/branding-coinstash.svg";
import kubotaNZMockup from "public/images/branding-kubota-nz.svg";
import memberCheckMockup from "public/images/branding-member-check.svg";

const brands = [
  {
    title: "Coinstash",
    description:
      "Provides regulatory information, workflow technology, property settlement services and legal support solutions.",
    image: coinstashMockup,
    circleColor: "#F3F9FF",
  },
  {
    title: "Kubota NZ Finance",
    description:
      "Offers secured equipment finance to businesses looking to purchase new, demo and used Kubota equipment.",
    image: kubotaNZMockup,
    circleColor: "#FEF9F8",
  },
  {
    title: "Member Check",
    description:
      "Financial well-being for the next generation by providing the tools parents need to help their kids to be great with money.",
    image: memberCheckMockup,
    circleColor: "#F3F9FF",
  },
];

const Branding: NextPage = () => {
  const sliderRef = useRef<any>(null);
  const [active, setActive] = useState(0);
  const [settings, setSettings] = useState({
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 300,
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
    <Box
      w="100%"
      padding={{ base: "60px 0", md: "150px 0" }}
      maxW="1440px"
      margin="0 auto"
    >
      <Box
        mb={{ base: "40px", md: "60px" }}
        padding={{ base: "0 25px", md: "0" }}
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
          maxW="742px"
          margin="0 auto"
          color="#6C6B74"
          textAlign={{ base: "left", md: "center" }}
          fontSize={{ base: "14px", md: "20px" }}
          lineHeight={{ base: "22px", md: "32px" }}
        >
          {`Increase completed verifications, customer loyalty, and retention, gain a competitive edge, maintain brand consistency, and stand out from the competition.`}
        </Text>
      </Box>

      <Grid
        gap={{ base: "10px", sm: "40px" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
      >
        <GridItem colSpan={{ base: 5, md: 3 }}>
          <Slider {...settings} ref={sliderRef} afterChange={handleChange}>
            {brands.map(({ image }) => (
              <Box
                background={{
                  base: 'url("/images/circle.webp") no-repeat center center',
                  md: `url("/images/bg-branding.webp") no-repeat left center`,
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
                  maxW={{ base: "332px", md: "653px" }}
                >
                  <Image alt="" src={image} priority />
                </Box>
              </Box>
            ))}
          </Slider>
        </GridItem>

        <GridItem colSpan={{ base: 5, md: 2 }}>
          <Box
            w="100%"
            h="100%"
            alignItems="center"
            display="flex"
            justifyContent={{ sm: "flex-end" }}
            padding={{ base: "0 25px", md: 0 }}
          >
            <Box
              maxW="467px"
              display={{ base: "flex", sm: "block" }}
              alignItems={{ base: "center", sm: undefined }}
              mr={{ base: "0", md: "40px", xl: "80px" }}
            >
              {brands.map(({ title, description }, index) => (
                <Box
                  flex={{ base: "1 0 33.33%", sm: undefined }}
                  padding={{ base: "10px", sm: "25px 40px" }}
                  borderRadius="10px"
                  border={
                    active === index
                      ? "1px solid #E9E9F3"
                      : "1px solid transparent"
                  }
                  boxShadow={{
                    base:
                      active === index
                        ? "10px 10px 5px 0px rgba(53,53,61,0.05)"
                        : "",
                    md:
                      active === index
                        ? "10px 10px 5px 0px rgba(53,53,61,0.05)"
                        : "",
                  }}
                  _hover={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleActive(index)}
                >
                  <Heading
                    as="h3"
                    mb={{ sm: "12px" }}
                    fontWeight="600"
                    fontSize={{ base: "16px", md: "33px" }}
                    lineHeight={{ base: "25px", md: "38px" }}
                    color={active === index ? "#4959E7" : "#110F24"}
                  >
                    {title}
                  </Heading>
                  <Hide below="sm">
                    <Text
                      fontWeight="normal"
                      fontSize={{ base: "14px", md: "18px" }}
                      lineHeight={{ base: "22px", md: "28px" }}
                      color={active === index ? "#4959E7" : "#6C6B74"}
                      maxW="387px"
                    >
                      {description}
                    </Text>
                  </Hide>
                </Box>
              ))}
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Branding;
