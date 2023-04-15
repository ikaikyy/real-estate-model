import React from "react";
import { Box, defineStyleConfig, useStyleConfig } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@/Components/Card";
import { Pagination, Navigation } from "swiper";

interface CardSliderProps {
  cards: {
    image: {
      src: string;
      alt: string;
    };
    type: string;
    title: string;
    descriptions: {
      text: string;
    }[];
  }[];
}

const sliderBreakpoints = {
  320: {
    slidesPerView: 1,
  },
  700: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
  1440: {
    slidesPerView: 4,
  },
};

export const CardSliderStyle = defineStyleConfig({
  baseStyle: {
    w: "90%",
    margin: "auto",
    marginTop: 30,
    ".swiper-pagination-bullets": {
      "--swiper-pagination-bullet-size": "8px",
      "--swiper-pagination-color": "#282828",
    },
    ".card-slider": {
      display: "flex",
      width: "100%",
      height: "100%",
      paddingBottom: 35,
      maxW: 305,
      "@media (min-width: 700px)": {
        maxW: 610,
      },
      "@media (min-width: 1024px)": {
        maxW: 915,
      },
      "@media (min-width: 1440px)": {
        maxW: 1220,
      },
      ".card-slider__slide": {
        display: "block",
        maxW: 290,
        marginRight: 15,
      },
    },
  },
});

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const styles = useStyleConfig("CardSlider");

  return (
    <Box __css={styles}>
      <Swiper
        className="card-slider"
        breakpoints={sliderBreakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="card-slider__slide">
            <Card
              image={card.image}
              type={card.type}
              title={card.title}
              descriptions={card.descriptions}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CardSlider;
