import type { NextPage } from "next";
import Reason from "common/Reason";

import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";

import Icon1 from "public/images/rs1.svg";
import Icon2 from "public/images/rs2.svg";
import Icon3 from "public/images/rs3.svg";
import Icon4 from "public/images/rs4.svg";
import Icon5 from "public/images/rs5.svg";
import Icon6 from "public/images/rs6.svg";

const reasons = [
  {
    icon: Icon1,
    title: "1. Contract-free & PAYG Pricing​",
    text: `Unlike the rest, there are no setup or licencing fees, subscriptions, or a minimum monthly spend. You only pay for what you use. Choose from monthly invoices, credit card, or direct debit.`,
  },
  {
    icon: Icon2,
    title: "2. Our Global Reach",
    text: `dentify your customers in New Zealand, Australia, Brazil, Canada, Denmark, Finland, France, United Kingdom, Netherlands, Norway, Russia, Sweden, Singapore, the United States of America. `,
  },
  {
    icon: Icon3,
    title: "3. Free & Secure Storage For 7+ Years",
    text: `Access your AML checks 24/7 for 7+ years through your Corekyc dashboard. Your data is stored secured through 256-bit encryption on the Google Cloud Platform. `,
  },
  {
    icon: Icon4,
    title: "4. Free Training & Support",
    text: `As easy as Corekyc’s products are to use, we provide as much training and support as you need when you need it. We’re available via phone, email, and in-app chat between 8am and 8pm 7 days a week.`,
  },
  {
    icon: Icon5,
    title: "5. Our Range of Flexible AML Tools",
    text: `Run identity checks (DIY or email your customer), stand alone PEP checks, biometric checks, or outsource your complex entity checks. Only use what’s applicable to your business.`,
  },
  {
    icon: Icon6,
    title: "6. NZ's Highest Rated AML Platform",
    text: `When it comes to satisfied customers, no one comes close to Corekyc. We are rated 4.9/5 based on ease of use, speed, compliance, and reliability. Read all of our reviews.`,
  },
];

const Reasons: NextPage = () => {
  return (
    <Box
      w="100%"
      overflow="hidden"
      padding={{ base: "60px 30px 100px", xl: "150px 107px" }}
      maxWidth="1440px"
      margin="0 auto"
    >
      <Box boxSizing="border-box">
        <Heading
          as="h1"
          fontStyle="normal"
          fontFamily="Inter"
          fontWeight="600"
          fontSize={{ base: "28px", md: "40px" }}
          lineHeight={{ base: "35px", md: "50px" }}
          textAlign={{ base: "left", md: "center" }}
          color="#4959e7"
        >
          6 reasons{" "}
          <Heading
            as="span"
            fontStyle="normal"
            fontFamily="Inter"
            fontWeight="600"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
            textAlign={{ base: "left", md: "center" }}
            color="#110f24"
          >
            to join Corekyc
          </Heading>
        </Heading>
        <Text
          fontWeight="normal"
          fontSize={{ base: "14px", md: "20px" }}
          lineHeight={{ base: "22px", md: "32px" }}
          color="#6C6B74"
          textAlign={{ base: "left", md: "center" }}
          maxW="894px"
          margin={{base: '30px auto 50px', md: '30px auto 80px'}}
        >
          We are NZ’s only AML platform that provides you with the flexibility
          to identify your customers across 14 countries plus outsource your
          complex entity checks to our AML experts.
        </Text>

        <SimpleGrid
          columns={{ lg: 3, md: 2 }}
          spacing={{ base: "40px", lg: "79px" }}
        >
          {reasons.map((item, i) => (
            <Reason
              icon={item.icon}
              title={item.title}
              text={item.text}
              key={i}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Reasons;
