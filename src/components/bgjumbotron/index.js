import React from 'react';
import {
  Container,
  Item,
  Inner,
  Pane,
  Frame,
  Title,
  SubTitle,
} from './styles/bgjumbotron';

export default function BGJumbotron({
  children,
  direction = 'row',

  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>
    </Item>
  );
}

BGJumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

BGJumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

BGJumbotron.Frame = function JumbotronFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

BGJumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

BGJumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
