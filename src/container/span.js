import React from 'react';
import { Span } from '../components';

import * as ROUTES from '../constants/routes';

export function SpanContainer() {
  return (
    <Span>
      <Span.Picture src='./images/home/bundleLogo.svg' alt='Bundle Logos' />
      <Span.TextFrame>
        <Span.SubTitle>
          Get The Disney Bundle to stream the best movies, shows, and sports
          with Disney+, Hulu, and ESPN+. <a href='/'>Terms Apply.</a>
        </Span.SubTitle>
        <Span.Button to={ROUTES.SIGN_UP}>GET THE DISNEY BUNDLE</Span.Button>
      </Span.TextFrame>
    </Span>
  );
}
