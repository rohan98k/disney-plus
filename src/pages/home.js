import React from 'react';
import { FooterContainer } from '../container/footer';
import Header from '../components/header';
import Movies from '../components/movies';
import ImageSlider from '../components/slider';
import Viewers from '../components/viewers';

export default function Home() {
  return (
    <>
      <Header />
      <ImageSlider />
      <Viewers />
      <Movies />
      <FooterContainer />
    </>
  );
}
