import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from "./components/Main";
import AppBar from './components/common/AppBar';

const theme = createTheme({
  yellow: {
    main: '#ffd80e',
  },
  palette: {
    warning: {
      main: '#ff9800'
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBar />
        <Main />
      </BrowserRouter>
    </ThemeProvider>
  );
}
