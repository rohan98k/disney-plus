import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  min-height: 450px;
  margin: auto;
  padding: 40px 40px;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 1000px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: hsla(0, 0%, 75.3%, 0.8);
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 50px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Card = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const Button = styled(ReactRouterLink)`
  display: block;
  background-color: #0063e5;
  justify-content: center;
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
