import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 50px;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
`;

export const HorizontalBox = styled.div`
  display: flex;
  width: 100%;
`;

export const Link = styled.a`
  color: #dadada;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 500;
  padding-right: 20px;
  text-decoration: none;
  &:hover {
    color: #1f80e0;
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  margin-right: 5px;
  cursor: pointer;
  padding: 10px;
  background: #192133;
  border-radius: 4px;
  &: hover {
    svg {
      fill: white;
    }
    background: #1f80e0;
  }
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  svg {
    width: 20px;
    height: 20px;
    fill: #b1c3d3;
  }
`;

export const Store = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  svg {
    margin-bottom: 5px;
    margin-right: 5px;
    &:hover {
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      .btn-background {
        fill: #1f80e0;
      }
    }
  }
`;
export const Text = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: #dadada;
  margin-top: 0px;
  margin-bottom: 10px;
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 20px;
`;
