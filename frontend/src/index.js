import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import App from './app'

/* Render App */
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('content')
)
