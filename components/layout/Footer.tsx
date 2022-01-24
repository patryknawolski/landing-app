import type { NextPage } from "next";
import NextLink from "next/link";
import Image from "next/image";
import moment from "moment";

import {
  Box,
  SimpleGrid,
  Text,
  Icon,
  Center,
  Link,
  Spacer,
  ListItem,
  List,
} from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";

import Logo from "public/images/logo-footer.svg";
import BSILogo from "public/images/bsi.webp";
import AWSLogo from "public/images/aws.svg";

const Footer: NextPage = () => {
  return (
    <Box w="100%" overflow="hidden" borderTop="1px solid #E5E5EA">
      <Box
        display={{ base: "inline-block", lg: "flex" }}
        w="100%"
        maxW="1440px"
        margin="0 auto"
        padding={{
          base: "95px 25px 30px",
          md: "60px 30px",
          xl: "100px 65px",
        }}
      >
        <Box marginBottom="46px">
          <Image alt="" src={Logo} />
        </Box>
        <Spacer />
        <Box>
          <SimpleGrid columns={{ md: 3, sm: 2 }} spacing="30px">
            <List minW={{ base: "120px", xl: "160px" }} margin="0">
              <ListItem marginBottom="10px">
                <NextLink href="/product">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    Products
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem marginBottom="10px">
                <NextLink href="/about-us">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    About Us
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem marginBottom="10px">
                <NextLink href="/">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    Developers
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem marginBottom="10px">
                <NextLink href="/#pricing">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    Pricing
                  </Link>
                </NextLink>
              </ListItem>
              {/* <ListItem marginBottom="10px">
                <NextLink href="/">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    Security
                  </Link>
                </NextLink>
              </ListItem> */}
            </List>

            <List minW={{ base: "120px", xl: "160px" }} margin="0">
              <ListItem marginBottom="10px">
                <NextLink href="/face-id">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    Face IDV
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem marginBottom="10px">
                <NextLink href="/quick-id">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    Quick IDV
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem marginBottom="10px">
                <NextLink href="/face-match">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    Face Match
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem marginBottom="10px">
                <NextLink href="/pep-check">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    PEP Check
                  </Link>
                </NextLink>
              </ListItem>
            </List>

            <List minW={{ base: "120px", xl: "160px" }} margin="0">
              <ListItem marginBottom="10px">
                <NextLink href="/">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    Sign In
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem marginBottom="10px">
                <NextLink href="/">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    Try For Free
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem marginBottom="10px">
                <NextLink href="/">
                  <Link
                    fontWeight="normal"
                    fontSize="16px"
                    textTransform="capitalize"
                    color="#110f24"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#4959e7",
                    }}
                  >
                    Book A Demo
                  </Link>
                </NextLink>
              </ListItem>
            </List>
          </SimpleGrid>
        </Box>
      </Box>

      <Box
        borderTop="1px solid #e5e5ea"
        borderBottom="1px solid #e5e5ea"
        w="100%"
      >
        <Box
          display={{ base: "inline-block", lg: "flex" }}
          alignItems="center"
          margin="0 auto"
          maxW="1440px"
          padding={{
            base: "25px",
            lg: "20px 30px",
            xl: "40px 65px",
          }}
        >
          <Box
            alignItems="center"
            margin={{ base: "0 0 35px", lg: "0 200px 0 0" }}
            display="inline-flex"
          >
            <Box maxW="126px">
              <Image alt="" src={BSILogo} priority />
            </Box>
            <Text
              fontSize="14px"
              fontWeight="normal"
              marginLeft="20px"
              color="#666"
            >
              Corekyc is ISO 27001 Certified
            </Text>
          </Box>
          <Box alignItems="center" display="inline-flex">
            <Box maxW="126px">
              <Image alt="" src={AWSLogo} priority />
            </Box>
            <Text
              fontSize="14px"
              fontWeight="normal"
              marginLeft="20px"
              color="#666"
            >
              Corekyc is powered by Amazon Web Services
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        padding={{
          base: "25px",
          lg: "20px 30px 30px",
          xl: "25px 66px 80px",
        }}
        boxSizing="border-box"
        alignItems="center"
        display={{ base: "inline-block", lg: "flex" }}
        maxW="1440px"
        margin="0 auto"
      >
        <Box marginBottom={{ base: "16px", lg: 0 }}>
          <Text fontSize="14px" color="#666" fontWeight="500">
            © {moment().year()} Corekyc
          </Text>
        </Box>
        <Box
          margin={{ base: "0 auto 25px", lg: "0 auto" }}
          justifyContent={{ base: "center", lg: "center" }}
        >
          <Center>
            <NextLink href="/terms-and-conditions">
              <Link
                fontWeight="normal"
                fontSize="14px"
                margin={{
                  base: "0 24px 10px 0",
                  sm: "0 54px 10px 0",
                  lg: "0 20px",
                }}
                textTransform="capitalize"
                color="#666"
                _hover={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#4959e7",
                }}
              >
                Terms & Conditions
              </Link>
            </NextLink>
            <NextLink href="/private-policy">
              <Link
                fontWeight="normal"
                fontSize="14px"
                margin={{
                  base: "0 24px 10px 0",
                  sm: "0 54px 10px 0",
                  lg: "0 20px",
                }}
                textTransform="capitalize"
                color="#666"
                _hover={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#4959e7",
                }}
              >
                Privacy Notice
              </Link>
            </NextLink>
            {/* <NextLink href="/">
              <Link
                fontWeight="normal"
                fontSize="14px"
                margin={{
                  base: "0 24px 10px 0",
                  sm: "0 54px 10px 0",
                  lg: "0 20px",
                }}
                textTransform="capitalize"
                color="#666"
                _hover={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#4959e7",
                }}
              >
                Cookie Policy
              </Link>
            </NextLink> */}
          </Center>
        </Box>
        <Box
          display="inline-flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Link
            fontWeight="normal"
            fontSize="16px"
            textTransform="capitalize"
            color="#4959e7"
            display="inline-flex"
            alignItems="center"
            _hover={{
              cursor: "pointer",
              textDecoration: "none",
              color: "#4959e7",
            }}
          >
            <Icon marginRight="7px" as={BsLinkedin} /> Follow us on Linkedin
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
