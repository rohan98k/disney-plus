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

export const Frame = styled.div`
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0 ')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0 ')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0')};
  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const Logo = styled.img`
height : 80px;  
width: 120px;
  margin-right : 30px;
  @media (min-width: 1440px{
    height: 60px;
    width: 120px;
  })
`;

export const TextLink = styled.p`
  cursor: pointer;
  text-decoration: none;
  margin-right: 30px;
  margin-top: 30px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  &:hover {
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: Cover;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;
  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${TextLink} {
      cursor: pointer;
    }
    ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 13px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
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
