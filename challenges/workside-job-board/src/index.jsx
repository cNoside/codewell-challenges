import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './App';
import theme from './config/chakraTheme';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter basename='/workside-job-board/'>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
