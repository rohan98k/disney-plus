import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  margin-top: 50px;
    padding: 0 calc(3.5vw + 5px);
  display=flex;
  h3 {
    font-size: 22px;
    font-weight: 500;
    line-height: normal;
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
`;

export const Carousel = styled(Slider)`
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

export const Wrap = styled.div`
  cusror: pointer;
  div {
    cursor: pointer;
    img {
      display: flex;
      width: 100%;
      height: auto;
      border-radius: 8px;
      padding: 0 5px;
      object-fit: cover;
      &:hover {
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scale(1.2);
      }
    }
  }
`;

export const Text = styled.text``;
