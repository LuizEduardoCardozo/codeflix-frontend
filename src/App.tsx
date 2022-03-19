import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { Navbar } from './components/Navbar/Navbar';
import { DialogSearchProvider } from './components/Navbar/DialogSearch/DialogSearchProvider';
import { MobileFooter } from './components/Footer/MobileFooter';
import { useSmallWindow } from './hooks/useSmallWindow';

function Main() {
  const isSmallWindow = useSmallWindow();
  return (
    <BrowserRouter>
            <DialogSearchProvider>
              <Navbar />
              <AppRouter />
              {isSmallWindow && <MobileFooter />}
            </DialogSearchProvider>
    </BrowserRouter>
  )
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Main />
        </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
