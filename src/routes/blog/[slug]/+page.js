import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import matter from 'front-matter';

export async function load({ fetch, params }) {
	const slug = params.slug;
	const res = await fetch(
		`https://raw.githubusercontent.com/ilaicraftYT/blog/main/posts/${slug}.md`
	);
	const raw = await res.text();
	const metadata = matter(raw);

	const post = await unified()
		.use(remarkParse)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeHighlight)
		.use(rehypeStringify, { allowDangerousHtml: true })
		.process(metadata.body);

	const splittedDate = metadata.attributes.date.split("-");

	return {
		slug,
		post,
		desc: metadata.body.slice(0, 80).trim() + '...',
		title: metadata.attributes.title,
		date: `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][Number(splittedDate[1]) - 1]} ${splittedDate[0]}, ${splittedDate[2]}`
	};
}
