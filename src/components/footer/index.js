import React from 'react';
import {
  Container,
  Row,
  Column,
  Box,
  HorizontalBox,
  Link,
  Text,
  Break,
  SocialMedia,
  Store,
} from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Box = function FooterBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};
Footer.HorizontalBox = function FooterHorizontalBox({
  children,
  ...restProps
}) {
  return <HorizontalBox {...restProps}>{children}</HorizontalBox>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.SocialMedia = function FooterSocialMedia({ children, ...restProps }) {
  return <SocialMedia {...restProps}>{children}</SocialMedia>;
};

Footer.Store = function FooterStore({ children, ...restProps }) {
  return <Store {...restProps}>{children}</Store>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};
