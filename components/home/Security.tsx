import type { NextPage } from "next";
import React from "react";
import Image from "next/image";

import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";

import Img1 from "public/images/s1.svg";
import Img2 from "public/images/s2.svg";
import Img3 from "public/images/s3.svg";
import Img4 from "public/images/s4.svg";

interface CardType {
  icon: string | StaticImageData;
  title: string;
  text: string;
}

const BookCard: React.FC<CardType> = ({ icon, title, text }) => {
  return (
    <Box
      w="100%"
      backgroundColor="#fff"
      border="1px solid #e9e9f3"
      boxSizing="border-box"
      borderRadius="5px"
      padding={{
        base: "49px 34px",
        lg: "34px",
      }}
      color="#4959e7"
      boxShadow="3px 3px 3px 2px rgba(227, 227, 227, 0.4)"
    >
      <Box width={{ base: "50px", lg: "60px" }}>
        <Image alt="" src={icon} />
      </Box>
      <Heading
        as="h3"
        fontStyle="normal"
        fontWeight="600"
        fontSize={{ base: "18px", md: "20px" }}
        lineHeight={{ base: "24px", md: "27px" }}
        marginBottom="15px"
        marginTop="25px"
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: "14px", md: "16px" }}
        lineHeight={{ base: "21px", md: "24px" }}
        fontWeight="normal"
        fontStyle="normal"
        color="#6c6b74"
        // marginBottom="15px"
      >
        {text}
      </Text>
    </Box>
  );
};

const Security: NextPage = () => {
  return (
    <Box
      w="100%"
      padding={{ base: "90px 25px", md: "0 101px 150px" }}
      maxW="1440px"
      margin="0 auto"
    >
      <Box mb={{ base: "31px", md: "80px" }} padding={{ base: "0", md: "0" }}>
        <Heading
          as="h3"
          color="##110F24"
          fontSize={{ base: "28px", md: "40px" }}
          lineHeight={{ base: "35px", md: "50px" }}
          textAlign={{ base: "left", md: "center" }}
          maxW="656px"
          margin={{ base: "0 auto 15px", md: "0 auto 30px" }}
        >
          <Heading
            as="span"
            color="#4959E7"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
            display={{ base: "block", md: "inline" }}
          >
            Security & privacy{" "}
          </Heading>
          is at the heart that everything we do
        </Heading>

        <Text
          maxW="512px"
          margin="0 auto"
          color="#6C6B74"
          textAlign={{ base: "left", md: "center" }}
          fontSize={{ base: "14px", md: "20px" }}
          lineHeight={{ base: "22px", md: "32px" }}
        >
          Nam et sed at interdum dui consequat viverra aliquet. Risus quis id
          ultrices mattis turpis sit justo.
        </Text>
      </Box>

      <Box w="100%">
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="26px">
          <BookCard
            title="State of the Art data Protection"
            text="Convallis nunc felis in adipiscing faucibus pulvinar vulputate neque mauris"
            icon={Img1}
          />
          <BookCard
            title="Secure"
            text="Nulla accumsan vitae ut molestie volutpat fermentum condimentum viverra  ac"
            icon={Img2}
          />
          <BookCard
            title="Certified"
            text="Tortor odio curabitur mauris nibh egestas hendrerit a nullam et"
            icon={Img3}
          />
          <BookCard
            title="GDPR Compliant"
            text="Elementum, euismod libero nisi, facilisis risus pulvinar mattis congue urna"
            icon={Img4}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Security;
