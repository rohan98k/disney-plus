import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  max-width: 1300px;
  padding: 50px 30px;
  width: 100%;
`;

export const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 25px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column; ;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  line-height: 1.5;
  @media (max-width: 1000px) {
    font-size: 28px;
  }
`;

export const Heading = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0;
  @media (max-width: 1000px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.h4`
  white-space: pre-wrap;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: hsla(0, 0%, 75.3%, 0.8);
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

export const Picture = styled.img`
  display: flex;
`;
