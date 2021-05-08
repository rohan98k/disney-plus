import styled from 'styled-components';
import Slider from 'react-slick';

export const Carousel = styled(Slider)`
  margin-top: 70px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  .slick-dots li.slick-active button:before {
    color: rgb(150, 158, 171);
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

export const Wrap = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  padding: 0 5px;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
