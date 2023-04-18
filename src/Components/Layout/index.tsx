import React from "react";
import { Box, defineStyleConfig, useStyleConfig } from "@chakra-ui/react";
import Header from "@/Components/Header";
import HeaderNav from "@/Components/HeaderNav";
import Footer from "@/Components/Footer";

interface Props {
  children: React.ReactNode;
  navLinks?: {
    label: string;
    href: string;
  }[];
}

export const LayoutStyle = defineStyleConfig({
  baseStyle: {
    ".links-container": {
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "xl",
      justifyContent: "center",
      gap: 5,
      w: "100%",
      h: "100vh",
      bgColor: "#282828",
      position: "fixed",
      transition: "all 0.3s ease-in-out",
      top: 0,
      left: 0,
      zIndex: 10,
      ".link": {
        position: "relative",
        _after: {
          transition: "all 0.3s ease-in-out",
          content: '""',
          display: "block",
          w: 0,
          h: "1px",
          bgColor: "#fafafa",
          position: "absolute",
          left: "100%",
        },
        _hover: {
          _after: {
            w: "100%",
            left: 0,
          },
        },
      },
    },
  },
});

const Layout: React.FC<Props> = (Props) => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const styles = useStyleConfig("Layout");

  React.useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", () => {
      setIsDesktop(window.innerWidth > 768);
    });
  }, []);

  return (
    <Box __css={styles} h="100%" w="100%">
      <Header logo="Logo">
        {Props.navLinks ? (
          <HeaderNav
            variant={isDesktop ? "desktop" : "mobile"}
            navLinks={Props.navLinks}
          />
        ) : null}
      </Header>
      {Props.children}
      <Footer />
    </Box>
  );
};

export default Layout;
