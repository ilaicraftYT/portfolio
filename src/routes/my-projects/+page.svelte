<script>
	import IconBrandReact from '@tabler/icons-svelte/dist/svelte/icons/IconBrandReact.svelte';
	import IconBrandSvelte from '@tabler/icons-svelte/dist/svelte/icons/IconBrandSvelte.svelte';
	import IconBrandTailwind from '@tabler/icons-svelte/dist/svelte/icons/IconBrandTailwind.svelte';
	import IconBrandMantine from '@tabler/icons-svelte/dist/svelte/icons/IconBrandMantine.svelte';

	let enabledFilters = [];
	const stackInfo = {
		react: {
			outline: 'data-[checked=true]:outline-[#61dbfb]',
			text: 'data-[checked=true]:text-[#61dbfb]',
			icon: IconBrandReact
		},
		svelte: {
			outline: 'data-[checked=true]:outline-[#FF3C00]',
			text: 'data-[checked=true]:text-[#FF3C00]',
			icon: IconBrandSvelte
		},
		tailwind: {
			outline: 'data-[checked=true]:outline-[#B3E8F2]',
			text: 'data-[checked=true]:text-[#B3E8F2]',
			icon: IconBrandTailwind
		},
		mantine: {
			outline: 'data-[checked=true]:outline-[#3397F0]',
			text: 'data-[checked=true]:text-[#3397F0]',
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

	console.log(enabledFilters);
</script>

<div class="text-text mt-2 bg-surface0">
	<div>
		{#each Object.keys(stackInfo) as stackIndex}
			<button
				class="w-fit p-2 bg-surface1 inline-flex m-2 rounded-lg data-[checked=true]:outline outline-2 outline-offset-0 {stackInfo[
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
				}}
			>
				<svelte:component this={stackInfo[stackIndex].icon} class="mr-2" />
				<p class={stackInfo[stackIndex].text} data-checked={stackInfo[stackIndex].check}>
					{stackIndex.at(0).toUpperCase() + stackIndex.slice(1)}
				</p>
			</button>
		{/each}
	</div>
</div>
