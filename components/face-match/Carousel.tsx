import type { NextPage } from "next";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Box, Heading, Text, Center, Icon, Link } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

import CompanyLogo from "public/images/reviewsio-logo.svg";

const Carousel: NextPage = () => {
  const sliderRef = useRef<any>(null);
  const [settings, setSettings] = useState({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const handleChange = (index: number) => {
    setTimeout(() => {
      if (sliderRef && sliderRef.current && index === 2) {
        sliderRef.current.slickGoTo(0, false);
        setSettings({ ...settings, autoplay: false });
      }
    }, 3000);
  };

  // const settings = {
  //   dots: true,
  //   arrows: false,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   afterChange: (index: any) => {
  //     console.log(index);

  //     setTimeout(() => {
  //       if (index === 2) {
  //         sliderRef.current.slickGoTo(1, false);
  //         console.log("xx: ", sliderRef);
  //       }
  //     }, 600);
  //   },
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
    <Box w="100%" paddingBottom={{ base: "70px", md: "100px" }}>
      <Box maxW="1440px" margin="0 auto">
        <Box
          w="100%"
          maxW={{ base: "325px", lg: "600px" }}
          margin="0 auto"
          textAlign="center"
        >
          <Slider
            {...settings}
            dotsClass="dotsCustom"
            ref={sliderRef}
            afterChange={handleChange}
          >
            <Box
              background={`url("/images/quotes.webp") no-repeat top left`}
              backgroundSize={{ base: "34px", lg: "80px", xl: "100px" }}
              padding={{ base: "30px 20px 0", xl: "47px 22px 0" }}
              paddingTop={{ base: "10px", lg: 0 }}
              backgroundPosition={{ base: "60px 0", lg: "top left" }}
            >
              <Heading
                as="h4"
                fontSize={{ base: "20px", md: "30px" }}
                lineHeight={{ base: "31px", md: "46px" }}
                fontWeight="500"
                margin="0 auto 40px"
                color="#110f24"
              >
                Id nulla iaculis posuere elementum sit orci. Morbi etiam a
                turpis magna consectetur ullamcorper mattis massa sodales.
              </Heading>

              <Text
                fontSize={{ base: "14px", md: "16px" }}
                lineHeight={{ base: "22px", md: "25px" }}
                fontWeight="normal"
                marginBottom="60px"
                color="#6C6B74"
              >
                - Wade Warren, CEO Lorem
              </Text>
            </Box>

            <Box
              background={`url("/images/quotes.webp") no-repeat top left`}
              backgroundSize={{ base: "34px", lg: "80px", xl: "100px" }}
              padding={{ base: "30px 20px 0", xl: "47px 22px 0" }}
              paddingTop={{ base: "10px", lg: 0 }}
              backgroundPosition={{ base: "60px 0", lg: "top left" }}
            >
              <Heading
                as="h4"
                fontSize={{ base: "20px", md: "30px" }}
                lineHeight={{ base: "31px", md: "46px" }}
                fontWeight="500"
                margin="0 auto 40px"
                color="#110f24"
              >
                Id nulla iaculis posuere elementum sit orci. Morbi etiam a
                turpis magna consectetur ullamcorper mattis massa sodales.
              </Heading>

              <Text
                fontSize={{ base: "14px", md: "16px" }}
                lineHeight={{ base: "22px", md: "25px" }}
                fontWeight="normal"
                marginBottom="60px"
                color="#6C6B74"
              >
                - Wade Warren, CEO Lorem
              </Text>
            </Box>

            <Box
              background={`url("/images/quotes.webp") no-repeat top left`}
              backgroundSize={{ base: "34px", lg: "80px", xl: "100px" }}
              padding={{ base: "30px 20px 0", xl: "47px 22px 0" }}
              paddingTop={{ base: "10px", lg: 0 }}
              backgroundPosition={{ base: "60px 0", lg: "top left" }}
            >
              <Heading
                as="h4"
                fontSize={{ base: "20px", md: "30px" }}
                lineHeight={{ base: "31px", md: "46px" }}
                fontWeight="500"
                margin="0 auto 40px"
                color="#110f24"
              >
                Id nulla iaculis posuere elementum sit orci. Morbi etiam a
                turpis magna consectetur ullamcorper mattis massa sodales.
              </Heading>

              <Text
                fontSize={{ base: "14px", md: "16px" }}
                lineHeight={{ base: "22px", md: "25px" }}
                fontWeight="normal"
                marginBottom="60px"
                color="#6C6B74"
              >
                - Wade Warren, CEO Lorem
              </Text>
            </Box>
          </Slider>
        </Box>

        <Box marginTop={{ base: "40px", lg: "60px" }}>
          <Center>
            <Link
              textDecoration="none"
              fontWeight="600"
              fontSize={{ base: "16px", lg: "20px" }}
              lineHeight={{ base: "25px", lg: "25px" }}
              cursor="pointer"
              color="#4959e7"
              display="inline-flex"
              alignItems="center"
              _hover={{
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Explore more on{" "}
              <Heading
                as="span"
                lineHeight="15px"
                margin="0 5px"
                display="inline-flex"
                alignItems="center"
              >
                <Image alt="" src={CompanyLogo} />
              </Heading>{" "}
              <Icon fontSize="24px" lineHeight="15px" as={BsArrowRightShort} />
            </Link>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
