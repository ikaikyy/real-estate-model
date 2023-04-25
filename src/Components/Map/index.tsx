import React from "react";
import {
  Box,
  Stack,
  StackDivider,
  defineStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";

interface Props {
  address: string;
  lat: number;
  lng: number;
}

export const MapStyle = defineStyleConfig({
  baseStyle: {
    w: "80vw",
    maxW: "768px",
    h: "60vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ".map": {
      w: "100%",
      h: "100%",
      border: "0",
    },
    ".label": {
      fontSize: 36,
      letterSpacing: 2,
      textTransform: "uppercase",
    },
  },
});

const Map: React.FC<Props> = (Props) => {
  const styles = useStyleConfig("Map");
  const { google_api_key } = process.env;

  return (
    <Stack
      __css={styles}
      id="map"
      divider={<StackDivider borderColor="#282828" />}
    >
      <Box className="label">Localização</Box>
      <Box
        as="iframe"
        className="map"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${google_api_key}
    &q=${Props.address}&center=${Props.lat},${Props.lng}&zoom=16`}
      />
    </Stack>
  );
};

export default Map;
