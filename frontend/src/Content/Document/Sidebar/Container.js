import { connect } from 'react-redux'
import { addCategory } from '../CategoryList/model/actions'
import Sidebar from './Component'

const mapStateToProps = (state) => (
	{}
)

const mapDispatchToProps = (dispatch) => (
	{
		onNewCategory: (payload) => {
			dispatch(addCategory(payload))
		}
	}
)

const SidebarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar)

export default SidebarContainer
