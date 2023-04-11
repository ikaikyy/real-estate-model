import React from "react";
import { Box } from "@chakra-ui/react";
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

const Layout: React.FC<Props> = (Props) => {
  return (
    <Box h="100%" w="100%">
      <Header logo="Logo">
        {Props.navLinks ? <HeaderNav navLinks={Props.navLinks} /> : null}
      </Header>
      {Props.children}
      <Footer />
    </Box>
  );
};

export default Layout;
