import React from "react";
import {
  Box,
  Card as CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import Image from "@/Components/Image";

interface CardProps {
  image: {
    src: string;
    alt: string;
  };
  type: string;
  title: string;
  descriptions: {
    text: string;
  }[];
}

const Card: React.FC<CardProps> = ({ image, type, title, descriptions }) => {
  return (
    <Box>
      <CardContainer
        borderRadius={0}
        marginRight={10}
        w={290}
        _hover={{
          cursor: "pointer",
          boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.3)",
          ".card-button": {
            bgColor: "#282828",
            color: "#fafafa",
            ".card-button-icon": {
              marginLeft: 5,
              transition: "margin 0.3s ease-in-out",
            },
          },
        }}
        onClick={() => {
          window.location.href = "/product";
        }}
      >
        <CardHeader padding={0}>
          <Box h={200} w="100%">
            <Image src={image.src} alt={image.alt} size="100%" />
          </Box>
          <Box
            position="absolute"
            padding={1.5}
            letterSpacing={3}
            fontWeight={600}
            fontSize="12px"
            top={170}
            borderTopRightRadius={15}
            bgColor="#282828"
            color="#fafafa"
          >
            {type === "residential" ? "residencial" : "comercial"}
          </Box>
        </CardHeader>
        <CardBody padding={1}>
          <Stack divider={<StackDivider border="none" paddingTop={2} />}>
            <Box
              fontWeight={900}
              fontSize="13px"
              marginBottom={-2}
              marginLeft={-0.5}
            >
              {title}
            </Box>
            <Box display="flex" alignItems="center">
              <Image
                src="https://img.icons8.com/material-rounded/24/282828/marker.png"
                alt="local"
              />
              <Box marginLeft={2}>{descriptions[0].text}</Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Image
                src="https://img.icons8.com/material-rounded/24/282828/room.png"
                alt="room"
              />
              <Box marginLeft={2}>{descriptions[1].text}</Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Image
                src="https://img.icons8.com/material-rounded/24/282828/ruler.png"
                alt="meters"
              />
              <Box marginLeft={2}>{descriptions[2].text}</Box>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={1}
          paddingTop={2}
        >
          <Box
            alignItems="center"
            border="1px solid"
            borderColor="#282828"
            bgColor="white"
            className="card-button"
            display="flex"
            fontSize="13px"
            justifyContent="center"
            w="100%"
            h={35}
            transition="0.2s all"
          >
            CONHEÇA O IMÓVEL
            <Box
              className="card-button-icon"
              marginLeft={2}
              fontFamily="swiper-icons"
              fontSize="9px"
              fontWeight="bold"
            >
              next
            </Box>
          </Box>
        </CardFooter>
      </CardContainer>
    </Box>
  );
};

export default Card;
