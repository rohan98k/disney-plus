import React from 'react';
import { Container, TextFrame, SubTitle, Picture, Button } from './styles/span';

export default function Span({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Span.TextFrame = function SpanTextFrame({ children, ...restProps }) {
  return <TextFrame {...restProps}>{children}</TextFrame>;
};

Span.SubTitle = function SpanSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Span.Picture = function SpanPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src} />;
};

Span.Button = function SpanButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
