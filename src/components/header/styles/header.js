import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url
    (
      ${({ src }) =>
        src ? '.../images/misc/${src}.jpg' : '..../images/misc.home-bg.jpg'}
    )
    top-left / cover no-repeat; ;
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
