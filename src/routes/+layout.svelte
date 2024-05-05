<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';

	export let data: PageData;

	function getAssetUrl(uuid: string): string {
		return 'https://directus.herhoffer.net/assets/' + uuid;
	}
</script>

<svelte:head>
	<link rel="icon" href="{getAssetUrl(data.aggregator.favicon)}" />
	<title>{data.aggregator.title}</title>
	<meta name="theme-color" content="{data.aggregator.theme_color}" />
</svelte:head>

<slot />