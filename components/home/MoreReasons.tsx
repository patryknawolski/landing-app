import type { NextPage } from "next";
import NextLink from "next/link";
import { useRef, useState } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import ReasonCard from "common/ReasonCard";

const data = [
  {
    title: "Avoid failed verifications by accepting diacritical marks in names",
    text: "Detect diacritical marks and convert them into Latin characters more precisely than other OCR solutions for a hassle-free identification process.",
  },
  {
    title: "Allow glasses, hats & more for facial recognition",
    text: "Our technology allows you can verify customers wearing hats, scarves, glasses, contact lenses, and sunglasses. It also works with changes in their appearance, like makeup or facial hair.",
  },
  {
    title: "Prevent AML non-compliance with cutting edge anti-fraud tools",
    text: "Protect your firm against AML breaches and reputational risk by detecting detect tampered, printed, and fake identity documents and more to ensure compliance and avoid penalties.",
  },
  {
    title: "Prevent fraudulent accounts with accurate onboarding screening",
    text: "Ensure your customers are legitimate by accessing our proprietary anti-fraud tools and the world's first fraud database (coming soon).",
  },
  {
    title:
      "Streamline onboarding of customers by eliminating slow paper-based processes",
    text: "Effortlessly verify customers across 30+ countries: access hundreds of databases to instantly verify identity documents, names, and addresses.",
  },
  {
    title: "Reduce onboarding time and keep your customers engaged",
    text: "Employing real-time identity scanning, lighting-fast OCR, address auto-complete, and passive liveness checks enables firms to onboard customers remotely in under 30 seconds.",
  },
  {
    title: "Eliminate monthly minimums, subscriptions, and long-term contracts",
    text: "Our pay-per-use pricing model will save your firm thousands each month, with clear and transparent billing only for completed verifications, and no hidden fees or charges.",
  },
  {
    title: "Say goodbye to joining, support, training and integration costs",
    text: "Enjoy annual savings of tens of thousands of dollars with free onboarding, API/iFrame/SDK integrations, dedicated support, and unlimited training.",
  },
  {
    title:
      "Retrieve KYC verification data with ease - no back-and-forth needed",
    text: "Take full control of your data and access it anytime, anywhere - no providers holding your data captive. Download comprehensive verification reports with ease, as you retain ownership of your data.",
  },
  {
    title: "Reduce failed verifications and improve efficiency",
    text: "Maximise efficiency with over 93% of customers verified on the first attempt - minimise manual intervention and repeated verification requests.",
  },
  {
    title: "Avoid overpriced and outdated biometric tools from resellers",
    text: "Gain direct access to cutting-edge biometric and anti-fraud tools from the technology maker - customise workflows to fit your customers' needs and save tens of thousands of dollars yearly.",
  },
  {
    title: "No charges for verifications until successfully completed",
    text: "Pay only for completed verifications - initiate verifications as many times as needed and see a 20-30% reduction in KYC spending.",
  },
  {
    title: "No charge for reminders to complete verifications",
    text: "Eliminate the need to manually remind customers to complete verifications with our free automated reminders sent 24 and 72 hours after the initial verification.",
  },
  {
    title:
      "Prevent failed verifications due to changes in a customer’s appearance",
    text: "Match your customers' current appearance with ID photos from 20+ years ago - avoid inaccurate solutions from other vendors.",
  },
  {
    title:
      "Avoid asking customers to smile, blink or turn their heads for liveness checks",
    text: "Enable easy and passive liveness checks for your customers - no need to smile, blink, or turn their heads. Simply take a single-frame photo to verify their identity.",
  },
  {
    title:
      "Reduce false flags for Politically Exposed Persons (PEPs) and streamline your review process",
    text: "Efficiently screen PEPs with our AI technology, which utilises thousands of sanctions lists worldwide to identify relevant matches and eliminate false positives.",
  },
  {
    title:
      "Prevent automatic expiry of verification links and avoid charges for their resending",
    text: "Never worry about expired verification links again. Control when links expire, eliminating the need for manual resending and avoiding any additional charges for incomplete verifications.",
  },
  {
    title: "Prevent automatic deletion of data and ensure data downloadability",
    text: "Securely store completed verifications for as long as you need to comply with anti-money laundering regulations, without having to worry about the responsibility of storing sensitive information.",
  },
  {
    title: "Enable omni-channel verifications to onboard more customers",
    text: "Allow switching between desktop and mobile devices without starting the verification process again. Other providers limit onboarding to a single device, which may turn away potential customers.",
  },
  {
    title:
      "Add your firm’s branding to verifications to prevent customer pushback",
    text: "Improve verification completion rates and enhance customer relationships by displaying your company's logo and branding on all outbound communications.",
  },
  {
    title: "Prevent data breaches with a secure KYC/AML platform",
    text: "Secure data with limited password attempts, PII exclusion in emails, regular password updates, unusual login notifications, 2FA, and auto-deletion options.",
  },
];

const MoreReasons: NextPage = () => {
  const sliderRef = useRef<any>(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 300,
          autoplay: true,
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          className: "center",
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 300,
          autoplay: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 376,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 300,
          autoplay: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Box
      w="100%"
      padding={{ base: "20px 0 60px", md: "90px 0" }}
      background="#fff"
      overflow="hidden"
    >
      <Box w="100%" margin="0 auto" px={{ base: "20px", md: 0 }}>
        <Box>
          <Heading
            as="h3"
            color="##110F24"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
            textAlign={{ base: "center", md: "center" }}
            maxW="800px"
            margin={{ base: "0 auto 15px", md: "0 auto 30px" }}
          >
            Here’s{" "}
            <Heading
              as="span"
              color="#4959E7"
              fontSize={{ base: "28px", md: "40px" }}
              lineHeight={{ base: "35px", md: "50px" }}
            >
              20 more{" "}
            </Heading>
            reasons:
          </Heading>
        </Box>

        <Box w="100%" mt={{ base: "40px", md: "80px" }} position="relative">
          <Button
            bg="#fff"
            borderRadius="50% !important"
            w="48px"
            h="48px !important"
            left={{ base: "5px", sm: "10px", md: "40px" }}
            top="calc(50% - 24px)"
            position="absolute"
            zIndex="2"
            minW="30px !important"
            color="#4959E7"
            boxShadow="0px 6px 12px rgba(0, 0, 0, 0.1)"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <BsChevronLeft />
          </Button>
          <Button
            bg="#fff"
            borderRadius="50% !important"
            w="48px"
            h="48px !important"
            right={{ base: "5px", sm: "10px", md: "40px" }}
            top="calc(50% - 24px)"
            position="absolute"
            zIndex="2"
            minW="30px !important"
            color="#4959E7"
            boxShadow="0px 6px 12px rgba(0, 0, 0, 0.1)"
            onClick={() => sliderRef.current.slickNext()}
          >
            <BsChevronRight />
          </Button>
          <Slider {...settings} className="moreReasonsSlider" ref={sliderRef}>
            {data.map((item, i) => (
              <Box px={{ base: "20px" }} key={i}>
                <ReasonCard
                  title={item.title}
                  text={item.text}
                  mode="carousel"
                />
              </Box>
            ))}
          </Slider>
        </Box>

        <Box textAlign="center" px={{ base: "20px", md: "0px" }}>
          <NextLink href="/reasons">
            <Button
              fontWeight={600}
              fontSize={{ base: "16px" }}
              lineHeight={{ base: "24px" }}
              letterSpacing="0.02em"
              color="#fff"
              p="13px"
              bg="#4959E7"
              w="100%"
              maxW="450px"
              borderRadius="10px"
              mt={{ base: "24px", md: "45px" }}
              rightIcon={<FiChevronRight />}
            >
              Learn more
            </Button>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

export default MoreReasons;
