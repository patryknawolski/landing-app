import type { NextPage } from "next";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Banner from "components/home/Banner";
import Layout from "components/layout/Layout";
import Carousel from "components/face-match/Carousel";
import Platform from "components/home/Platform";
import Customers from "components/home/Customers";
import OnBoard from "components/home/OnBoard";
import Provide from "components/home/Provide";
import Branding from "components/home/Branding";
import Fraudsters from "components/home/Fraudsters";
import SingleView from "components/home/SingleView";
import TheOneApi from "components/home/TheOneApi";
import Security from "components/home/Security";
import Starting from "components/home/Starting";

import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  const priceRef = useRef<any>(null);
  const bannerRef = useRef<any>(null);
  const router = useRouter();
  const [heightBanner, setHeightBanner] = useState<any>(null);

  useEffect(() => {
    if (bannerRef) {
      setHeightBanner(bannerRef.current.clientHeight);
    }
  }, [bannerRef]);

  useEffect(() => {
    if (router.asPath === "/#pricing") {
      priceRef.current.scrollIntoView();
    }
  }, [router]);

  const onViewPrice = () => {
    priceRef.current.scrollIntoView();
  };

  return (
    <Layout
      onViewPrice={onViewPrice}
      isStarted={true}
      heightBanner={heightBanner}
      title="Corekyc | Onboard Globally. Comply Locally."
    >
      <Banner bannerRef={bannerRef} />
      <Platform />
      <Customers />
      <OnBoard />
      <Provide />
      <Branding />
      <Fraudsters />
      <SingleView />
      <TheOneApi />
      <Security />
      <Starting priceRef={priceRef} />

      <Box pt={{ base: "60px", md: "150px" }}>
        <Carousel />
      </Box>
    </Layout>
  );
};

export default Home;
