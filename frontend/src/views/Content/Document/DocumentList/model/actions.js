let id = 20;

export const addDocument = (payload) => {
	return {
		type: 'ADD_DOCUMENT',
		payload: {
			...payload,
			id: ++id
		}
	};
};

export const removeDocument = (id) => {
	return {
		type: 'REMOVE_DOCUMENT',
		id
	};
};

export const editDocument = (payload) => {
	return {
		type: 'EDIT_DOCUMENT',
		payload
	};
};
