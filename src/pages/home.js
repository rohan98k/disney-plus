import React from 'react';
import { FooterContainer } from '../container/footer';
import { HeaderContainer } from '../container/header';
import Movies from '../components/movies';
import ImageSlider from '../components/slider';
import Viewers from '../components/viewers';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <ImageSlider />
      <Viewers />
      <Movies />
      <FooterContainer />
    </>
  );
}
