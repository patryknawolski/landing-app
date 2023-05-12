import React, { useState, useEffect } from "react";
import Image from "next/image";
import NextLink from "next/link";

import {
  Box,
  Button,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  Link,
} from "@chakra-ui/react";

import Logo from "public/images/CoreKYCWhite.svg";
// import Logo from "public/images/logo-header.svg";
import MenuImg from "public/images/bars.svg";
import { useCalendlyContext } from "contexts/CalendlyContext";

interface Props {
  heightBanner?: number;
  onViewPrice?: () => void;
  onViewWhyCore?: () => void;
}

const Header: React.FC<Props> = ({
  onViewPrice,
  heightBanner,
  onViewWhyCore,
}) => {
  const menuRef: any = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showBg, setShowBg] = useState(false);
  const { setIsModalOpen } = useCalendlyContext();

  useEffect(() => {
    const onScroll = (e: any) => {
      let currentPosition = window.pageYOffset;
      // const index = heightBanner ? heightBanner - 80 : 60;
      if (currentPosition > 40) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [heightBanner]);

  const handleScroll = (id: String) => {
    // onViewWhyCore()
    window.location.href = `#${id}`;
  };

  const onBookADemoClick = () => setIsModalOpen(true);

  return (
    <Box
      // maxW="1440px"
      margin="0 auto"
      position="fixed"
      zIndex="1000"
      top="0"
      left="0"
      right="0"
      bg={
        showBg
          ? // ? "linear-gradient(179deg, rgba(71,118,230,1) 0%, rgba(142,84,233,1) 100%)"
            "#5f6be9"
          : ""
      }
    >
      <Box
        w="100%"
        padding={{
          base: `${showBg ? "15px 25px" : "20px 25px"}`,
          xl: `${showBg ? "15px 65px" : "30px 65px"}`,
        }}
        boxSizing="border-box"
        overflow="hidden"
        display="flex"
        alignItems="center"
        maxW="1440px"
        margin="0 auto"
        transition="padding 0.3s ease-in-out"
      >
        <NextLink href="/">
          <Link
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            maxW={{ base: "90px", md: "120px" }}
          >
            <Image alt="" src={Logo} priority />
          </Link>
        </NextLink>

        <Box
          display={{ base: "none", lg: "inline-flex" }}
          alignItems="center"
          margin="0 auto"
        >
          <NextLink href="/product">
            <Link
              fontSize="16px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="163.5%"
              color="#fff"
              margin={{ base: 0, xl: "0 15px" }}
              padding="6px 15px"
              borderRadius="10px"
              _hover={{
                cursor: "pointer",
                textDecoration: "none",
                backgroundColor: "#fff",
                color: "#4959E7",
              }}
            >
              Products
            </Link>
          </NextLink>
          <NextLink href="/about-us">
            <Link
              fontSize="16px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="163.5%"
              color="#fff"
              margin={{ base: 0, xl: "0 15px" }}
              padding="6px 15px"
              borderRadius="10px"
              _hover={{
                cursor: "pointer",
                textDecoration: "none",
                backgroundColor: "#fff",
                color: "#4959E7",
              }}
            >
              About us
            </Link>
          </NextLink>
          <Link
            target="_blank"
            href="https://corekyc.stoplight.io/docs/corekyc-api/oxwvy00so15bb-basic-real-aml-workflow"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="163.5%"
            color="#fff"
            margin={{ base: 0, xl: "0 15px" }}
            padding="6px 15px"
            borderRadius="10px"
            _focus={{
              outline: "none",
            }}
            _hover={{
              cursor: "pointer",
              textDecoration: "none",
              backgroundColor: "#fff",
              color: "#4959E7",
            }}
          >
            Developers
          </Link>
          <Link
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="163.5%"
            color="#fff"
            margin={{ base: 0, xl: "0 15px" }}
            padding="6px 15px"
            borderRadius="10px"
            _hover={{
              cursor: "pointer",
              textDecoration: "none",
              backgroundColor: "#fff",
              color: "#4959E7",
            }}
            onClick={onViewPrice}
          >
            Pricing
          </Link>
          {/* </NextLink> */}
        </Box>

        <Stack
          direction="row"
          spacing={4}
          align="center"
          boxSizing="border-box"
          overflow="hidden"
          display={{ base: "none", lg: "inline-flex" }}
          alignItems="center"
        >
          <Button
            color="#FFFFFF"
            // _hover={{ bg: "none", opacity: 0.7, outline: "none" }}
            // _active={{ bg: "none", opacity: 0.7, outline: "none" }}
            variant="outline"
            // border="2px solid rgba(255, 255, 255, 0.74)"
            border="none"
            h="50px"
            padding="8px 15px"
            borderRadius="10px"
            fontSize="16px"
            fontWeight="semibold"
            _hover={{
              cursor: "pointer",
              textDecoration: "none",
              backgroundColor: "#fff",
              color: "#4959E7",
            }}
            // _active={{
            //   backgroundColor: "none",
            // }}
            _focus={{
              backgroundColor: "#fff",
              boxShadow: "none",
              color: "#4959E7",
            }}
            onClick={() => handleScroll("whyCore")}
          >
            Why CoreKYC?
          </Button>
          <Button
            color="#FFFFFF"
            variant="ghost"
            fontSize="16px"
            fontWeight="semibold"
            // w="53px !important"
            minW="53px !important"
            // mr="18"
            h="50px"
            padding="8px 15px"
            // w="150px"
            borderRadius="10px"
            _hover={{
              cursor: "pointer",
              textDecoration: "none",
              backgroundColor: "#fff",
              color: "#4959E7",
            }}
            _active={{
              backgroundColor: "none",
            }}
            _focus={{
              backgroundColor: "none",
            }}
          >
            Sign in
          </Button>
          <Button
            color="#FFFFFF"
            _hover={{ bg: "none", opacity: 0.7, outline: "none" }}
            _active={{ bg: "none", opacity: 0.7, outline: "none" }}
            variant="outline"
            border="2px solid rgba(255, 255, 255, 0.74)"
            h="50px"
            w="150px"
            borderRadius="10px"
            fontSize="16px"
            fontWeight="semibold"
            ml={{ base: "31px !important" }}
            onClick={onBookADemoClick}
          >
            Book a demo
          </Button>
        </Stack>

        <Link
          ref={menuRef}
          display={{ base: "inline-flex", lg: "none" }}
          marginLeft="auto"
          onClick={onOpen}
        >
          <Image alt="" src={MenuImg} />
        </Link>

        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={menuRef}
        >
          <DrawerOverlay />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerContent
            background="linear-gradient(144.51deg, #4776E6 0%, #8E54E9 100%)"
            // minHeight="100vh"
            position="relative"
          >
            <Box p="20px" display="flex" alignItems="flex-start">
              <Box maxW="100px">
                <Image alt="" src={Logo} />
              </Box>
              <DrawerCloseButton
                position="unset"
                ml="auto"
                color="#fff"
                border="none"
                _focus={{ border: "none", outline: "none", bg: "none" }}
                _active={{ border: "none", outline: "none", bg: "none" }}
              />
            </Box>

            <DrawerBody>
              <Box marginTop="50px" marginBottom="15px" color="#fff">
                <NextLink href="/product">
                  <Link
                    display="block"
                    w="100%"
                    textAlign="left"
                    marginTop="10px"
                    fontSize="16px"
                    lineHeight="26px"
                    mb="30px"
                    fontWeight="500"
                    _focus={{
                      textDecoration: "none",
                      bg: "none",
                      opacity: 0.7,
                    }}
                    _hover={{
                      textDecoration: "none",
                      bg: "none",
                      opacity: 0.7,
                    }}
                  >
                    Products
                  </Link>
                </NextLink>
                <NextLink href="/about-us">
                  <Link
                    display="block"
                    w="100%"
                    textAlign="left"
                    marginTop="10px"
                    fontSize="16px"
                    lineHeight="26px"
                    mb="30px"
                    fontWeight="500"
                    _focus={{
                      textDecoration: "none",
                      bg: "none",
                      opacity: 0.7,
                    }}
                    _hover={{
                      textDecoration: "none",
                      bg: "none",
                      opacity: 0.7,
                    }}
                  >
                    About us
                  </Link>
                </NextLink>
                <NextLink href="/">
                  <Link
                    display="block"
                    w="100%"
                    textAlign="left"
                    marginTop="10px"
                    fontSize="16px"
                    lineHeight="26px"
                    mb="30px"
                    fontWeight="500"
                    _focus={{
                      textDecoration: "none",
                      bg: "none",
                      opacity: 0.7,
                    }}
                    _hover={{
                      textDecoration: "none",
                      bg: "none",
                      opacity: 0.7,
                    }}
                  >
                    Developers
                  </Link>
                </NextLink>
                <NextLink href="/#price">
                  <Link
                    display="block"
                    w="100%"
                    textAlign="left"
                    marginTop="10px"
                    fontSize="16px"
                    lineHeight="26px"
                    mb="30px"
                    fontWeight="500"
                    _focus={{
                      textDecoration: "none",
                      bg: "none",
                      opacity: 0.7,
                    }}
                    _hover={{
                      textDecoration: "none",
                      bg: "none",
                      opacity: 0.7,
                    }}
                  >
                    Pricing
                  </Link>
                </NextLink>
              </Box>

              <Box
                textAlign="center"
                mt="165px"
                pb="30px"
                // position="absolute"
                // bottom="30px"
                // zIndex="2"
                // left="0"
                // right="0"
              >
                <Button
                  color="#fff"
                  _hover={{ bg: "none", opacity: 0.7 }}
                  variant="outline"
                  border="1px solid rgba(255, 255, 255, 0.74)"
                  borderRadius="5px"
                  fontSize="14px"
                  fontWeight="semibold"
                  mr="15px"
                  w="155px"
                  h="45px"
                >
                  Get a demo
                </Button>
                <Button
                  color="#fff"
                  _hover={{ bg: "none", opacity: 0.7 }}
                  variant="outline"
                  border="1px solid rgba(255, 255, 255, 0.74)"
                  borderRadius="5px"
                  fontSize="14px"
                  fontWeight="semibold"
                  w="155px"
                  h="45px"
                >
                  Why CoreKYC?
                </Button>

                <Button
                  color="#fff"
                  _hover={{ bg: "#fff", color: "#4959E7" }}
                  variant="ghost"
                  fontSize="14px"
                  fontWeight="semibold"
                  mt="0"
                  w="155px"
                  h="45px"
                >
                  Sign in
                </Button>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
