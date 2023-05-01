import type { NextPage } from "next";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";

import Img1 from "public/images/fraud-slide1.svg";
import Img2 from "public/images/fraud-slide2.svg";
import Img3 from "public/images/fraud-slide3.svg";

const Access: NextPage = () => {
  const sliderRef = useRef<any>(null);
  const [settings, setSettings] = useState({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    loop: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const handleChange = (index: number) => {
    setTimeout(() => {
      if (index === 3) {
        sliderRef.current.slickGoTo(0, false);
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
      <Box
        w="100%"
        maxW="1440px"
        margin="0 auto"
        px={{ base: "20px", lg: "120px" }}
      >
        <Box mb={{ base: "80px" }}>
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
            {`Detect fraudsters and fake IDs with CoreKYC's fraud database, built by our ever-growing 3+ million connections, artificial intelligence, and more (coming soon).`}
          </Text>
        </Box>

        <Box w="100%" mt={{ base: "40px", md: "80px" }}>
          <Slider
            {...settings}
            className="platformSlider"
            ref={sliderRef}
            afterChange={handleChange}
          >
            <Box>
              <Image alt="" src={Img1} layout="responsive" priority />
            </Box>
            <Box>
              <Image alt="" src={Img2} layout="responsive" priority />
            </Box>
            <Box>
              <Image alt="" src={Img3} layout="responsive" priority />
            </Box>
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Access;
