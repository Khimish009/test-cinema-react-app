import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from "./components/Main";

const theme = createTheme({
  yellow: {
    main: '#ffd80e',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
