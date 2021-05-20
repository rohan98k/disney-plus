import React from 'react';
import { FooterContainer } from '../container/footer';
import { HeaderContainer } from '../container/header';
import Movies from '../components/movies';
import Viewers from '../components/viewers';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <Viewers />
      <Movies />
      <FooterContainer />
    </>
  );
}
