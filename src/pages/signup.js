import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import { Form, Header } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [FirstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = FirstName === '' || password === '' || emailAddress === '';
  const handleSignup = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: FirstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName = '';
        setEmailAddress = '';
        setPassword = '';
        setError = error.message;
      });
  };

  return (
    <>
      <HeaderContainer>
        <Header.Title>You are almost there!</Header.Title>
        <Header.Body>Subscribe now to enjoy </Header.Body>
        <Form>
          <Form.Title>Have an Email or Facebook Account?</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method='POST'>
            <Form.Input
              type='text'
              placeholder='First Name'
              value={FirstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
            Already have an account?
            <Form.Link to='/signin'> Log In now!</Form.Link>
          </Form.Text>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}
