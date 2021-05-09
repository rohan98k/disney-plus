import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: linear-gradient(180deg, #141924 0%, #0e1219 100%);
    position: absolute;
  }
`;
