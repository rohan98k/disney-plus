import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 0 calc(3.5vw + 5px);
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 700px) {
    padding: 0 30px;
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Frame = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0px;
  opacity: 0;
  z-index: 0;
`;
