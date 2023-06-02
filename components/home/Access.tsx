import type { NextPage } from "next";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { chakra, Box, Heading, Text, Button } from "@chakra-ui/react";

import Img1 from "public/images/fraud-slide1.svg";
import Img2 from "public/images/fraud-slide2.svg";
import Img3 from "public/images/fraud-slide3.svg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Access: NextPage = () => {
  const sliderRef = useRef<Slider>(null);
  const [settings, setSettings] = useState({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    loop: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const handleChange = (index: number) => {
    setTimeout(() => {
      if (index === 3) {
        sliderRef.current?.slickGoTo(0, false);
        setSettings({ ...settings, autoplay: false });
      }
    }, 3000);
  };

  return (
    <Box
      w="100%"
      padding={{ base: "60px 0", lg: "60px 0 150px" }}
      background="#fff"
      overflow="hidden"
    >
      <Box w="100%" maxW="1440px" margin="0 auto">
        <Box mb={{ base: "80px" }} px={{ base: "20px", lg: "120px" }}>
          <Heading
            as="h3"
            color="##110F24"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
            textAlign={{ base: "center", md: "center" }}
            maxW="800px"
            margin={{ base: "0 auto 15px", md: "0 auto 30px" }}
          >
            Access the world’s first{" "}
            <Heading
              as="span"
              color="#4959E7"
              fontSize={{ base: "28px", md: "40px" }}
              lineHeight={{ base: "35px", md: "50px" }}
            >
              fraud database 👊
            </Heading>
          </Heading>

          <Text
            fontSize={{ base: "14px", md: "20px" }}
            lineHeight={{ base: "22px", md: "32px" }}
            maxW={{ base: "100%", md: "812px" }}
            color="#6C6B74"
            textAlign="center"
            mx="auto"
          >
            Detect identity impersonation with CoreKYC's fraud database, built
            by our{" "}
            <chakra.span style={{ whiteSpace: "nowrap" }}>
              ever-growing
            </chakra.span>{" "}
            3+ million connections, AI, and more (coming soon).
          </Text>
        </Box>

        <Box w="100%" mt={{ base: "40px", md: "80px" }} position="relative">
          <Button
            bg="#fff"
            borderRadius="50% !important"
            w="48px"
            h="48px !important"
            left={{ base: "5px", sm: "10px", md: "40px" }}
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
            zIndex="2"
            minW="30px !important"
            color="#4959E7"
            boxShadow="0px 6px 12px rgba(0, 0, 0, 0.1)"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <BsChevronLeft />
          </Button>
          <Button
            bg="#fff"
            borderRadius="50% !important"
            w="48px"
            h="48px !important"
            right={{ base: "5px", sm: "10px", md: "40px" }}
            top="50%"
            transform="translateY(-50%)"
            position="absolute"
            zIndex="2"
            minW="30px !important"
            color="#4959E7"
            boxShadow="0px 6px 12px rgba(0, 0, 0, 0.1)"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <BsChevronRight />
          </Button>

          <Slider
            {...settings}
            className="platformSlider"
            ref={sliderRef}
            afterChange={handleChange}
          >
            {[Img1, Img2, Img3].map((img) => (
              <Box px={{ base: "20px", lg: "120px" }}>
                <Image
                  key={img}
                  alt=""
                  src={img}
                  layout="responsive"
                  priority
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Access;
