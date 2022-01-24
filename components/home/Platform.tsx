import type { NextPage } from "next";
import { useRef, useState } from "react";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import WorkFlowImg from "public/images/workflow.svg";
import WorkFlow2Img from "public/images/workflow2.svg";
import WorkFlow3Img from "public/images/workflow3.svg";
import WorkFlow4Img from "public/images/workflow4.svg";

const Platform: NextPage = () => {
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
      if (index === 3) {
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
  //   autoplay: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
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
      padding={{ base: "90px 0 130px", md: "150px 0 210px" }}
      maxW="1440px"
      margin="0 auto"
    >
      <Box padding={{ base: "0 25px", md: "0" }}>
        <Heading
          as="h3"
          color="##110F24"
          fontSize={{ base: "28px", md: "40px" }}
          lineHeight={{ base: "35px", md: "50px" }}
          textAlign={{ base: "left", md: "center" }}
          maxW="800px"
          margin={{ base: "0 auto 15px", md: "0 auto 30px" }}
        >
          One platform, hundreds of workflows to stay{" "}
          <Heading
            as="span"
            color="#4959E7"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
          >
            KYC/AML compliant
          </Heading>
        </Heading>

        <Text
          maxW="812px"
          margin="0 auto"
          color="#6C6B74"
          textAlign={{ base: "left", md: "center" }}
          fontSize={{ base: "14px", md: "20px" }}
          lineHeight={{ base: "22px", md: "32px" }}
        >
          With Corekyc{"'"}s no-code verification workflows you can onboard
          customers in over 30 countries while taking the guesswork out of your
          compliance requirements.
        </Text>
      </Box>

      <Box w="100%" mt={{ base: "40px", md: "80px" }}>
        <Slider
          {...settings}
          className="platformSlider"
          ref={sliderRef}
          afterChange={handleChange}
        >
          <Box pl={{ base: "16px", md: "47px" }}>
            <Image alt="" src={WorkFlowImg} priority />
          </Box>
          <Box pl={{ base: "16px", md: "47px" }}>
            <Image alt="" src={WorkFlow2Img} priority />
          </Box>
          <Box pl={{ base: "16px", md: "47px" }}>
            <Image alt="" src={WorkFlow3Img} priority />
          </Box>
          <Box pl={{ base: "16px", md: "47px" }}>
            <Image alt="" src={WorkFlow4Img} priority />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};

export default Platform;
