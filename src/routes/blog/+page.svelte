<script>
	export let data;

	import IconChevronRight from '@tabler/icons-svelte/dist/svelte/icons/IconChevronRight.svelte';
</script>

<div class="bg-surface0 rounded-xl p-3 mt-2 text-text">
	<ul>
		{#each data.posts as post}
			<li class="bg-surface1 rounded-lg p-3 mb-2">
				<p class="text-subtext0 font-light">{post.date}</p>
				<a href="/blog/{post.path}" class="hover:text-green">
					<h2 class="text-2xl font-bold">
					  {post.title}
					</h2>
				</a>
				<div class="flex flex-row justify-between">
					<p>{post.description}</p>
					<a href="/blog/{post.path}" class="hover:text-green w-fit">
						<IconChevronRight />
					</a>
				</div>
			</li>
		{/each}
	</ul>
</div>
