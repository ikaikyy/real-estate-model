import React from "react";
import { Box, defineStyleConfig, useStyleConfig } from "@chakra-ui/react";
import { BsHousesFill } from "react-icons/bs";

interface Props {
  children: React.ReactNode;
}

export const HeaderStyle = defineStyleConfig({
  baseStyle: {
    alignItems: "center",
    bg: "#282828",
    color: "#fafafa",
    display: "flex",
    justifyContent: "space-between",
    p: 4,
    ".header__icon": {
      fontSize: "3xl",
      _hover: {
        opacity: 0.8,
      },
    },
    ".header__nav": {
      fontSize: "xl",
      zIndex: 11,
    },
  },
});

const Header: React.FC<Props> = (Props) => {
  const styles = useStyleConfig("Header");

  return (
    <Box __css={styles} as="header">
      <Box as="a" className="header__icon" href="/home">
        <BsHousesFill />
      </Box>
      <Box className="header__nav">{Props.children}</Box>
    </Box>
  );
};

export default Header;
