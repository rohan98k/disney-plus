import React from 'react';
import {
  Container,
  Title,
  Picture,
  ButtonLink,
  SubTitle,
  SmallText,
  Arrow,
} from './styles/feature';

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.Picture = function FeaturePicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/home/${src}`} />;
};

Feature.ButtonLink = function FeatureButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.SmallText = function FeatureSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Feature.Arrow = function FeatureArrow({ children, ...restProps }) {
  return <Arrow {...restProps}>{children}</Arrow>;
};
