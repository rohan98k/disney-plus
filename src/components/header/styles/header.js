import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(rgba(12, 17, 27, 0.5) 0%, #0c111b 80%),
    url(${({ src }) =>
        src ? `../images/${src}.png` : '../images/home-bg.png'})
      top left / cover repeat-x;
  overflow-y: hidden;
  -webkit-animation: backgroundScroll 30s linear infinite;
  -webkit-animation-fill-mode: forwards;
  animation: backgroundScroll 30s linear infinite;
  animation-fill-mode: forwards;
  @-webkit-keyframes backgroundScroll {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0px -180px;
    }
  }

  @keyframes backgroundScroll {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0px -180px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 calc(3.5vw + 5px);
  height: 70px;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  margin-top: 80px;
  margin-bottom: 0;
`;

export const Body = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 0;
  color: rgba(255, 255, 255, 0.8);
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Frame = styled.div``;

export const Logo = styled.img`
height : 40px;  
width: 120px;
  margin-right : 30px;
  @media (min-width: 1440px{
    height: 50px;
    width: 150px;
  })
`;

export const SubscribeButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #1f80e0;
  justify-content: center;
  width: 90px;
  height: fit-content;
  color: white;
  border-radius: 4px;
  font-size: 15px;
  text-decoration: none;
  padding: 8px 16px;
  box-sizing: border-box;
  cursor: pointer;
  margin-right : 15px;
  }
  `;
export const ButtonLink = styled(ReactRouterLink)`
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  color: white;
  margin-right: 0;
`;
