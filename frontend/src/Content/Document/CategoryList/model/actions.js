let id = 20

export const addCategory = (payload) => {
	return {
		type: 'ADD_CATEGORY',
		payload: {
			...payload,
			id: ++id
		}
	}
}
