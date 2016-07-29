const initialState = [
	{
		id: 1,
		name: 'Document.pdf',
		url: '/uploads/files/Document.pdf',
		size: '3.20 MB',
		state: 1
	}, {
		id: 2,
		name: 'Document.pdf',
		url: '/uploads/files/Document.pdf',
		size: '3.20 MB',
		state: 2
	}, {
		id: 3,
		name: 'Document.pdf',
		url: '/uploads/files/Document.pdf',
		size: '3.20 MB',
		state: 3
	}, {
		id: 4,
		name: 'Document.pdf',
		url: '/uploads/files/Document.pdf',
		size: '3.20 MB',
		state: 1
	}, {
		id: 5,
		name: 'Document.pdf',
		url: '/uploads/files/Document.pdf',
		size: '3.20 MB',
		state: 2
	}
];

const create = ({id, name, url, size, state}) => {
	return {
		id,
		name,
		url,
		size,
		state
	}
}

const document = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_DOCUMENT':
			return [
				...state,
				create(action.payload)
			];
		case 'REMOVE_DOCUMENT':
			return {
				...state,
				active: action.id
			};
		default:
			return state;
	}
};

export default document;
