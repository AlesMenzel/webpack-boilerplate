export const removeCategory = (id) => {
	return {
		type: 'REMOVE_CATEGORY',
		id
	}
}

export const switchCategory = (id) => {
	return {
		type: 'SWITCH_CATEGORY',
		id
	}
}

export const moveCategory = (sourceId, targetId) => {
	return {
		type: 'MOVE_CATEGORY',
		sourceId,
		targetId
	}
}

export const nestCategory = (sourceId, targetId) => {
	return {
		type: 'NEST_CATEGORY',
		sourceId,
		targetId
	}
}
