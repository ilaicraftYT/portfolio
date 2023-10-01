<script>
	export let data;

	import { isDark } from '$lib/store';
	import GridCard from '$lib/GridCard.svelte';
	import TimeCard from '$lib/TimeCard.svelte';
	import { useSWR } from 'sswr';
	import IconBrandGithub from '@tabler/icons-svelte/dist/svelte/icons/IconBrandGithub.svelte';
	import IconBrandLinkedin from '@tabler/icons-svelte/dist/svelte/icons/IconBrandLinkedin.svelte';
	import IconBrandSpotify from '@tabler/icons-svelte/dist/svelte/icons/IconBrandSpotify.svelte';
	import IconBoxMultiple from '@tabler/icons-svelte/dist/svelte/icons/IconBoxMultiple.svelte';
	import IconChevronRight from '@tabler/icons-svelte/dist/svelte/icons/IconChevronRight.svelte';
	import IconBrandTwitter from '@tabler/icons-svelte/dist/svelte/icons/IconBrandTwitter.svelte';
	import IconBrandYoutube from '@tabler/icons-svelte/dist/svelte/icons/IconBrandYoutube.svelte';
	import IconBrandDiscord from '@tabler/icons-svelte/dist/svelte/icons/IconBrandDiscord.svelte';
	import IconMail from '@tabler/icons-svelte/dist/svelte/icons/IconMail.svelte';
	const placeholders = [...Array(7)];

	function toggleDarkMode() {
		isDark.update((v) => !v);
	}

	//weather.subscribe(v => console.log(v))
</script>

<div
	class="grid grid-rows-[192px_115.2px_110.5px_115.2px_120px_repeat(3,_115.2px)] grid-cols-3 gap-2 m-4 text-base"
>
	<GridCard occupyAll={true} color="bg-gradient-to-br from-green to-teal">
		<h2 class="text-4xl font-black absolute bottom-[5rem] left-0 p-4">
			Hi!
			<span class=""> 👋 </span>
		</h2>
		<h1 class="text-2xl font-medium absolute bottom-[3.3rem] left-0 p-4">I'm Ilai.</h1>
		<p class="absolute bottom-0 left-0 p-4">A passionate full-stack developer from 🇲🇽</p>
	</GridCard>
	<GridCard color="bg-red" extraClasses="">
		<div>
			<div class="flex flex-col items-center justify-center">
				<h3 class="text-1xl text-light">Age</h3>
				<p class="text-3xl font-black">13</p>
				<p class="font-medium">years old</p>
			</div>
		</div>
	</GridCard>
	<GridCard color="bg-surface0" extraClasses="flex justify-center items-center">
		<label class="relative inline-flex items-center cursor-pointer">
			<input type="checkbox" on:change={toggleDarkMode} checked={$isDark} class="sr-only peer" />
			<div
				class="w-11 h-6 bg-surface1 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content_[''] after:absolute after:top-[2px] after:left_[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green"
			/>
		</label>
	</GridCard>
	<GridCard color="bg-[#333]" href="https://github.com/ilaicraftYT">
		<IconBrandGithub class="dark:text-text" size="3rem" />
	</GridCard>
	<GridCard color="bg-[#0a66c2]" href="https://linkedin.com/in/soyilai">
		<IconBrandLinkedin class="dark:text-text" size="3rem" />
	</GridCard>
	<TimeCard {data} />
	<GridCard bento={true} color="bg-surface0" extraClasses="text-text p-4 overflow-">
		<div class="inline-flex text-l">
			<IconBoxMultiple /> <span class="pl-1 font-medium">Projects</span>
		</div>
		<p class="text-sm">Some of my publicly available or open-source projects.</p>
		<a class="absolute right-2 bottom-2" href="/my-projects">
			<IconChevronRight />
		</a>
	</GridCard>
	<GridCard color="bg-sky" extraClasses="flex justify-center items-center overflow-hidden p-4">
		<div>
			<div class="flex flex-col justify-center items-center">
				<p class="text-4xl font-black">+3</p>
				<p class="text-1xl font-medium">years of</p>
				<p class="text-1xl font-medium leading-4">experience</p>
			</div>
		</div>
	</GridCard>
	<GridCard color="bg-[#00acee]" extraClasses="dark:text-text" href="https://twitter.com/ilaicraft">
		<IconBrandTwitter size="3rem" />
	</GridCard>
	<GridCard bento={true} color="bg-[#1db954]" extraClasses="dark:text-text p-4">
		<div class="inline-flex">
			<IconBrandSpotify /> <span class="pl-1 font-medium">Favorite song</span>
		</div>
		<p><b>PYRO</b> - Chester Young, Castion</p>
	</GridCard>
	<GridCard color="bg-[#ff0000]" extraClasses="dark:text-text" href="https://youtube.com/@soyilai">
		<IconBrandYoutube size="3rem" />
	</GridCard>
	<GridCard color="bg-blue" extraClasses="dark:text-text" href="mailto:soyilai@proton.me">
		<IconMail size="3rem" />
	</GridCard>
	<GridCard color="bg-[#5865f2]" extraClasses="dark:text-text" href="https://discord.gg/wQDE9Vfvq7">
		<IconBrandDiscord size="3rem" />
	</GridCard>
	<GridCard occupyAll={true} color="bg-yellow" extraClasses="flex flex-col pt-2">
		<h3 class="mx-auto pb-2">Blog</h3>
		<hr class="border-base opacity-30" />
	</GridCard>
	{#each placeholders as placeholder, index}
		<GridCard bento={false} color="bg-surface0" />
	{/each}
</div>
