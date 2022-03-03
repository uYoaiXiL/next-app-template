import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@store/index';
import styled from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';
import { setThemeReduxAsync } from '@store/reducers/common';

const ThemeSwitcherBox = styled.div`
  position: fixed;
  right: 30px;
  top: 20px;
  padding: 5px;
  z-index: 9999;
  cursor: pointer;
`;
const ThemeSwitcher = () => {
  const { theme } = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();
  const SwitchIcon = useMemo(() => (theme === 'light' ? FiMoon : FiSun), [theme]);

  return (
    <ThemeSwitcherBox onClick={() => dispatch(setThemeReduxAsync())}>
      <SwitchIcon fontSize={22} />
    </ThemeSwitcherBox>
  );
};

export default ThemeSwitcher;
