import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import defaultTheme from './themes/default.theme';
import 'antd/dist/antd.css';
import GlobalStyles from './themes/global.style';
ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
