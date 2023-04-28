import type { NextPage } from "next";
import { useRef, useState } from "react";
import Image from "next/image";
import { useWindowSize } from "hooks/useWindowSize";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

import { FiChevronRight } from "react-icons/fi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import Slider from "react-slick";
import Img1 from "public/images/fraud1.svg";
import Img2 from "public/images/fraud2.svg";
import Img3 from "public/images/fraud3.svg";
import Img4 from "public/images/fraud4.svg";
import Img5 from "public/images/fraud5.svg";
import Img6 from "public/images/fraud6.svg";
import Img7 from "public/images/fraud7.svg";
import Img8 from "public/images/fraud8.svg";
import Img9 from "public/images/fraud9.svg";

const data = [
  {
    title: "Synthetic humans",
    text: "Preloaded images or videos of a human instead of a human physically present behind the camera.",
    image: Img1,
  },
  {
    title: "Emulated devices",
    text: "Manipulated desktop browser settings to appear as a different device, language, or time zone.",
    image: Img2,
  },
  {
    title: "Inconsistent ID photos",
    text: "Portrait photos (larger) and ghost photos (smaller and transparent) that are inconsistent.",
    image: Img3,
  },
  {
    title: "Virtual cameras",
    text: "A desktop’s camera stream bypassed with a pre-recorded video or image.",
    image: Img4,
  },
  {
    title: "Fraudulent MRZ data",
    text: "Overlayed printed MRZ data from a different passport or artificially created.",
    image: Img5,
  },
  {
    title: "Fraudulent text",
    text: "Overlayed printed text from a stolen ID.",
    image: Img6,
  },
  {
    title: "Fraudulent photos",
    text: "Overlayed printed portrait photos.",
    image: Img7,
  },
  {
    title: "Synthetic IDs",
    text: "IDs captured from a device rather than physically presented. ",
    image: Img8,
  },
  {
    title: "Fraudulent IDs",
    text: "A fraudster's photo combined with stolen identity details used to create a physical ID.",
    image: Img9,
  },
];

const SayGoodBye: NextPage = () => {
  const [width] = useWindowSize();
  const sliderRef = useRef<any>(null);
  const [active, setActive] = useState<any>(0);
  const [settings, setSettings] = useState({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerPadding: "200px",
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          speed: 300,
          autoplay: false,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          className: "center",
          centerPadding: "0",
        },
      },
      // {
      //   breakpoint: 1025,
      //   settings: {
      //     dots: false,
      //     arrows: true,
      //     infinite: true,
      //     speed: 300,
      //     autoplay: false,
      //     centerMode: false,
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //     className: "center",
      //     centerPadding: "0px",
      //   },
      // },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          speed: 300,
          autoplay: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 300,
          autoplay: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerPadding: "20px",
        },
      },
    ],
  });

  const handleChange = (index: number) => {
    setActive(index);
  };

  // const handleHover = (index: any) => {
  //   setActive(index);
  // };

  // const handleLeave = () => {
  //   setActive(null);
  // };

  return (
    <Box
      w="100%"
      padding={{ base: "60px 0 0px", md: "150px 0 0px" }}
      background="#fff"
      backgroundSize="cover !important"
      overflow="hidden"
    >
      <Box w="100%" margin="0 auto">
        <Box padding={{ base: "0 20px", md: "0 125px" }}>
          <Heading
            as="h3"
            color="##110F24"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
            textAlign={{ base: "center", md: "center" }}
            maxW="800px"
            margin={{ base: "0 auto 15px", md: "0 auto 30px" }}
          >
            Wave{" "}
            <Heading
              as="span"
              color="#4959E7"
              fontSize={{ base: "28px", md: "40px" }}
              lineHeight={{ base: "35px", md: "50px" }}
            >
              goodbye to fraudsters
            </Heading>
          </Heading>

          <Text
            maxW="666px"
            margin="0 auto"
            color="#6C6B74"
            textAlign={{ base: "center", md: "center" }}
            fontSize={{ base: "14px", md: "20px" }}
            lineHeight={{ base: "22px", md: "32px" }}
          >
            {`Get access to anti-fraud tools that actually work. Be confident your customers are who they say they are by detecting:`}
          </Text>
        </Box>

        <Box
          w="100%"
          mt={{ base: "40px", md: "80px" }}
          position={{ base: "relative" }}
        >
          <Button
            bg="#fff"
            borderRadius="50% !important"
            w="48px"
            h="48px !important"
            left={{ base: "5px", sm: "10px", md: "40px" }}
            top="280px"
            position="absolute"
            zIndex="2"
            minW="30px !important"
            color="#4959E7"
            boxShadow="0px 6px 12px rgba(0, 0, 0, 0.1)"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <BsChevronLeft />
          </Button>
          <Button
            bg="#fff"
            borderRadius="50% !important"
            w="48px"
            h="48px !important"
            right={{ base: "5px", sm: "10px", md: "40px" }}
            top="280px"
            position="absolute"
            zIndex="2"
            minW="30px !important"
            color="#4959E7"
            boxShadow="0px 6px 12px rgba(0, 0, 0, 0.1)"
            onClick={() => sliderRef.current.slickNext()}
          >
            <BsChevronRight />
          </Button>

          <Slider
            {...settings}
            className="platformSlider"
            ref={sliderRef}
            afterChange={handleChange}
          >
            {data.map((item, i) => (
              <Box
                key={i}
                // w={{ base: "522px !important" }}
                px={{ base: "7px" }}
              >
                <Box
                  borderRadius="5px"
                  bg="#F8FAFF"
                  p={{ base: "34px 24px", md: "48px 34px" }}
                  minH={{
                    base: "350px",
                    md: "400px",
                    lg: "450px",
                    xl: "500px",
                  }}
                  textAlign="center"
                  // onMouseLeave={() => handleLeave()}
                  // onMouseEnter={() => handleHover(i)}
                >
                  <Heading
                    fontWeight={600}
                    fontSize={{ base: "20px" }}
                    lineHeight={{ base: "27px" }}
                    color="#4959E7"
                    mb="20px"
                  >
                    {item.title}
                  </Heading>
                  <Box
                    mx="auto"
                    display="flex"
                    justifyContent="center"
                    minH={width > 1024 ? "326px" : "230px"}
                  >
                    <Image
                      alt=""
                      layout="intrinsic"
                      // width="285px"
                      height={width > 1024 ? "326px" : "230px"}
                      src={item.image}
                      priority
                    />
                  </Box>
                  <Text
                    mt="15px"
                    fontWeight={400}
                    fontSize={{ base: "15px" }}
                    lineHeight={{ base: "24px" }}
                    color="#6C6B74"
                    maxW={{ base: "335px" }}
                    minH={{ base: "72px" }}
                    mx="auto"
                  >
                    {item.text}
                  </Text>
                  {active === i && (
                    <Button
                      mt={{ base: "20px", md: "49px" }}
                      fontWeight={600}
                      fontSize={{ base: "16px" }}
                      lineHeight={{ base: "24px" }}
                      letterSpacing="0.02em"
                      color="#4959E7"
                      p="13px"
                      bg="#FFFFFF"
                      w="100%"
                      borderRadius="10px"
                      rightIcon={<FiChevronRight />}
                    >
                      Learn more
                    </Button>
                  )}
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default SayGoodBye;
