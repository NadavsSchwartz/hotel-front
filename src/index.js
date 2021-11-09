import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale-provider/en_US';
ReactDOM.render(
	<ConfigProvider locale={en_US}>
		<Router>
			<App />
		</Router>
	</ConfigProvider>,
	document.getElementById('root')
);
