import { Icon, Link } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";

export const LinkedInLink = () => (
  <Link
    href="https://www.linkedin.com/company/realyou/"
    target="_blank"
    fontWeight="normal"
    fontSize="16px"
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
);
