<script>
	export let data;

	import IconChevronRight from '@tabler/icons-svelte/dist/svelte/icons/IconChevronRight.svelte';
</script>

<!-- h-[calc(100vh-72px)] ugliest fix ever !-->
<div class="bg-surface0 rounded-xl p-3 mt-2 text-text h-[calc(100vh-72px)]">
	<ul>
		{#each data.posts as post}
			<li class="bg-surface1 rounded-lg p-3 mb-2">
				<p class="text-subtext0 font-light">{post.date}</p>
				<a href="/blog/{post.path}" class="hover:text-green">
					<h2 class="text-2xl font-bold">
						{post.title}
					</h2>
				</a>
				<p class="cursor-default">{post.description}</p>
				<a href="/blog/{post.path}" class="text-green inline-flex items-center hover:text-teal">
					Read more <IconChevronRight size="20px" />
				</a>
			</li>
		{/each}
	</ul>
</div>
