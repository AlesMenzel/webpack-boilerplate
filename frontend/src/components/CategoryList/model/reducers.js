import _ from 'lodash';

const initialState = {
	categories: [
		{
			id: 1,
			name: 'Kategorie 1',
			count: 15,
			parent: null,
			order: 1
		}, {
			id: 6,
			name: 'Kategorie 1',
			count: 15,
			parent: null,
			order: 1
		}, {
			id: 7,
			name: 'Kategorie 2',
			count: 12,
			parent: 1,
			order: 1
		}, {
			id: 8,
			name: 'Kategorie 3',
			count: 10,
			parent: 1,
			order: 2
		}, {
			id: 9,
			name: 'Kategorie 1',
			count: 15,
			parent: 7,
			order: 1
		}, {
			id: 10,
			name: 'Kategorie 2',
			count: 12,
			parent: 1,
			order: 3
		}, {
			id: 2,
			name: 'Kategorie 2',
			count: 12,
			parent: 1,
			order: 4
		}
	],
	active: 4
}

const create = ({id, name}) => {
	return {
		id,
		name,
		count: 10,
		parent: null
	}
}

const remove = (categories, id) => (
	_.filter(categories, (category) => {
		return category.id !== id
	})
)

const move = (categories, sourceId, targetId) => {
	console.log(`MOVE: sourceId: ${sourceId}, targetId: ${targetId}`)

	const source = _.find(categories, {id: sourceId})
	const target = _.find(categories, {id: targetId})

	return _.map(categories, (category) => {
		if (category.id == sourceId) {
			return {...category, order: target.order}
		}
		if (category.id == targetId) {
			return {...category, order: source.order}
		}
		return category
	})
}

const nest = (categories, sourceId, targetId) => {
	console.log(`CHANGE: id: ${sourceId}, target: ${targetId}`)

	return _.map(categories, (category) => {
		if (category.id == sourceId) {
			return {...category, parent: targetId}
		}
		return category
	})
}

const category = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CATEGORY':
			return {
				...state,
				categories: [
					...state.categories,
					create(action.payload)
				]
			};
		case 'REMOVE_CATEGORY':
			return {
				...state,
				categories: remove(state.categories, action.id)
			};
		case 'SWITCH_CATEGORY':
			return {
				...state,
				active: action.id
			};
		case 'MOVE_CATEGORY':
			return {
				...state,
				categories: move(state.categories, action.sourceId, action.targetId)
			};
		case 'NEST_CATEGORY':
			return {
				...state,
				categories: nest(state.categories, action.sourceId, action.targetId)
			};
		default:
			return state;
	}
}

export default category
