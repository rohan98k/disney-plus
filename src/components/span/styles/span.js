import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  max-width: 1300px;
  padding: 50px 30px;
  width: 95%;
  border: 1px solid white;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TextFrame = styled.div`
  width: 50%;
`;

export const SubTitle = styled.h4`
  font-size: 24px;
  margin-top: 0;
  font-weight: 600;
  line-height: 1.5;
  color: hsla(0, 0%, 75.3%, 0.8);
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

export const Picture = styled.img`
  width: 50%;
  height: auto;
  padding: 0 30px;
`;

export const Button = styled(ReactRouterLink)`
  display: block;
  background-color: #0063e5;
  width: 300px;
  text-align: center;
  color: white;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  padding: 15px 15px;
  box-sizing: border-box;
  cursor: pointer;
  }
  `;
