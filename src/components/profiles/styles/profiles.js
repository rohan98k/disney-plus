import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  margin-top: 100px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 36px;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: rgba(255, 255, 255, 0.6);
  text-overflow: ellipsis;
  font-size: 18px;
  &:hover {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  border-radius: 50%;
  height: auto;
  border: 5px solid transparent;
  cursor: pointer;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;
  &:hover > ${Picture} {
    border: 5px solid white;
  }
  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
