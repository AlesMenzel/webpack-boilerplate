/* Components */
import NavigationItem from '../NavigationItem/Component'

/* Styles */
import './styles/sass/base.scss'

/* Images */

const NavigationList = ({pages, currentPage}) => (
	<div>
		<div className="nav-list-header">
			Start
		</div>
		<ul className="nav-list">
			{pages.map((item, key) =>
				<NavigationItem key={key} {...item} />
			)}
		</ul>
	</div>
)

export default NavigationList
