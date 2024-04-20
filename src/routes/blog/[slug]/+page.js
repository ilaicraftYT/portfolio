import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import rehypeComponents from 'rehype-components';
import matter from 'front-matter';

import { Note, Tip, Important, Warning, Caution } from '$lib/components.js';

export async function load({ fetch, params }) {
	const slug = params.slug;
	const res = await fetch(
		`https://raw.githubusercontent.com/ilaicraftYT/blog/main/posts/${slug}.md`
	);

	if (!res.ok) {
		return {
			ok: false
		};
	}
	const raw = await res.text();
	const metadata = matter(raw);

	const post = await unified()
		.use(remarkParse)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypeHighlight)
		.use(rehypeComponents, {
			components: {
				note: Note,
				tip: Tip,
				important: Important,
				warning: Warning,
				caution: Caution
			}
		})
		.use(rehypeStringify, { allowDangerousHtml: true })
		.process(metadata.body);

	const splittedDate = metadata.attributes.date.split('-');

	const readTime = Math.ceil(metadata.body.trim().split(/\s+/).length / 250); // Words / Adult average WPM

	return {
		slug,
		post,
		readTime,
		ok: true,
		desc: metadata.attributes.description,
		title: metadata.attributes.title,
		date: `${
			[
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			][Number(splittedDate[1]) - 1]
		} ${splittedDate[0]}, ${splittedDate[2]}`
	};
}
