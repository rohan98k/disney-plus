import React from 'react';
import { Container, Carousel, Wrap, Text } from './styles/movies';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import recoData from '../../content/recoData.json';

export default function Movies() {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <h3>Recommended for you</h3>
      <Wrap>
        <Carousel {...settings}>
          {recoData.map((slide) => (
            <div key={slide.id}>
              <img src={slide.image} alt={Image.alt} />
            </div>
          ))}
        </Carousel>
      </Wrap>
    </Container>
  );
}
