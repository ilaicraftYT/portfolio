<script>
	import IconBrandReact from '@tabler/icons-svelte/dist/svelte/icons/IconBrandReact.svelte';
	import IconBrandSvelte from '@tabler/icons-svelte/dist/svelte/icons/IconBrandSvelte.svelte';
	import IconBrandTailwind from '@tabler/icons-svelte/dist/svelte/icons/IconBrandTailwind.svelte';
	import IconBrandMantine from '@tabler/icons-svelte/dist/svelte/icons/IconBrandMantine.svelte';
	import IconChevronRight from '@tabler/icons-svelte/dist/svelte/icons/IconChevronLeft.svelte';
	import IconBrandHTML5 from '@tabler/icons-svelte/dist/svelte/icons/IconBrandHtml5.svelte';

	let enabledFilters = ['react', 'svelte', 'tailwind', 'mantine', 'html'];
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
		},
		html: {
			outline: 'data-[checked=true]:outline-[#E14C26] data-[checked=true]:text-[#E14C26]',
			name: 'HTML',
			icon: IconBrandHTML5
		}
	};
	let projects = [
		{
			name: 'Zubiri School',
			desc: 'Actual language learning school website for some IRL friend',
			stack: ['react', 'tailwind', 'mantine'],
			link: '#'
		},
		{
			name: 'Poggit Next',
			desc: "PocketMine's Plugin Market UI remake with Next.js",
			stack: ['react', 'tailwind', 'mantine'],
			link: 'https://github.com/ilaicraftYT/poggit-next-ui'
		},
		{
			name: 'My portfolio',
			desc: 'This very portfolio experiment made to learn Svelte that had a really good result',
			stack: ['svelte', 'tailwind'],
			link: 'https://github.com/ilaicraftYT/portfolio'
		},
		{
			name: 'Tetris HTML',
			desc: "Turns out that it was just me that didn't make Tetris as a beginner.",
			stack: ['html'],
			link: 'https://github.com/ilaicraftYT/tetris-html'
		},
		{
			name: 'DashIO',
			desc: 'Discord bot developer that wants to flex a nice-looking dashboard? This is for you!',
			stack: ['react', 'tailwind'],
			link: '#'
		}
	];

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
				data-checked="true"
				on:click={(e) => {
					!enabledFilters.includes(stackIndex)
						? enabledFilters.push(stackIndex)
						: (enabledFilters = enabledFilters.filter((v) => v !== stackIndex));

					e.target instanceof HTMLButtonElement
						? e.target.setAttribute('data-checked', enabledFilters.includes(stackIndex))
						: e.target.parentElement.setAttribute(
								'data-checked',
								enabledFilters.includes(stackIndex)
						  );

					renderProjects = filterProjects();
				}}
			>
				<svelte:component this={stackInfo[stackIndex].icon} class="mr-2" />
				<p>
					{stackInfo[stackIndex].name ?? stackIndex.at(0).toUpperCase() + stackIndex.slice(1)}
				</p>
			</button>
		{/each}
	</div>
	<div class="p-2 rounded-xl">
		{#each renderProjects as project}
			<a
				href={project.link}
				target="_blank"
				class="flex flex-col items-center border border-surface1 rounded-lg shadow md:flex-row bg-surface0 hover:bg-surface1 m-2"
			>
				{#if project.image}
					<img
						class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
						src={project.image}
						alt={project.name}
					/>
				{/if}
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
