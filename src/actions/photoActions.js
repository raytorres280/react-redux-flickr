import $ from 'jquery';

export function searchWithTags(tags) {
	let photos = null;
	fetch('https://api.flickr.com/services/feeds/photos_public.gne?tags=' + tags + '&format=json', {
		method: 'GET',
		headers: "application/json",
		mode: 'cors',
		cache: 'default'
	})
		.then((res) => {
			return { type: 'SEARCH_WITH_TAGS', payload: photos };
		})
		.catch((err) => {
			throw err;
		});
}

export function getPhotosSuccess(photos) {
	return { type: 'GET_PHOTOS_SUCCESS', photos };
}

export function getPhotosByTag(tags) {
	return function(dispatch) {

		let flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		$.getJSON( flickerAPI, {
			tags: tags,
			format: "json"
		})
			.done(function(res) {
				dispatch(getPhotosSuccess(res.items));
			});
	};
}