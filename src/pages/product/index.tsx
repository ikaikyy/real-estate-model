import { useRouter } from "next/router";
import React from "react";
import { Box } from "@chakra-ui/react";
import Layout from "@/Components/Layout";
import ProductInfo from "@/Components/ProductInfo";
import Banner from "@/Components/Banner";
import BannerLabel from "@/Components/BannerLabel";
import ImageContainer from "@/Components/ImageContainer";
import Map from "@/Components/Map";
import ContactForm from "@/Components/ContactForm";

import PropertiesContext from "@/Contexts/PropertiesContext";

const Product: React.FC = () => {
  const router = useRouter();
  const property = React.useContext(PropertiesContext).find(
    (property) => property.id === Number(router.query.id)
  );
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

  if (!property) {
    return null;
  }

  return (
    <Layout
      navLinks={[
        { label: "Planta", href: "#plant" },
        { label: "Localização", href: "#map" },
        { label: "Contato", href: "#contact-form" },
      ]}
    >
      <Box className="main" display="flex" flexDirection="column" gap={8}>
        <Box w="100%" display="flex" flexWrap="wrap">
          <ProductInfo
            title={property.address.line}
            descriptions={[
              `${property.type === "condo" ? "Apartamento" : "Casa"} a ${
                property.status === "for_sale" ? "venda" : "alugar"
              } em: ${property.address.city} - ${property.address.state}`,
              `Valor: $ ${property.price.toLocaleString("en-US")}`,
              `Metragem: ${property.meters}m²`,
              `Quartos: ${property.beds}`,
              `Vagas: ${property.garages ? property.garages : "0"}`,
            ]}
            size={isDesktop ? "lg" : isMobile ? "sm" : "md"}
          />
          <Banner
            slidesPerView={isBigScreen ? 3 : isDesktop ? 2 : 1}
            size="lg"
            images={property.images.map((image) => ({
              src: image.href,
              alt: "image",
            }))}
          />
        </Box>
        <ImageContainer
          src="https://i.pinimg.com/564x/ab/13/d8/ab13d89fd7db54058e8d6466c8ad0a9a.jpg"
          label="Planta"
          sectionId="plant"
        />
        <Map
          address={`${property.address.line.replace(
            " ",
            "+"
          )},${property.address.city.replace(" ", "+")}+${
            property.address.state_code
          }`}
          lat={property.address.lat}
          lng={property.address.long}
        />
        <ContactForm />
      </Box>
    </Layout>
  );
};

export default Product;
