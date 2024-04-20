import { getPosts } from '$lib/posts';

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <atom:link href="http://soyilai.vercel.com/rss" rel="self" type="application/rss+xml" />
    <title>SoyIlai</title>
    <link>https://soyilai.vercel.app</link>
    <description>Ilai's blog about code, experiences, new projects and tech news.</description>
    ${posts
			.map(
				(post) =>
					`<item>
        <guid>https://soyilai.vercel.app/blog/${post.path}</guid>
        <title>${post.title}</title>
        <link>https://soyilai.vercel.app/blog/${post.path}</link>
        <description>${post.description}</description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      </item>`
			)
			.join('')}
</channel>
</rss>
`;

export const GET = async ({ fetch }) => {
	const posts = await getPosts(fetch);
	const body = render(posts);
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'application/xml'
	};
	return new Response(body, {
		headers
	});
};
