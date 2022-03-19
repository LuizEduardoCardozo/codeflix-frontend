import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { Navbar } from './components/Navbar/Navbar';
import { DialogSearchProvider } from './components/Navbar/DialogSearch/DialogSearchProvider';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <DialogSearchProvider>
              <Navbar />
              <AppRouter />
            </DialogSearchProvider>
          </BrowserRouter>
        </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
