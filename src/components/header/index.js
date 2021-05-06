import React from 'react';
import { Nav, Logo, NavMenu, UserImg } from './styles/header';

export default function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a href='/#'>
          <img src='/images/home-icon.svg' alt='' />
          <span> Home </span>
        </a>
        <a href='/#'>
          <img src='/images/search-icon.svg' alt='' />
          <span> Search </span>
        </a>
        <a href='/#'>
          <img src='/images/watchlist-icon.svg' alt='' />
          <span> Watchlist </span>
        </a>
        <a href='/#'>
          <img src='/images/original-icon.svg' alt='' />
          <span> Originals </span>
        </a>
        <a href='/#'>
          <img src='/images/movie-icon.svg' alt='' />
          <span> Movies </span>
        </a>
        <a href='/#'>
          <img src='/images/series-icon.svg' alt='' />
          <span> Series </span>
        </a>
      </NavMenu>
      <UserImg src='https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png' />
    </Nav>
  );
}
