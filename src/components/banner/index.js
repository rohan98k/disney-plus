import React from 'react';
import {
  Container,
  Picture,
  Gradient,
  Heading,
  Body,
  Subtitle,
} from './styles/banner';

export default function Banner(children, ...restProps) {
  return <Container {...restProps}>{children}</Container>;
}

Banner.Picture = function BannerPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/banner/${src}.png`} />;
};

Banner.Gradient = function BannerGradient({ children, ...restProps }) {
  return <Gradient {...restProps}>{children}</Gradient>;
};

Banner.Gradient = function BannerGradient({ children, ...restProps }) {
  return <Gradient {...restProps}>{children}</Gradient>;
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
