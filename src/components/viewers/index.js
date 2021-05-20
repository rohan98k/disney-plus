import React from 'react';
import { Container, Frame, Image, Video } from './styles/viewers';

export default function Viewers(children, ...restProps) {
  return <Container {...restProps}>{children}</Container>;
}

Viewers.Frame = function ViewerFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Viewers.Image = function ViewersImage({ src, ...restProps }) {
  return <Image {...restProps} src={`/images/viewers/${src}.png`} />;
};

Viewers.Video = function ViewersVideo({ source, ...restProps }) {
  return <Video {...restProps} />;
};
