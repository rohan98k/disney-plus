import React from 'react';
import {
  Container,
  Item,
  Inner,
  Pane,
  TextPane,
  Title,
  SubTitle,
  Image,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  bg = true,
  ...restProps
}) {
  return bg ? (
    <Item {...restProps}>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>
    </Item>
  ) : (
    children
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.TextPane = function JumbotronTextPane({ children, ...restProps }) {
  return <TextPane {...restProps}>{children}</TextPane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};
