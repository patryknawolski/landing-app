import type { NextPage } from "next";

import Layout from "components/layout/Layout";
import Banner from "components/product/Banner";
import Detail from 'components/product/Detail'

import { Box } from "@chakra-ui/react";

const Product: NextPage = () => {
  return (
    <Layout title="Product" isStarted={true}>
      <Banner
        title="Simple, secure & fast <br/>AI-driven verification tools"
        text="Wherever your customers are, we’re there too. Across 200 countries, 10K+ IDs, and 4 billion customers, we've got you covered."
      />
      <Detail />
    </Layout>
  );
};

export default Product;
