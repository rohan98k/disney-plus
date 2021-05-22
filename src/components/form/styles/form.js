import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 450px;
  background: linear-gradient(to bottom, #192133, #111826);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 700px;
  padding: 60px 137px 60px;
  margin-bottom: 100px;
  @media (max-width: 1000px) {
    padding: 0 30px;
    text-align: center;
  }
`;

export const Error = styled.div`
  background: #f15151;
  word-break: break;
  white-space: pre-wrap;
  display: flex;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h3`
  color: rgba(255, 255, 255, 0.8);
  font-size: 30px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  color: #737373;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: hsla(0, 0%, 75.3%, 0.8);
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

export const SmallText = styled.p`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #0063e5;
  }
`;

export const Input = styled.input`
  border: 0;
  color: rgba(255, 255, 255, 0.8);
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  padding-bottom: 0;
  margin-bottom: 20px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #0063e5;
  :focus {
    border-bottom: 2px solid #0063e5;
  }
  :placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Button = styled.button`
  background: #0063e5;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 10px;
  padding: 15px 15px;
  border: 0;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }

  &:last-of-type {
    background: #3f51b5;
  }
  @media (max-width: 700px) {
    font-size: 15px;
    width: 100%;
  }
`;
