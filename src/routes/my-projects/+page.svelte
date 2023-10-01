<script>
	import IconBrandReact from '@tabler/icons-svelte/dist/svelte/icons/IconBrandReact.svelte';
	import IconBrandSvelte from '@tabler/icons-svelte/dist/svelte/icons/IconBrandSvelte.svelte';
	import IconBrandTailwind from '@tabler/icons-svelte/dist/svelte/icons/IconBrandTailwind.svelte';
	import IconBrandMantine from '@tabler/icons-svelte/dist/svelte/icons/IconBrandMantine.svelte';
	import IconChevronRight from '@tabler/icons-svelte/dist/svelte/icons/IconChevronLeft.svelte';

	let enabledFilters = [];
	const stackInfo = {
		react: {
			outline: 'data-[checked=true]:outline-[#61dbfb] data-[checked=true]:text-[#61dbfb]',
			icon: IconBrandReact
		},
		svelte: {
			outline: 'data-[checked=true]:outline-[#FF3C00] data-[checked=true]:text-[#FF3C00]',
			icon: IconBrandSvelte
		},
		tailwind: {
			outline: 'data-[checked=true]:outline-[#B3E8F2] data-[checked=true]:text-[#B3E8F2]',
			icon: IconBrandTailwind
		},
		mantine: {
			outline: 'data-[checked=true]:outline-[#3397F0] data-[checked=true]:text-[#3397F0]',
			icon: IconBrandMantine
		}
	};
	let projects = [
		{
			name: 'Zubiri School',
			desc: 'Actual language learning school website for some IRL friend.',
			stack: ['react', 'tailwind', 'mantine']
		}
	];

	// TODO Clean this!
	function filterProjects() {
		return projects.filter((project) =>
			project.stack.some((stack) => enabledFilters.includes(stack))
		);
	}

	let renderProjects = filterProjects();
</script>

<div class="text-text mt-2">
	<div class="bg-surface0 mb-2 h-[142px] rounded-xl">
		<div class="flex items-center justify-between h-full">
			<h1 class="text-4xl font-extrabold flex justify-center items-center">
				<a href="/" class="hover:text-green"><IconChevronRight size={36} /></a>
				Projects
			</h1>
			<span />
		</div>
	</div>
	<div class="bg-surface0 inline-flex justify-around w-full p-2 rounded-xl mb-2">
		{#each Object.keys(stackInfo) as stackIndex}
			<button
				class="w-fit p-2 bg-surface1 inline-flex mx-2 rounded-lg data-[checked=true]:outline outline-2 outline-offset-0 hover:bg-surface2 {stackInfo[
					stackIndex
				].outline}"
				on:click={(e) => {
					!enabledFilters.includes(stackIndex)
						? enabledFilters.push(stackIndex)
						: (enabledFilters = enabledFilters.filter((v) => v !== stackIndex));

					let target = e.target;

					if (target instanceof HTMLButtonElement) {
						target.setAttribute('data-checked', enabledFilters.includes(stackIndex));
					} else {
						target.parentElement.setAttribute('data-checked', enabledFilters.includes(stackIndex));
					}

					renderProjects = filterProjects();
				}}
			>
				<svelte:component this={stackInfo[stackIndex].icon} class="mr-2" />
				<p>
					{stackIndex.at(0).toUpperCase() + stackIndex.slice(1)}
				</p>
			</button>
		{/each}
	</div>
	<div class="p-2 rounded-xl">
		{#each renderProjects as project}
			<a
				href="/"
				class="flex flex-col items-center border border-surface1 rounded-lg shadow md:flex-row md:max-w-xl bg-surface0 hover:bg-surface1"
			>
				<img
					class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
					src="/docs/images/blog/image-4.jpg"
					alt=""
				/>
				<div class="flex flex-col justify-between p-4 leading-normal">
					<h5 class="mb-2 text-2xl font-bold tracking-tight">
						{project.name}
					</h5>
					<p class="mb-3 font-normal text-subtext0">
						{project.desc}
					</p>
				</div>
			</a>
		{/each}
	</div>
</div>
