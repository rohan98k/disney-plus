import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  Grid,
  Card,
  Button,
} from './styles/showcase';

export default function Showcase({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Showcase.Title = function ShowcaseTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Showcase.SubTitle = function ShowcaseSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Showcase.Grid = function ShowcaseGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
};

Showcase.Card = function ShowcaseCard({ src, ...restProps }) {
  return <Card {...restProps} src={`/images/home/titles/${src}`} />;
};

Showcase.Button = function ShowcaseButton({ to, children, ...restProps }) {
  return (
    <Button to={to} {...restProps}>
      {children}
    </Button>
  );
};
