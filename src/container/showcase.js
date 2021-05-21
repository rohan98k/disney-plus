import React from 'react';
import showcaseData from '../content/showcaseData';
import { Showcase } from '../components';

export function ShowcaseContainer() {
  return (
    <Showcase>
      <Showcase.Title>The new home for your favorites</Showcase.Title>
      <Showcase.SubTitle>
        An unprecedented collection of the world's most beloved movies and TV
        series.
      </Showcase.SubTitle>
      <Showcase.Grid>
        {showcaseData.map((item) => (
          <Showcase.Card key={item.id} src={item.image} alt={item.alt} />
        ))}
      </Showcase.Grid>
      <Showcase.Button>GET THE DISNEY BUNDLE</Showcase.Button>
    </Showcase>
  );
}
