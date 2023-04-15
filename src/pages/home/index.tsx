import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Layout from "@/Components/Layout";
import Banner from "@/Components/Banner";
import CardSlider from "@/Components/CardSlider";
import cards from "@/Components/Card/cards";
import ContactForm from "@/Components/ContactForm";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Box className="main">
          <Banner />
          <CardSlider cards={cards} />
          <ContactForm />
        </Box>
      </Layout>
    </>
  );
};

export default Home;
