import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import LinkNext from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import {
  Box,
  Link,
  Text,
  UnorderedList,
  ListItem,
  Heading,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";

import FaceIdImg from "public/images/face-id.svg";
import QuickIdImg from "public/images/quickid.svg";
import FaceMatchImg from "public/images/bn-face.svg";
import PepCheckImg from "public/images/pep-check-pr.svg";
import PepCheckFullImg from "public/images/pep-check-full.svg";

interface ImageType {
  image: string | StaticImageData;
}

interface InfoType {
  title: string;
  text: string;
  list: Array<string>;
  url: string;
}

interface TextType {
  value: string;
}

const ViewImage: React.FC<ImageType> = ({ image }) => {
  return (
    <Box w="100%">
      <Image alt="" src={image} priority layout="responsive" />
    </Box>
  );
};

const Item: React.FC<TextType> = ({ value }) => (
  <ListItem
    color="#4959E7"
    fontSize={{ base: "14px", md: "18px" }}
    lineHeight={{ base: "22px", md: "28px" }}
    mb="10px"
    fontWeight="500"
  >
    {value}
  </ListItem>
);

const BoxDetail: React.FC<InfoType> = ({ title, text, list, url }) => {
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

        <LinkNext href={url}>
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

const Detail: NextPage = () => {
  return (
    <Box w="100%" position="relative">
      <Box maxW="1440px" margin="0 auto">
        <Box
          padding={{
            base: "90px 25px 82px",
            md: "90px 40px",
            xl: "130px 95px",
          }}
        >
          <Grid
            gap={{ base: "40px", md: "60px", xl: "120px" }}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
          >
            <GridItem
              display={{ base: "none", lg: "block" }}
              colSpan={{ base: 5, lg: 3 }}
            >
              <Box maxW="654px" ml="-30px">
                <ViewImage image={FaceIdImg} />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 5, lg: 2 }}>
              <BoxDetail
                url="/face-id"
                title="Face ID"
                text="Eget eget at pulvinar neque enim massa. Sit venenatis vitae accumsan purus eget magna sed pellentesque."
                list={[
                  "Mauris cursus enim metus dolor tempus ",
                  "Tincidunt placerat integer diam enim ",
                  "Turpis lectus ac neque laoreet quisque ",
                ]}
              />
            </GridItem>
            <GridItem
              display={{ base: "block", lg: "none" }}
              colSpan={{ base: 5, lg: 0 }}
            >
              <ViewImage image={FaceIdImg} />
            </GridItem>

            <GridItem colSpan={{ base: 5, lg: 2 }}>
              <Box h="100% " pl={{ base: "0", md: "32px" }}>
                <BoxDetail
                  url="/quick-id"
                  title="Quick ID"
                  text="Eget eget at pulvinar neque enim massa. Sit venenatis vitae accumsan purus eget magna sed pellentesque."
                  list={[
                    "Mauris cursus enim metus dolor tempus ",
                    "Tincidunt placerat integer diam enim ",
                    "Turpis lectus ac neque laoreet quisque ",
                  ]}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 5, lg: 3 }}>
              {/* <Box display="inline-flex" alignItems="center" justifyContent="center"> */}
              <Box maxW="653px" ml="auto" mr={{ base: 0, md: "-50px" }}>
                <ViewImage image={QuickIdImg} />
              </Box>
              {/* </Box> */}
            </GridItem>

            <GridItem
              display={{ base: "none", lg: "block" }}
              colSpan={{ base: 5, lg: 3 }}
            >
              <Box maxW="653px" ml="-30px">
                <ViewImage image={FaceMatchImg} />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 5, lg: 2 }}>
              <BoxDetail
                url="/face-match"
                title="Face Match"
                text="Eget eget at pulvinar neque enim massa. Sit venenatis vitae accumsan purus eget magna sed pellentesque."
                list={[
                  "Mauris cursus enim metus dolor tempus ",
                  "Tincidunt placerat integer diam enim ",
                  "Turpis lectus ac neque laoreet quisque ",
                ]}
              />
            </GridItem>
            <GridItem
              display={{ base: "block", lg: "none" }}
              colSpan={{ base: 5, lg: 3 }}
            >
              <ViewImage image={FaceMatchImg} />
            </GridItem>
          </Grid>
        </Box>

        <Box
          padding={{ base: "0 25px 90px", md: "0 40px 90px", lg: "0 0 130px" }}
          // mb={{ base: 0, lg: "100px" }}
          position="relative"
        >
          <Grid
            gap={{ base: "40px", md: "40px", xl: "120px" }}
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          >
            <GridItem colSpan={1}>
              <Box
                pl={{ base: "0", md: "0", lg: "40px", xl: "127px" }}
                h="100%"
              >
                <BoxDetail
                  url="/pep-check"
                  title="PEP Check"
                  text="Eget eget at pulvinar neque enim massa. Sit venenatis vitae accumsan purus eget magna sed pellentesque."
                  list={[
                    "Mauris cursus enim metus dolor tempus ",
                    "Tincidunt placerat integer diam enim ",
                    "Turpis lectus ac neque laoreet quisque ",
                  ]}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box
                // position={{ base: "unset", lg: "absolute" }}
                // right="0"
                zIndex="5"
                // w={{ base: "100%", lg: "600px", xl: "700px" }}
                // bottom="0"
                // top="0"
                display={{ base: "none", lg: "flex" }}
                alignItems="center"
                justifyContent="flex-end"
              >
                <Box w={{ base: "100%", xl: "700px" }}>
                  <ViewImage image={PepCheckImg} />
                </Box>
              </Box>
              <Box
                // position={{ base: "unset", lg: "absolute" }}
                right="0"
                zIndex="5"
                w={{ base: "100%", lg: "600px", xl: "700px" }}
                bottom="0"
                top="0"
                display={{ base: "flex", lg: "none" }}
                alignItems="center"
                justifyContent="center"
              >
                <Box mr="-20px" w="100%">
                  <ViewImage image={PepCheckFullImg} />
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
