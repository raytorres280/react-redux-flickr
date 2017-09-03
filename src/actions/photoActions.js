import $ from 'jquery';

export function searchWithTags(tags) {
	console.log('searching for tag.');
	let photos = null;
	fetch('https://api.flickr.com/services/feeds/photos_public.gne?tags=' + tags + '&format=json', {
		method: 'GET',
		headers: "application/json",
		mode: 'cors',
		cache: 'default'
	})
		.then((res) => {
			console.log(res);
			return { type: 'SEARCH_WITH_TAGS', payload: photos };
		})
		.catch((err) => {
			console.log(err);
		});
}

export function getPhotosSuccess(photos) {
	return { type: 'GET_PHOTOS_SUCCESS', photos };
}

export function getPhotosByTag(tags) {
	return function(dispatch) {
		// fetch('https://api.flickr.com/services/feeds/photos_public.gne?tags=' + tags + '&format=json', {
		// 	headers: {
		// 		'Access-Control-Allow-Origin': '*',
		// 	},
		// 	mode: 'cors'
		// })
		// 	.then((res) => {
		// 	console.log(res);
		// 	return res.jsonFlickrFeed;
		// 	})
		// 	.then((res) => {
		// 		console.log(res);
		// 		dispatch(getPhotosSuccess(res));
		// 		// return { type: 'SEARCH_WITH_TAGS', payload: res};
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});

		let flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		$.getJSON( flickerAPI, {
			tags: tags,
			format: "json"
		})
			.done(function(res) {
				console.log(res);
				dispatch(getPhotosSuccess(res.items));
						// return { type: 'SEARCH_WITH_TAGS', payload: res};
			})
	};
}