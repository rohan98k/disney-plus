import styled from 'styled-components';
import Slider from 'react-slick';

export const Carousel = styled(Slider)`
  padding: 0 calc(3.5vw + 5px);
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
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
  .slick-next {
    background: url('./images/icons/next-arrow.png') center center no-repeat !important;
    right: 0px;
    &::before {
      display: none;
    }
  }

  .slick-prev {
    background: url('./images/icons/prev-arrow.png') center center no-repeat !important;
    left: 0px;
    &::before {
      display: none;
    }
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
  @media (max-width: 700px) {
    height: 25vh;
    position: relative;
  }
`;

export const Frame = styled.div`
  padding: 40px 50px;
  max-width: 400px;
  @media (max-width: 700px) {
    padding: 20px 20px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export const Heading = styled.h1`
  font-size: 30px;
  @media (max-width: 700px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export const Subtitle = styled.h4`
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  @media (max-width: 700px) {
    font-weight: 600;
    margin: 0;
  }
`;

export const Body = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  @media (max-width: 700px) {
    display: none;
  }
`;
