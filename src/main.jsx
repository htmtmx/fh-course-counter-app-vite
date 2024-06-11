import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <FirstApp title='Usando PropTypes' subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque omnis eius neque. Veritatis, vitae voluptas! Magni ad, soluta dolor optio earum accusamus odio impedit nam, quidem similique nobis, obcaecati id!' />
      
    </ThemeProvider>
  </React.StrictMode>
);