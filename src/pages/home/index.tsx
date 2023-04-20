import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Layout from "@/Components/Layout";
import Banner from "@/Components/Banner";
import CardSlider from "@/Components/CardSlider";
import ContactForm from "@/Components/ContactForm";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout navLinks={[{ label: "Contato", href: "#contact-form" }]}>
        <Box className="main">
          <Banner loop={true} autoplay={true} apiPath="home" />
          <CardSlider />
          <ContactForm />
        </Box>
      </Layout>
    </>
  );
};

export default Home;
