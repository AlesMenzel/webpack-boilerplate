import { createStore, combineReducers } from 'redux'

import category from './Content/Document/CategoryList/model/reducers'
import document from './Content/Document/DocumentList/model/reducers'
import navigation from './Sidebar/NavigationList/model/reducers'

const reducers = combineReducers({
	category,
	document,
	navigation
})

const store = createStore(reducers)

export default store
