import React from "react";
import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";
import Image from "@/Components/Image";
import Banner from "@/Components/Banner";
import Layout from "@/Components/Layout";
import ContactForm from "@/Components/ContactForm";

const Product: React.FC = () => {
  return (
    <Layout navLinks={[{ label: "Home", href: "/home" }]}>
      <Box className="main" display="flex" flexDirection="column" gap={8}>
        <Box w="100%" display="flex">
          <Box bg="#282828" minW="33%" minH="67%" />
          <Banner size="lg" />
        </Box>
        <Stack
          divider={<StackDivider borderColor="#282828" />}
          w="60%"
          display="flex"
          margin="auto"
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Text fontSize={36} letterSpacing={2} textTransform="uppercase">
              / Planta /
            </Text>
          </Box>
          <Image
            src="https://i.pinimg.com/564x/ab/13/d8/ab13d89fd7db54058e8d6466c8ad0a9a.jpg"
            alt="Planta"
            size="100%"
          />
        </Stack>
        <ContactForm />
      </Box>
    </Layout>
  );
};

export default Product;
