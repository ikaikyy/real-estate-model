import React from "react";
import ReactDOM from "react-dom";
import { Box } from "@chakra-ui/react";
import Image from "@/Components/Image";

interface Props {
  navLinks?: {
    label: string;
    href: string;
  }[];
}

const HeaderNav: React.FC<Props> = ({ navLinks }) => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const isDesktop = window.innerWidth > 768;
    setIsDesktop(isDesktop);
  }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return isDesktop ? (
    <Box
      alignItems="center"
      display="flex"
      fontWeight={400}
      gap={5}
      justifyContent="space-between"
    >
      {navLinks
        ? navLinks.map((link, index) => (
            <Box
              as="a"
              href={link.href}
              key={index}
              position="relative"
              _after={{
                transition: "all 0.3s ease-in-out",
                content: '""',
                display: "block",
                width: 0,
                height: "1px",
                bgColor: "#fafafa",
                position: "absolute",
                left: "100%",
              }}
              _hover={{
                _after: {
                  width: "100%",
                  left: 0,
                },
              }}
            >
              {link.label}
            </Box>
          ))
        : null}
    </Box>
  ) : (
    <>
      {isOpen ? (
        <>
          <Box as="button" w="30px" h="30px" onClick={handleIsOpen} zIndex={11}>
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
            <Box
              color="#fafafa"
              display="flex"
              flexDirection="column"
              alignItems="center"
              fontSize="xl"
              justifyContent="center"
              gap={5}
              w="100%"
              h="100vh"
              bgColor="#282828"
              position="fixed"
              transition="all 0.3s ease-in-out"
              top={0}
              left={0}
              zIndex={10}
            >
              {navLinks
                ? navLinks.map((link, index) => (
                    <Box
                      as="a"
                      href={link.href}
                      key={index}
                      position="relative"
                      _after={{
                        transition: "all 0.3s ease-in-out",
                        content: '""',
                        display: "block",
                        width: 0,
                        height: "1px",
                        bgColor: "#fafafa",
                        position: "absolute",
                        left: "100%",
                      }}
                      _hover={{
                        _after: {
                          width: "100%",
                          left: 0,
                        },
                      }}
                    >
                      {link.label}
                    </Box>
                  ))
                : null}
            </Box>,
            document.querySelector(".main")!
          )}
        </>
      ) : (
        <Box display="flex" alignItems="center">
          <Box as="button" w="30px" h="30px" onClick={handleIsOpen}>
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
