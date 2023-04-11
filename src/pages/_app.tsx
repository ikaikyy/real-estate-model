import type { AppProps } from "next/app";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

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
      ".swiper-pagination-bullets": {
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-color": "#282828",
      },
      ".swiper-button-prev": {
        "--swiper-navigation-color": "#fafafa",
        "--swiper-navigation-size": "20px",
        "&:hover": {
          paddingRight: "15px",
          transition: "all 0.2s ease-in-out",
        },
      },
      ".swiper-button-next": {
        "--swiper-navigation-color": "#fafafa",
        "--swiper-navigation-size": "20px",
        "&:hover": {
          paddingLeft: "15px",
          transition: "all 0.2s ease-in-out",
        },
      },
    }),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
