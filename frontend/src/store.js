import { createStore, combineReducers } from 'redux'

import category from './views/Content/Document/CategoryList/model/reducers'
import document from './views/Content/Document/DocumentList/model/reducers'
import navigation from './views/Sidebar/NavigationList/model/reducers'

const reducers = combineReducers({
	category,
	document,
	navigation
})

const store = createStore(reducers)

export default store
