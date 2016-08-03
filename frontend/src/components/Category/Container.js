import { connect } from 'react-redux'
import { switchCategory, removeCategory, moveCategory, nestCategory } from './model/actions'
import Category from './Component'

const mapStateToProps = (state) => {
	const store = state.category

	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (id) => {
			dispatch(switchCategory(id))
		},
		onRemove: (id) => {
			dispatch(removeCategory(id))
		},
		onMove: (sourceId, targetId) => {
			dispatch(moveCategory(sourceId, targetId))
		},
		onNest: (sourceId, targetId) => {
			dispatch(nestCategory(sourceId, targetId))
		}
	}
}

const CategoryContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Category)

export default CategoryContainer
