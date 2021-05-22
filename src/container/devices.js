import React from 'react';
import devicesData from '../content/devicesData';
import { Devices } from '../components';

export function DevicesContainer() {
  return (
    <Devices>
      <Devices.Title>Available on your favorite devices</Devices.Title>
      <Devices.Frame>
        {devicesData.map((item) => (
          <Devices.Row key={item.id}>
            <Devices.Picture src={item.src} alt={item.alt} />
            <Devices.Heading>{item.heading}</Devices.Heading>
            <Devices.SubTitle>{item.subtitle} </Devices.SubTitle>
          </Devices.Row>
        ))}
      </Devices.Frame>
    </Devices>
  );
}
