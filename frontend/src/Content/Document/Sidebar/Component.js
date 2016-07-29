/* Components */
import CategoryListContainer from '../CategoryList/Container'

/* Styles */
import './styles/sass/base.scss'

/* Images */

const Sidebar = ({onNewCategory}) => (
	<div className="docs__sidebar">
		<h4 className="docs__sidebar-title">Kategorie</h4>
		<button className="btn btn-xs btn-primary docs__sidebar-button"
		        onClick={() => onNewCategory({ name: 'Kategorie' })}>
			<i className="fa fa-bolt docs__sidebar-button-icon"></i>
			Nová kategorie
		</button>

		<CategoryListContainer />
	</div>
)

export default Sidebar
