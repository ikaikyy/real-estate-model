import React from "react";
import ReactDOM from "react-dom";
import { Box, defineStyleConfig, useStyleConfig } from "@chakra-ui/react";
import Image from "@/Components/Image";

interface Props {
  navLinks?: {
    label: string;
    href: string;
  }[];
  variant?: "desktop" | "mobile";
}

export const HeaderNavStyle = defineStyleConfig({
  baseStyle: {},
  variants: {
    desktop: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontWeight: 400,
      gap: 5,
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
      mobile: {
        ".menu": {
          w: "30px",
          h: "30px",
          zIndex: 11,
        },
      },
    },
  },
});

const HeaderNav: React.FC<Props> = (Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const styles = useStyleConfig("HeaderNav", { variant: Props.variant });

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return Props.variant === "desktop" ? (
    <Box __css={styles}>
      {Props.navLinks
        ? Props.navLinks.map((link, index) => (
            <Box
              key={index}
              as="a"
              className="link"
              href={link.href}
              onClick={handleIsOpen}
            >
              {link.label}
            </Box>
          ))
        : null}
    </Box>
  ) : (
    <>
      {isOpen ? (
        <Box __css={styles}>
          <Box as="button" className="menu" onClick={handleIsOpen}>
            <Image
              src={
                isOpen
                  ? "https://img.icons8.com/material-outlined/30/fafafa/delete-sign.png"
                  : "https://img.icons8.com/material-outlined/30/fafafa/menu--v1.png"
              }
              alt="Menu"
            />
          </Box>
          {ReactDOM.createPortal(
            <Box className="links-container">
              {Props.navLinks
                ? Props.navLinks.map((link, index) => (
                    <Box
                      key={index}
                      as="a"
                      className="link"
                      href={link.href}
                      onClick={handleIsOpen}
                    >
                      {link.label}
                    </Box>
                  ))
                : null}
            </Box>,
            document.querySelector(".main")!
          )}
        </Box>
      ) : (
        <Box __css={styles} display="flex" alignItems="center">
          <Box as="button" className="menu" onClick={handleIsOpen}>
            <Image
              src={
                isOpen
                  ? "https://img.icons8.com/material-outlined/30/fafafa/delete-sign.png"
                  : "https://img.icons8.com/material-outlined/30/fafafa/menu--v1.png"
              }
              alt="Menu"
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default HeaderNav;
