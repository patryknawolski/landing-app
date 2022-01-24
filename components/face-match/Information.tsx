import type { NextPage } from "next";
import BookCard from "common/BookCard";

import { Box, SimpleGrid } from "@chakra-ui/react";

import OCRIcon from "public/images/ic-ocr.svg";
import LiveIcon from "public/images/ic-live.svg";
import RecogIcon from "public/images/ic-recog.svg";

const Information: NextPage = () => {
  return (
    <Box maxWidth="1440px" margin="0 auto">
      <Box
        padding={{ base: "40px 25px", lg: "80px 60px", xl: "143px 125px" }}
        boxSizing="border-box"
        overflow="hidden"
      >
        <SimpleGrid columns={{ md: 3 }} spacing="18px">
          <BookCard
            url="/"
            icon={OCRIcon}
            title="Powerful OCR Extraction"
            text="A capture and OCR extraction is completed in less than a second with superior accuracy. Artificial intelligence and machine learning enables continuous improvement."
          />
          <BookCard
            url="/"
            icon={LiveIcon}
            title="Liveness Detection Systems"
            text="Proprietary liveness detection technology recognises when your customer is really present behind the device that eliminates the risk of identity fraud."
          />
          <BookCard
            url="/"
            icon={RecogIcon}
            title="Facial Recognition"
            text="Fast and accurate facial recognition between your customer’s identity documents and a series of pictures 
            of your customer taken in real-time."
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Information;
