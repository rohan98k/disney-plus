import React from 'react';
import { Nav, Logo, NavMenu, UserImg } from './styles/header';

export default function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a>
          <img src='/images/home-icon.svg' />
          <span> Home </span>
        </a>
        <a>
          <img src='/images/search-icon.svg' />
          <span> Search </span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg' />
          <span> Watchlist </span>
        </a>
        <a>
          <img src='/images/original-icon.svg' />
          <span> Originals </span>
        </a>
        <a>
          <img src='/images/movie-icon.svg' />
          <span> Movies </span>
        </a>
        <a>
          <img src='/images/series-icon.svg' />
          <span> Series </span>
        </a>
      </NavMenu>
      <UserImg src='https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png' />
    </Nav>
  );
}
