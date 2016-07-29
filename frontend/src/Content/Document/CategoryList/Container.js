import { connect } from 'react-redux'
import { addCategory } from './model/actions'
import CategoryList from './Component'

const mapStateToProps = (state) => {
	const store = state.category

	return {
		categories: store.categories,
		active: store.active,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onNewCategory: (payload) => {
			dispatch(addCategory(payload))
		}
	}
}

const CategoryListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryList)

export default CategoryListContainer
