import type { NextPage } from "next";

import Layout from "components/layout/Layout";
import Banner from "common/Banner";
import { FC } from "react";
import { chakra, Box, Container, Text } from "@chakra-ui/react";
import AutoGraphIcon from "public/images/auto-graph-icon.svg";
import SafetyCertificateLineIcon from "public/images/safety-certificate-line-icon.svg";
import WoldCareOutlineIcon from "public/images/safety-certificate-line-icon.svg";
import newZealandFlag from "public/images/new-zealand-flag.svg";
import Image from "next/image";

const pros = [
  {
    title: "Care",
    description:
      "Through our bespoke emails and phone conversations, we carefully collect the required individual and entity information, documents, and consent.",
    icon: WoldCareOutlineIcon,
  },
  {
    title: "Efficiency",
    description:
      "You’re an expert in your field, and so are we. So focus on growing your business and leave your time consuming AML checks to our AML analysts.",
    icon: AutoGraphIcon,
  },
  {
    title: "Compliance",
    description:
      "Receive a comprehensive PDF report with all the mandatory information. This may include the trust deed, source of wealth or funds, and identity checks for all required individuals.",
    icon: SafetyCertificateLineIcon,
  },
];

const Pros: FC = () => (
  <Box padding={{ base: "32px 0", md: "134px 0 128px" }}>
    <Container position="relative" zIndex="1">
      <Box
        display={{ xl: "grid" }}
        gridTemplateColumns={{ xl: "repeat(3, 343px)" }}
        justifyContent="center"
        gridGap="44px"
      >
        {pros.map(({ title, description, icon }, index) => (
          <Box
            key={title}
            mb={{ base: index + 1 < pros.length ? "24px" : undefined, xl: 0 }}
            padding="28px"
            background="#fff"
            border="1px solid"
            borderColor="border"
            borderRadius="6px"
            position="relative"
            _before={{
              content: "''",
              display: "block",
              position: "absolute",
              zIndex: -1,
              top: "11px",
              left: "8px",
              width: "100%",
              height: "100%",
              background: "rgba(53, 53, 61, 0.05)",
              filter: "blur(6px)",
              borderRadius: "6px",
            }}
          >
            <Box display="flex" alignItems="center" marginBottom="20px">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="68px"
                height="68px"
                marginRight="24px"
                borderRadius="12px"
                backgroundColor="#F1F5FE"
              >
                <Image src={icon} width="32px" height="32px" />
              </Box>
              <Text
                color="blue"
                fontSize="23px"
                lineHeight="31px"
                fontWeight="600"
              >
                {title}
              </Text>
            </Box>
            <Text
              fontSize="18px"
              lineHeight="27px"
              color="#6C6B74"
              paddingRight="32px"
            >
              {description}
            </Text>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

const stats = [
  {
    numbers: "180,000+",
    statName: "Verified Individuals",
  },
  {
    numbers: "25,000+",
    statName: "Verified NZ Entities",
  },
  {
    numbers: "2",
    statName: "Average Completion Time",
  },
];

const Stats: FC = () => (
  <Box
    backgroundColor="#F8FAFF"
    pt={{ base: "32px", md: "66px" }}
    pb={{ base: "32px", md: "66px" }}
  >
    <Container
      maxW="1080px"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      {stats.map(({ numbers, statName }, index) => (
        <Box
          key={statName}
          color="blue"
          mb={{
            base: index + 1 < stats.length ? "24px" : undefined,
            md: 0,
          }}
          textAlign={{ base: "center", md: undefined }}
        >
          <Text fontSize="50px" lineHeight="1" mb="12px" fontWeight="700">
            {numbers}
          </Text>
          <Text fontSize="15px">{statName}</Text>
        </Box>
      ))}
    </Container>
  </Box>
);

const VideoSection: FC = () => (
  <Box bgColor="#fff" p={{ base: "32px 0", md: "124px 0 144px" }}>
    <Container maxW="1080px">
      <Box
        display={{ md: "grid" }}
        gridTemplateColumns="540px 1fr"
        gridGap="64px"
      >
        <Box></Box>
        <Box>
          <Text
            mb="30px"
            fontSize="40px"
            lineHeight={1.25}
            fontWeight="600"
            color="#333333"
          >
            Focus on your core business, and leave{" "}
            <chakra.span color="blue">
              your AML checks to our analysts
            </chakra.span>
          </Text>
          <Text fontSize="18px" lineHeight="30px" color="#6A798C">
            Our in-house system instantly determines the directors and ultimate
            beneficial owners behind NZ companies. When a professional third-
            party collects your customer’s trust deed, and sensitive information
            such as their source of wealth or funds it’s less intrusive and
            completed faster. Outsourced helps you stay compliant and reduces
            your AML burdens.
          </Text>
        </Box>
      </Box>
    </Container>
  </Box>
);

const OutsourcedAML: NextPage = () => {
  return (
    <Layout title="Outsourced AML">
      <Banner
        title="Outsourced AML"
        text="Under Section 34 of NZ’s AML Act 2009, we diligently conduct your customer and enhanceddue diligence (CDD & EDD) on behalf of your clients and their entities."
        adornment={
          <Box display="flex" justifyContent="center" mb="12px">
            <Image src={newZealandFlag} />
          </Box>
        }
      />
      <Pros />
      <Stats />
      <VideoSection />
    </Layout>
  );
};

export default OutsourcedAML;
