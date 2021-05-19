import styled from 'styled-components';
import Slider from 'react-slick';

export const Carousel = styled(Slider)`
  padding: 0 calc(3.5vw + 5px);
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 8px;
  border: 4px solid rgb(3, 11, 23);
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  background-image: linear-gradient(
      to right,
      rgba(3, 11, 23, 0.9),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    ),
    url(${({ src }) => `../images/banners/${src}.jpg`});
  background-size: cover;
  &:hover {
    padding: 0;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 4px solid rgba(249, 249, 249, 0.8);
  }
`;

export const Frame = styled.div`
  padding: 40px 50px;
  max-width: 400px;
`;

export const Heading = styled.h1`
  font-size: 30px;
`;

export const Subtitle = styled.h4`
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
`;

export const Body = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;
