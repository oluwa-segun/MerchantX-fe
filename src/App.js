import React from 'react';

import LandingPage from './pages/Landingpage';

import { createMuiTheme, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primay: {
      main: '#0B08B8'
    },
    secondary: {
      main: '#0C0B5A',
      dark: '#0E0D2F'
    },
    text: {
      primary: '#1A181B'
    },
    typography: {
      title: {
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '34px',
        color: '#C4C4C4'
      },
      h3: {
        fontFamily: 'Ubuntu',
        fontStyle: 'Normal',
        fontWeight: 'bold',
        fontSize: '68px',
        lineHeight: '68px',
        color: '#09068C'
      }
    }
  }  
})


function App() {
  return (
    <ThemeProvider theme={theme}>
        <LandingPage/>
    </ThemeProvider>
  );
}

export default App;
