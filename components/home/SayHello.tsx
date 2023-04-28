import type { NextPage } from "next";
import React, { useState } from "react";
import Image from "next/image";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import MapImg from "public/images/new-map.svg";

const data = [
  {
    title: "10,000+ ID documents accepted",
    text: "Access government and commercial data sources to verify name, date of birth, and address in over 30 countries.",
  },
  {
    title: "200+ ID data sources",
    text: "Access government and commercial data sources to verify name, date of birth, and address in over 30 countries.",
  },
  {
    title: "20+ DVS checks",
    text: "Our global document verification service (DVS) can verify passports, driver licences, national ID cards, and more.",
  },
  {
    title: "100+ PEP & Sanctions Whatchlists",
    text: "Identify Politically Exposed Persons (PEP), Relatives and Close Associates (RCA), and Special Interest Persons (SIP).",
  },
];

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
      padding={{ base: "20px", md: "36px 32px" }}
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
        maxW={{base: '100%', md: "205px"}}
        color="#4959E7"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <Text
        fontSize="14px"
        lineHeight="21px"
        color={isActive ? "#4959E7" : "#6C6B74"}
        maxW={{base: '100%', md: "205px"}}
      >
        {text}
      </Text>
    </Box>
  );
};

const SayHello: NextPage = () => {
  const [hover, setHover] = useState(null);

  const onHover = (index: any) => {
    setHover(index);
  };

  return (
    <Box
      w="100%"
      padding={{ base: "100px 0px 0px", lg: "150px 0 0px" }}
      background="#fff"
      backgroundSize="cover !important"
    >
      <Box
        w="100%"
        maxW="1440px"
        margin="0 auto"
        padding={{ base: "0 20px", lg: '0 40px', xl: "0 125px" }}
      >
        <Box>
          <Heading
            as="h3"
            color="##110F24"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
            textAlign={{ base: "left", md: "center" }}
            maxW="800px"
            margin={{ base: "0 auto 15px", md: "0 auto 80px" }}
          >
            Say hello to{" "}
            <Heading
              as="span"
              color="#4959E7"
              fontSize={{ base: "28px", md: "40px" }}
              lineHeight={{ base: "35px", md: "50px" }}
            >
              over 4 billion customers
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
            offers 1000’s of verification components you can select for the
            ideal KYC/AML experience.
          </Text>
        </Box>

        <Box>
          <Box w={{ base: "100%" }} mt={{ base: "80px" }}>
            <Image alt="" src={MapImg} priority layout="responsive" />
          </Box>

          <Box w="100%" mt={{ base: "-180px" }} position="relative">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="18px">
              {data.map((item, i) => (
                <Box
                  key={i}
                  h="100%"
                  w="100%"
                  onMouseEnter={() => onHover(i + 1)}
                  onMouseLeave={() => onHover(null)}
                >
                  <Statistic
                    isActive={hover === i + 1}
                    title={item.title}
                    text={item.text}
                  />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SayHello;
