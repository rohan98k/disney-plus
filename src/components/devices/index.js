import React from 'react';
import {
  Container,
  Frame,
  Row,
  Heading,
  Title,
  SubTitle,
  Picture,
} from './styles/devices';

export default function Devices({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Devices.Frame = function DevicesFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Devices.Row = function DevicesRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Devices.Title = function DevicesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Devices.SubTitle = function DevicesSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Devices.Heading = function DevicesHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Devices.Picture = function DevicesPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src} />;
};
