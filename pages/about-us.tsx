import type { NextPage } from "next";

import Layout from "components/layout/Layout";
import Banner from "components/about-us/Banner";
import Carousel from "components/face-match/Carousel";
import Detail from "components/about-us/Detail";
import Founders from "components/about-us/Founders";

const AboutUs: NextPage = () => {
  return (
    <Layout title="About Us" isStarted={true}>
      <Banner
        title="Some text about your company "
        text="Scelerisque nisl velit non pretium luctus imperdiet in eget. Sed vitae nisl vulputate ut eu."
      />
      <Detail />
      <Founders />
      <Carousel />
    </Layout>
  );
};

export default AboutUs;
