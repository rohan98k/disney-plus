import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  Container,
  Box,
  Logo,
  Title,
  Body,
  SubscribeButtonLink,
  ButtonLink,
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}> {children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Header.Body = function HeaderBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Header.Box = function HeaderBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.SubscribeButtonLink = function HeaderSubscribeButtonLink({
  children,
  ...restProps
}) {
  return <SubscribeButtonLink {...restProps}>{children}</SubscribeButtonLink>;
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
