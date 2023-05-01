import React from "react";
import Image from "next/image";
import LinkNext from "next/link";

import { BsArrowRightShort, BsCheckCircle } from "react-icons/bs";
import {
  Box,
  SimpleGrid,
  ListItem,
  Icon,
  Heading,
  Text,
  UnorderedList,
  List,
  Link,
  ListIcon,
} from "@chakra-ui/react";

import SingleImg from "public/images/new-single-view.png";
import SingleMbImg from "public/images/single-view-mb.svg";

interface InfoType {
  title: string;
  text: string;
  list: Array<string>;
}

interface TextType {
  value: string;
}

const Item: React.FC<TextType> = ({ value }) => (
  <ListItem
    color="#4959E7"
    fontSize={{ base: "14px", md: "18px" }}
    lineHeight={{ base: "22px", md: "28px" }}
    mb="10px"
    fontWeight="500"
  >
    <ListIcon
      fontSize={{ base: "15px", md: "20px" }}
      mr={{ base: "12px", md: "18px" }}
      color="#4959E7"
      as={BsCheckCircle}
    />
    {value}
  </ListItem>
);

const BoxDetail: React.FC<InfoType> = ({ title, text, list }) => {
  return (
    <Box w="100%" h="100%" display="flex" alignItems="center">
      <Box w="100%">
        <Heading
          as="h2"
          fontSize={{ base: "28px", md: "40px" }}
          lineHeight={{ base: "35px", md: "50px" }}
          color="#110F24"
          fontWeight="600"
          marginBottom={{ base: "15px", md: "25px" }}
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: "14px", md: "18px" }}
          lineHeight={{ base: "22px", md: "28px" }}
          maxW={{ base: "100%", md: "416px" }}
          color="#6C6B74"
          marginBottom={{ base: "15px", md: "25px" }}
        >
          {text}
        </Text>

        <UnorderedList mb={{ base: "5px", md: "15px" }}>
          {list.map((item, i) => (
            <Item key={i} value={item} />
          ))}
        </UnorderedList>

        <LinkNext href="/">
          <Link
            alignItems="center"
            display="inline-flex"
            fontStyle="normal"
            fontWeight="600"
            fontSize={{ base: "16px", md: "20px" }}
            lineHeight={{ base: "26px", md: "32px" }}
            cursor="pointer"
            textDecoration="none"
            color="#4959e7"
          >
            Learn more{" "}
            <Icon
              w="26px"
              h="26px"
              fontSize="26px"
              fontWeight="700"
              as={BsArrowRightShort}
            />
          </Link>
        </LinkNext>
      </Box>
    </Box>
  );
};

const SingleView = () => {
  return (
    <Box w="100%" padding={{ base: "60px 0 90px", md: "0px 0 0" }}>
      <Box maxW="1440px" margin="0 auto">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: "40px", md: "0" }}
        >
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            padding={{ base: "0 25px", md: 0 }}
          >
            <Box w="100%" pl={{ base: "0", md: "40px", xl: "125px" }}>
              <Heading
                as="h2"
                fontSize={{ base: "28px", md: "40px" }}
                lineHeight={{ base: "35px", md: "50px" }}
                color="#110F24"
                fontWeight="600"
                maxW="400px"
                marginBottom={{ base: "15px", md: "25px" }}
              >
                Your all-in-one{" "}
                <Heading
                  as="span"
                  fontSize={{ base: "28px", md: "40px" }}
                  lineHeight={{ base: "35px", md: "50px" }}
                  color="#4959E7"
                  fontWeight="600"
                  marginBottom={{ base: "15px", md: "25px" }}
                  display={{ base: "inline", md: "block" }}
                >
                  customer dashboard
                </Heading>
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "18px" }}
                lineHeight={{ base: "22px", md: "28px" }}
                maxW={{ base: "100%", md: "416px" }}
                color="#6C6B74"
                marginBottom={{ base: "15px", md: "25px" }}
              >
                Make manual review operations more efficient by consolidating
                all verification-related data, regardless of its source, into
                one unified view.
              </Text>

              <List>
                <Item value="Initiate, monitor & review verifications" />
                <Item value="Manage verification links & storage" />
                <Item value="Manage users & permissions" />
              </List>
            </Box>
          </Box>

          <Box
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Box maxW={{ base: "100%", md: "700px" }}>
              <Image alt="" src={SingleImg} priority />
            </Box>
          </Box>

          <Box
            w="100%"
            display={{ base: "flex", md: "none" }}
            justifyContent="flex-end"
          >
            <Image alt="" src={SingleMbImg} priority />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SingleView;
