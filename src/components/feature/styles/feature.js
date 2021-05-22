import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  padding-top: 25vh;
  margin: auto;
  width: 60vw;
  max-width: 800px;
  @media (max-width: 700px) {
    width: 100%;
    padding: 25vh 30px;
  }
`;

export const Title = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 500;
  a {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }
  margin-bottom: 5px;
`;

export const SubTitle = styled.h2`
  color: hsla(0, 0%, 75.3%, 0.8);
  font-size: 18px;
  font-weight: 600;
  margin-top: 0;
`;

export const SmallText = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: hsla(0, 0%, 75.3%, 0.8);
  margin: 30px 0 10px;
  a {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Picture = styled.img`
  margin: 15px 0;
  display: flex;
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: flex;
  background-color: #0063e5;
  justify-content: center;
  height: fit-content;
  color: white;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  padding: 15px 20px;
  box-sizing: border-box;
  cursor: pointer;
  @media (max-width: 700px) {
    font-size: 15px;
    width: 100%;
  }
`;

export const Arrow = styled.div``;
