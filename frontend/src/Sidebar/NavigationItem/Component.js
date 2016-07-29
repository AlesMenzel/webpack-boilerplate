/* Components */

/* Styles */
import './styles/sass/base.scss'

/* Images */

const NavigationItem = ({label, icon, link}) => (
	<li className="nav-list-item">
		<i className={icon} />
		<a href={link}>{label}</a>
	</li>
);

export default NavigationItem;
