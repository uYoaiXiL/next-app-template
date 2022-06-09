import { DefaultTheme } from 'styled-components';

const themeCommon = {
  primaryColor: '#B794F4',
  smallFontSize: '14px',
  fontSize: '16px',
  largeFontSize: '18px',
  borderColor: '#E2E8F0',
};

export const themeLight: DefaultTheme = {
  bgColor: '#fff',
  color: '#333',
  subColor: '#666',

  ...themeCommon,
};

export const themeDark: DefaultTheme = {
  bgColor: '#1A202C',
  color: 'rgba(255, 255, 255, 0.92)',
  subColor: '#d6deeb',
  ...themeCommon,
};
