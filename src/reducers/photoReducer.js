export default function photoReducer(state = [], action) {
	switch(action.type) {
		case 'SEARCH_WITH_TAGS':
			state.push(this.state);
			return [...state,
				Object.assign({}, action.payload)];
		default:
			return state;
	}
}