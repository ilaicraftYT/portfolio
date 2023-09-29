<script>
	import IconBrandReact from '@tabler/icons-svelte/dist/svelte/icons/IconBrandReact.svelte';
	import IconBrandSvelte from '@tabler/icons-svelte/dist/svelte/icons/IconBrandSvelte.svelte';
	import IconBrandTailwind from '@tabler/icons-svelte/dist/svelte/icons/IconBrandTailwind.svelte';
	import IconBrandMantine from '@tabler/icons-svelte/dist/svelte/icons/IconBrandMantine.svelte';

	const stackInfo = {
		react: {
			color: '#61dbfb',
			icon: IconBrandReact
		},
		svelte: {
			color: '#FF3C00',
			icon: IconBrandSvelte
		},
		tailwind: {
			color: '#B3E8F2',
			icon: IconBrandTailwind
		},
		mantine: {
			color: '#3397F0',
			icon: IconBrandMantine
		}
	};
	const projects = [
		{
			name: 'Zubiri School',
			desc: 'Actual language learning school website for some IRL friend.',
			stack: ['React', 'TailwindCSS', 'Mantine']
		}
	];
</script>

<div class="text-text">
	{#each Object.keys(stackInfo) as stackIndex}
		<stackInfo[stackIndex].icon />
	{/each}
</div>
