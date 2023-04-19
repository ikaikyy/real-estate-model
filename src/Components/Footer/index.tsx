import React from "react";
import { Box, defineStyleConfig, useStyleConfig } from "@chakra-ui/react";
import Image from "@/Components/Image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const FooterStyle = defineStyleConfig({
  baseStyle: {
    bg: "#282828",
    color: "#fafafa",
    fontSize: "sm",
    p: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    ".footer-text": {
      display: "flex",
      alignItems: "center",
      ".footer-text__emoji": {
        margin: "0 3px",
      },
    },
    ".footer-icons": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      ".footer-icons__icon": {
        _hover: {
          cursor: "pointer",
          opacity: 0.6,
        },
      },
    },
  },
});

const Footer: React.FC = () => {
  const styles = useStyleConfig("Footer");

  return (
    <Box __css={styles} as="footer">
      <Box className="footer-text">
        Developed with{" "}
        <Image
          className="footer-text__emoji"
          src="https://img.icons8.com/ios-glyphs/14/fafafa/like--v1.png"
          alt="love"
          size="14px"
        />{" "}
        and{" "}
        <Image
          className="footer-text__emoji"
          src="https://img.icons8.com/material-rounded/14/fafafa/espresso-cup--v1.png"
          alt="coffee"
          size="14px"
        />{" "}
        by Kaiky Eduardo
      </Box>
      <Box className="footer-icons">
        <Box
          as="a"
          className="footer-icons__icon"
          href="https://www.linkedin.com/in/kaiky-eduardo/"
          target="_blank"
        >
          <FaLinkedin />
        </Box>
        <Box
          as="a"
          className="footer-icons__icon"
          href="https://github.com/ikaikyy"
          target="_blank"
        >
          <FaGithub />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
