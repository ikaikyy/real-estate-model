import React from "react";
import { Box } from "@chakra-ui/react";

interface ImageProps {
  src: string;
  alt: string;
  size?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, size }) => {
  return (
    <Box
      as="img"
      src={src}
      alt={alt}
      margin={0}
      objectFit="cover"
      w={size}
      h={size}
    />
  );
};

export default Image;
