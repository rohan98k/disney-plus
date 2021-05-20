import React from 'react';
import { Viewers } from '../components';
import viewersData from '../content/viewersData.json';
import { Container } from '../components/viewers/styles/viewers';

export function ViewersContainer() {
  return (
    <Container>
      {viewersData.map((viewers) => (
        <Viewers.Frame key={viewers.id}>
          <Viewers.Image src={viewers.src} slt={viewers.alt} />
          <Viewers.Video autoPlay={true} loop={true} playsInline={true}>
            <source
              src={`/videos/viewers/${viewers.source}.mp4`}
              type='video/mp4'
            />
          </Viewers.Video>
        </Viewers.Frame>
      ))}
    </Container>
  );
}
