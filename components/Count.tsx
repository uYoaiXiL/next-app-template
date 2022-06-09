import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@store/index';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  set,
} from '@store/reducers/count';
import { bigFont } from '@styles/css';

const CountContainer = styled.div`
  width: 100%;
  margin: 50px auto auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Value = styled.h4`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.largeFontSize};
  margin-bottom: 40px;
  ${bigFont}
`;
const Actions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;
const ActionItem = styled.div`
  width: 100%;
  margin: 12px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  @media only screen and (min-width: 640px) {
    margin: 0 12px;
  }
`;
const Count: React.FC = (props) => {
  const { count } = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();
  return (
    <CountContainer>
      <Value>{count}</Value>
      <Actions>
        <ActionItem onClick={() => dispatch(increment())}>increment</ActionItem>
        <ActionItem onClick={() => dispatch(decrement())}>decrement</ActionItem>
        <ActionItem onClick={() => dispatch(incrementByAmount(10))}>incrementByAmount</ActionItem>
        <ActionItem onClick={() => dispatch(incrementAsync(20))}>setCountReduxAsync</ActionItem>
        <ActionItem onClick={() => dispatch(set(0))}>clear</ActionItem>
      </Actions>
    </CountContainer>
  );
};

export default Count;
