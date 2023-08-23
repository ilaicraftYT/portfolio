<script>
	export let data;

	import IconChevronRight from '@tabler/icons-svelte/dist/svelte/icons/IconChevronRight.svelte';
</script>

<div class="bg-surface0 rounded-xl p-3 mt-2 text-text">
	<ul>
		{#each data.posts as post}
			<li class="bg-surface1 rounded-lg p-3 mb-2">
				<h2 class="text-2xl font-bold">
					<a href="/blog/${post.path}">
						{post.title}
					</a>
				</h2>
				<div class="flex flex-row justify-between">
					<p>{post.description}</p>
					<a href="/blog/{post.path}">
						<IconChevronRight />
					</a>
				</div>
			</li>
		{/each}
	</ul>
</div>
