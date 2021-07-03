import React from 'react';
import { Provider } from 'react-redux'

import GlobalStyles from "../src/theme/globalStyles";
import themeDefault from "../src/theme/themeDefault";
import { ThemeProvider } from "styled-components";

import { Orders } from './features/orders/Orders';
import { store } from '../src/app/store';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={themeDefault}>
          <GlobalStyles />
          <Orders />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
    
  );
}

export default App;
