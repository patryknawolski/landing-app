import type { NextPage } from "next";

import Layout from "components/layout/Layout";
import Banner from "components/pep-check/Banner";
import Information from "components/face-match/Information";
import HowDoesItWork from "components/face-match/HowDoesItWork";
import Reasons from "components/face-match/Reasons";
import Carousel from "components/face-match/Carousel";

import BannerImg from "public/images/pep-check.svg";

const PEPCheck: NextPage = () => {
  return (
    <Layout title="PEP Check">
      <Banner
        isPep={true}
        image={BannerImg}
        title="PEP Check"
        text="High global coverage of senior Politically Exposed Persons (PEP), their relatives, close associates, and the companies they are linked to; national and international government sanction lists; and persons officially linked to, or convicted of, high profile crimes or terrorism."
      />

      <Information />
      <HowDoesItWork />
      <Reasons />
      <Carousel />
    </Layout>
  );
};

export default PEPCheck;
