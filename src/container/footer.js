import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href='#'>About Disney+</Footer.Link>
          <Footer.Link href='#'>Terms Of Use</Footer.Link>
          <Footer.Link href='#'>Privacy Policy</Footer.Link>
          <Footer.Link href='#'>FAQ</Footer.Link>
          <Footer.Link href='#'>Feedback</Footer.Link>
          <Footer.Link href='#'>Careers</Footer.Link>
          <Footer.Break />
          <Footer.Text>
            © 2021 STAR. All Rights Reserved. HBO, Home Box Office and all
            related channel and programming logos are service marks of, and all
            related programming visuals and elements are the property of, Home
            Box Office, Inc. All rights reserved.
          </Footer.Text>
        </Footer.Column>

        <Footer.Column>
          <Footer.Text>Connect with Us</Footer.Text>
          <Footer.Button href='#'> Facebook</Footer.Button>
          <Footer.Button href='#'> Twitter</Footer.Button>
        </Footer.Column>
        <Footer.Column>
          <Footer.Text>Disney+ App</Footer.Text>
          <Footer.Button href='#'> Play Store</Footer.Button>
          <Footer.Button href='#'> App Store</Footer.Button>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  );
}
