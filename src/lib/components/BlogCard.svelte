<script>
	export let data;
	import GridCard from '$lib/components/GridCard.svelte';
</script>

<GridCard occupyAll={true} color="bg-yellow" extraClasses="flex flex-col pt-2">
		<h3 class="mx-auto pb-2">Blog</h3>
		<hr class="border-base opacity-30" />
		<div class="m-2">
			{#each data.posts as post}
				<a href="/blog/{post.path}" class="cursor-pointer">
					<div class="p-4">
						<span class="inline-flex items-center">
							<h4 class="font-bold text-xl pr-2">{post.title}</h4>
							<p class="font-light">{post.date}</p>
						</span>
						<p>{post.description}</p>
					</div>
				</a>
				<hr class="border-base opacity-20" />
			{/each}
		</div>
	</GridCard>