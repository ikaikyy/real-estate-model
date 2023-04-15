import React from "react";
import { Box, defineStyleConfig, useStyleConfig } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Image from "@/Components/Image";
import "swiper/css/bundle";

SwiperCore.use([Navigation, Pagination]);

interface Props {
  size?: string;
  slidesPerView?: number;
}

export const BannerStyle = defineStyleConfig({
  baseStyle: {
    w: "100%",
    h: "100%",
    ".swiper-pagination-bullets": {
      "--swiper-pagination-bullet-size": "8px",
      "--swiper-pagination-color": "#282828",
    },
    ".swiper-button-prev": {
      "--swiper-navigation-color": "#fafafa",
      "--swiper-navigation-size": "20px",
      transition: "padding 0.2s ease-in-out",
      "&:hover": {
        paddingRight: "15px",
      },
    },
    ".swiper-button-next": {
      "--swiper-navigation-color": "#fafafa",
      "--swiper-navigation-size": "20px",
      transition: "padding 0.2s ease-in-out",
      "&:hover": {
        paddingLeft: "15px",
      },
    },
  },
  sizes: {
    sm: {
      w: "33%",
    },
    md: {
      w: "50%",
    },
    lg: {
      w: "67%",
    },
    xl: {
      w: "100%",
    },
  },
});

const Banner: React.FC<Props> = (Props) => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [images, setImages] = React.useState([
    {
      src: "",
      alt: "",
    },
  ]);

  const { size, slidesPerView } = Props;

  const styles = useStyleConfig("Banner", { size });

  React.useEffect(() => {
    fetch("/api/images", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data.Images);
      });
  }, []);

  React.useEffect(() => {
    const isDesktop = window.innerWidth > 768;
    setIsDesktop(isDesktop);
  }, []);

  return (
    <Box __css={styles}>
      <Swiper
        loop={true}
        slidesPerView={slidesPerView}
        navigation={
          images.length > 1 && isDesktop
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
        {images.length > 1 && isDesktop ? (
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

Banner.defaultProps = {
  size: "xl",
  slidesPerView: 1,
};

export default Banner;
