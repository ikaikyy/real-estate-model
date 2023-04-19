import React from "react";
import { Box } from "@chakra-ui/react";
import Layout from "@/Components/Layout";
import ProductInfo from "@/Components/ProductInfo";
import Banner from "@/Components/Banner";
import BannerLabel from "@/Components/BannerLabel";
import ImageContainer from "@/Components/ImageContainer";
import ContactForm from "@/Components/ContactForm";

const Product: React.FC = () => {
  const [isBigScreen, setIsBigScreen] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    setIsBigScreen(window.innerWidth > 1440);
    setIsDesktop(window.innerWidth > 1024);
    setIsMobile(window.innerWidth < 512);
    window.addEventListener("resize", () => {
      setIsBigScreen(window.innerWidth > 1440);
      setIsDesktop(window.innerWidth > 1024);
      setIsMobile(window.innerWidth < 512);
    });
  }, []);

  return (
    <Layout
      navLinks={[
        { label: "Lazer", href: "#leisure" },
        { label: "Planta", href: "#plant" },
        { label: "Contato", href: "#contact-form" },
      ]}
    >
      <Box className="main" display="flex" flexDirection="column" gap={8}>
        <Box w="100%" display="flex" flexWrap="wrap">
          <ProductInfo
            title="Product Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et rutrum eros. Fusce mattis felis in mauris sodales posuere. Aliquam consequat elit et vestibulum hendrerit. Sed vel feugiat dui. Maecenas dictum facilisis lectus sed iaculis. Proin quis libero dictum, tempor ex ac, convallis mi. Mauris lacus dui, faucibus eu efficitur eu, accumsan ac erat. Mauris malesuada tortor et pharetra pulvinar. Proin dictum libero eget luctus facilisis. Nulla enim ipsum, ullamcorper."
            size={isDesktop ? "lg" : isMobile ? "sm" : "md"}
          />
          <Banner
            apiPath="product"
            size="xl"
            slidesPerView={isDesktop ? 3 : isMobile ? 1 : 2}
          />
        </Box>
        <BannerLabel label="Lazer" sectionId="leisure">
          <Banner
            apiPath="home"
            height={
              isBigScreen
                ? "70vh"
                : isDesktop
                ? "50vh"
                : isMobile
                ? "30vh"
                : "40vh"
            }
          />
        </BannerLabel>
        <ImageContainer
          src="https://i.pinimg.com/564x/ab/13/d8/ab13d89fd7db54058e8d6466c8ad0a9a.jpg"
          label="Planta"
          sectionId="plant"
        />
        <ContactForm />
      </Box>
    </Layout>
  );
};

export default Product;
