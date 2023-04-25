import React from "react";
import {
  Box,
  Card as CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
  defineStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";
import Image from "@/Components/Image";

import type { Property } from "@/Types";

interface Props {
  property: Property;
}

export const CardStyle = defineStyleConfig({
  baseStyle: {
    ".chakra-card": {
      "--card-bg": "#fafafa",
      "--card-shadow": "none",
      borderRadius: 0,
      marginRight: 10,
      w: 290,
      _hover: {
        cursor: "pointer",
        boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.15)",
        ".chakra-card__footer-button": {
          bgColor: "#282828",
          color: "#fafafa",

          ".chakra-card__footer-button-icon": {
            ml: 5,
          },
        },
      },
      ".chakra-card__header": {
        padding: 0,
        ".chakra-card__header-image": {
          h: 200,
          w: "100%",
        },
        ".chakra-card__type": {
          position: "absolute",
          padding: 1.5,
          letterSpacing: 3,
          fontWeight: 600,
          fontSize: "12px",
          top: 170,
          borderTopRightRadius: 15,
          bgColor: "#282828",
          color: "#fafafa",
        },
      },
      ".chakra-card__body": {
        padding: 1,
        ".chakra-card__body-title": {
          fontSize: "13px",
          fontWeight: 900,
          marginLeft: -0.5,
          marginBottom: -2,
        },
        ".chakra-card__body-description": {
          display: "flex",
          alignItems: "center",
          gap: 2,
        },
      },
      ".chakra-card__footer": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 1,
        paddingTop: 2,
        ".chakra-card__footer-button": {
          border: "1px solid #282828",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          w: "100%",
          h: 35,
          ".chakra-card__footer-button-icon": {
            fontFamily: "swiper-icons",
            fontSize: "9px",
            fontWeight: "bold",
            transition: "margin 0.3s",
          },
        },
      },
    },
  },
});

const Card: React.FC<Props> = (Props) => {
  const styles = useStyleConfig("Card");

  return (
    <Box __css={styles}>
      <CardContainer
        onClick={() => {
          window.location.href = `/product?id=${Props.property.id}`;
        }}
      >
        <CardHeader padding={0}>
          <Box className="chakra-card__header-image">
            <Image
              src={Props.property.images[0].href}
              alt="Property"
              size="100%"
            />
          </Box>
          <Box className="chakra-card__type">
            {Props.property.status === "for_sale" ? "Vende-se" : "Aluga-se"}
          </Box>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider border="none" paddingTop={2} />}>
            <Box className="chakra-card__body-title">{`${
              Props.property.type === "condo" ? "Apartamento" : "Casa"
            } em ${Props.property.address.line}`}</Box>
            <Box className="chakra-card__body-description">
              <Image
                src="https://img.icons8.com/material-rounded/24/282828/marker.png"
                alt="local"
              />
              <Box className="chakra-card__body-description-text">
                {`${Props.property.address.city} - ${Props.property.address.state}`}
              </Box>
            </Box>
            <Box className="chakra-card__body-description">
              <Image
                src="https://img.icons8.com/material-rounded/24/282828/room.png"
                alt="room"
              />
              <Box className="chakra-card__body-description-text">
                {`${Props.property.beds} ${
                  Props.property.beds > 1 ? "Quartos" : "Quarto"
                }`}
              </Box>
            </Box>
            <Box className="chakra-card__body-description">
              <Image
                src="https://img.icons8.com/material-rounded/24/282828/ruler.png"
                alt="meters"
              />
              <Box className="chakra-card__body-description-text">
                {`${Props.property.meters}m²`}
              </Box>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
          <Box className="chakra-card__footer-button">
            CONHEÇA O IMÓVEL
            <Box className="chakra-card__footer-button-icon" ml={2}>
              next
            </Box>
          </Box>
        </CardFooter>
      </CardContainer>
    </Box>
  );
};

export default Card;
