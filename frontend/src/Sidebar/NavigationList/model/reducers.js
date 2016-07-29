const initialState = {
	pages: [
		{
			id: 1,
			label: 'Schůze',
			icon: 'glyphicon glyphicon-blackboard',
			link: '/meetings/list'
		},
		{
			id: 2,
			label: 'Dokumenty',
			icon: 'glyphicon glyphicon-book',
			link: '/documents/list'
		},
		{
			id: 3,
			label: 'Formuláře',
			icon: 'glyphicon glyphicon-list-alt',
			link: '/forms/list'
		},
		{
			id: 4,
			label: 'Kontakty',
			icon: 'glyphicon glyphicon-user',
			link: '/contacts/list'
		},
		{
			id: 5,
			label: 'Nastavení',
			icon: 'glyphicon glyphicon-cog',
			link: '/settings'
		}
	],
	currentPage: 2
};

const navigation = (state = initialState, action) => {
	switch (action.type) {
		case 'SWITCH_PAGE':
			return {
				...state,
				currentPage: action.page
			};
		default:
			return state;
	}
};

export default navigation;
