import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRef, useEffect, useState, Suspense, lazy } from "react";
import { useRouter } from "next/router";

// const Banner = dynamic(() => import('components/home/Banner'))
// const Layout = dynamic(() => import('components/layout/Layout'))
// const Carousel = dynamic(() => import('components/face-match/Carousel'))
// const Platform = dynamic(() => import('components/home/Platform'))
// const Customers = dynamic(() => import('components/home/Customers'))
// const OnBoard = dynamic(() => import('components/home/OnBoard'))
// const Provide = dynamic(() => import('components/home/Provide'))
// const Branding = dynamic(() => import('components/home/Branding'))
// const Fraudsters = dynamic(() => import('components/home/Fraudsters'))
// const SingleView = dynamic(() => import('components/home/SingleView'))
// const TheOneApi = dynamic(() => import('components/home/TheOneApi'))
// const Security = dynamic(() => import('components/home/Security'))
// const Starting = dynamic(() => import('components/home/Starting'))
// const SayHello = dynamic(() => import('components/home/SayHello'))
// const SayGoodBye = dynamic(() => import('components/home/SayGoodBye'))
// const WhyCoreKYC = dynamic(() => import('components/home/WhyCoreKYC'))
// const MoreReasons = dynamic(() => import('components/home/MoreReasons'))
// const Access = dynamic(() => import('components/home/Access'))

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
// import TheOneApi from "components/home/TheOneApi";
import Integrate from "components/home/Integrate";
import Security from "components/home/Security";
import Starting from "components/home/Starting";
import SayHello from "components/home/SayHello";
import SayGoodBye from "components/home/SayGoodBye";
import WhyCoreKYC from "components/home/WhyCoreKYC";
import MoreReasons from "components/home/MoreReasons";
import Access from "components/home/Access";

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
    // <Suspense fallback={`Loading...`}>
    <Layout
      onViewPrice={onViewPrice}
      heightBanner={heightBanner}
      title="Corekyc | Onboard Globally. Comply Locally."
    >
      <Banner bannerRef={bannerRef} />
      {/* <SayHello /> */}
      <Customers />
      <SayGoodBye />
      <WhyCoreKYC />
      <MoreReasons />
      <Access />
      {/* <Platform /> */}
      {/* <Customers /> */}
      {/* <OnBoard /> */}
      <Provide />
      <Branding />
      {/* <Fraudsters /> */}
      <SingleView />
      <Integrate />
      {/* <TheOneApi /> */}
      <Security />
      <Starting priceRef={priceRef} />

      <Box pt={{ base: "60px", md: "150px" }}>
        <Carousel />
      </Box>
    </Layout>
    // </Suspense>
  );
};

export default Home;
