import type { NextPage } from "next";

import Layout from "components/layout/Layout";
import Carousel from "components/face-match/Carousel";
import Detail from "components/about-us/Detail";
import Founders from "components/about-us/Founders";
import Banner from "common/Banner";

const AboutUs: NextPage = () => {
  return (
    <Layout title="About Us" isStarted={true}>
      <Banner
        title={`Verify remote <span style="white-space:nowrap;">customers & prevent</span> fraud`}
        text="With CoreKYC, businesses can be confident that their customers are who they say they are."
      />
      <Detail />
      <Founders />
      <Carousel />
    </Layout>
  );
};

export default AboutUs;
