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

	console.log(post);

	return {
		slug,
		post,
		title: metadata.attributes.title
	};
}
