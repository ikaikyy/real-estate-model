import React from "react";
import { Box, defineStyleConfig, useStyleConfig } from "@chakra-ui/react";

interface Props {
  title: string;
  descriptions: string[];
  size?: string;
  sectionId?: string;
}

export const ProductInfoStyle = defineStyleConfig({
  baseStyle: {
    bgColor: "#282828",
    color: "#fafafa",
    padding: 5,
    minW: "100%",
    ".title": {
      marginBottom: 3,
    },
    ".description": {},
  },
  sizes: {
    sm: {
      ".title": {
        fontSize: "xl",
      },
      ".description": {
        fontSize: "sm",
      },
    },
    md: {
      ".title": {
        fontSize: "2xl",
      },
      ".description": {
        fontSize: "md",
      },
    },
    lg: {
      ".title": {
        fontSize: "3xl",
      },
      ".description": {
        fontSize: "lg",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
});

const ProductInfo: React.FC<Props> = (Props) => {
  const styles = useStyleConfig("ProductInfo", { size: Props.size });

  return (
    <Box __css={styles} as="section" id={Props.sectionId}>
      <Box className="">
        <Box className="title">{Props.title}</Box>
        <Box className="description">
          {Props.descriptions.map((description, index) => (
            <Box as="p" key={index}>
              {description}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfo;
