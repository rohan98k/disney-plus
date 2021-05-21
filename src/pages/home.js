import React from 'react';
import { Feature } from '../components';
import { JumbotronContainer } from '../container/jumbotron';
import { BGJumbotronContainer } from '../container/bgjumbotron';
import { FooterContainer } from '../container/footer';
import { HeaderContainer } from '../container/header';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Picture src='bundleLogo.svg' alt='Logo Bundle' />
          <Feature.ButtonLink> GET THE DISNEY BUNDLE</Feature.ButtonLink>
          <Feature.SmallText>
            Stream Now. <a hreg='#'>Terms Apply</a>
          </Feature.SmallText>
          <Feature.Picture src='franchiseLogo.png' alt='Franchise Bundle' />
          <Feature.Title>
            <a href='#'>Sign up for Disney+ only.</a>
          </Feature.Title>
          <Feature.SubTitle>Rs.399/month or Rs.3999/year</Feature.SubTitle>
          <Feature.Arrow></Feature.Arrow>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <BGJumbotronContainer />
      <FooterContainer />
    </>
  );
}
