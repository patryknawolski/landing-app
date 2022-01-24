import React from "react";
import Image from "next/image";
import NextLink from "next/link";

import { BsArrowRightShort } from "react-icons/bs";
import { Box, Heading, Text, Icon, Link } from "@chakra-ui/react";

interface Props {
  icon: string | StaticImageData;
  title: string;
  text: string;
  url: string;
}

const BookCard: React.FC<Props> = ({ icon, title, text, url }) => {
  return (
    <Box
      w="100%"
      backgroundColor="#fff"
      border="1px solid #e9e9f3"
      boxSizing="border-box"
      borderRadius="5px"
      padding={{
        base: "35px 25px",
        lg: "30px 24px 24px",
        xl: "53px 27px 53px 41px",
      }}
      color="#4959e7"
      boxShadow="3px 3px 3px 2px rgba(227, 227, 227, 0.4)"
      _hover={{
        cursor: "pointer",
        boxShadow: "3px 3px 5px 4px rgba(227, 227, 227, 0.55)",
      }}
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
        marginBottom="15px"
        _hover={{
          color: '#4959E7'
        }}
      >
        {text}
      </Text>
      <NextLink href={url}>
        <Link
          textDecoration="none"
          fontWeight="600"
          fontSize="16px"
          lineHeight="160%"
          fontStyle="normal"
          display="inline-flex"
          alignItems="center"
        >
          Book an online demo <Icon as={BsArrowRightShort} />
        </Link>
      </NextLink>
    </Box>
  );
};

export default BookCard;
