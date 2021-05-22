import styled from 'styled-components';

export const Inner = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  max-width: 1300px;
  min-height: 450px;
  margin: auto;
  padding: 40px 40px;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 50px 0 0;
  }
`;

export const Pane = styled.div`
  width: 50%;
  max-width: 500px;
  position: absolute;
  top: 100px;
  padding: 50px 50px;
  z-index: 2;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0 30px;
    text-align: center;
    position: static;
  }
`;

export const Frame = styled.div`
  width: 100%;
  img {
    position: relative;
    width: 100%;
  }
  @media (max-width: 700px) {
    img {
      position: static;
    }
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

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: hsla(0, 0%, 75.3%, 0.8);
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

export const Item = styled.div`
  display: flex;
  color: white;
  overflow: hidden;
  margin-bottom: 50px;
  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

export const Container = styled.div`
  @media (max-width: 600px) {
    ${Item}:last-of-type h4 {
      margin-bottom: 50px;
    }
  }
`;
