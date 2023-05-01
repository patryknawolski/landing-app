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

  const handleExplore = () => {
    window.open(
      "https://www.reviews.io/company-reviews/store/realyou-co-nz?utm_source=realyou-co-nz&utm_medium=widget&utm_campaign=carousel",
      "_blank"
    );
  };

  return (
    <Box w="100%" paddingBottom={{ base: "70px", md: "100px" }}>
      <Box maxW="1440px" margin="0 auto">
        <Box w="100%" margin="0 auto" textAlign="center">
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
              maxW={{ base: "325px", lg: "600px" }}
            >
              <Heading
                as="h4"
                fontSize={{ base: "20px", md: "30px" }}
                lineHeight={{ base: "31px", md: "46px" }}
                fontWeight="500"
                margin="0 auto 40px"
                color="#110f24"
              >
                {`The best system for verifying clients for AML that I've come
                across. It's simple to use, quick and takes away of the stress
                of getting it wrong.`}
              </Heading>

              <Text
                fontSize={{ base: "14px", md: "16px" }}
                lineHeight={{ base: "22px", md: "25px" }}
                fontWeight="normal"
                marginBottom="60px"
                color="#6C6B74"
              >
                - Kathy E., Realtor
              </Text>
            </Box>

            <Box
              background={`url("/images/quotes.webp") no-repeat top left`}
              backgroundSize={{ base: "34px", lg: "80px", xl: "100px" }}
              padding={{ base: "30px 20px 0", xl: "47px 22px 0" }}
              paddingTop={{ base: "10px", lg: 0 }}
              backgroundPosition={{ base: "60px 0", lg: "top left" }}
              maxW={{ base: "325px", lg: "600px" }}
            >
              <Heading
                as="h4"
                fontSize={{ base: "20px", md: "30px" }}
                lineHeight={{ base: "31px", md: "46px" }}
                fontWeight="500"
                margin="0 auto 40px"
                color="#110f24"
              >
                We are new to CoreKYC but so far the experience is fantastic for
                both our clients and me personally. Loving what you offer.
              </Heading>

              <Text
                fontSize={{ base: "14px", md: "16px" }}
                lineHeight={{ base: "22px", md: "25px" }}
                fontWeight="normal"
                marginBottom="60px"
                color="#6C6B74"
              >
                - Brent S., Solicitor
              </Text>
            </Box>

            <Box
              background={`url("/images/quotes.webp") no-repeat top left`}
              backgroundSize={{ base: "34px", lg: "80px", xl: "100px" }}
              padding={{ base: "30px 20px 0", xl: "47px 22px 0" }}
              paddingTop={{ base: "10px", lg: 0 }}
              backgroundPosition={{ base: "60px 0", lg: "top left" }}
              maxW={{ base: "325px", lg: "600px" }}
            >
              <Heading
                as="h4"
                fontSize={{ base: "20px", md: "30px" }}
                lineHeight={{ base: "31px", md: "46px" }}
                fontWeight="500"
                margin="0 auto 40px"
                color="#110f24"
              >
                We have been using CoreKYC for nearly two years and it has
                worked faultlessly. I am very happy with the Quick IDV and Face
                Match software.
              </Heading>

              <Text
                fontSize={{ base: "14px", md: "16px" }}
                lineHeight={{ base: "22px", md: "25px" }}
                fontWeight="normal"
                marginBottom="60px"
                color="#6C6B74"
              >
                - Kit. P, Online Lender
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
              onClick={handleExplore}
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
