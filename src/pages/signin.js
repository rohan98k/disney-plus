import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';
  const handleSignin = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContainer.Title>You are almost there!</HeaderContainer.Title>
        <HeaderContainer.Body>Login now to enjoy </HeaderContainer.Body>
        <Form>
          <Form.Title>Log In!</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method='POST'>
            <Form.Input
              type='email'
              placeholder='Enter your email'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              yar
              placeholder='Password'
              autoComplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Button disabled={isInvalid} type='submit'>
              Continue
            </Form.Button>
            <Form.SmallText>OR</Form.SmallText>
            <Form.Button type='submit'>Login with Facebook</Form.Button>
          </Form.Base>
          <Form.Text>
            Not a member?
            <Form.Link to='/signin'> Sign Up now!</Form.Link>
          </Form.Text>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
