import React from "react";
import {
  Box,
  Stack,
  StackDivider,
  Text,
  defineStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";
import Image from "@/Components/Image";

interface Props {
  label?: string;
  src: string;
}

export const ImageContainerStyle = defineStyleConfig({
  baseStyle: {
    display: "flex",
    margin: "auto",
    maxW: "768px",
    w: "80%",
    ".image-header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ".image-header__label": {
        fontSize: 36,
        letterSpacing: 2,
        textTransform: "uppercase",
      },
    },
  },
});

const ImageContainer: React.FC<Props> = (Props) => {
  const styles = useStyleConfig("ImageContainer");

  return (
    <Stack __css={styles} divider={<StackDivider borderColor="#282828" />}>
      {Props.label ? (
        <Box className="image-header">
          <Text className="image-header__label">{Props.label}</Text>
        </Box>
      ) : null}
      <Image src={Props.src} alt={Props.label ? Props.label : ""} size="100%" />
    </Stack>
  );
};

export default ImageContainer;
