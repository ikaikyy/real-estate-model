import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  src: string;
  alt: string;
  size?: string;
  className?: string;
}

const Image: React.FC<Props> = (Props) => {
  return (
    <Box
      className={Props.className}
      as="img"
      src={Props.src}
      alt={Props.alt}
      margin={0}
      objectFit="cover"
      w={Props.size}
      h={Props.size}
    />
  );
};

export default Image;
