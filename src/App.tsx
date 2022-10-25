import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/default';
import { ThemeProvider } from 'styled-components';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
