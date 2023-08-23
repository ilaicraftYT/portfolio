import matter from 'front-matter';

export async function load() {
	const treeRes = await fetch(
		'https://api.github.com/repos/ilaicraftYT/blog/git/trees/main?recursive=1'
	);
	let data = await treeRes.json();

	data = data.tree.filter((value) => value.path.startsWith('posts/'));
	for (const v of data) {
		v.path = v.path.replace('posts/', '').replace('.md', '');

		const matterRes = await fetch(
			`https://raw.githubusercontent.com/ilaicraftYT/blog/main/posts/${v.path}.md`
		);
		const matterData = await matterRes.text();
		const front = matter(matterData);
		const splittedDate = front.attributes.date.split("-");

		v.title = front.attributes.title;
		v.description = front.body.slice(0, 70).trim() + '...';
		v.date = `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][Number(splittedDate[1]) - 1]} ${splittedDate[0]}, ${splittedDate[2]}`
	}

	return { posts: data };
}
