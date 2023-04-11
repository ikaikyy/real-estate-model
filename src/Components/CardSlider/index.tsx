import React from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@/Components/Card";
import { Pagination, Navigation } from "swiper";
import { css } from "@emotion/css";

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
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
  1440: {
    slidesPerView: 4,
  },
};

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  return (
    <Box w="90%" margin="auto" marginTop={30}>
      <Swiper
        className={css({
          display: "flex",
          width: "100%",
          height: "100%",
          paddingBottom: 30,
          "@media (min-width: 768px)": {
            maxWidth: 610,
          },
          "@media (min-width: 1024px)": {
            maxWidth: 915,
          },
          "@media (min-width: 1440px)": {
            maxWidth: 1220,
          },
        })}
        breakpoints={sliderBreakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            className={css({
              display: "block",
              maxWidth: 290,
              marginRight: 15,
            })}
          >
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
