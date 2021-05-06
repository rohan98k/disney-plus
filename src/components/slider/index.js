import React from 'react';
import { Carousel, Wrap } from './styles/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/slider-badging.jpg' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-badag.jpg' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-scales.jpg' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-scale.jpg' alt='' />
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;
