import { createTheme, ThemeProvider } from '@mui/material/styles';
import Movies from "./components/Movies";

const theme = createTheme({
  yellow: {
    main: '#ffd80e',
  },
  palette: {
    yellow1: {
      main: '#ffd80e',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Movies />
    </ThemeProvider>
  );
}
