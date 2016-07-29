/* Components */
import Action from '../Action/Component'
import NavigationListContainer from '../NavigationList/Container'

/* Styles */
import './styles/sass/base.scss'

/* Images */
import logo from './styles/images/logo.png'

const Sidebar = () => (
	<div className="sidebar">
		<Action />
		<div>
			<img
				src={logo}
				className="logo"
			/>
		</div>
		<NavigationListContainer />
	</div>
)

export default Sidebar
