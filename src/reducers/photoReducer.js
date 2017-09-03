export default function photoReducer(state = [], action) {
	switch(action.type) {
		case 'GET_PHOTOS_SUCCESS':
			let newState = Object.assign([], state, action.photos);
			return newState;
		default:
			return state;
	}
}