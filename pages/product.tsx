import type { NextPage } from "next";

import Layout from "components/layout/Layout";
import Detail from "components/product/Detail";
import Banner from "common/Banner";

const Product: NextPage = () => {
  return (
    <Layout title="Product" isStarted={true}>
      <Banner
        title={"Simple, secure & fast <br/>AI-driven verification tools"}
        text="Wherever your customers are, we’re there too. Across 200 countries, 10K+ IDs, and 4 billion customers, we've got you covered."
      />
      <Detail />
    </Layout>
  );
};

export default Product;
