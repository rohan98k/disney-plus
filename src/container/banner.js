import React from 'react';
import { Banner } from '../components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerData from '../content/bannerData.json';
import { Carousel, Container } from '../components/banner/styles/banner';

export function BannerSlider() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <Carousel {...settings}>
      {bannerData.map((banner) => (
        <Container src={banner.src}>
          <Banner.Frame key={banner.id}>
            <Banner.Heading>{banner.heading}</Banner.Heading>
            <Banner.Subtitle>{banner.subtitle}</Banner.Subtitle>
            <Banner.Body>{banner.body}</Banner.Body>
          </Banner.Frame>
        </Container>
      ))}
    </Carousel>
  );
}
