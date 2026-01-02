<script lang="ts">
	import '../app.css';
	import type { LayoutData } from '$lib/types';
	import { getAssetUrl } from '$lib/utils';
	import { env } from '$env/dynamic/public';

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	const faviconUrl = $derived(getAssetUrl(data.aggregator.favicon));
	const themeColor = $derived(data.aggregator.theme_color);
	const plausibleUrl = $derived(env.PUBLIC_PLAUSIBLE_URL || 'https://plausible.herhoffer.net');
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
	<script defer data-domain={data.host} src="{plausibleUrl}/js/script.outbound-links.js"></script>
</svelte:head>

{@render children?.()}
