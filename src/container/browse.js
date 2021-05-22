import React, { useContext, useState, useEffect } from 'react';
import { SelectProfilesContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';

import { Header, Loading } from '../components';
import { BannerSlider } from '../container/banner';
import { ViewersContainer } from './viewers';

import * as ROUTES from '../constants/routes';

export function BrowseContainer({ slides }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header bg={false}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src='./images/logo.svg' />
            <Header.TextLink>TV</Header.TextLink>
            <Header.TextLink>Movies</Header.TextLink>
            <Header.TextLink>Sports</Header.TextLink>
            <Header.TextLink>News</Header.TextLink>
            <Header.TextLink>Premium</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
      </Header>
      <BannerSlider />
      <ViewersContainer />
    </>
  ) : (
    <SelectProfilesContainer user={user} setProfile={setProfile} />
  );
}
