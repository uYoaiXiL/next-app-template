import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    smallFontSize: string;
    fontSize: string;
    largeFontSize: string;
    borderColor: string;
    bgColor: string;
    color: string;
    subColor: string;
  }
}
