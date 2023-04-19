import React from "react";
import {
  Box,
  Stack,
  StackDivider,
  defineStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  label: string;
  sectionId?: string;
}

export const BannerLabelStyle = defineStyleConfig({
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px auto",
    w: "100%",
    ".banner-label": {
      fontSize: 36,
      letterSpacing: 2,
      textTransform: "uppercase",
    },
    ".banner-label__divider": {
      borderColor: "#282828",
      w: "80vw",
      maxW: "768px",
      margin: "0.5rem auto",
    },
    ".banner": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
});

const BannerLabel: React.FC<Props> = (Props) => {
  const styles = useStyleConfig("BannerLabel");

  return (
    <Stack
      __css={styles}
      as="section"
      id={Props.sectionId}
      divider={<StackDivider className="banner-label__divider" />}
    >
      <Box className="banner-label">{Props.label}</Box>
      <Box className="banner">{Props.children}</Box>
    </Stack>
  );
};

export default BannerLabel;
