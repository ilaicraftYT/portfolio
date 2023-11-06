import { getPosts } from '../../lib/posts';

export async function load({ fetch }) {
	const data = await getPosts(fetch)

	return { posts: data };
}
