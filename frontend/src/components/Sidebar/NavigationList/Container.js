import { connect } from 'react-redux'
import { switchPage } from './model/actions'
import NavigationList from './Component'

const mapStateToProps = (state) => {
	const navigation = state.navigation;

	return {
		pages: navigation.pages,
		currentPage: navigation.currentPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onPageSwitchHandler: (payload) => {
			dispatch(switchPage(payload))
		}
	}
}

const NavigationListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NavigationList)

export default NavigationListContainer
