import type { NextPage } from "next";

import Layout from "components/layout/Layout";
import Banner from "common/NewsletterBanner";
import Information from "components/face-match/Information";
import HowDoesItWork from "components/face-match/HowDoesItWork";
import Reasons from "components/face-match/Reasons";
import Carousel from "components/face-match/Carousel";

import BannerImg from "public/images/face-id.svg";

const FaceId: NextPage = () => {
  return (
    <Layout title="Face ID">
      <Banner
        isPep={false}
        image={BannerImg}
        title="Face ID"
        text="Compliant AML identity checks in-person or remote in NZ and 13 countries in under 10 seconds (incl. PEP check)."
      />

      <Information />
      <HowDoesItWork />
      <Reasons />
      <Carousel />
    </Layout>
  );
};

export default FaceId;
