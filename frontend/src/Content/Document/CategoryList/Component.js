import { Component, PropTypes } from 'react';
import _ from 'lodash';

/* Components */
import CategoryContainer from '../Category/Container'

/* Styles */
import './styles/sass/base.scss'

/* Images */

export default class CategoryList extends Component {
	render() {
		const {root = true, parent = null, active, categories} = this.props

		const className = 'docs__categories' + (root ? ' docs__categories-main' : '')
		const subcategories = _.sortBy(_.filter(categories, (category) => category.parent === parent), ['order'])

		return (
			<ul className={className}>
				{subcategories.map((category, index) => {
					return (
						<CategoryContainer
							key={category.id}

							index={index}
							isRoot={root}
							isActive={active === category.id}
							{...category}
						/>
					)
				})}
			</ul>
		)
	}
}

export default CategoryList
