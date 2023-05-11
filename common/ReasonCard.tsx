import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

const ReasonCard: FC<{
  title: string;
  text: string;
  mode: "carousel" | "grid";
}> = ({ title, text, mode }) => (
  <Box
    borderRadius="5px"
    bg="#F8FAFF"
    p={{ base: "30px 40px", md: mode === "carousel" ? "40px 60px" : "60px" }}
    minH={
      mode === "carousel" ? { base: "236px", xxl: "260px" } : { base: "236px" }
    }
    maxW={mode === "carousel" ? { base: "628px" } : { base: "100%" }}
  >
    <Heading
      fontWeight={600}
      fontSize={{ base: "20px" }}
      lineHeight={{ base: "27px" }}
      color="#4959E7"
      mb="30px"
    >
      {title}
    </Heading>
    <Text
      fontWeight={400}
      fontSize={{ base: "15px" }}
      lineHeight={{ base: "24px" }}
      color="#6C6B74"
    >
      {text}
    </Text>
  </Box>
);

export default ReasonCard;
