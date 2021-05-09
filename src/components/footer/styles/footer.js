import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 0.5fr));
  grid-gap: 15px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;
export const Button = styled.button``;
export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
