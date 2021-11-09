import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale-provider/en_US';
import { Provider } from 'react-redux';
import store from './store/index';
ReactDOM.render(
	<ConfigProvider locale={en_US}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</ConfigProvider>,
	document.getElementById('root')
);
