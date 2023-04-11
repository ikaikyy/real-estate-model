import React from "react";
import { Box } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      alignItems="center"
      bg="#282828"
      color="white"
      display="flex"
      fontSize="xl"
      fontWeight="bold"
      justifyContent="space-between"
      p={4}
    >
      Footer
    </Box>
  );
};

export default Footer;
