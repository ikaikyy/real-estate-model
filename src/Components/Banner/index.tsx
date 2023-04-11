import React from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Image from "@/Components/Image";
import "swiper/css/bundle";

SwiperCore.use([Navigation, Pagination]);

interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
  size?: string;
}

const Banner: React.FC<Props> = (Props) => {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const isDesktop = window.innerWidth > 768;
    setIsDesktop(isDesktop);
  }, []);

  return (
    <Box
      w={Props.size ? Props.size : "100%"}
      h={Props.size ? Props.size : "100%"}
      position="relative"
    >
      <Swiper
        style={{ display: "flex", width: "100%", height: "100%" }}
        loop={true}
        slidesPerView={1}
        navigation={
          Props.images.length > 1 && isDesktop
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        pagination={{ clickable: true }}
      >
        {Props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
        {Props.images.length > 1 && isDesktop ? (
          <>
            <Box
              bg="#282828"
              w="50px"
              h="50px"
              className="swiper-button-prev"
            />
            <Box
              bg="#282828"
              w="50px"
              h="50px"
              className="swiper-button-next"
            />
          </>
        ) : null}
      </Swiper>
    </Box>
  );
};

export default Banner;
