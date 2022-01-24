import type { NextPage } from "next";

import Layout from "components/layout/Layout";
import Banner from "components/product/Banner";
import Detail from 'components/product/Detail'

import { Box } from "@chakra-ui/react";

const Product: NextPage = () => {
  return (
    <Layout title="Product" isStarted={true}>
      <Banner
        title="Products and some text about them "
        text="Scelerisque nisl velit non pretium luctus imperdiet in eget. Sed vitae nisl vulputate ut eu."
      />
      <Detail />
    </Layout>
  );
};

export default Product;
