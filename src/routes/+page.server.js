import { OPENWEATHER_KEY } from '$env/static/private';
import { getPosts } from '$lib/posts.js';

export async function load() {
	let data = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=19.5333&lon=-96.9167&appid=${OPENWEATHER_KEY}&units=metric`,
		{ method: 'GET' }
	);
	let posts = await getPosts(fetch)
	posts = posts.slice(0, 3)

	return { weather: await data.json(), posts }
}
