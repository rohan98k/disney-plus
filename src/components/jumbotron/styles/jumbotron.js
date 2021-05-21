import styled from 'styled-components';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  max-width: 1300px;
  min-height: 450px;
  margin: auto;
  padding: 40px 40px;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;
  display: flex;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const TextPane = styled.div`
  width: 50%;
  padding: 0 40px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
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

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const Item = styled.div`
  display: flex;
  color: white;
  overflow: hidden;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  @media (max-width: 600px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
