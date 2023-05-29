import type { NextPage } from "next";

import Layout from "components/layout/Layout";
import NewsletterBanner from "common/NewsletterBanner";
import Information from "components/face-match/Information";
import HowDoesItWork from "components/face-match/HowDoesItWork";
import Reasons from "components/face-match/Reasons";
import Carousel from "components/face-match/Carousel";

import BannerImg from "public/images/quickid.svg";

const QuickId: NextPage = () => {
  return (
    <Layout title="QuickID">
      <NewsletterBanner
        isPep={false}
        image={BannerImg}
        title="QuickID"
        text="Compliant AML identity checks in-person or remote in NZ and 13 countries in under 10 seconds (incl. PEP check)."
      />

      <Information />
      <HowDoesItWork />
      <Reasons />
      <Carousel />
    </Layout>
  );
};

export default QuickId;
