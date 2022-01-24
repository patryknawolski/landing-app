import type { NextPage } from "next";
import React from "react";
import Image from "next/image";

import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";

import CardImg1 from "public/images/card1.svg";
import CardImg2 from "public/images/card2.svg";
import CardImg3 from "public/images/card3.svg";
import CardImg4 from "public/images/card4.svg";

interface CardType {
  title: string;
  image: string | StaticImageData;
  isAtt: boolean;
}

const CardDetail: React.FC<CardType> = ({ title, image, isAtt }) => {
  return (
    <Box
      w="100%"
      textAlign="center"
      padding={{ base: "45px 27px", md: "50px 28px" }}
      backgroundColor="#F8FAFF"
      overflow="hidden"
    >
      <Heading
        as="h4"
        mb="35px"
        fontSize={{ base: "20px" }}
        lineHeight={{ base: "27px" }}
        color="#4959E7"
      >
        {title}
      </Heading>
      <Box
        w="100%"
        maxHeight="202px"
        position="relative"
        top={isAtt ? "-12px" : "0px"}
      >
        <Image alt="" src={image} priority />
      </Box>
    </Box>
  );
};

const Fraudsters: NextPage = () => {
  return (
    <Box
      w="100%"
      padding={{ base: "0 25px", md: "0 40px", xl: "0 125px" }}
      maxW="1440px"
      margin="0 auto"
    >
      <Box mb={{ base: "40px", md: "80px" }} padding={{ base: "0", md: "0" }}>
        <Heading
          as="h3"
          color="##110F24"
          fontSize={{ base: "28px", md: "40px" }}
          lineHeight={{ base: "35px", md: "50px" }}
          textAlign={{ base: "left", md: "center" }}
          maxW="826px"
          margin={{ base: "0 auto 15px", md: "0 auto 30px" }}
        >
          Hello more customers,{" "}
          <Heading
            as="span"
            color="#4959E7"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
          >
            goodbye fraudsters
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
          With Corekyc{"'"}s and its partner{"'"}s set of proprietary anti-fraud
          tools you can be confident your customers are who they say they are by
          detecting:
        </Text>
      </Box>

      <Box w="100%">
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={{ base: "15px", md: "25px" }}
        >
          <CardDetail isAtt={false} title="Photo overlays" image={CardImg1} />
          <CardDetail isAtt={false} title="Text overlays" image={CardImg2} />
          <CardDetail isAtt={false} title="Replay attacks" image={CardImg3} />
          <CardDetail isAtt={true} title="Spoofing attacks" image={CardImg4} />
          <CardDetail isAtt={false} title="Handwriting" image={CardImg2} />
          <CardDetail
            isAtt={false}
            title="Digital Tampering"
            image={CardImg1}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Fraudsters;
