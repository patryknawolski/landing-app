import type { NextPage } from "next";
import React, { useState } from "react";
import Image from "next/image";
import LinkNext from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
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
  Input,
  Button,
} from "@chakra-ui/react";

import FaceIdImg from "public/images/face-id.svg";
import QuickIdImg from "public/images/new-quick-idv.svg";
import FaceMatchImg from "public/images/new-face-match.svg";
import PepCheckImg from "public/images/new-pep-check.svg";
import PepCheckFullImg from "public/images/pep-check-full.svg";

interface ImageType {
  image: string | StaticImageData;
}

interface InfoType {
  id: number;
  title: string;
  text: string;
  list: Array<string>;
  url: string;
  active: any;
  sent: any;
  onDownload: (id: number) => void;
  onSend: (id: number) => void;
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

const BoxDetail: React.FC<InfoType> = ({
  id,
  title,
  text,
  list,
  url,
  active,
  sent,
  onDownload,
  onSend,
}) => {
  const handleDownload = () => {
    onDownload(id);
  };

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

        {id === active && id === sent ? (
          <Text
            fontSize={{ base: "14px", md: "20px" }}
            lineHeight={{ base: "22px", md: "32px" }}
            fontWeight={600}
            color="#4959E7"
            display="flex"
            alignItems="center"
          >
            Documents sent <FiCheck style={{ marginLeft: "10px" }} />
          </Text>
        ) : id === active && id !== sent ? (
          <Box display={{ base: "flex" }} alignItems="center">
            <Input
              placeholder="Your work email"
              type="email"
              fontSize="14px"
              lineHeight="21px"
              fontWeight="500"
              p="15px 16px"
              borderRadius="10px"
              border="1px solid #DDDFE7"
              mr="6px"
              h="50px"
              _placeholder={{
                color: "#8185A0",
              }}
            />
            <Button
              fontSize="16px"
              lineHeight="24px"
              fontWeight="600"
              p="13px 36px"
              borderRadius="10px"
              bg="#4959E7"
              h="50px"
              color="#fff"
              _hover={{
                bg: "#4959E7",
                color: "#fff",
                opacity: 0.7,
              }}
              onClick={() => onSend(id)}
            >
              Download
            </Button>
          </Box>
        ) : (
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
            _hover={{
              textDecoration: "none",
            }}
            onClick={handleDownload}
          >
            Download the fact sheet{" "}
            <Icon
              w="26px"
              h="26px"
              fontSize="26px"
              fontWeight="700"
              as={BsArrowRightShort}
            />
          </Link>
        )}
      </Box>
    </Box>
  );
};

const Detail: NextPage = () => {
  const [active, setActive] = useState<any>(null);
  const [sent, setSent] = useState<any>(null);

  const handleViewDownload = (index: number) => {
    setActive(index);
  };

  const handleSent = (index: number) => {
    setSent(index);
  };
  console.log("sent: ", sent);

  return (
    <Box id="face-idv" w="100%" position="relative" overflow="hidden">
      <Box maxW="1440px" margin="0 auto">
        <Box
          padding={{
            base: "90px 25px 82px",
            md: "90px 40px",
            xl: "130px 95px",
          }}
        >
          <Grid
            gap={{ base: "40px", md: "60px", xl: "40px" }}
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
                id={1}
                active={active}
                sent={sent}
                onSend={handleSent}
                onDownload={handleViewDownload}
                url="/face-id"
                title="Face IDV"
                text="Globally compliant remote identity verification that combines best-in-class biometrics, data verification & world-first anti-fraud features."
                list={[
                  "Document authentication & accurate OCR",
                  "Customer identity & PEP verification ",
                  "Facial recognition & passive liveness detection",
                ]}
              />
            </GridItem>
            <GridItem
              display={{ base: "block", lg: "none" }}
              colSpan={{ base: 5, lg: 0 }}
            >
              <ViewImage image={FaceIdImg} />
            </GridItem>

            <GridItem id="quick-idv" colSpan={{ base: 5, lg: 2 }}>
              <Box h="100% " pl={{ base: "0", md: "0px" }}>
                <BoxDetail
                  id={2}
                  active={active}
                  sent={sent}
                  onSend={handleSent}
                  onDownload={handleViewDownload}
                  url="/quick-id"
                  title="Quick IDV"
                  text="Access 1000’s of global data sets to verify your customer’s ID docs, name, date of birth, address, and politically exposed persons (PEP) status."
                  list={[
                    "Onboard 93% of customers the first time",
                    "Verifications completed in under 5 seconds",
                    "Omni-channel experience on any device ",
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
            <GridItem id="face-match" colSpan={{ base: 5, lg: 2 }}>
              <BoxDetail
                id={3}
                active={active}
                sent={sent}
                onSend={handleSent}
                onDownload={handleViewDownload}
                url="/face-match"
                title="Face Match"
                text="Confidently match the image of your remote customer to the image of that customer on their government-issued identity document."
                list={[
                  "iBeta Level 1 and 2 ISO 330107-3 compliant",
                  "Works with customers wearing glasses & hats",
                  "Works with ID documents 20+ years old",
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
            <GridItem id="pep-check" colSpan={1}>
              <Box pl={{ base: "0", md: "0", lg: "40px", xl: "90px" }} h="100%">
                <BoxDetail
                  id={4}
                  active={active}
                  sent={sent}
                  onSend={handleSent}
                  onDownload={handleViewDownload}
                  url="/pep-check"
                  title="PEP Check"
                  text="Access 300+ PEP, sanctions, and watchlists to receive only the most relevant matches and avoid false positives."
                  list={[
                    "Run manual, API, SDK, or bulk checks",
                    "Databases automatically updated daily",
                    "Multi-language support & whitelisting",
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
