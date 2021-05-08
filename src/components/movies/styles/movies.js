import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  margin-top: 50px;
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
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
  .slick-slide-image {
    max-width: 100%;
    height: auto;
  }
`;

export const Wrap = styled.div`
  cusror: pointer;
  position: relative;
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
