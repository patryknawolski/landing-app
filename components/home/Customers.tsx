import type { NextPage } from "next";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import MapImg from "public/images/global-map.svg";

interface StaticType {
  title: string;
  text: string;
  isActive: boolean;
}

const Statistic: React.FC<StaticType> = ({ title, text, isActive }) => {
  return (
    <Box
      h="100%"
      w="100%"
      backgroundColor="#fff"
      border="1px solid #E9E9F3"
      borderRadius="5px"
      boxShadow={{ base: "none", md: "6px 6px 5px 0px rgba(53,53,61,0.05)" }}
      padding={{ base: "0", md: "36px 32px" }}
      _hover={{
        shadow: { base: "none", md: "12px 12px 10px 0px rgba(53,53,61,0.05)" },
        cursor: "pointer",
      }}
    >
      <Heading
        as="h3"
        fontSize="25px"
        lineHeight="33px"
        mb="10px"
        maxW="205px"
        color="#4959E7"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <Text
        fontSize="14px"
        lineHeight="21px"
        color={isActive ? "#4959E7" : "#6C6B74"}
        maxW="205px"
      >
        {text}
      </Text>
    </Box>
  );
};

const Customers: NextPage = () => {
  const [hover, setHover] = useState(null);

  const onHover = (index: any) => {
    setHover(index);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      w="100%"
      padding={{ base: "0 25px 130px", md: "0 25px", xl: 0 }}
      maxW="1440px"
      margin="0 auto"
    >
      <Box mb={{ base: "60px", xl: "87px" }}>
        <Heading
          as="h3"
          color="#110F24"
          fontSize={{ base: "28px", md: "40px" }}
          lineHeight={{ base: "35px", md: "50px" }}
          textAlign={{ base: "left", md: "center" }}
          maxW="760px"
          margin={{ base: "0 auto 15px", md: "0 auto 30px" }}
        >
          Instantly access thousands of data sets to{" "}
          <Heading
            as="span"
            color="#4959E7"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
          >
            reach over 4 billion customers
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
          From live selfies to government ID to address verification, Corekyc
          offers 1000’s of verification components you can select for the ideal
          KYC/AML experience.
        </Text>
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap="65px">
          <Box w="100%" pl={{ base: "40px", md: 0, xl: "118px" }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="18px">
              <Box
                h="100%"
                w="100%"
                onMouseEnter={() => onHover(1)}
                onMouseLeave={() => onHover(null)}
              >
                <Statistic
                  isActive={hover === 1}
                  title={`9,000+ ID documents covered`}
                  text={`Access government and commercial data sources to verify name, date of birth, and address in over 30 countries.`}
                />
              </Box>
              <Box
                h="100%"
                w="100%"
                onMouseEnter={() => onHover(2)}
                onMouseLeave={() => onHover(null)}
              >
                <Statistic
                  isActive={hover === 2}
                  title={`200+ ID data sources`}
                  text={`Access government and commercial data sources to verify name, date of birth, and address in over 30 countries.`}
                />
              </Box>
              <Box
                h="100%"
                w="100%"
                onMouseEnter={() => onHover(3)}
                onMouseLeave={() => onHover(null)}
              >
                <Statistic
                  isActive={hover === 3}
                  title={`20+ DVS <br/> checks`}
                  text={`Our global document verification service (DVS) can verify passports, driver licences, national ID cards, and more.`}
                />
              </Box>
              <Box
                h="100%"
                w="100%"
                onMouseEnter={() => onHover(4)}
                onMouseLeave={() => onHover(null)}
              >
                <Statistic
                  isActive={hover === 4}
                  title={`30+ PEP & Sanctions Watchlists`}
                  text={`Identify Politically Exposed Persons (PEP), Relatives and
                Close Associates (RCA), and Special Interest Persons (SIP).`}
                />
              </Box>
            </SimpleGrid>
          </Box>

          <Box
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box maxW={{ base: "650px" }} pr="65px">
              <Image alt="" src={MapImg} priority />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        <Slider {...settings} className="platformSlider">
          <Box>
            <Heading
              as="h3"
              fontSize="18px"
              lineHeight="24px"
              maxW="185px"
              margin="0 auto"
              color="#4959E7"
              textAlign="center"
            >
              9,000+ ID documents covered
            </Heading>

            <Box mt="40px" mb="30px" w="100%">
              <Image alt="" src={MapImg} />
            </Box>

            <Text
              fontSize="12px"
              lineHeight="18px"
              color="#6C6B74"
              maxW="310px"
              margin="0 auto"
              textAlign="center"
            >
              A capture and OCR extraction is completed in less than a second
              with superior accuracy. Artificial intelligence and machine
              learning enables continuous improvement.
            </Text>
          </Box>

          <Box>
            <Heading
              as="h3"
              fontSize="18px"
              lineHeight="24px"
              maxW="185px"
              margin="0 auto"
              color="#4959E7"
              textAlign="center"
            >
              200+ ID data sources
            </Heading>

            <Box mt="40px" mb="30px" w="100%">
              <Image alt="" src={MapImg} />
            </Box>

            <Text
              fontSize="12px"
              lineHeight="18px"
              color="#6C6B74"
              maxW="310px"
              margin="0 auto"
              textAlign="center"
            >
              Access government and commercial data sources to verify name, date
              of birth, and address in over 30 countries.
            </Text>
          </Box>

          <Box>
            <Heading
              as="h3"
              fontSize="18px"
              lineHeight="24px"
              maxW="185px"
              margin="0 auto"
              color="#4959E7"
              textAlign="center"
            >
              20+ DVS checks
            </Heading>

            <Box mt="40px" mb="30px" w="100%">
              <Image alt="" src={MapImg} />
            </Box>

            <Text
              fontSize="12px"
              lineHeight="18px"
              color="#6C6B74"
              maxW="310px"
              margin="0 auto"
              textAlign="center"
            >
              Our global document verification service (DVS) can verify
              passports, driver licences, national ID cards, and more.
            </Text>
          </Box>
          <Box>
            <Heading
              as="h3"
              fontSize="18px"
              lineHeight="24px"
              maxW="185px"
              margin="0 auto"
              color="#4959E7"
              textAlign="center"
            >
              30+ PEP & Sanctions Watchlists
            </Heading>

            <Box mt="40px" mb="30px" w="100%">
              <Image alt="" src={MapImg} />
            </Box>

            <Text
              fontSize="12px"
              lineHeight="18px"
              color="#6C6B74"
              maxW="310px"
              margin="0 auto"
              textAlign="center"
            >
              Identify Politically Exposed Persons (PEP), Relatives and Close
              Associates (RCA), and Special Interest Persons (SIP).
            </Text>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};

export default Customers;
