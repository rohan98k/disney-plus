import React, { useState } from 'react';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import { Form, Header } from '../components';

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';
  const handleSignin = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <Header.Title>You are almost there!</Header.Title>
        <Header.Body>Login now to subscribe</Header.Body>
        <Form>
          <Form.Title>Have an Email or Facebook Account?</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method='POST'>
            <Form.Input
              placeholder='Enter your email'
              value={emailAddress}
              onchange={({ target }) => setEmailAddress(target.value)}
            />
            {/* <Form.Input
              type='password'
              placeholder='Password'
              autoComplete='off'
              value={password}
              onchange={({ target }) => setPassword(target.value)}
            /> */}

            <Form.Button disabled={isInvalid} type='submit'>
              Continue
            </Form.Button>
            <Form.SmallText>OR</Form.SmallText>
            <Form.Button type='submit'>Login with Facebook</Form.Button>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
