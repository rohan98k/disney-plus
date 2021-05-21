import React from 'react';
import bgjumboData from '../content/bgjumboData';
import { BGJumbotron } from '../components';

export function BGJumbotronContainer() {
  return (
    <BGJumbotron.Container>
      {bgjumboData.map((item) => (
        <BGJumbotron key={item.id} direction={item.direction}>
          <BGJumbotron.Frame>
            <img src={item.src} alt={item.alt} />
          </BGJumbotron.Frame>
          <BGJumbotron.Pane src={item.src}>
            <BGJumbotron.Title>{item.title}</BGJumbotron.Title>
            <BGJumbotron.SubTitle>{item.subTitle}</BGJumbotron.SubTitle>
          </BGJumbotron.Pane>
        </BGJumbotron>
      ))}
    </BGJumbotron.Container>
  );
}
