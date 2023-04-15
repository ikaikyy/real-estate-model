import type { AppProps } from "next/app";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { BannerStyle } from "@/Components/Banner";
import { CardStyle } from "@/Components/Card";
import { CardSliderStyle } from "@/Components/CardSlider";

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
    Card: CardStyle,
    CardSlider: CardSliderStyle,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
