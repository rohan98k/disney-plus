import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

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
`;

export const Error = styled.div`
  background: #f15151;
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
  font-size: 20px;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const SmallText = styled.p`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;

export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  border: 0;
  color: rgba(255, 255, 255, 0.6);
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  padding-bottom: 0;
  margin-bottom: 20px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #1f80e0;
  :focus {
    border-bottom: 2px solid #1f80e8;
  }
`;

export const Button = styled.button`
  background: #1f80e0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 10px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }

  &:last-of-type {
    background: #3f51b5;
  }
`;
