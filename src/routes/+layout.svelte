<script lang="ts">
	import '../app.css';
	import type { LayoutData } from '$lib/types';

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	const getAssetUrl = $derived((uuid: string) => 'https://directus.herhoffer.net/assets/' + uuid);
	const faviconUrl = $derived(getAssetUrl(data.aggregator.favicon));
	const themeColor = $derived(data.aggregator.theme_color);
</script>

<svelte:head>
	<link rel="icon" href={faviconUrl} />
	<title>{data.aggregator.title}</title>
	<meta name="theme-color" content={themeColor} />
	<style>
		:root {
			--theme-color: {themeColor};
		}
	</style>
	<script
		defer
		data-domain={data.host}
		src="https://plausible.herhoffer.net/js/script.outbound-links.js"
	></script>
</svelte:head>

{@render children?.()}
