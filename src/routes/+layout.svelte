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
	const plausibleScriptId = $derived(data.aggregator.plausible_script_id);
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
	{#if plausibleScriptId}
		<!-- Privacy-friendly analytics by Plausible -->
		<script async src="{plausibleUrl}/js/{plausibleScriptId}.js"></script>
		<script>
			window.plausible =
				window.plausible ||
				function () {
					(plausible.q = plausible.q || []).push(arguments);
				};
			plausible.init =
				plausible.init ||
				function (i) {
					plausible.o = i || {};
				};
			plausible.init();
		</script>
	{/if}
</svelte:head>

{@render children?.()}
