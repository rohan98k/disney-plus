import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          alt='Disney Plus'
          src='./images/logo.svg'
        />
        <Header.Box>
          <Header.SubscribeButtonLink to={ROUTES.SIGN_UP}>
            SIGN UP NOW
          </Header.SubscribeButtonLink>
          <Header.ButtonLink to={ROUTES.SIGN_IN}>LOG IN</Header.ButtonLink>
        </Header.Box>
      </Header.Frame>
      {children}
    </Header>
  );
}
