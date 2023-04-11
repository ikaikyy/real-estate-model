import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  logo: React.ReactNode;
}

const Header: React.FC<Props> = (Props) => {
  return (
    <Box
      as="header"
      alignItems="center"
      bg="#282828"
      color="white"
      display="flex"
      fontSize="xl"
      fontWeight="bold"
      justifyContent="space-between"
      p={4}
    >
      <Box>{Props.logo}</Box>
      <Box zIndex={11}>{Props.children}</Box>
    </Box>
  );
};

export default Header;
