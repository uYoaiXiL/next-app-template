import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@store/index';
import { increment, decrement, incrementByAmount, incrementAsync } from '@store/reducers/count';
import { bigFont } from '@styles/css';

const CountContainer = styled.div`
  width: 500px;
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
  display: flex;
  align-items: center;
`;
const ActionItem = styled.div`
  margin: 0 12px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  cursor: pointer;
  border-radius: 5px;
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
      </Actions>
    </CountContainer>
  );
};

export default Count;
