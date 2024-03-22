<script>
	export let data;

	import WelcomeCard from "$lib/components/WelcomeCard.svelte"
	import TimeCard from '$lib/components/TimeCard.svelte'
	import AgeCard from '$lib/components/AgeCard.svelte'
	import ThemeCard from '$lib/components/ThemeCard.svelte'
	import FirstSocialGroup from "$lib/components/FirstSocialGroup.svelte"
	import ProjectsCard from "$lib/components/ProjectsCard.svelte"
	import ExperienceCard from "$lib/components/ExperienceCard.svelte"
	import TwitterCard from "$lib/components/TwitterCard.svelte"
	import SpotifyCard from "$lib/components/SpotifyCard.svelte"
	import LastSocialGroup from "$lib/components/LastSocialGroup.svelte"
	import BlogCard from "$lib/components/BlogCard.svelte";
</script>

<div
	class="grid grid-rows-[192px_115.2px_110.5px_115.2px_120px_repeat(1,_115.2px)] grid-cols-3 gap-2 m-4 text-base"
>
	<WelcomeCard />
	<AgeCard />
	<ThemeCard />
	<FirstSocialGroup />
	<TimeCard data={data.weather} />
	<ProjectsCard />
	<ExperienceCard />
	<TwitterCard />
	<SpotifyCard />
	<LastSocialGroup />
	<BlogCard {data} />
</div>
