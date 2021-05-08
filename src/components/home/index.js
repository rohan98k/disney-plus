import React from 'react';
import Movies from '../movies';
import ImageSlider from '../slider';
import Viewers from '../viewers';
import { Container } from './styles/home';

export default function Home() {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}
