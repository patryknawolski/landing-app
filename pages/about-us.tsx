import type { NextPage } from "next";

import Layout from "components/layout/Layout";
import Carousel from "components/face-match/Carousel";
import Detail from "components/about-us/Detail";
import Founders from "components/about-us/Founders";
import Banner from "common/Banner";

const AboutUs: NextPage = () => {
  return (
    <Layout title="About Us">
      <Banner
        title={`Verify remote customers</br>& prevent fraud`}
        maxTextWidth={460}
        text={`CoreKYC empowers businesses to trust that the individuals they engage with are indeed who they claim to be.`}
      />
      <Detail />
      <Founders />
      <Carousel />
    </Layout>
  );
};

export default AboutUs;
