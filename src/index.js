import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { createTheme, ThemeProvider } from '@mui/material';
import { HashRouter as Router } from 'react-router-dom';
import { ArticlesProvider } from 'context/articlesContext';

const theme = createTheme({
  shape: {
    borderRadius: '0px',
  },
  typography: {
    fontFamily: ['Montserrat'].join(','),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <ArticlesProvider>
          <App />
        </ArticlesProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
