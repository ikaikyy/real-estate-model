import axios from "axios";
import Head from "next/head";
import React from "react";
import { Box } from "@chakra-ui/react";
import Layout from "@/Components/Layout";
import Banner from "@/Components/Banner";
import CardSlider from "@/Components/CardSlider";
import ContactForm from "@/Components/ContactForm";

import type { ImageData } from "@/Types";

const Home: React.FC = () => {
  const [bannerImages, setBannerImages] = React.useState([] as ImageData[]);

  React.useEffect(() => {
    const getBannerImages = async () =>
      await axios({
        method: "GET",
        url: `/api/images/home`,
      });

    getBannerImages().then((response) => setBannerImages(response.data.Images));
  });

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout navLinks={[{ label: "Contato", href: "#contact-form" }]}>
        <Box className="main">
          <Banner loop={true} autoplay={true} images={bannerImages} />
          <CardSlider />
          <ContactForm />
        </Box>
      </Layout>
    </>
  );
};

export default Home;
