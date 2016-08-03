import { createStore, combineReducers } from 'redux'

import category from './components/CategoryList/model/reducers'
import document from './components/DocumentList/model/reducers'
import navigation from './components/Sidebar/NavigationList/model/reducers'

const reducers = combineReducers({
	category,
	document,
	navigation
})

const store = createStore(reducers)

export default store
