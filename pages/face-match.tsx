import type { NextPage } from "next";

import Layout from "components/layout/Layout";
import Banner from "common/Banner";
import Information from "components/face-match/Information";
import HowDoesItWork from "components/face-match/HowDoesItWork";
import Reasons from "components/face-match/Reasons";
import Carousel from "components/face-match/Carousel";

import BannerImg from "public/images/bn-face.svg";

const FaceMatch: NextPage = () => {
  return (
    <Layout title="Face Match" isStarted={true}>
      <Banner
        isPep={false}
        image={BannerImg}
        title="Face Match"
        text="Biometrically match your customers to their claimed identity beyond a doubt."
      />

      <Information />
      <HowDoesItWork />
      <Reasons />
      <Carousel />
    </Layout>
  );
};

export default FaceMatch;
