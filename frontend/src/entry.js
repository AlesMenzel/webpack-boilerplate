/* Application index */
import './index.html'

/* Dependencies */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

/* Views */
import Documents from './views/document/index'
import Meetings from './views/meeting/index'
import NoMatch from './views/nomatch/index'

/* Render App */
render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Documents}>
				<Route path="documents" component={Documents}/>
				<Route path="meeting" component={Meetings}>
					<Route path="/meeting/:meetingId" component={Meetings}/>
				</Route>
				<Route path="*" component={NoMatch}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)
