import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  Container,
  Box,
  Group,
  SearchInput,
  SearchIcon,
  Search,
  Logo,
  Picture,
  Profile,
  Dropdown,
  Title,
  Body,
  SubscribeButtonLink,
  TextLink,
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

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Search = function HeaderSearch({ search, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}>
        <img src='/images/icons/search.svg' alt='Search' />
      </SearchIcon>
      <SearchInput
        value={setSearchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder='Search'
        active={searchActive}
      />
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Box = function HeaderBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
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
