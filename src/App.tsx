import React from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
