import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

import Header from "./Header";
import Footer from "./Footer";
import GetStarted from "common/GetStarted";
// import Loading from "common/Loading";

import { Box, Spinner } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  title: String;
  isStarted: boolean;
  heightBanner?: any;
  onViewPrice?: () => void;
}

const Layout: React.FC<Props> = ({
  children,
  title,
  isStarted,
  heightBanner,
  onViewPrice,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleViewPrice = () => {
    if (onViewPrice) {
      onViewPrice();
    } else {
      Router.push("/#pricing");
    }
  };

  const onViewWhyCore = () => {};

  return (
    <Box>
      {/* {loading && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="10000"
          bg="#fff"
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          overflow="hidden"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#4959e7ab"
            size="xl"
          />
        </Box>
      )} */}

      <Head>
        <title>{title || "Home"}</title>
      </Head>

      <Header onViewPrice={handleViewPrice} heightBanner={heightBanner} />
      {children}

      {isStarted && <GetStarted />}
      <Footer />
    </Box>
  );
};

export default Layout;
