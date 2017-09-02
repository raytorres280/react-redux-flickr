export default function photoReducer(state = [], action) {
	switch(action.type) {
		case 'GET_PHOTOS_SUCCESS':
			console.log('action found in reducer');
			return Object.assign({}, state, action.photos);
		default:
			return state;
	}
}