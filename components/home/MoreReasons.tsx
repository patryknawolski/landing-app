import type { NextPage } from "next";
import { useRef, useState } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

const data = [
  {
    title:
      "Avoid failed checks from hyphens & accents/diacritics in customer’s names",
    text: "Optical character recognition (OCR) enables hyphens to be accurately detected, as well as accents and diacritics to be converted into simple Latin characters. ",
  },
  {
    title:
      "Avoid asking customers to remove their glasses & hats for facial recognition",
    text: "With FaceMatch, you can verify customers wearing hats, scarves, glasses, contact lenses, and sunglasses. It also works with changes in their appearance, like makeup or facial hair growth.",
  },
  {
    title: "Avoid AML non-compliance from outdated biometric software",
    text: "In order to prevent anti-money laundering breaches, monetary penalties, and reputational risk, detect tampered or fake identity documents lacking security features.",
  },

  {
    title: "Stop fraudsters from being onboarded",
    text: "Make sure your customers are who they say they are by accessing the world's first fraud database and using our proprietary anti-fraud tools. Say goodbye to fraudsters and get more customers.",
  },

  {
    title: "Avoid a slow paper-based process for onboarding overseas customers",
    text: "Instantly and electronically verify your customers in over 30 countries. Access 100's of government and commercial databases to verify your customer's identity documents, name, and address.",
  },

  {
    title: "Don’t lose customers to a slow onboarding experience",
    text: "Using real-time identity document scanning, lightning-fast OCR, address auto-complete, and passive liveness checks, you can remotely onboard customers in less than 30 seconds.",
  },

  {
    title:
      "Avoid minimum monthly fees, subscription costs & multi-year contracts",
    text: "Pay-per-use allows businesses of all sizes to save thousands of dollars a month. There are no hidden charges for verifications since they are only billed once they are completed at the end of the month.",
  },

  {
    title: "Avoid paying any joining, support, or integration costs",
    text: "You'll save tens of thousands of dollars a year with our free dedicated account managers, free ongoing support, and API, embedded iFrame, or SDK integrations.",
  },

  {
    title:
      "Don’t go back and forth with your KYC provider to retrieve verification data",
    text: "Don't allow other providers to hold your data hostage. As the owner of your data, you'll have 24/7 access to it. At the click of a button, you can download comprehensive verification reports.",
  },

  {
    title: "Avoid seeing a large number of failed verifications",
    text: "Get over 93% of your customers verified on the first try. Your team should avoid manual intervention, and more importantly, should avoid asking your customers to repeat the verification process.",
  },

  {
    title: "Don’t pay for overpriced, 2nd-hand, and outdated biometric tools",
    text: "Benefit from direct access to cutting-edge biometric and anti-fraud tools and save tens of thousands of dollars annually. Your workflows can be customised to meet the specific needs of your customers.",
  },

  {
    title: "Never be charged for verifications until they’re completed",
    text: "Verifications can be initiated an unlimited number of times, and you will only be charged for completed ones. Your AML/KYC spending will be reduced by 20-30% as a result.",
  },

  {
    title:
      "Never be charged to remind your customer to complete a verification",
    text: "Avoid manually resending incomplete verification reminders to your customers. Your initial verification will be followed up with free automatic reminders 24 and 72 hours later.",
  },

  {
    title:
      "Avoid failed facematch verifications from changes in a customer’s appearance",
    text: "Avoid manually resending incomplete verification reminders to your customers. After an incomplete verification is initiated, your customer will be automatically reminded 24 and 72 hours later.",
  },

  {
    title:
      "Avoid asking customers to smile, blink or turn their heads for liveness checks",
    text: "When you provide passive liveness technology to your customers, all they have to do is take a single frame photo of themselves without taking any further action.",
  },

  {
    title:
      "Avoid reviewing huge amounts of falsely flagged politically exposed persons (PEP)",
    text: "Artificial intelligence (AI) draws daily from hundreds of watchlists and sanctions lists around the world to provide only the most relevant PEP matches and exclude false positives.",
  },

  {
    title:
      "Avoid verification links automatically expiring & being charged to resend them",
    text: "With this feature, you will be able to control when your customer's verification links expire so you do not have to manually resend them and will not be charged for incomplete verifications again.",
  },

  {
    title:
      "Avoid your data being automatically deleted or a chance to download it",
    text: "Verifications completed within your dashboard are stored for a period of time of your choice in order to comply with anti-money laundering regulations. Storing sensitive information isn't your responsibility. ",
  },

  {
    title:
      "Avoid incomplete verification by allowing verifications on a smartphone or desktop",
    text: "To get more customers, allow them to complete their verifications anywhere, on any device with a camera and an internet connection (omnichannel). Other providers limit onboarding to a smartphone.",
  },
  {
    title:
      "Avoid customer pushback with your firm’s logo and branding on verifications",
    text: "To increase completed verifications, display your firm's logo and branding in all communications sent through our dashboard. Additionally, you will gain a competitive edge and improve customer relations.",
  },
];

const MoreReasons: NextPage = () => {
  const sliderRef = useRef<any>(null);
  const [settings, setSettings] = useState({
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
  });

  const handleChange = (index: number) => {
    setTimeout(() => {
      if (index === 3) {
        sliderRef.current.slickGoTo(0, false);
        setSettings({ ...settings, autoplay: false });
      }
    }, 3000);
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
          <Slider
            {...settings}
            className="moreReasonsSlider"
            ref={sliderRef}
            afterChange={handleChange}
          >
            {data.map((item, i) => (
              <Box px={{ base: "20px" }} key={i}>
                <Box
                  borderRadius="5px"
                  bg="#F8FAFF"
                  p={{ base: "30px 40px", md: "40px 60px" }}
                  minH={{ base: "236px", xxl: '260px' }}
                  maxW={{ base: "628px" }}
                >
                  <Heading
                    fontWeight={600}
                    fontSize={{ base: "20px" }}
                    lineHeight={{ base: "27px" }}
                    color="#4959E7"
                    mb="30px"
                  >
                    {item.title}
                  </Heading>
                  <Text
                    fontWeight={400}
                    fontSize={{ base: "15px" }}
                    lineHeight={{ base: "24px" }}
                    color="#6C6B74"
                  >
                    {item.text}
                  </Text>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>

        <Box textAlign="center" px={{ base: "20px", md: "0px" }}>
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
        </Box>
      </Box>
    </Box>
  );
};

export default MoreReasons;
