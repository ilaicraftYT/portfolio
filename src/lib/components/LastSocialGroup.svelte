<script>
	import GridCard from '$lib/components/GridCard.svelte';
	import IconBrandYoutube from '@tabler/icons-svelte/icons/brand-youtube';
	import IconBrandDiscord from '@tabler/icons-svelte/icons/brand-discord';
	import IconMail from '@tabler/icons-svelte/icons/mail';
</script>

<GridCard color="bg-[#ff0000]" extraClasses="dark:text-text" href="https://youtube.com/@soyilai">
	<IconBrandYoutube size="3rem" />
</GridCard>
<GridCard color="bg-blue" extraClasses="dark:text-text" href="mailto:soyilai@proton.me">
	<IconMail size="3rem" />
</GridCard>
<GridCard color="bg-[#5865f2]" extraClasses="dark:text-text" href="https://discord.gg/g5twuMG44e">
	<IconBrandDiscord size="3rem" />
</GridCard>
