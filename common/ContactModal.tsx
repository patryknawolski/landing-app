import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Input,
} from "@chakra-ui/react";
import { FC } from "react";
import { chakra } from "@chakra-ui/react";
import MarkEmailReadRoundedIcon from "public/images/mark-email-read-rounded-icon.svg";
import MarkUnreadChatRoundedIcon from "public/images/mark-unread-chat-rounded-icon.svg";
import CallLogRoundedIcon from "public/images/call-log-rounded-icon.svg";

import Logo from "public/images/CoreKYCBlue.svg";
import Image from "next/image";
import { LinkedInLink } from "./LinkedInLink";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const listItems = [
  {
    text: "Emails us",
    subtext: "support@realaml.com",
    icon: MarkEmailReadRoundedIcon,
  },
  {
    text: "Chat with us",
    subtext: "Humans, not AI bots.",
    icon: MarkUnreadChatRoundedIcon,
  },
  {
    text: "Call us",
    subtext: "From 8am to 8pm, 7 days.",
    icon: CallLogRoundedIcon,
    extra: "+64 4 889 4788",
  },
];

const List = () => (
  <chakra.ul
    display="flex"
    flexDirection="column"
    listStyleImage="none"
    listStyleType="none"
  >
    {listItems.map((item, index) => (
      <chakra.li
        display="flex"
        alignItems="flex-start"
        marginBottom={index + 1 < listItems.length ? "34px" : 0}
      >
        <chakra.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="60px"
          height="60px"
          backgroundColor="#EAEAFF"
          borderRadius="8px"
          marginRight="16px"
        >
          <Image src={item.icon} width="24px" height="24px" />
        </chakra.div>
        <chakra.div>
          <chakra.div
            marginTop="8px"
            lineHeight={1.6}
            fontSize="16px"
            fontWeight="600"
            color="black"
          >
            {item.text}
          </chakra.div>
          <chakra.div
            lineHeight="17px"
            fontSize="14px"
            fontWeight="500"
            color="text_gray"
          >
            {item.subtext}
          </chakra.div>
          {item.extra ? (
            <chakra.div
              marginTop="17px"
              lineHeight="17px"
              fontSize="14px"
              fontWeight="500"
              color="text_gray"
            >
              {item.extra}
            </chakra.div>
          ) : null}
        </chakra.div>
      </chakra.li>
    ))}
  </chakra.ul>
);

export const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        flexDirection={{ base: "column", md: "row" }}
        maxWidth={{ md: "1138px" }}
        marginLeft={{ md: "20px" }}
        marginRight={{ md: "20px" }}
        p={{ base: "20px", md: "6px" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          flex={{ md: "0 0 368px" }}
          padding={{ md: "46px 28px 38px" }}
        >
          <ModalCloseButton />
          <Box marginBottom="24px">
            <Image alt="Logo" src={Logo} width="138px" height="23px" />
          </Box>
          <Box marginBottom="24px">
            <List />
          </Box>
          <Box display="flex" justifyContent="center">
            <LinkedInLink />
          </Box>
        </Box>
        <Box
          flex={{ md: 1 }}
          height={{ xl: "672px" }}
          marginTop={{ base: "20px", md: 0 }}
          p={{ base: "20px", md: "44px 64px" }}
          background="linear-gradient(144.51deg, #4776E6 0%, #8E54E9 100%)"
          borderRadius="20px"
          overflow="hidden"
          position="relative"
          zIndex={1}
          _before={{
            position: "absolute",
            zIndex: -1,
            bottom: "-161px",
            right: "-161px",
            content: "''",
            display: "block",
            width: "461px",
            height: "461px",
            border: "64px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        >
          <chakra.h2
            marginBottom="20px"
            fontSize={{ base: "28px", lg: "40px" }}
            lineHeight={1.25}
            color="text_white"
            fontWeight={600}
          >
            Let’s start a conversation
          </chakra.h2>
          <chakra.p
            mb={{ md: "44px" }}
            fontSize={{ base: "18px", lg: "22px" }}
            lineHeight={{ base: 1.5, lg: 1.6 }}
            color="#D9DBF9"
          >
            We’ll get back to you within 1-2 business hours.
          </chakra.p>
          <Input
            marginBottom="16px"
            variant="flushed"
            placeholder="Your Name"
            height="49px"
            fontSize={{ base: "14px", md: "16px" }}
            borderColor="#9E9CF0"
            color="#D9DBF9"
            outline="none"
            _placeholder={{ color: "#D9DBF9" }}
            _focus={{
              borderColor: "#fff",
            }}
          />
          <Input
            type="email"
            marginBottom={{ base: "16px", md: "60px" }}
            variant="flushed"
            placeholder="Your Email"
            height="49px"
            fontSize={{ base: "14px", md: "16px" }}
            borderColor="#9E9CF0"
            color="#D9DBF9"
            outline="none"
            _placeholder={{ color: "#D9DBF9" }}
            _focus={{
              borderColor: "#fff",
            }}
          />
          <Input
            marginBottom={{ base: "24px", md: "64px" }}
            variant="flushed"
            placeholder="What's on your mind"
            height="49px"
            fontSize={{ base: "14px", md: "16px" }}
            borderColor="#9E9CF0"
            color="#D9DBF9"
            outline="none"
            _placeholder={{ color: "#D9DBF9" }}
            _focus={{
              borderColor: "#fff",
            }}
          />
          <Button color="blue" width="100%">
            Contact us
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
};
