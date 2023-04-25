import axios from "axios";
import React, { memo } from "react";
import { useRouter } from "next/router";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { BannerStyle } from "@/Components/Banner";
import { BannerLabelStyle } from "@/Components/BannerLabel";
import { CardStyle } from "@/Components/Card";
import { CardSliderStyle } from "@/Components/CardSlider";
import { ContactFormStyle } from "@/Components/ContactForm";
import { FooterStyle } from "@/Components/Footer";
import { HeaderStyle } from "@/Components/Header";
import { HeaderNavStyle } from "@/Components/HeaderNav";
import { ImageContainerStyle } from "@/Components/ImageContainer";
import { LayoutStyle } from "@/Components/Layout";
import { ProductInfoStyle } from "@/Components/ProductInfo";

import PropertiesContext from "@/Contexts/PropertiesContext";

import type { AppProps } from "next/app";
import type { Property } from "@/Types";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: "#fafafa",
        color: "#282828",
        fontFamily: "SF Pro Display, sans-serif",
        fontSize: "12px",
        margin: 0,
        padding: 0,
      },
    }),
  },
  components: {
    Banner: BannerStyle,
    BannerLabel: BannerLabelStyle,
    Card: CardStyle,
    CardSlider: CardSliderStyle,
    ContactForm: ContactFormStyle,
    Footer: FooterStyle,
    Header: HeaderStyle,
    HeaderNav: HeaderNavStyle,
    ImageContainer: ImageContainerStyle,
    Layout: LayoutStyle,
    ProductInfo: ProductInfoStyle,
  },
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [properties, setProperties] = React.useState([] as Property[]);
  const [dataLoaded, setDataLoaded] = React.useState(false);

  React.useEffect(() => {
    const getProperties = async () => {
      await axios({
        method: "GET",
        url: `/api/properties`,
      })
        .then((response) => {
          setProperties(response.data);
          setDataLoaded(true);
        })
        .catch((error) => {
          console.error(error);
          router.reload();
        });
    };
    if (!dataLoaded) {
      getProperties();
    }
  }, [router, dataLoaded]);

  return (
    <ChakraProvider theme={theme}>
      <PropertiesContext.Provider value={properties}>
        <Component {...pageProps} />
      </PropertiesContext.Provider>
    </ChakraProvider>
  );
}

export default memo(App);
