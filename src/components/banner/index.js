import React from 'react';
import {
  Container,
  Carousel,
  Frame,
  Heading,
  Body,
  Subtitle,
} from './styles/banner';

export default function Banner({ children, ...restProps }) {
  return <Carousel {...restProps}>{children}</Carousel>;
}

Banner.Container = function BannerContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Banner.Frame = function BannerFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Banner.Heading = function BannerHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Banner.Body = function BannerBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Banner.Subtitle = function BannerSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
