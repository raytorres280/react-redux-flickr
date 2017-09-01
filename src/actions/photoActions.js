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