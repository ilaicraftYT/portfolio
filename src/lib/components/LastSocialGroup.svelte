<script>
	import GridCard from '$lib/components/GridCard.svelte';
	import IconBrandYoutube from '@tabler/icons-svelte/IconBrandYoutube.svelte';
	import IconBrandDiscord from '@tabler/icons-svelte/IconBrandDiscord.svelte';
	import IconMail from '@tabler/icons-svelte/IconMail.svelte';
</script>

<GridCard color="bg-[#ff0000]" extraClasses="dark:text-text" href="https://youtube.com/@soyilai">
	<IconBrandYoutube size="3rem" />
</GridCard>
<GridCard color="bg-blue" extraClasses="dark:text-text" href="mailto:soyilai@proton.me">
	<IconMail size="3rem" />
</GridCard>
<GridCard color="bg-[#5865f2]" extraClasses="dark:text-text" href="https://discord.gg/wQDE9Vfvq7">
	<IconBrandDiscord size="3rem" />
</GridCard>
