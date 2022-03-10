import type { AppProps } from 'next/app';
import '../styles/index.css';
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from '@styles/theme';
import { GlobalStyled } from '@styles/GlobalStyled';
import ThemeSwitcher from '@components/ThemeSwitcher';
import { useAppSelector } from '@store/index';
import { wrapper } from '@store/index';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useAppSelector((store) => store.common);
  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyled />
      <Component {...pageProps} />
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
